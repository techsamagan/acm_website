import { motion } from 'motion/react';
import { Code2, Users, Rocket, BookOpen } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Coding Excellence',
      description: 'Master the latest programming languages and technologies',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Work with talented peers on innovative projects',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Transform ideas into impactful solutions',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Access workshops, seminars, and mentorship programs',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
              Who We Are
            </h2>
            <p className="text-[#1A1A1A]/80 mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              The ACM Club at North American University is a vibrant community of students passionate about computing and technology. 
              We foster innovation, collaboration, and professional growth through hands-on projects, networking events, and technical workshops. 
              Whether you're a beginner or an expert, our club provides the platform to learn, create, and excel in the world of computing.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0077CC] to-[#00BFFF] flex items-center justify-center mb-3">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h4 className="mb-1" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#1A1A1A]/70">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzYyMzA0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="ACM Club Team"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MjMwNDk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coding Workshop"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBldmVudHxlbnwxfHx8fDE3NjIzMDQ5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hackathon"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating decoration */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0077CC] to-[#00BFFF] rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
