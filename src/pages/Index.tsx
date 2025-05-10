
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id as string);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - (isMobile ? 70 : 100), // Adjusted for mobile
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-16 md:pt-20"> {/* Added padding top to account for fixed navbar */}
        <HeroSection />
        <ProblemSection />
        <SuccessStoriesSection />
        <ProcessSection />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
