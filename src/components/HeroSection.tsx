import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-orange-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-secondary bg-clip-text text-transparent leading-tight">
            Комфортный отдых для вашего <span className="text-secondary">питомца</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Профессиональная зоогостиница в с. Кипарисово. Теплые номера, забота 24/7 и свежий воздух для собак, кошек и экзотических животных.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10 text-left">
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur p-4 rounded-2xl">
              <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
              <span className="font-medium">Берем крупные породы собак</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur p-4 rounded-2xl">
              <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
              <span className="font-medium">Ежедневные фото- и видеоотчеты</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur p-4 rounded-2xl">
              <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
              <span className="font-medium">Индивидуальный режим кормления</span>
            </div>
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur p-4 rounded-2xl">
              <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
              <span className="font-medium">Благополучие животного на первом месте</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 text-lg px-8 hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => scrollToSection('services')}
            >
              Забронировать
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2 border-primary hover:bg-primary hover:text-white transition-all"
              asChild
            >
              <a href="tel:+79020526145">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;