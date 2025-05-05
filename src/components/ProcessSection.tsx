
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Бесплатная консультация",
      description: "Покажем, где в ваших процессах теряется время и деньги."
    },
    {
      number: 2,
      title: "План внедрения",
      description: "Распишем, как именно автоматизируем — с приоритетами и сроками."
    },
    {
      number: 3,
      title: "Разработка под ключ",
      description: "Сделаем всё сами: вы просто получаете работающий результат."
    },
    {
      number: 4,
      title: "Постоянная поддержка",
      description: "Следим за системой, улучшаем её, добавляем новые сценарии."
    }
  ];

  return (
    <section className="py-20 bg-veyalab-gray" id="process">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Процесс автоматизации бизнеса
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-veyalab-purple to-veyalab-blue text-white text-xl font-bold mb-5">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
