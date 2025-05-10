
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-veyalab-purple to-veyalab-blue text-white" id="cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Готовы увеличить эффективность вашего бизнеса?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Проанализируем ваши бизнес процессы и поможем построить план по их автоматизации.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://calendly.com/artfrol-af/artem-frolov" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="bg-white text-veyalab-purple hover:bg-veyalab-gray hover:text-veyalab-purple">
              Записаться на бесплатную консультацию
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
