import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  scrollToSection: (id: string) => void;
}

const ServicesSection = ({ scrollToSection }: ServicesSectionProps) => {
  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Почему нам доверяют
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Преимущества</h2>
            <p className="text-xl text-muted-foreground">Всё для комфорта вашего питомца</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 наблюдение</h3>
              <p className="text-muted-foreground text-lg">Круглосуточный контроль и забота. Ваш питомец никогда не останется один.</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-secondary bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="Camera" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ежедневные фото</h3>
              <p className="text-muted-foreground text-lg">Получайте фото и видео отчёты каждый день. Будьте в курсе настроения любимца.</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="Thermometer" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Тёплые номера</h3>
              <p className="text-muted-foreground text-lg">Комфортная температура круглый год. Уютные комнаты с мягкими лежанками.</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-primary bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="Apple" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Индивидуальное питание</h3>
              <p className="text-muted-foreground text-lg">Кормим по вашему графику и рациону. Учитываем все особенности здоровья.</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-secondary bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Любовь и забота</h3>
              <p className="text-muted-foreground text-lg">Каждый питомец получает внимание, ласку и индивидуальный подход.</p>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent bg-white">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-all">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Удобное расположение</h3>
              <p className="text-muted-foreground text-lg">с. Кипарисово, тихое безопасное место вдали от городского шума.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Простой процесс
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Как это работает</h2>
            <p className="text-xl text-muted-foreground">Три шага до безопасной передержки</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Оставьте заявку</h3>
              <p className="text-lg text-muted-foreground">
                Заполните форму на сайте или позвоните. Расскажите о питомце и датах.
              </p>
              <div className="hidden md:block absolute top-12 -right-8 text-6xl text-purple-200">→</div>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Получите консультацию</h3>
              <p className="text-lg text-muted-foreground">
                Администратор свяжется за час, подберёт номер и ответит на вопросы.
              </p>
              <div className="hidden md:block absolute top-12 -right-8 text-6xl text-orange-200">→</div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Привозите питомца</h3>
              <p className="text-lg text-muted-foreground">
                Приезжайте в назначенное время. Мы заселим любимца и начнём заботу!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 text-white text-xl px-12 py-7 hover:shadow-2xl transition-all transform hover:scale-105"
              onClick={() => scrollToSection('booking')}
            >
              <Icon name="Send" className="mr-3" size={24} />
              Начать бронирование
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Услуги и цены</h2>
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

      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Наши номера
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="text-xl text-muted-foreground">Уютные и современные номера для ваших питомцев</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/13c1a0da-2d23-4c11-b13e-e26286d9f5b9/files/74e853df-3b68-4d1d-8c3d-aa2275e147aa.jpg" 
                alt="Номер для собак" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Стандартный номер</h3>
                <p className="text-muted-foreground">Просторная комната с мягкой лежанкой и игрушками</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/13c1a0da-2d23-4c11-b13e-e26286d9f5b9/files/01e880e7-8efd-4de1-b696-21c29f48c5ab.jpg" 
                alt="Номер для кошек" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Комфорт Плюс</h3>
                <p className="text-muted-foreground">Уютное пространство с когтеточкой и лежанкой</p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://cdn.poehali.dev/projects/13c1a0da-2d23-4c11-b13e-e26286d9f5b9/files/96720257-3bba-4315-8de5-28c381f7e239.jpg" 
                alt="Люкс номер" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Люкс</h3>
                <p className="text-muted-foreground">Премиум комната с дополнительными удобствами</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Отзывы клиентов
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Что о нас говорят</h2>
            <p className="text-xl text-muted-foreground">500+ довольных хозяев и их питомцев</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="flex items-center gap-1 mb-4">
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                "Оставляли свою Лору на 2 недели. Каждый день получали фото — собака счастлива! Спасибо за заботу!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  А
                </div>
                <div>
                  <div className="font-bold">Анна Ковалёва</div>
                  <div className="text-sm text-muted-foreground">Хозяйка Лоры</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="flex items-center gap-1 mb-4">
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                "Кот Марсик вернулся довольный и упитанный. Видно, что его любили. Теперь только к вам!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  Д
                </div>
                <div>
                  <div className="font-bold">Дмитрий Петров</div>
                  <div className="text-sm text-muted-foreground">Хозяин Марсика</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="flex items-center gap-1 mb-4">
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
                <Icon name="Star" className="text-orange-500 fill-orange-500" size={20} />
              </div>
              <p className="text-lg mb-6 italic text-muted-foreground">
                "Профессиональный подход! Мой Рекс с удовольствием ехал к вам снова. Рекомендую всем!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  М
                </div>
                <div>
                  <div className="font-bold">Мария Соколова</div>
                  <div className="text-sm text-muted-foreground">Хозяйка Рекса</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-purple-600 text-white text-lg px-8 hover:shadow-xl transition-all transform hover:scale-105"
              asChild
            >
              <a href="mailto:mashazoohot@mail.ru?subject=Отзыв о зоогостинице">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Оставить отзыв
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Скидки и акции</h2>
            <p className="text-xl text-muted-foreground">Выгоднее отдыхать дольше!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-2xl font-bold mb-2">от 10 дней</div>
              <div className="text-3xl font-bold text-primary">скидка 5%</div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-orange-50 to-white hover:shadow-xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">📉</div>
              <div className="text-2xl font-bold mb-2">от 20 дней</div>
              <div className="text-3xl font-bold text-secondary">скидка 10%</div>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-all transform hover:scale-105">
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
    </>
  );
};

export default ServicesSection;
