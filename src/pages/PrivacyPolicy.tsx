import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/photo_2026-01-10_23-53-21.jpg" 
                alt="В гостях у Маши" 
                className="h-16 w-16 md:h-20 md:w-20 object-contain mix-blend-multiply"
              />
              <div className="text-xl md:text-2xl font-bold text-primary">
                В гостях у Маши
              </div>
            </div>
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Политика обработки персональных данных
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей, которые предоставляются при использовании сервисов зоогостиницы «В гостях у Маши» (далее — Компания).
              </p>
              <p>
                Используя наши услуги и предоставляя свои персональные данные, вы соглашаетесь с условиями настоящей Политики.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Какие данные мы собираем</h2>
              <p>Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Информация о питомце (кличка, вид животного, особенности)</li>
                <li>Даты заселения и выселения</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Цели обработки данных</h2>
              <p>Ваши персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Бронирование и оказание услуг по передержке животных</li>
                <li>Связь с вами по вопросам услуг</li>
                <li>Информирование о статусе питомца во время передержки</li>
                <li>Улучшение качества обслуживания</li>
                <li>Выполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Правовые основания обработки</h2>
              <p>
                Обработка персональных данных осуществляется на основании вашего согласия, а также для исполнения договора оказания услуг, стороной которого вы являетесь.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Защита данных</h2>
              <p>
                Мы применяем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Передача данных третьим лицам</h2>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для оказания услуг (например, ветеринарные клиники в экстренных случаях) или требуется законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Ваши права</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Срок хранения данных</h2>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, но не менее 3 лет с момента последнего обращения, если иное не предусмотрено законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Изменения в Политике</h2>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Контактная информация</h2>
              <p>
                По всем вопросам, касающимся обработки персональных данных, вы можете обратиться к нам:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> mashazoohot@mail.ru</li>
                <li><strong>Адрес:</strong> с. Кипарисово</li>
              </ul>
            </section>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Дата последнего обновления: 15 января 2026 года
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
