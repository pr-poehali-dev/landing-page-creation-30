import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-600 via-primary to-purple-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-on-scroll-left">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
              ⭐ 500+ довольных питомцев
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ваш питомец в надёжных лапах
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100">
              Зоогостиница премиум-класса в с. Кипарисово. Круглосуточный уход, профессиональные смотрители, ежедневные фото.
            </p>
            
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Icon name="Clock" className="text-orange-300" size={24} />
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Camera" className="text-orange-300" size={24} />
                <span>Фото каждый день</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" className="text-orange-300" size={24} />
                <span>С любовью к животным</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-10 py-7 shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => scrollToSection('booking')}
              >
                <Icon name="Calendar" className="mr-3" size={24} />
                Забронировать место
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-xl px-10 py-7 backdrop-blur-sm transition-all"
                onClick={() => scrollToSection('gallery')}
              >
                <Icon name="Image" className="mr-3" size={24} />
                Смотреть номера
              </Button>
            </div>
          </div>
          
          <div className="relative animate-on-scroll-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://cdn.poehali.dev/projects/13c1a0da-2d23-4c11-b13e-e26286d9f5b9/files/74e853df-3b68-4d1d-8c3d-aa2275e147aa.jpg" 
                  alt="Счастливая собака" 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold mb-1">98%</div>
                  <div className="text-sm text-purple-200">Довольных клиентов</div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center transform hover:scale-105 transition-all">
                  <div className="text-4xl font-bold mb-1">5+</div>
                  <div className="text-sm text-purple-200">Лет опыта</div>
                </div>
                <img 
                  src="https://cdn.poehali.dev/projects/13c1a0da-2d23-4c11-b13e-e26286d9f5b9/files/01e880e7-8efd-4de1-b696-21c29f48c5ab.jpg" 
                  alt="Уютная кошка" 
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;