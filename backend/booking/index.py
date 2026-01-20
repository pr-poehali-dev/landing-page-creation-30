import json
import os
import psycopg2
import requests
from psycopg2.extras import RealDictCursor

def handler(event: dict, context) -> dict:
    """Обработка заявок на бронирование, сохранение в БД и отправка в Telegram"""
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'DATABASE_URL not configured'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        owner_name = body.get('ownerName', '').strip()
        phone = body.get('phone', '').strip()
        pet_name = body.get('petName', '').strip()
        animal_type = body.get('animalType', '').strip()
        check_in = body.get('checkIn', '').strip()
        check_out = body.get('checkOut', '').strip()
        package = body.get('package', '').strip()
        details = body.get('details', '').strip()
        
        if not all([owner_name, phone, pet_name, animal_type, check_in, check_out, package]):
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Missing required fields'}),
                'isBase64Encoded': False
            }
        
        conn = psycopg2.connect(dsn)
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        cur.execute("""
            INSERT INTO bookings 
            (owner_name, phone, pet_name, animal_type, check_in, check_out, package, details, status)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, 'new')
            RETURNING id
        """, (owner_name, phone, pet_name, animal_type, check_in, check_out, package, details))
        
        result = cur.fetchone()
        booking_id = result['id']
        
        conn.commit()
        cur.close()
        conn.close()
        
        # Отправка уведомления в Telegram
        send_telegram_notification(
            booking_id, owner_name, phone, pet_name, 
            animal_type, check_in, check_out, package, details
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'booking_id': booking_id,
                'message': 'Заявка успешно принята'
            }),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

def send_telegram_notification(booking_id, owner_name, phone, pet_name, animal_type, check_in, check_out, package, details):
    """Отправка уведомления о новой заявке в Telegram"""
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    telegram_chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not telegram_token or not telegram_chat_id:
        return False
    
    # Преобразование типа животного
    animal_names = {
        'dog': '🐕 Собака',
        'cat': '🐈 Кошка',
        'rodent': '🐹 Грызун',
        'bird': '🐦 Птица',
        'reptile': '🦎 Рептилия'
    }
    animal_display = animal_names.get(animal_type, animal_type)
    
    # Преобразование пакета
    package_names = {
        'standard': 'Стандартная передержка',
        'comfort': 'Комфорт Плюс',
        'luxury': 'Люкс'
    }
    package_display = package_names.get(package, package)
    
    message = f"""🆕 <b>Новая заявка на бронирование #{booking_id}</b>

👤 <b>Хозяин:</b> {owner_name}
📞 <b>Телефон:</b> {phone}

🐾 <b>Питомец:</b> {pet_name}
{animal_display}

📅 <b>Заселение:</b> {check_in}
📅 <b>Выселение:</b> {check_out}

📦 <b>Пакет:</b> {package_display}"""
    
    if details:
        message += f"\n\n📝 <b>Особенности:</b>\n{details}"
    
    try:
        response = requests.post(
            f'https://api.telegram.org/bot{telegram_token}/sendMessage',
            json={
                'chat_id': telegram_chat_id,
                'text': message,
                'parse_mode': 'HTML'
            },
            timeout=5
        )
        return response.status_code == 200
    except Exception:
        return False