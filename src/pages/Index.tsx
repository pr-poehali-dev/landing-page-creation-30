import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              🐾 В гостях у Маши
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-foreground hover:text-primary transition-colors">
                Почему мы
              </button>
              <Button asChild className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transition-all">
                <a href="tel:+79020526145">Позвонить</a>
              </Button>
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
              <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-foreground hover:text-primary">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-left py-2 text-foreground hover:text-primary">
                Почему мы
              </button>
              <Button asChild className="bg-gradient-to-r from-primary to-purple-600">
                <a href="tel:+79020526145">Позвонить</a>
              </Button>
            </nav>
          )}
        </div>
      </header>

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

      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Услуги и цены</h2>
            <p className="text-xl text-muted-foreground">Честные тарифы без скрытых доплат</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary bg-gradient-to-br from-white to-purple-50">
              <div className="text-5xl mb-4">🐕</div>
              <h3 className="text-2xl font-bold mb-2">Собаки</h3>
              <p className="text-muted-foreground mb-4">Любые породы</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Проживание в теплой комнате</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>2 полноценных выгула в день</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Кормление по графику</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Игры и общение</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Ежедневный фотоотчет</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-primary">₽1500<span className="text-lg text-muted-foreground">/сутки</span></div>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-secondary bg-gradient-to-br from-white to-orange-50">
              <div className="text-5xl mb-4">🐈</div>
              <h3 className="text-2xl font-bold mb-2">Кошки</h3>
              <p className="text-muted-foreground mb-4">Уютные апартаменты</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Уютные апартаменты</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Двухразовое кормление</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Уход за лотком</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Ласка и внимание</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Полная изоляция от собак</span>
                </li>
              </ul>
              <div className="text-3xl font-bold text-secondary">₽1000<span className="text-lg text-muted-foreground">/сутки</span></div>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent bg-gradient-to-br from-white to-green-50">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-2">Консультации</h3>
              <p className="text-muted-foreground mb-4">Профессиональные рекомендации</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Экспертная помощь специалиста</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Индивидуальные рекомендации</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Поддержка по всем вопросам</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-accent">По согласованию</div>
            </Card>

            <Card className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary bg-gradient-to-br from-white to-purple-50">
              <div className="text-5xl mb-4">🦎</div>
              <h3 className="text-2xl font-bold mb-2">Экзотика</h3>
              <p className="text-muted-foreground mb-4">Специализированный уход</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Специализированный уход</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Контроль климата</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={16} />
                  <span>Кормление по графику</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary">Уточняйте цену</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Скидки и акции</h2>
            <p className="text-xl text-muted-foreground">Выгоднее отдыхать дольше!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-white hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-2xl font-bold mb-2">от 10 дней</div>
              <div className="text-3xl font-bold text-primary">скидка 5%</div>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-2xl font-bold mb-2">от 20 дней</div>
              <div className="text-3xl font-bold text-secondary">скидка 10%</div>
            </Card>

            <Card className="p-8 text-center bg-white hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-2xl font-bold mb-2">от 30 дней</div>
              <div className="text-3xl font-bold text-accent">скидка 15%</div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-primary to-purple-600 text-white hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">🎁</div>
              <div className="text-2xl font-bold mb-2">Приведи друга</div>
              <div className="text-3xl font-bold">скидка 10%</div>
              <p className="text-sm mt-2 opacity-90">для вас и друга</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Почему доверяют именно нам</h2>
            <p className="text-xl text-muted-foreground">Профессионализм в каждой детали</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold mb-4">Безопасность</h3>
              <p className="text-muted-foreground">8 камер видеонаблюдения, приложение для мониторинга, круглосуточный контроль</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-orange-50 to-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-6">🏡</div>
              <h3 className="text-2xl font-bold mb-4">Комфорт</h3>
              <p className="text-muted-foreground">24°C круглый год, кондиционер, просторные помещения для свободы движения</p>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-white hover:shadow-2xl transition-all">
              <div className="text-6xl mb-6">💕</div>
              <h3 className="text-2xl font-bold mb-4">Индивидуальный подход</h3>
              <p className="text-muted-foreground">Личная диета, занятия по интересам, максимум заботы для каждого питомца</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-4">🐾 В гостях у Маши</div>
          <p className="text-lg mb-6 opacity-90">Премиум зоогостиница в 50 км от Владивостока</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
              asChild
            >
              <a href="tel:+79020526145">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (902) 052-61-45
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-75">с. Кипарисово, Приморский край</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
