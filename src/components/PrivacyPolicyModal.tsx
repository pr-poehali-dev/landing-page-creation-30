import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">
            Политика обработки персональных данных
          </DialogTitle>
          <DialogDescription>
            Зоогостиница «В гостях у Маши»
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-6 text-sm text-muted-foreground">
            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">1. Общие положения</h3>
              <p className="mb-2">
                Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей, которые предоставляются при использовании сервисов зоогостиницы «В гостях у Маши» (далее — Компания).
              </p>
              <p>
                Используя наши услуги и предоставляя свои персональные данные, вы соглашаетесь с условиями настоящей Политики.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">2. Какие данные мы собираем</h3>
              <p className="mb-2">Мы можем собирать следующие персональные данные:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Информация о питомце (кличка, вид животного, особенности)</li>
                <li>Даты заселения и выселения</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">3. Цели обработки данных</h3>
              <p className="mb-2">Ваши персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Бронирование и оказание услуг по передержке животных</li>
                <li>Связь с вами по вопросам услуг</li>
                <li>Информирование о статусе питомца во время передержки</li>
                <li>Улучшение качества обслуживания</li>
                <li>Выполнение договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">4. Правовые основания обработки</h3>
              <p>
                Обработка персональных данных осуществляется на основании вашего согласия, а также для исполнения договора оказания услуг, стороной которого вы являетесь.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">5. Защита данных</h3>
              <p>
                Мы применяем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">6. Передача данных третьим лицам</h3>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, когда это необходимо для оказания услуг (например, ветеринарные клиники в экстренных случаях) или требуется законодательством.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">7. Ваши права</h3>
              <p className="mb-2">Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Получать информацию об обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">8. Срок хранения данных</h3>
              <p>
                Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки, но не менее 3 лет с момента последнего обращения, если иное не предусмотрено законодательством.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">9. Изменения в Политике</h3>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-foreground mb-3">10. Контактная информация</h3>
              <p className="mb-2">
                По всем вопросам, касающимся обработки персональных данных, вы можете обратиться к нам:
              </p>
              <ul className="list-none space-y-1">
                <li><strong>Email:</strong> mashazoohot@mail.ru</li>
                <li><strong>Адрес:</strong> с. Кипарисово</li>
              </ul>
            </section>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Дата последнего обновления: 15 января 2026 года
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
