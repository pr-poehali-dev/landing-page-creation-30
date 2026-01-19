import json
import os
import requests

def handler(event: dict, context) -> dict:
    """Telegram бот для ответов на вопросы о зоогостинице через AI"""
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    openai_key = os.environ.get('OPENAI_API_KEY')
    
    if not telegram_token or not openai_key:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Missing configuration'}),
            'isBase64Encoded': False
        }
    
    try:
        body = json.loads(event.get('body', '{}'))
        
        if 'message' not in body:
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'ok': True}),
                'isBase64Encoded': False
            }
        
        message = body['message']
        chat_id = message['chat']['id']
        user_text = message.get('text', '')
        
        if user_text.startswith('/start'):
            welcome_text = (
                "🐾 Здравствуйте! Я помощник зоогостиницы 'В гостях у Маши'.\n\n"
                "Я помогу ответить на вопросы о:\n"
                "• Условиях размещения питомцев\n"
                "• Ценах и тарифах\n"
                "• Услугах и удобствах\n"
                "• Правилах бронирования\n\n"
                "Задайте любой вопрос!"
            )
            send_telegram_message(telegram_token, chat_id, welcome_text)
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'ok': True}),
                'isBase64Encoded': False
            }
        
        context_info = """
        Зоогостиница "В гостях у Маши" - премиум передержка для животных в с. Кипарисово, Приморский край.
        
        ПРЕИМУЩЕСТВА:
        - 24/7 наблюдение и забота
        - Ежедневные фото и видео отчёты владельцам
        - Тёплые номера круглый год
        - Индивидуальное питание по графику владельца
        - Принимаем крупные породы собак
        - Работаем с кошками, собаками, грызунами, птицами, рептилиями
        - 15+ лет опыта
        - 500+ довольных клиентов
        
        ТАРИФЫ:
        1. Стандартная передержка - 600₽/сутки
           Кормление 2 раза в день, выгул 2 раза в день, ежедневные фото, уютное теплое помещение
        
        2. Комфорт Плюс - 800₽/сутки
           Стандарт + дополнительный выгул, игровое время, видеоотчёты
        
        3. Люкс - 1200₽/сутки
           Всё включено + индивидуальная комната, специальное меню, груминг 1 раз в неделю
        
        СКИДКИ:
        - От 10 дней: скидка 5%
        - От 20 дней: скидка 10%
        - От 30 дней: скидка 15%
        - Приведи друга: скидка 10% вам и другу
        
        ПРОЦЕСС БРОНИРОВАНИЯ:
        1. Оставить заявку на сайте или позвонить
        2. Получить консультацию администратора за час
        3. Привезти питомца в назначенное время
        
        КОНТАКТЫ:
        Email: mashazoohot@mail.ru
        Адрес: с. Кипарисово, Приморский край
        Сайт: https://your-site.poehali.dev
        """
        
        ai_response = get_ai_response(openai_key, user_text, context_info)
        send_telegram_message(telegram_token, chat_id, ai_response)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': True}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

def get_ai_response(api_key: str, user_message: str, context: str) -> str:
    """Получить ответ от OpenAI на основе контекста сайта"""
    try:
        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json'
            },
            json={
                'model': 'gpt-3.5-turbo',
                'messages': [
                    {
                        'role': 'system',
                        'content': f"""Ты - дружелюбный помощник зоогостиницы "В гостях у Маши". 
                        Отвечай кратко, по делу, дружелюбно. Используй эмодзи где уместно.
                        
                        Вот информация о зоогостинице:
                        {context}
                        
                        Если пользователь спрашивает что-то, чего нет в информации - вежливо скажи, что уточнишь у администратора и предложи связаться по email: mashazoohot@mail.ru
                        """
                    },
                    {
                        'role': 'user',
                        'content': user_message
                    }
                ],
                'max_tokens': 500,
                'temperature': 0.7
            },
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            return data['choices'][0]['message']['content']
        else:
            return "Извините, произошла ошибка. Пожалуйста, напишите нам на mashazoohot@mail.ru"
    
    except Exception:
        return "Извините, произошла ошибка. Пожалуйста, напишите нам на mashazoohot@mail.ru"

def send_telegram_message(token: str, chat_id: int, text: str) -> bool:
    """Отправить сообщение в Telegram"""
    try:
        response = requests.post(
            f'https://api.telegram.org/bot{token}/sendMessage',
            json={
                'chat_id': chat_id,
                'text': text,
                'parse_mode': 'HTML'
            },
            timeout=5
        )
        return response.status_code == 200
    except Exception:
        return False
