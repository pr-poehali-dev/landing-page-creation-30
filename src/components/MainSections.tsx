import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface MainSectionsProps {
  scrollToSection: (id: string) => void;
}

const MainSections = ({ scrollToSection }: MainSectionsProps) => {
  return (
    <>
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

      <section id="process" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Четыре простых этапа от звонка до счастья</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="p-6 bg-white hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">📞</div>
              <h3 className="text-xl font-bold mb-3 text-center">Шаг 1: Звонок/Заявка</h3>
              <p className="text-muted-foreground text-center">Бронируем место, вносите предоплату 50%</p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">📝</div>
              <h3 className="text-xl font-bold mb-3 text-center">Шаг 2: Заезд (09:00 - 19:00)</h3>
              <p className="text-muted-foreground text-center">Проверяем документы, осматриваем питомца, заполняем "Карточку гостя"</p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">🏡</div>
              <h3 className="text-xl font-bold mb-3 text-center">Шаг 3: Отдых</h3>
              <p className="text-muted-foreground text-center">Питомец наслаждается прогулками, вы получаете фотоотчеты</p>
            </Card>

            <Card className="p-6 bg-white hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-center">Шаг 4: Выезд</h3>
              <p className="text-muted-foreground text-center">Окончательный расчет и счастливая встреча</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Отзывы владельцев</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              { rating: 5, text: 'Лайка счастлива! Видео каждый день. Спасибо!', author: 'Оксана М.', pet: 'Ретривер' },
              { rating: 5, text: 'Мурзик доволен и спокоен. Прекрасно!', author: 'Иван К.', pet: 'Кот' },
              { rating: 5, text: 'Гриша здоров и весел. Лучшая!', author: 'Елена', pet: 'Какаду' },
              { rating: 5, text: 'Щенок слушается! Результат отличный!', author: 'Денис П.', pet: 'Боксер' },
              { rating: 5, text: 'Груминг идеален! Питомец счастлив!', author: 'Алина Р.', pet: 'Йорк' },
              { rating: 5, text: 'Месяц на передержке. Очень доволен!', author: 'Сергей М.', pet: 'Овчарка' }
            ].map((review, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-white to-purple-50 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.pet}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-20 bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Забронировать место</h2>
              <p className="text-xl opacity-90">Заполните форму — администратор свяжется за час</p>
            </div>

            <Card className="p-8 bg-white text-foreground">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="+7 (900) 000-00-00"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя питомца *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Барсик"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Вид животного *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Выберите</option>
                      <option value="dog">Собака</option>
                      <option value="cat">Кошка</option>
                      <option value="rodent">Грызун</option>
                      <option value="bird">Птица</option>
                      <option value="reptile">Рептилия</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Заселение *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Выселение *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Выбранный пакет *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option value="">Выберите пакет</option>
                    <option value="standard">Стандартная передержка</option>
                    <option value="comfort">Комфорт Плюс</option>
                    <option value="luxury">Люкс</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Особенности питомца</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Расскажите об особенностях характера, здоровья, питания..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 text-white text-lg py-6 hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary via-orange-500 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Готовы доверить нам самое ценное?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Первое бронирование — консультация БЕСПЛАТНО!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 transform hover:scale-105 transition-all"
              onClick={() => scrollToSection('booking')}
            >
              Забронировать место
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 transition-all"
              asChild
            >
              <a href="tel:+79020526145">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить: 89020526145
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSections;