
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-2xl font-bold bg-gradient-to-r from-veyalab-purple to-veyalab-blue bg-clip-text text-transparent">
          Veyalab
        </div>
        {!isMobile && (
          <div>
            <a 
              href="https://calendly.com/artfrol-af/artem-frolov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md bg-gradient-to-r from-veyalab-purple to-veyalab-blue text-white hover:shadow-md transition-all duration-200"
            >
              Записаться на консультацию
            </a>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="mt-2 flex justify-center">
          <a 
            href="https://calendly.com/artfrol-af/artem-frolov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-gradient-to-r from-veyalab-purple to-veyalab-blue text-white hover:shadow-md transition-all duration-200"
          >
            Записаться на консультацию
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
