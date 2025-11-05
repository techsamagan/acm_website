import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function NewsEvents() {
  const [filter, setFilter] = useState('All');
  
  const events = [
    {
      id: 1,
      title: 'Annual Hackathon 2025',
      category: 'Hackathons',
      date: 'November 15, 2025',
      location: 'NAU Tech Center',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBldmVudHxlbnwxfHx8fDE3NjIzMDQ5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: '24-hour coding marathon where students build innovative solutions to real-world problems.',
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      category: 'Workshops',
      date: 'November 20, 2025',
      location: 'Room 301, CS Building',
      image: 'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzYyMzA0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Learn the fundamentals of AI and build your first machine learning model.',
    },
    {
      id: 3,
      title: 'Tech Talk: Cloud Computing',
      category: 'Workshops',
      date: 'November 25, 2025',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjIyNDAwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Industry experts discuss the latest trends in cloud infrastructure and DevOps.',
    },
    {
      id: 4,
      title: 'Coding Competition',
      category: 'Competitions',
      date: 'December 5, 2025',
      location: 'NAU Auditorium',
      image: 'https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MjMwNDk2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Test your algorithmic skills and compete for amazing prizes.',
    },
    {
      id: 5,
      title: 'Career Fair & Networking',
      category: 'Workshops',
      date: 'December 10, 2025',
      location: 'Student Union',
      image: 'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzYyMzA0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Connect with top tech companies and explore internship opportunities.',
    },
    {
      id: 6,
      title: 'Winter Hackathon',
      category: 'Hackathons',
      date: 'December 15, 2025',
      location: 'NAU Tech Center',
      image: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBldmVudHxlbnwxfHx8fDE3NjIzMDQ5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Build innovative projects focused on sustainability and social impact.',
    },
  ];

  const categories = ['All', 'Workshops', 'Hackathons', 'Competitions'];
  
  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <section id="news" className="py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 600 }}>
            News & Events
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Stay updated with our latest activities and upcoming events
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-[#0077CC] to-[#00BFFF] text-white shadow-lg'
                  : 'bg-white text-[#1A1A1A] hover:bg-[#E0E0E0]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#0077CC]" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 group-hover:text-[#0077CC] transition-colors" style={{ fontWeight: 600 }}>
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-[#1A1A1A]/60 mb-2" style={{ fontSize: '0.875rem' }}>
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-[#1A1A1A]/60 mb-4" style={{ fontSize: '0.875rem' }}>
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>

                <p className="text-[#1A1A1A]/70 mb-4" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {event.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#0077CC] hover:gap-3 transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
