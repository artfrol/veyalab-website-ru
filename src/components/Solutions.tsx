import React from "react";
import { Database, MessageCircle, Bot, Quote } from "lucide-react";

const ProductSections = () => {
  const products = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "База знаний для сотрудников",
      subtitle: "Документы разбросаны — сотрудники теряют время",
      problem: "Новички долго адаптируются, а опытные тратят часы на поиск нужной информации.",
      solution: "Единый поиск по всем системам компании с учётом прав доступа.",
      userStory: "HR‑отдел сократил адаптацию новичков на 25% благодаря готовым ответам вместо переписок."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Чат‑бот для клиентов",
      subtitle: "Клиенты ждут ответа — вы теряете сделки",
      problem: "Медленные ответы и потерянные лиды снижают конверсию.",
      solution: "Бот отвечает на типовые вопросы, принимает заказы, интегрируется с CRM, передаёт сложное оператору.",
      userStory: "В e‑commerce +18% лидов за счёт обращений ночью, 65% вопросов закрывает бот."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "ЧAI‑помощник для вашей команды",
      subtitle: "Менеджеры не знают следующий шаг — сделки зависают",
      problem: "Отсутствие подсказок и контроля приводит к срыву сроков и потере клиентов.",
      solution: "Ассистент подсказывает следующий шаг, пишет письма, ставит задачи в CRM и сокращает цикл сделки.",
      userStory: "В e‑commerce +18% лидов за счёт обращений ночью, 65% вопросов закрывает бот."
    }
  ];

  return (
    <section id="solutions" className="w-full py-20 md:py-24">
      <div className="container px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-headline">
            Наши <span className="gradient-text">решения</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl border border-hairline p-6 md:p-8 card-hover">
              {/* Header Row */}
              <div className="flex items-start gap-6 mb-6">
                <div className="rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 p-4 flex-shrink-0">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-headline mb-2">{product.title}</h3>
                  <p className="text-text-muted text-lg">{product.subtitle}</p>
                </div>
              </div>
              
              {/* Body Blocks */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-body uppercase tracking-wide">
                    Проблема
                  </span>
                  <p className="text-body leading-relaxed flex-1">{product.problem}</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground uppercase tracking-wide">
                    Решение
                  </span>
                  <p className="text-body leading-relaxed flex-1">{product.solution}</p>
                </div>
                
                <div className="bg-surface p-4 rounded-xl border-l-4 border-gradient-to-b from-primary to-secondary relative">
                  <Quote className="h-4 w-4 text-primary absolute top-4 right-4 opacity-60" />
                  <span className="inline-flex items-center text-xs font-medium text-primary uppercase tracking-wide mb-2">
                    История успеха
                  </span>
                  <p className="text-body leading-relaxed">{product.userStory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSections;