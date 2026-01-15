import json
import os
import urllib.request
import urllib.parse
from datetime import datetime

def handler(event: dict, context) -> dict:
    """Обработка заявок на бронирование и отправка в Telegram"""
    
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
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        owner_name = body.get('ownerName', '')
        phone = body.get('phone', '')
        pet_name = body.get('petName', '')
        animal_type = body.get('animalType', '')
        check_in = body.get('checkIn', '')
        check_out = body.get('checkOut', '')
        package = body.get('package', '')
        details = body.get('details', '')
        
        animal_types = {
            'dog': '🐕 Собака',
            'cat': '🐈 Кошка',
            'rodent': '🐹 Грызун',
            'bird': '🦜 Птица',
            'reptile': '🦎 Рептилия'
        }
        
        packages = {
            'standard': 'Стандартная передержка',
            'comfort': 'Комфорт Плюс',
            'luxury': 'Люкс'
        }
        
        animal_label = animal_types.get(animal_type, animal_type)
        package_label = packages.get(package, package)
        
        message = f"""🎉 <b>Новая заявка на бронирование!</b>

👤 <b>Владелец:</b> {owner_name}
📱 <b>Телефон:</b> {phone}

🐾 <b>Питомец:</b> {pet_name}
🦴 <b>Вид:</b> {animal_label}

📅 <b>Заселение:</b> {check_in}
📅 <b>Выселение:</b> {check_out}

📦 <b>Пакет:</b> {package_label}

📝 <b>Особенности:</b>
{details if details else 'Не указаны'}

⏰ <b>Время заявки:</b> {datetime.now().strftime('%d.%m.%Y %H:%M')}

---
🏠 Зоогостиница "В гостях у Маши"
"""
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Telegram credentials not configured'}),
                'isBase64Encoded': False
            }
        
        telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }).encode('utf-8')
        
        req = urllib.request.Request(telegram_url, data=data, method='POST')
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True,
                        'message': 'Заявка успешно отправлена'
                    }),
                    'isBase64Encoded': False
                }
            else:
                return {
                    'statusCode': 500,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'error': 'Failed to send message to Telegram'
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