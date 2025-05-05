
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-veyalab-purple to-veyalab-blue bg-clip-text text-transparent">
              Veyalab
            </span>
          </div>
          <div className="text-gray-500">
            © {currentYear} Veyalab. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
