import json
import os
import requests

def handler(event: dict, context) -> dict:
    """Telegram бот с готовыми ответами на основе информации с лендинга"""
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
    
    telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN_CONSULTANT')
    
    if not telegram_token:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Missing TELEGRAM_BOT_TOKEN_CONSULTANT'}),
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
        user_text = message.get('text', '').lower()
        
        if user_text.startswith('/start'):
            response_text = get_welcome_message()
            keyboard = get_main_keyboard()
        elif 'цен' in user_text or 'стоимость' in user_text or 'тариф' in user_text:
            response_text = get_pricing_info()
            keyboard = get_main_keyboard()
        elif 'скидк' in user_text or 'акци' in user_text:
            response_text = get_discounts_info()
            keyboard = get_main_keyboard()
        elif 'услуг' in user_text or 'преимущ' in user_text or 'что вход' in user_text:
            response_text = get_services_info()
            keyboard = get_main_keyboard()
        elif 'брон' in user_text or 'записа' in user_text or 'заявк' in user_text:
            response_text = get_booking_info()
            keyboard = get_main_keyboard()
        elif 'контакт' in user_text or 'адрес' in user_text or 'телефон' in user_text or 'email' in user_text:
            response_text = get_contacts_info()
            keyboard = get_main_keyboard()
        elif 'график' in user_text or 'работа' in user_text or 'время' in user_text:
            response_text = get_schedule_info()
            keyboard = get_main_keyboard()
        elif 'животн' in user_text or 'питом' in user_text or 'собак' in user_text or 'кош' in user_text:
            response_text = get_animals_info()
            keyboard = get_main_keyboard()
        else:
            response_text = get_help_message()
            keyboard = get_main_keyboard()
        
        send_telegram_message(telegram_token, chat_id, response_text, keyboard)
        
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

def get_welcome_message() -> str:
    return """🐾 Здравствуйте! Я бот зоогостиницы "В гостях у Маши".

Я помогу вам узнать:
📋 Цены и тарифы
🎁 Скидки и акции
⭐ Наши услуги
📝 Как забронировать
📍 Контакты
🐕 Какие животные принимаем

Просто напишите ваш вопрос или выберите тему!"""

def get_pricing_info() -> str:
    return """💰 <b>Наши тарифы:</b>

🐕 <b>Собаки - 1500₽/сутки</b>
• Проживание в теплой комнате
• 2 полноценных выгула в день
• Кормление по графику
• Игры и общение
• Ежедневный фотоотчет

🐈 <b>Кошки - 1500₽/сутки</b>
• Уютные апартаменты
• Двухразовое кормление
• Уход за лотком
• Ласка и внимание
• Полная изоляция от собак

💬 <b>Консультации</b>
• Экспертная помощь специалиста
• Индивидуальные рекомендации
• Цена по согласованию

Хотите забронировать? Напишите "бронирование" 📝"""

def get_discounts_info() -> str:
    return """🎁 <b>Скидки и акции:</b>

У нас честные цены без скрытых доплат!

💰 Собаки: 1500₽/сутки
💰 Кошки: 1500₽/сутки

Все услуги уже включены в стоимость:
✅ Кормление по графику
✅ Выгул (для собак)
✅ Ежедневные фотоотчеты
✅ Круглосуточный уход

Готовы забронировать? Напишите "бронирование" 📝"""

def get_services_info() -> str:
    return """⭐ <b>Наши преимущества:</b>

🕐 <b>24/7 наблюдение</b>
Круглосуточный контроль и забота

📸 <b>Ежедневные фото</b>
Фото и видео отчёты каждый день

🌡️ <b>Тёплые номера</b>
Комфортная температура круглый год

🍖 <b>Индивидуальное питание</b>
Кормим по вашему графику

❤️ <b>Любовь и забота</b>
Индивидуальный подход к каждому

📍 <b>Удобное расположение</b>
с. Кипарисово, тихое место

<b>15+ лет опыта | 500+ довольных клиентов</b>"""

def get_booking_info() -> str:
    return """📝 <b>Как забронировать:</b>

<b>Шаг 1:</b> Оставьте заявку
Заполните форму на сайте или позвоните

<b>Шаг 2:</b> Получите консультацию
Администратор свяжется за час

<b>Шаг 3:</b> Привозите питомца
Приезжайте в назначенное время

📧 Email: mashazoohot@mail.ru
📍 Адрес: с. Кипарисово, Приморский край

Нужны контакты? Напишите "контакты" 📞"""

def get_contacts_info() -> str:
    return """📞 <b>Наши контакты:</b>

📧 <b>Email:</b> mashazoohot@mail.ru
📍 <b>Адрес:</b> с. Кипарисово, Приморский край

Работаем <b>круглосуточно 24/7</b>

Хотите узнать о тарифах? Напишите "цены" 💰"""

def get_schedule_info() -> str:
    return """⏰ <b>Режим работы:</b>

Мы работаем <b>круглосуточно 24/7</b>

Ваш питомец всегда под присмотром!

📧 Email: mashazoohot@mail.ru
📍 с. Кипарисово, Приморский край"""

def get_animals_info() -> str:
    return """🐾 <b>Какие животные принимаем:</b>

✅ Собаки (в том числе крупные породы)
✅ Кошки
✅ Грызуны
✅ Птицы
✅ Рептилии

Для каждого вида - индивидуальные условия содержания!

Хотите узнать цены? Напишите "тарифы" 💰"""

def get_help_message() -> str:
    return """💬 <b>Доступные команды:</b>

Напишите одно из слов:
• "цены" или "тарифы" 💰
• "скидки" или "акции" 🎁
• "услуги" или "преимущества" ⭐
• "бронирование" или "записаться" 📝
• "контакты" или "адрес" 📍
• "животные" или "питомцы" 🐾

Или просто задайте свой вопрос!"""

def get_main_keyboard() -> dict:
    """Создать клавиатуру с кнопками быстрых ответов"""
    return {
        'keyboard': [
            [{'text': '💰 Цены'}, {'text': '🎁 Скидки'}],
            [{'text': '⭐ Услуги'}, {'text': '📝 Бронирование'}],
            [{'text': '📍 Контакты'}, {'text': '🐾 Животные'}]
        ],
        'resize_keyboard': True,
        'one_time_keyboard': False
    }

def send_telegram_message(token: str, chat_id: int, text: str, keyboard: dict = None) -> bool:
    """Отправить сообщение в Telegram с клавиатурой"""
    try:
        payload = {
            'chat_id': chat_id,
            'text': text,
            'parse_mode': 'HTML'
        }
        
        if keyboard:
            payload['reply_markup'] = keyboard
        
        response = requests.post(
            f'https://api.telegram.org/bot{token}/sendMessage',
            json=payload,
            timeout=5
        )
        return response.status_code == 200
    except Exception:
        return False