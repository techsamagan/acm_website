import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-[#0077CC] via-[#00BFFF] to-[#0077CC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
            Ready to be part of the future?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Join the ACM Club today and start your journey in tech. Connect with like-minded peers, 
            work on exciting projects, and unlock endless opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="peer w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-white transition-all"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-6 text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-6 peer-focus:text-white"
                  style={{ fontSize: '0.875rem' }}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="peer w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-white transition-all"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-6 text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-6 peer-focus:text-white"
                  style={{ fontSize: '0.875rem' }}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="peer w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-white transition-all resize-none"
                  placeholder="Tell us about yourself"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-6 text-white transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-6 peer-focus:text-white"
                  style={{ fontSize: '0.875rem' }}
                >
                  Tell us about yourself
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-white text-[#0077CC] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Join Now <Send size={20} />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '500+', label: 'Active Members' },
            { number: '50+', label: 'Events Hosted' },
            { number: '20+', label: 'Tech Workshops' },
            { number: '10+', label: 'Partner Companies' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-white mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                {stat.number}
              </div>
              <div className="text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
