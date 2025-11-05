import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import acmLogo from 'figma:asset/25dd82f9b8c1e92a48cd93413a9daaa97ec5d740.png';
import nauLogo from 'figma:asset/70b9ef4eac74cde6dd07f6aeed3288477f2c5c5b.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Members', href: '#members' },
    { name: 'News', href: '#news' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <a href="#home" className="flex items-center gap-3">
              {/* ACM NAU Logo */}
              <img 
                src={acmLogo} 
                alt="ACM NAU Logo" 
                className="h-14 w-auto"
              />
              {/* NAU Shield Logo */}
              <img 
                src={nauLogo} 
                alt="North American University Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[#1A1A1A] hover:text-[#0077CC] transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0077CC] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#join"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#0077CC] to-[#00BFFF] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,119,204,0.3)]"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#1A1A1A] hover:text-[#0077CC] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#join"
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#0077CC] to-[#00BFFF] text-white text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
