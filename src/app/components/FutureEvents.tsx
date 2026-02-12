import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Target, Users, Briefcase } from 'lucide-react';

export function FutureEvents() {
  const upcomingEvents = [
    {
      id: 1,
      type: 'Hackathon',
      title: 'SecureHack 2026',
      date: 'March 15, 2026',
      time: '9:00 AM - 8:00 PM',
      venue: 'ECA Main Auditorium',
      status: 'Registration Open',
      description: 'Our flagship annual cyber security hackathon featuring advanced problem statements and increased prize pool.',
      highlights: ['₹30,000 prize pool', '6 problem domains', 'Industry mentors', 'Live judging'],
      color: 'blue',
      cta: 'Register Now'
    },
    {
      id: 2,
      type: 'Workshop',
      title: 'Advanced Malware Analysis',
      date: 'April 2026',
      time: 'TBA',
      venue: 'Cyber Security Lab',
      status: 'Coming Soon',
      description: '3-day intensive workshop on reverse engineering, malware analysis techniques, and building detection mechanisms.',
      highlights: ['Hands-on malware analysis', 'YARA rules creation', 'Sandbox setup', 'Certification'],
      color: 'purple',
      cta: 'Notify Me'
    },
    {
      id: 3,
      type: 'Training Program',
      title: 'Bug Bounty Bootcamp',
      date: 'May 2026',
      time: 'TBA',
      venue: 'Online & Offline',
      status: 'Planning Phase',
      description: 'Comprehensive training on finding vulnerabilities, responsible disclosure, and participating in bug bounty programs.',
      highlights: ['Live bug hunting', 'Report writing', 'Industry platforms', 'Bounty rewards'],
      color: 'indigo',
      cta: 'Learn More'
    },
    {
      id: 4,
      type: 'Awareness Campaign',
      title: 'Cyber Security Awareness Week',
      date: 'June 2026',
      time: 'Full Week',
      venue: 'Campus-wide',
      status: 'Planning Phase',
      description: 'Week-long campaign to spread cyber security awareness among students with talks, demos, and interactive sessions.',
      highlights: ['Daily seminars', 'Security demos', 'Phishing simulation', 'Password audits'],
      color: 'teal',
      cta: 'View Details'
    },
  ];

  const researchInitiatives = [
    {
      title: 'AI-Powered Threat Intelligence',
      description: 'Developing machine learning models for automated threat detection and classification',
      status: 'Active Research'
    },
    {
      title: 'IoT Security Framework',
      description: 'Creating comprehensive security guidelines for Internet of Things devices',
      status: 'Collaboration with Industry'
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Researching implementation strategies for zero-trust security models',
      status: 'Faculty-Led Initiative'
    },
    {
      title: 'Blockchain Security',
      description: 'Analyzing smart contract vulnerabilities and developing auditing tools',
      status: 'Student Project'
    },
  ];

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'border-blue-100 hover:border-blue-200',
      purple: 'border-purple-100 hover:border-purple-200',
      indigo: 'border-indigo-100 hover:border-indigo-200',
      teal: 'border-teal-100 hover:border-teal-200',
    };
    return colors[color as keyof typeof colors];
  };

  const getBadgeClass = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      teal: 'bg-teal-50 text-teal-700 border-teal-200',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white border border-blue-100 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">What's Coming Next</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Future Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting initiatives and events planned for the upcoming months
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-6 bg-white border ${getColorClass(event.color)} rounded-2xl hover:shadow-lg transition-all`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getBadgeClass(event.color)}`}>
                  {event.type}
                </span>
                {event.status === 'Registration Open' && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">{event.status}</span>
                  </div>
                )}
                {event.status !== 'Registration Open' && (
                  <span className="text-xs text-gray-500">{event.status}</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {event.venue}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {event.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                {event.cta}
                <ArrowRight className="w-4 h-4 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Long-term Plans */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Training Programs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white border border-blue-100 rounded-2xl shadow-sm"
          >
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Programs</h3>
            <p className="text-gray-600 mb-6">
              Structured learning paths aligned with industry certifications and job requirements.
            </p>
            <ul className="space-y-3">
              {[
                'CEH (Certified Ethical Hacker) preparation course',
                'OSCP (Offensive Security Certified Professional) bootcamp',
                'CompTIA Security+ certification training',
                'Secure coding workshops for developers',
                'Cloud security specialization program',
              ].map((program, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-gray-600">{program}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industry Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white border border-purple-100 rounded-2xl shadow-sm"
          >
            <Briefcase className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Collaboration</h3>
            <p className="text-gray-600 mb-6">
              Building partnerships with leading organizations for real-world exposure and opportunities.
            </p>
            <ul className="space-y-3">
              {[
                'Guest lectures from industry security experts',
                'Internship opportunities with partner companies',
                'Joint research projects with security firms',
                'Sponsored hackathons and competitions',
                'Mentorship programs with professionals',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Research & Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research & Innovation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchInitiatives.map((initiative, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h4>
                <p className="text-gray-500 mb-3">{initiative.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-600">
                  {initiative.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Building */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-sm"
        >
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Growing Our Community</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            We're committed to building an inclusive, collaborative community where everyone can learn and grow. Our future plans include establishing study groups, mentorship programs, online learning resources, and regular meetups to foster continuous learning and networking.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
            Join Our Community
          </button>
        </motion.div>
      </div>
    </div>
  );
}