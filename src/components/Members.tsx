import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Members() {
  const members = [
    {
      name: 'Sarah Johnson',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Michael Chen',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'David Park',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Jessica Williams',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Alex Kumar',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMzA0OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
    },
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
            Meet Our Team
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Passionate leaders driving innovation and fostering a thriving tech community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0077CC]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="mb-1" style={{ fontWeight: 600 }}>
                  {member.name}
                </h3>
                <p className="text-[#0077CC] mb-4">
                  {member.role}
                </p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-[#F5F7FA] hover:bg-gradient-to-br hover:from-[#0077CC] hover:to-[#00BFFF] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Linkedin className="text-[#0077CC] group-hover/icon:text-white transition-colors" size={18} />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 rounded-full bg-[#F5F7FA] hover:bg-gradient-to-br hover:from-[#0077CC] hover:to-[#00BFFF] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Github className="text-[#0077CC] group-hover/icon:text-white transition-colors" size={18} />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@nau.edu`}
                    className="w-10 h-10 rounded-full bg-[#F5F7FA] hover:bg-gradient-to-br hover:from-[#0077CC] hover:to-[#00BFFF] flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Mail className="text-[#0077CC] group-hover/icon:text-white transition-colors" size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
