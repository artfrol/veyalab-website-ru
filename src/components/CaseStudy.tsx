
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, BarChart2 } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Work with <span className="gradient-text">Us</span>
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            We understand the challenges of inventory management and deliver results that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
              <p className="text-gray-500">
                Get up and running in days, not months. Our AI agents integrate seamlessly with your existing systems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-brand-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-500">
                Our clients see immediate improvements in inventory accuracy and operational efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <BarChart2 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
              <p className="text-gray-500">
                Track performance with clear metrics and see the ROI of automated inventory management.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
