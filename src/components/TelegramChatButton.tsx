import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const TelegramChatButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [botUsername, setBotUsername] = useState('');

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 1000);
    
    // Здесь можно будет получить username бота из API, если нужно
    // Пока используем placeholder
    setBotUsername('your_bot');
  }, []);

  const handleClick = () => {
    // Замените 'your_bot' на реальный username вашего бота
    window.open(`https://t.me/${botUsername}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Открыть чат в Telegram"
    >
      <div className="relative">
        <Icon name="MessageCircle" size={28} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
      </div>
      
      <div className="absolute bottom-full right-0 mb-3 bg-white text-foreground px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <div className="text-sm font-medium">💬 Есть вопросы?</div>
        <div className="text-xs text-muted-foreground">Напишите в Telegram!</div>
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </button>
  );
};

export default TelegramChatButton;
