
import React from 'react';
import { Check } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Ваша команда тратит много времени на рутинные задачи",
    "У вас есть работающий процесс, который хотите масштабировать",
    "Много систем, которые надо связать"
  ];

  return (
    <section className="py-20 bg-white" id="problems">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Какую проблему решаем?
        </h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl mb-8 text-center">Подходит вам, если:</h3>
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="bg-gradient-to-r from-veyalab-purple to-veyalab-blue rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
