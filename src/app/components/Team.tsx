import { motion } from 'motion/react';
import { Linkedin, Github, Mail, UserCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Team() {
  const facultyCoordinators = [
    {
      name: 'Dr. Rajesh Kumar',
      designation: 'Faculty Coordinator',
      department: 'Computer Science & Engineering',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'rajesh.kumar@ecajmer.ac.in',
    },
    {
      name: 'Prof. Priya Sharma',
      designation: 'Co-Faculty Coordinator',
      department: 'Information Technology',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'priya.sharma@ecajmer.ac.in',
    },
  ];

  const coreTeam = [
    {
      name: 'Arjun Patel',
      role: 'President',
      year: 'Final Year, CSE',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
      email: 'arjun.patel@example.com',
    },
    {
      name: 'Sneha Verma',
      role: 'Vice President',
      year: 'Third Year, IT',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
      email: 'sneha.verma@example.com',
    },
    {
      name: 'Rohan Gupta',
      role: 'Technical Head',
      year: 'Final Year, CSE',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
      email: 'rohan.gupta@example.com',
    },
    {
      name: 'Ananya Singh',
      role: 'Event Coordinator',
      year: 'Third Year, CSE',
      image: 'https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODgwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
      github: '#',
      email: 'ananya.singh@example.com',
    },
  ];

  const specializedTeams = [
    {
      team: 'Web & Development',
      members: ['Karan Mehta', 'Divya Reddy', 'Amit Joshi'],
      focus: 'Website development, platform maintenance, and technical infrastructure',
    },
    {
      team: 'Design & Media',
      members: ['Riya Kapoor', 'Aditya Sharma', 'Pooja Nair'],
      focus: 'Graphic design, social media management, and content creation',
    },
    {
      team: 'Operations',
      members: ['Vikram Desai', 'Neha Agarwal', 'Sanjay Kumar'],
      focus: 'Event logistics, resource management, and team coordination',
    },
    {
      team: 'Public Relations',
      members: ['Priya Malhotra', 'Rahul Saxena', 'Kavya Iyer'],
      focus: 'Outreach, sponsorships, industry connections, and publicity',
    },
  ];

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
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals driving our mission forward
          </p>
        </motion.div>

        {/* Faculty Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Faculty Coordinators</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white border border-blue-100 rounded-2xl hover:shadow-lg transition-all text-center shadow-sm"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all" />
                  <ImageWithFallback
                    src={faculty.image}
                    alt={faculty.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-blue-100"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h4>
                <p className="text-blue-600 font-medium mb-1">{faculty.designation}</p>
                <p className="text-gray-500 text-sm mb-4">{faculty.department}</p>
                <a
                  href={`mailto:${faculty.email}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {faculty.email}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Student Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all text-center shadow-sm"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-purple-100 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-all" />
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-gray-100"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-purple-600 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs mb-4">{member.year}</p>
                
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-500 hover:text-blue-600 transition-colors" />
                  </a>
                  <a
                    href={member.github}
                    className="p-2 bg-gray-50 hover:bg-purple-50 rounded-lg transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4 text-gray-500 hover:text-purple-600 transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-50 hover:bg-indigo-50 rounded-lg transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 text-gray-500 hover:text-indigo-600 transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Teams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Specialized Teams</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specializedTeams.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white border border-blue-100 rounded-xl hover:shadow-md transition-all shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <UserCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{team.team}</h4>
                    <p className="text-gray-500 text-sm mb-3">{team.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {team.members.map((member, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-700"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            We're always looking for passionate students interested in cyber security. Whether you're a beginner or experienced, there's a place for you in our community.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
            Apply for Membership
          </button>
        </motion.div>
      </div>
    </div>
  );
}