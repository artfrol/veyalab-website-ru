import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 bg-hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Станьте эффективнее и обгоняйте конкурентов <span className="gradient-text">с помощью ИИ</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
              Мы внедряем ИИ-решения, которые ускоряют работу команды, снижают издержки и помогают закрывать больше сделок.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button 
              size="lg" 
              className="w-full text-base font-medium shadow-custom" 
              asChild
            >
              <a href="https://calendly.com/artfrol-af/artem-frolov" className="flex items-center justify-center gap-2">
                Получить бесплатную консультацию
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;