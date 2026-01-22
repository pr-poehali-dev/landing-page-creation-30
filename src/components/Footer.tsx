import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-r from-primary via-purple-700 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">В гостях у Маши</div>
            <p className="opacity-90 mb-4">Премиум зоогостиница "В гостях у Маши". Благополучие питомца — на первом месте. 15+ лет опыта.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('services')} className="block opacity-90 hover:opacity-100 transition-opacity">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block opacity-90 hover:opacity-100 transition-opacity">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('booking')} className="block opacity-90 hover:opacity-100 transition-opacity">
                Бронирование
              </button>
              <button onClick={() => navigate('/reviews')} className="block opacity-90 hover:opacity-100 transition-opacity">
                Отзывы
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <a href="mailto:mashazoohot@mail.ru" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                <Icon name="Mail" size={18} />
                mashazoohot@mail.ru
              </a>
              <p className="flex items-start gap-2 opacity-90">
                <Icon name="MapPin" size={18} className="mt-1 flex-shrink-0" />
                <span>с. Кипарисово, Приморский край</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/anna_balk?igsh=YXB3Y3Q5dm9iNXR0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-75">&copy; 2024-2026 "В гостях у Маши". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;