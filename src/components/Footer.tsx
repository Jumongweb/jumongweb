
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center mr-2">
                <span className="font-bold text-sm text-accent-foreground">LT</span>
              </div>
              <span className="font-bold text-lg font-heading">Lawal Toheeb</span>
            </a>
          </div>
          
          <div className="text-center md:text-right text-muted-foreground text-sm">
            <p>© {currentYear} Lawal Toheeb Olabanji. All rights reserved.</p>
            <p className="mt-1">Full Stack Software Engineer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
