
import React from 'react';
import { Database, Rocket, Users, Settings } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Database className="h-10 w-10" />,
      title: "Фиксированная подписка",
      description: "Без затрат на штат и разработчиков."
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Понимаем, как работает ваш бизнес",
      description: "От заявки до счёта."
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Платите за результат, а не за разработку",
      description: "Меньше ручной работы, больше прибыли."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Эксперты из Яндекса и Т-Банка",
      description: "Практики из лучших компаний."
    }
  ];

  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Почему мы?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-veyalab-purple">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
