import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface BookingSectionProps {
  scrollToSection: (id: string) => void;
}

const BookingSection = ({ scrollToSection }: BookingSectionProps) => {
  return (
    <>
      <section id="booking" className="py-16 md:py-20 bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать место</h2>
              <p className="text-xl opacity-90">Заполните форму — администратор свяжется за час</p>
            </div>

            <Card className="p-8 bg-white text-foreground animate-on-scroll-scale">
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

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    required
                    className="mt-1 w-4 h-4 text-primary border-input rounded focus:ring-2 focus:ring-primary"
                  />
                  <label htmlFor="privacy-policy" className="text-sm text-muted-foreground">
                    Я согласен с{' '}
                    <a 
                      href="/privacy-policy" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-purple-700 underline font-medium"
                    >
                      политикой обработки персональных данных
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-6 hover:shadow-xl transition-all transform hover:scale-105"
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
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы доверить нам самое ценное?</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Первое бронирование — консультация БЕСПЛАТНО!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-xl px-12 py-7 transform hover:scale-105 transition-all shadow-2xl"
              onClick={() => scrollToSection('booking')}
            >
              <Icon name="Calendar" className="mr-3" size={24} />
              Забронировать место
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingSection;