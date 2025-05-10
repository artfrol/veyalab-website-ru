
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 bg-gradient-to-b from-white to-veyalab-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold leading-tight`}>
              Замените рутину автоматизациями и увеличьте выручку своей компании
            </h1>
            <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-600 md:pr-12`}>
              Автоматизируем рутину — копирование, обновления, сверки. Что человек делает за час — ИИ делает за минуту. Команда сосредотачивается на росте, а не на рутине.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="https://calendly.com/artfrol-af/artem-frolov" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {isMobile ? (
                  <Button variant="outline" size="default" className="bg-white text-veyalab-purple hover:bg-veyalab-gray hover:text-veyalab-purple">
                    Записаться на бесплатную консультацию
                  </Button>
                ) : (
                  <Button className="px-8 py-6 text-lg bg-gradient-to-r from-veyalab-purple to-veyalab-blue hover:from-veyalab-dark-purple hover:to-veyalab-dark-blue transition-all duration-300 shadow-lg hover:shadow-xl">
                    Записаться на бесплатную консультацию
                  </Button>
                )}
              </a>
            </div>
          </div>
          {!isMobile && (
            <div className="flex-1 animate-slide-up">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-veyalab-purple rounded-xl"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3" 
                    alt="Автоматизация бизнес-процессов" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-veyalab-purple/30 to-transparent"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
