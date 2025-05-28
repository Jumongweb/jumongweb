
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-portfolio-dark/95 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center mr-3">
                <span className="font-bold text-lg text-accent-foreground">LT</span>
              </div>
              <span className="font-bold text-xl hidden sm:block font-heading">Toheeb</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Contact button */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-all duration-300" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-6 border-t border-border bg-portfolio-dark/98 backdrop-blur-md rounded-lg shadow-lg animate-slide-in">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-portfolio-navy/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="w-full mt-4 animate-fade-in" style={{ animationDelay: `${navItems.length * 100}ms` }}>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Let's Connect</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
