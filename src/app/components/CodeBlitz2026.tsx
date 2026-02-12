import { motion } from 'motion/react';
import { Calendar, MapPin, Users, DollarSign, Trophy, Clock, Wifi, Coffee, Zap, CheckCircle2, Shield, ArrowLeft } from 'lucide-react';

interface CodeBlitz2026Props {
  onBack: () => void;
}

export function CodeBlitz2026({ onBack }: CodeBlitz2026Props) {
  const facilities = [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Coffee, label: 'Food & Beverages' },
    { icon: Zap, label: 'Power Backup' },
    { icon: Users, label: 'Comfortable Seating' },
  ];

  const timeline = [
    { time: '08:30 AM', event: 'Registration & Reporting', status: 'check-in' },
    { time: '09:00 AM', event: 'Hackathon Starts - Problem Statement Release', status: 'start' },
    { time: '12:00 PM', event: 'Mentor Session & Progress Review', status: 'mentor' },
    { time: '01:00 PM', event: 'Lunch Break (Working Session Continues)', status: 'break' },
    { time: '03:00 PM', event: 'Final Sprint & Code Optimization', status: 'sprint' },
    { time: '04:00 PM', event: 'Hackathon Ends - Final Submission', status: 'deadline' },
    { time: '04:30 PM', event: 'Presentations & Judging', status: 'judging' },
    { time: '05:30 PM', event: 'Results Announcement & Prize Distribution', status: 'awards' },
  ];

  const rules = [
    'Teams must consist of 2-4 members from the same or different colleges',
    'All team members must register individually and form teams before the event',
    'Participants must bring their own laptops and necessary equipment',
    'Use of pre-written code is allowed, but must be declared during submission',
    'Internet access will be provided, but teams should prepare offline resources',
    'Plagiarism or unfair means will result in immediate disqualification',
    'Decision of judges and organizers will be final and binding',
    'All participants must follow the code of conduct and maintain ethical standards',
  ];

  const evaluationCriteria = [
    { criterion: 'Innovation & Creativity', weight: '25%', description: 'Originality and novelty of the approach' },
    { criterion: 'Technical Implementation', weight: '30%', description: 'Quality of code, tools used, and technical depth' },
    { criterion: 'Security Impact', weight: '25%', description: 'Effectiveness in addressing security challenges' },
    { criterion: 'Presentation & Documentation', weight: '20%', description: 'Clarity of explanation and documentation quality' },
  ];

  const rewards = [
    { place: '1st Prize', amount: '₹5,000', color: 'from-yellow-500 to-amber-500' },
    { place: '2nd Prize', amount: '₹3,000', color: 'from-gray-400 to-gray-500' },
    { place: '3rd Prize', amount: '₹2,000', color: 'from-orange-500 to-amber-600' },
  ];

  return (
    <div className="relative py-20 lg:py-32 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 group font-medium"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Hackathons</span>
        </motion.button>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-200 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-700 font-medium">Registration Open</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            COREBLITZ 2026
          </h2>
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              8-Hour Offline Cyber Security Hackathon - Fast-Paced Innovation Challenge
            </p>
            <p className="text-lg text-blue-600 font-semibold mt-2">
              By CyberSecurity Club & PowerTech EE Club
            </p>
          </div>
        </motion.div>

        {/* Event Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
          >
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Overview</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              COREBLITZ 2026 is an intensive 8-hour offline hackathon designed to challenge participants with real-world cyber security scenarios. This fast-paced event brings together aspiring security professionals, developers, and researchers to tackle cutting-edge security challenges in a time-constrained environment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Participants will work on problem statements spanning web security, network defense, malware analysis, digital forensics, and AI-driven security solutions. The event provides an excellent platform to showcase your skills, learn from peers, interact with mentors, and compete for exciting prizes and recognition.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Date</div>
                  <div className="text-gray-900 font-semibold">March 20, 2026</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-gray-900 font-semibold">8 Hours (9:00 AM - 4:00 PM)</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Venue</div>
                  <div className="text-gray-900 font-semibold">ECA Auditorium & Labs</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-gray-500">Team Size</div>
                  <div className="text-gray-900 font-semibold">2-4 Members</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white border border-purple-100 rounded-xl shadow-sm">
              <DollarSign className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Registration Fee</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹200</div>
              <p className="text-gray-500 text-sm">Per team (all inclusive)</p>
            </div>

            <div className="p-6 bg-white border border-blue-100 rounded-xl shadow-sm">
              <Trophy className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Prize Pool</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹10,000</div>
              <p className="text-gray-500 text-sm">+ Certificates & Goodies for all</p>
            </div>
          </motion.div>
        </div>

        {/* Theme & Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white border border-indigo-100 rounded-2xl mb-16 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Theme & Objectives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-3">Event Theme</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="text-indigo-600 font-semibold">"Building Resilient Digital Defenses"</span>
              </p>
              <p className="text-gray-600 leading-relaxed">
                In an era of increasing cyber threats, this hackathon challenges participants to think creatively about defensive security, threat detection, and building robust systems that can withstand sophisticated attacks.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-600 mb-3">Key Objectives</h4>
              <ul className="space-y-2">
                {[
                  'Develop practical security solutions for real-world problems',
                  'Foster collaborative learning and knowledge sharing',
                  'Encourage ethical hacking and responsible disclosure',
                  'Bridge the gap between academic learning and industry needs',
                ].map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Rules & Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Rules & Guidelines</h3>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4">General Rules</h4>
              <ul className="space-y-3">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-4">What to Bring</h4>
                <ul className="space-y-2">
                  {[
                    'Laptop with necessary software and tools installed',
                    'Chargers and power adapters',
                    'Student ID card for verification',
                    'Registration confirmation (digital or printed)',
                    'Optional: External mouse, keyboard, or other peripherals',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Facilities Provided</h4>
                <div className="grid grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <facility.icon className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600 text-sm">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Event Timeline</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-600 font-bold text-lg min-w-[80px]">{item.time}</div>
                  <div className="text-gray-700">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Evaluation Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Evaluation Criteria</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {evaluationCriteria.map((item, index) => (
              <div key={index} className="p-6 bg-white border border-purple-100 rounded-xl shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{item.criterion}</h4>
                  <span className="text-purple-600 font-bold text-lg">{item.weight}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rewards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {rewards.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border border-yellow-100 rounded-2xl text-center hover:scale-105 transition-all shadow-md"
              >
                <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{reward.place}</h4>
                <div className={`text-4xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent mb-2`}>
                  {reward.amount}
                </div>
                <p className="text-gray-500 text-sm">+ Certificate & Goodies</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center p-6 bg-white border border-blue-100 rounded-xl shadow-sm">
            <p className="text-gray-600">
              <span className="text-blue-600 font-semibold">All participants</span> will receive participation certificates and exclusive event merchandise. 
              Top performers may also receive mentorship opportunities and internship referrals.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium text-lg transition-all hover:shadow-xl shadow-blue-500/20">
            Register for COREBLITZ 2026
          </button>
          <p className="text-gray-500 mt-4">Limited seats available. Register now to secure your spot!</p>
        </motion.div>
      </div>
    </div>
  );
}