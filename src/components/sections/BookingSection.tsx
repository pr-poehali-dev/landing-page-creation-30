import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import SuccessModal from '@/components/SuccessModal';

interface BookingSectionProps {
  scrollToSection: (id: string) => void;
}

const BookingSection = ({ scrollToSection }: BookingSectionProps) => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      ownerName: formData.get('ownerName') as string,
      phone: formData.get('phone') as string,
      petName: formData.get('petName') as string,
      animalType: formData.get('animalType') as string,
      checkIn: formData.get('checkIn') as string,
      checkOut: formData.get('checkOut') as string,
      package: formData.get('package') as string,
      details: formData.get('details') as string,
    };

    try {
      const response = await fetch('https://functions.poehali.dev/7afeea13-22ea-4a33-b36b-600de08a3cbf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setIsSuccessOpen(true);
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <input
                      type="text"
                      name="ownerName"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="+7 (900) 000-00-00"
                      defaultValue="+7("
                      onInput={(e) => {
                        const input = e.currentTarget;
                        let value = input.value.replace(/\D/g, '');
                        if (!value.startsWith('7')) value = '7' + value;
                        value = value.substring(0, 11);
                        const formatted = value.length > 1 ? `+7(${value.substring(1, 4)}${value.length > 4 ? `)${value.substring(4, 7)}${value.length > 7 ? `-${value.substring(7, 9)}${value.length > 9 ? `-${value.substring(9, 11)}` : ''}` : ''}` : ''}` : '+7(';
                        input.value = formatted;
                      }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя питомца *</label>
                    <input
                      type="text"
                      name="petName"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Барсик"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Вид животного *</label>
                    <select
                      name="animalType"
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
                      name="checkIn"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Выселение *</label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Выбранный пакет *</label>
                  <select
                    name="package"
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
                    name="details"
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
                    <button 
                      type="button"
                      onClick={() => setIsPolicyOpen(true)}
                      className="text-primary hover:text-purple-700 underline font-medium"
                    >
                      политикой обработки персональных данных
                    </button>
                  </label>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                    <div>
                      <p className="font-semibold">Заявка успешно отправлена!</p>
                      <p className="text-sm">Мы свяжемся с вами в ближайшее время</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center gap-3">
                    <Icon name="AlertCircle" size={24} className="text-red-600" />
                    <div>
                      <p className="font-semibold">Ошибка отправки</p>
                      <p className="text-sm">Попробуйте позже или позвоните нам</p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-6 hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </>
                  )}
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

      <PrivacyPolicyModal open={isPolicyOpen} onOpenChange={setIsPolicyOpen} />
      <SuccessModal open={isSuccessOpen} onOpenChange={setIsSuccessOpen} />
    </>
  );
};

export default BookingSection;