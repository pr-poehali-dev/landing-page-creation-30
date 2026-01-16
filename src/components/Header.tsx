import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold text-primary">
            В гостях у Маши
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('process')} className="text-foreground hover:text-primary transition-colors">
              Как работаем
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-foreground hover:text-primary transition-colors">
              Бронь
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection('services')} className="text-left py-2 text-foreground hover:text-primary">
              Услуги
            </button>
            <button onClick={() => scrollToSection('process')} className="text-left py-2 text-foreground hover:text-primary">
              Как работаем
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-foreground hover:text-primary">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('booking')} className="text-left py-2 text-foreground hover:text-primary">
              Бронь
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;