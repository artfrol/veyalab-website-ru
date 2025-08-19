import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request submitted!",
        description: "We'll be in touch with you shortly.",
        action: (
          <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
        ),
      });
      setIsSubmitting(false);
      
      // Redirect to Calendly
      window.location.href = "https://calendly.com/artfrol-af/artem-frolov";
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Хотите увеличить эффективность и прибыль <span className="gradient-text">с помощью ИИ?</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Мы внедрим решения под ваши задачи, сократим издержки и ускорим рост продаж.
          </p>
        </div>
        <div className="mx-auto max-w-md mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <Button 
              type="submit" 
              className="w-full max-w-sm text-base font-medium shadow-custom" 
              size="lg" 
              disabled={isSubmitting}
              asChild
            >
              <a href="https://calendly.com/artfrol-af/artem-frolov">
                {isSubmitting ? "Processing..." : "Получить бесплатную консультацию"}
              </a>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;