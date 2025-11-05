import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import acmLogo from 'figma:asset/25dd82f9b8c1e92a48cd93413a9daaa97ec5d740.png';
import nauLogo from 'figma:asset/70b9ef4eac74cde6dd07f6aeed3288477f2c5c5b.png';

export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Members', href: '#members' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer id="contact" className="bg-white border-t border-[#E0E0E0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={acmLogo} 
                alt="ACM NAU Logo" 
                className="h-14 w-auto"
              />
              <img 
                src={nauLogo} 
                alt="North American University Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-[#1A1A1A]/70 mb-4 max-w-md" style={{ lineHeight: 1.6 }}>
              The ACM Club at North American University - Empowering the next generation of 
              technology leaders through innovation, collaboration, and continuous learning.
            </p>
            <div className="space-y-2 text-[#1A1A1A]/70" style={{ fontSize: '0.875rem' }}>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0077CC]" />
                <span>North American University, Houston, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#0077CC]" />
                <span>acm@nau.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#0077CC]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#1A1A1A]/70 hover:text-[#0077CC] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-[#F5F7FA] hover:bg-gradient-to-br hover:from-[#0077CC] hover:to-[#00BFFF] flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon 
                    size={18} 
                    className="text-[#1A1A1A] group-hover:text-white transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E0E0E0]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#1A1A1A]/60" style={{ fontSize: '0.875rem' }}>
              © 2025 ACM Club – North American University. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[#1A1A1A]/60" style={{ fontSize: '0.875rem' }}>
              <a href="#" className="hover:text-[#0077CC] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#0077CC] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
