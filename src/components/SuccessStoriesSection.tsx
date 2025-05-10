
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

interface SuccessStory {
  id: number;
  title: string;
  problem: string;
  solution: string[];
  result: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Оптимизация CRM и сегментация лидов",
    problem: "Компания столкнулась с проблемой неструктурированной CRM-системы, содержащей 17 000 записей. Отсутствие чёткой структуры и актуальности данных затрудняло повторные продажи и снижало эффективность работы отдела продаж.",
    solution: [
      "Совместно с командой клиента определили идеальные профили клиентов (ICP).",
      "Разработали параметры для поиска и сегментации клиентов.",
      "Очистили базу данных, удалив некорректные записи.",
      "Использовали открытые источники для заполнения недостающей информации.",
      "Создали систему автоматической сегментации лидов.",
      "Приоритизировали и оценили лиды, выделив 2 000 наиболее перспективных."
    ],
    result: "Из 17 000 записей выделили 2 000 качественных лидов, готовых для работы. Клиент обнаружил более 400 сделок в своей CRM и сэкономил более 30 часов в неделю своих сотрудников на сегментацию лидов."
  },
  {
    id: 2,
    title: "Автоматизация персонализированных рассылок",
    problem: "Компания тратила более 10 часов в неделю на ручную подготовку персонализированных рассылок, что приводило к низкому качеству данных и сниженной эффективности коммуникации с клиентами.",
    solution: [
      "Проанализировали бизнес-процессы и выявили узкие места в подготовке рассылок.",
      "Разработали систему автоматического сбора и анализа данных о клиентах.",
      "Внедрили шаблоны персонализированных сообщений, адаптированных под различные сегменты аудитории.",
      "Настроили автоматическую отправку сообщений в зависимости от поведения и предпочтений клиентов."
    ],
    result: "Сократили затраты времени на подготовку рассылок и увеличили конверсию в встречи на 30% благодаря качественной персонализации."
  },
  {
    id: 3,
    title: "Автоматизация обработки входящих инвойсов",
    problem: "Компания сталкивалась с трудностями при ручной обработке входящих инвойсов, что занимало значительное количество времени и ресурсов.",
    solution: [
      "Проанализировали текущие процессы обработки инвойсов и выявили возможности для автоматизации.",
      "Разработали автоматическую систему для распознавания данных из инвойсов.",
      "Интегрировали систему с внутренними учётными системами компании.",
      "Обеспечили автоматическую проверку и сортировку документов."
    ],
    result: "Сократили время на обработку инвойсов, повысили точность данных и освободили ресурсы для более стратегических задач. Компания экономит более 20 часов в неделю благодаря автоматизации процесса."
  }
];

const SuccessStoryCard: React.FC<{ story: SuccessStory }> = ({ story }) => {
  return (
    <Card className="h-full border border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-bold">{story.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-left">
        <div>
          <h4 className="font-semibold text-lg mb-2">Проблема:</h4>
          <CardDescription className="text-sm md:text-base">{story.problem}</CardDescription>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Решение:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
            {story.solution.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Результат:</h4>
          <CardDescription className="text-sm md:text-base">{story.result}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

const SuccessStoriesSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="success-stories" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры наших работ</h2>
          <p className="text-lg text-muted-foreground">
            Реальные кейсы автоматизации, которые помогли нашим клиентам сэкономить время и увеличить прибыль
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {successStories.map((story) => (
                <CarouselItem key={story.id} className="md:basis-1/1 lg:basis-1/1 pl-4 py-2">
                  <div className="p-1">
                    <SuccessStoryCard story={story} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className={`relative ${isMobile ? 'left-0' : '-left-4'} mx-2`} />
              <CarouselNext className={`relative ${isMobile ? 'right-0' : '-right-4'} mx-2`} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
