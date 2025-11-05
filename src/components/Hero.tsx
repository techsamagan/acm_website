import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import acmLogo from 'figma:asset/25dd82f9b8c1e92a48cd93413a9daaa97ec5d740.png';
import nauLogo from 'figma:asset/70b9ef4eac74cde6dd07f6aeed3288477f2c5c5b.png';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0077CC] via-[#00BFFF] to-[#0077CC]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white/20 rotate-45"
          animate={{
            rotate: [45, 65, 45],
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-white/20 rotate-12"
          animate={{
            rotate: [12, 32, 12],
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Watermark Logos */}
      <div className="absolute top-8 right-8 flex gap-4 opacity-20">
        <div className="backdrop-blur-sm bg-white/20 p-3 rounded-lg">
          <img src={acmLogo} alt="ACM NAU" className="h-16 w-auto" />
        </div>
        <div className="backdrop-blur-sm bg-white/20 p-3 rounded-lg">
          <img src={nauLogo} alt="NAU" className="h-16 w-auto" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-6"
          style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.2 }}
        >
          Empowering Innovation Through Computing
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 mb-10 max-w-3xl mx-auto"
          style={{ fontSize: '1.25rem', lineHeight: 1.8 }}
        >
          The ACM Club at North American University connects students passionate about technology, research, and leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#join"
            className="px-8 py-4 rounded-xl bg-white text-[#0077CC] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)]"
            style={{ fontWeight: 600 }}
          >
            Join Us
          </a>
          <a
            href="#events"
            className="px-8 py-4 rounded-xl border-2 border-white text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
            style={{ fontWeight: 600 }}
          >
            See Events
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
