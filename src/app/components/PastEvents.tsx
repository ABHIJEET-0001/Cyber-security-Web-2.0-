import { motion } from 'motion/react';
import { Calendar, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function PastEvents() {
  const events = [
    {
      id: 1,
      type: 'Hackathon',
      title: 'SecureHack 2025',
      date: 'March 2025',
      participants: 250,
      description: 'Our inaugural cyber security hackathon featuring 6 challenging problem statements across web security, network defense, and digital forensics.',
      achievements: ['50+ teams participated', 'Prize pool of ₹25,000', '3 winning solutions implemented'],
      image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2F0aG9uJTIwc3R1ZGVudHMlMjBjb2Rpbmd8ZW58MXx8fHwxNzY5ODgwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'blue'
    },
    {
      id: 2,
      type: 'Workshop',
      title: 'Web Application Pentesting',
      date: 'January 2025',
      participants: 180,
      description: 'Intensive 2-day workshop on OWASP Top 10 vulnerabilities, penetration testing methodologies, and secure coding practices.',
      achievements: ['Hands-on DVWA exploitation', 'Burp Suite training', 'Certification for all attendees'],
      image: 'https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3Nob3AlMjBjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3Njk4ODAzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'indigo'
    },
    {
      id: 3,
      type: 'CTF Competition',
      title: 'CyberFlags CTF 2024',
      date: 'November 2024',
      participants: 320,
      description: 'Jeopardy-style Capture The Flag event with challenges in cryptography, reverse engineering, forensics, and exploitation.',
      achievements: ['40+ flags across 5 categories', '15 hours of intense competition', 'Top 3 teams awarded'],
      image: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb21wZXRpdGlvbiUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2OTg4MDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'purple'
    },
    {
      id: 4,
      type: 'Guest Lecture',
      title: 'Industry Expert Talk: Modern Cyber Threats',
      date: 'September 2024',
      participants: 400,
      description: 'Renowned security researcher shared insights on emerging threats, ransomware trends, and career opportunities in cyber security.',
      achievements: ['Live malware demonstration', 'Q&A with industry expert', 'Career guidance session'],
      image: 'https://images.unsplash.com/photo-1733222814974-0f00ac5e10cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwcHJlc2VudGF0aW9uJTIwbGVjdHVyZXxlbnwxfHx8fDE3Njk4ODAzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'teal'
    },
    {
      id: 5,
      type: 'Workshop',
      title: 'Network Security & Wireshark',
      date: 'August 2024',
      participants: 150,
      description: 'Practical workshop on network protocol analysis, packet inspection, intrusion detection, and using Wireshark for security analysis.',
      achievements: ['Wireshark certification', 'Live network traffic analysis', 'Attack detection exercises'],
      image: 'https://images.unsplash.com/photo-1761250246894-ee2314939662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3Nob3AlMjBjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3Njk4ODAzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'cyan'
    },
    {
      id: 6,
      type: 'Seminar',
      title: 'Digital Forensics & Incident Response',
      date: 'June 2024',
      participants: 200,
      description: 'Comprehensive seminar covering digital evidence collection, forensic analysis tools, incident response procedures, and legal aspects.',
      achievements: ['Forensic toolkit demo', 'Case study analysis', 'Industry certification guidance'],
      image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwaGFja2F0aG9uJTIwc3R1ZGVudHMlMjBjb2Rpbmd8ZW58MXx8fHwxNzY5ODgwMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'rose'
    },
  ];

  const getColorClass = (color: string) => {
    const colors = {
      cyan: 'border-cyan-100 hover:border-cyan-200',
      blue: 'border-blue-100 hover:border-blue-200',
      purple: 'border-purple-100 hover:border-purple-200',
      indigo: 'border-indigo-100 hover:border-indigo-200',
      teal: 'border-teal-100 hover:border-teal-200',
      rose: 'border-rose-100 hover:border-rose-200',
    };
    return colors[color as keyof typeof colors];
  };

  const getBadgeClass = (color: string) => {
    const colors = {
      cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      teal: 'bg-teal-50 text-teal-700 border-teal-200',
      rose: 'bg-rose-50 text-rose-700 border-rose-200',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Past Events & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of learning, innovation, and excellence
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="p-6 bg-white border border-blue-100 rounded-xl text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-500">Total Events</div>
          </div>
          <div className="p-6 bg-white border border-indigo-100 rounded-xl text-center shadow-sm">
            <div className="text-3xl font-bold text-indigo-600 mb-2">1500+</div>
            <div className="text-gray-500">Participants</div>
          </div>
          <div className="p-6 bg-white border border-purple-100 rounded-xl text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">₹75K+</div>
            <div className="text-gray-500">Prizes Awarded</div>
          </div>
          <div className="p-6 bg-white border border-rose-100 rounded-xl text-center shadow-sm">
            <div className="text-3xl font-bold text-rose-600 mb-2">20+</div>
            <div className="text-gray-500">Industry Experts</div>
          </div>
        </motion.div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-6 bg-white border ${getColorClass(event.color)} rounded-2xl hover:shadow-lg transition-all`}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Image */}
                <div className="lg:col-span-1">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeClass(event.color)} shadow-sm`}>
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {event.participants} Participants
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{event.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Key Highlights
                    </h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {event.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Through our diverse events, we've built a thriving community of cyber security enthusiasts. Our alumni have secured positions at leading tech companies, pursued advanced research, and contributed to open-source security projects. We continue to expand our reach and impact, nurturing the next generation of security professionals.
          </p>
        </motion.div>
      </div>
    </div>
  );
}