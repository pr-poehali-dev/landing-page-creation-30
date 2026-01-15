import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Часто задаваемые вопросы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">FAQ</h2>
          <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all bg-white animate-on-scroll"
            onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Какие прививки нужны питомцу?</h3>
                <Icon name={openFaq === 1 ? "ChevronUp" : "ChevronDown"} size={24} className="text-primary" />
              </div>
              {openFaq === 1 && (
                <p className="mt-4 text-muted-foreground text-lg">
                  Для собак обязательны прививки от бешенства, чумы, энтерита и гепатита. Для кошек — от бешенства, панлейкопении, ринотрахеита и кальцивироза. Прививки должны быть сделаны не менее чем за 30 дней до заселения.
                </p>
              )}
            </div>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all bg-white animate-on-scroll"
            onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Можно ли привезти свой корм?</h3>
                <Icon name={openFaq === 2 ? "ChevronUp" : "ChevronDown"} size={24} className="text-primary" />
              </div>
              {openFaq === 2 && (
                <p className="mt-4 text-muted-foreground text-lg">
                  Да, конечно! Мы рекомендуем привозить привычный корм, чтобы избежать проблем с пищеварением. Также можно указать индивидуальный график кормления.
                </p>
              )}
            </div>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all bg-white animate-on-scroll"
            onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Как часто вы выгуливаете собак?</h3>
                <Icon name={openFaq === 3 ? "ChevronUp" : "ChevronDown"} size={24} className="text-primary" />
              </div>
              {openFaq === 3 && (
                <p className="mt-4 text-muted-foreground text-lg">
                  Собаки выгуливаются 2 раза в день — утром и вечером. Каждая прогулка длится 30-40 минут. Выгулы проходят на огороженной территории.
                </p>
              )}
            </div>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all bg-white animate-on-scroll"
            onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Что делать в случае болезни питомца?</h3>
                <Icon name={openFaq === 4 ? "ChevronUp" : "ChevronDown"} size={24} className="text-primary" />
              </div>
              {openFaq === 4 && (
                <p className="mt-4 text-muted-foreground text-lg">
                  При первых признаках недомогания мы немедленно связываемся с вами и, при необходимости, везём питомца к ветеринару. Все расходы согласовываются с владельцем.
                </p>
              )}
            </div>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all bg-white animate-on-scroll"
            onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Можно ли навестить питомца во время передержки?</h3>
                <Icon name={openFaq === 5 ? "ChevronUp" : "ChevronDown"} size={24} className="text-primary" />
              </div>
              {openFaq === 5 && (
                <p className="mt-4 text-muted-foreground text-lg">
                  Да, вы можете навещать своего питомца по предварительному согласованию. Мы также отправляем ежедневные фото и видео отчёты.
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;