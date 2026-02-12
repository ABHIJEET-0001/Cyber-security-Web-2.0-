import { motion } from 'motion/react';
import { Shield, Lock, Network, Search, Brain, Target } from 'lucide-react';

export function AboutClub() {
  const focusAreas = [
    {
      icon: Shield,
      title: 'Ethical Hacking',
      description: 'Learn penetration testing, vulnerability assessment, and responsible disclosure practices.',
      color: 'blue'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Master firewalls, intrusion detection systems, and secure network architecture design.',
      color: 'indigo'
    },
    {
      icon: Lock,
      title: 'Web Security',
      description: 'Understand OWASP Top 10, secure coding practices, and web application security testing.',
      color: 'purple'
    },
    {
      icon: Search,
      title: 'Digital Forensics',
      description: 'Investigate cyber incidents, analyze evidence, and understand incident response procedures.',
      color: 'slate'
    },
    {
      icon: Brain,
      title: 'AI in Cyber Security',
      description: 'Explore machine learning for threat detection, automated security operations, and predictive analytics.',
      color: 'violet'
    },
    {
      icon: Target,
      title: 'Security Operations',
      description: 'Learn SOC operations, threat hunting, SIEM tools, and security monitoring best practices.',
      color: 'rose'
    },
  ];

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      indigo: 'text-indigo-600',
      purple: 'text-purple-600',
      slate: 'text-slate-600',
      violet: 'text-violet-600',
      rose: 'text-rose-600',
    };
    return colors[color as keyof typeof colors];
  };

  const getBorderClass = (color: string) => {
    const colors = {
      blue: 'border-blue-100 hover:border-blue-300',
      indigo: 'border-indigo-100 hover:border-indigo-300',
      purple: 'border-purple-100 hover:border-purple-300',
      slate: 'border-slate-100 hover:border-slate-300',
      violet: 'border-violet-100 hover:border-violet-300',
      rose: 'border-rose-100 hover:border-rose-300',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative py-20 lg:py-32 bg-white">
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
            About the Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building the next generation of cyber security professionals
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* What is the Club */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Cyber Security Club at Engineering College Ajmer is a student-driven technical community dedicated to fostering knowledge, innovation, and excellence in the field of information security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We provide a platform for students to explore various domains of cyber security through hands-on workshops, competitive hackathons, Capture The Flag (CTF) events, and industry expert sessions.
              </p>
            </div>

            <div className="p-8 bg-white border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision & Mission</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To become a leading student community in cyber security education, producing skilled professionals who contribute to national and global digital safety.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-2">Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Empower students with practical cyber security skills, ethical hacking knowledge, and industry-relevant expertise through continuous learning and real-world problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Long-term Goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Long-term Goals</h3>
            <div className="space-y-4">
              {[
                'Establish a state-of-the-art cyber security lab with advanced tools and infrastructure',
                'Build partnerships with leading cyber security firms and research organizations',
                'Create a comprehensive training program aligned with industry certifications (CEH, OSCP, etc.)',
                'Develop a research wing focusing on emerging threats and security innovations',
                'Organize national-level hackathons and CTF competitions',
                'Provide placement support and career guidance in cyber security domain',
                'Contribute to open-source security tools and vulnerability research',
                'Foster a culture of responsible disclosure and ethical hacking practices',
              ].map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Focus Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 bg-white border ${getBorderClass(area.color)} rounded-xl hover:shadow-lg transition-all cursor-default`}
              >
                <area.icon className={`w-12 h-12 ${getColorClass(area.color)} mb-4 transition-all group-hover:scale-110`} />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-500 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}