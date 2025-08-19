
import React from "react";
import { Link, Database, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Link className="h-10 w-10 text-brand-blue" />,
      title: "Effortless Integration",
      description: "Connect your CRM, ERP, or Excel seamlessly.",
      number: "1"
    },
    {
      icon: <Database className="h-10 w-10 text-brand-purple" />,
      title: "Proactive Management",
      description: "AI agents contact stakeholders or generate orders — based on your rules and approval flow.",
      number: "2"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-blue" />,
      title: "Boosted Productivity",
      description: "Save time and increase profitability by automating routine tasks.",
      number: "3"
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-brand-light/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How it <span className="gradient-text">Works</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Think of us as an army of success managers, but faster and more efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative mt-8">
          {steps.map((step, index) => (
            <div key={index} className="process-card relative flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="absolute -top-4 right-4 bg-brand-light rounded-full px-3 py-1 font-semibold text-brand-purple">
                {step.number}
              </div>
              <div className="rounded-full bg-brand-light p-4 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
