import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Eligibility & Registration',
      questions: [
        {
          q: 'Who can participate in the hackathon?',
          a: 'All students from engineering colleges across India are eligible to participate. Both undergraduate and postgraduate students can join. Prior experience in cyber security is helpful but not mandatory.',
        },
        {
          q: 'How do I register for the hackathon?',
          a: 'Registration is done online through our website. Each team member must register individually, and then you can form teams of 2-4 members. The registration fee is ₹200 per team.',
        },
        {
          q: 'Can I participate individually or do I need a team?',
          a: 'Team participation is mandatory. You need to form a team of 2-4 members. If you don\'t have a team, you can mention it during registration, and we\'ll help you find team members.',
        },
        {
          q: 'Can team members be from different colleges?',
          a: 'Yes, absolutely! Team members can be from the same college or different colleges. We encourage diverse teams.',
        },
      ],
    },
    {
      category: 'Event Details',
      questions: [
        {
          q: 'What is the format of the hackathon?',
          a: 'It\'s an in-person, one-day hackathon from 9 AM to 8 PM. Teams will choose a problem statement, work on it throughout the day, and present their solutions to judges in the evening.',
        },
        {
          q: 'What should I bring to the hackathon?',
          a: 'Bring your laptop, chargers, student ID card, registration confirmation, and any tools or software you might need. We\'ll provide WiFi, food, and workspace.',
        },
        {
          q: 'Will food be provided?',
          a: 'Yes, lunch and refreshments will be provided to all participants throughout the day.',
        },
        {
          q: 'Is there an entry/exit system?',
          a: 'Yes, participants will receive entry passes upon registration check-in. You\'ll need to show your pass for re-entry if you leave the venue during breaks.',
        },
      ],
    },
    {
      category: 'Technical & Problem Statements',
      questions: [
        {
          q: 'What problem statements will be available?',
          a: 'We\'ll have 6 problem statements across domains like web security, network security, malware analysis, digital forensics, AI in cyber security, and security operations. Problem statements will be released on the event day.',
        },
        {
          q: 'Can we use pre-written code or libraries?',
          a: 'Yes, you can use existing libraries, frameworks, and code snippets. However, the core solution must be developed during the hackathon, and you must declare any pre-written code during submission.',
        },
        {
          q: 'Will internet access be available?',
          a: 'Yes, high-speed WiFi will be provided. However, we recommend downloading essential tools and resources beforehand as a backup.',
        },
        {
          q: 'Will mentors be available during the event?',
          a: 'Yes, faculty mentors and industry experts will be available throughout the event to guide teams and answer questions.',
        },
      ],
    },
    {
      category: 'Judging & Prizes',
      questions: [
        {
          q: 'How will projects be judged?',
          a: 'Projects will be evaluated on innovation (25%), technical implementation (30%), security impact (25%), and presentation quality (20%). Judges will be industry experts and faculty members.',
        },
        {
          q: 'What are the prizes?',
          a: '1st Prize: ₹15,000, 2nd Prize: ₹10,000, 3rd Prize: ₹5,000. All participants will receive certificates and merchandise. Top performers may receive internship opportunities.',
        },
        {
          q: 'Will all participants receive certificates?',
          a: 'Yes, all participants will receive participation certificates. Winning teams will receive special recognition certificates.',
        },
      ],
    },
    {
      category: 'Club Membership',
      questions: [
        {
          q: 'How can I join the Cyber Security Club?',
          a: 'Students from Engineering College Ajmer can apply for membership through our website or contact our faculty coordinators. We conduct recruitment drives at the beginning of each semester.',
        },
        {
          q: 'Is there a membership fee?',
          a: 'No, club membership is free for all students of Engineering College Ajmer. However, some special workshops or certifications may have nominal fees.',
        },
        {
          q: 'What activities does the club organize?',
          a: 'We organize hackathons, CTF competitions, workshops, seminars, guest lectures, training programs, and hands-on lab sessions throughout the year.',
        },
      ],
    },
    {
      category: 'Contact & Support',
      questions: [
        {
          q: 'Whom should I contact for queries?',
          a: 'You can reach out to our faculty coordinators via email or contact the student coordinators through our official social media channels. Contact details are available in the Contact section.',
        },
        {
          q: 'What if I need to cancel my registration?',
          a: 'Registration cancellations must be made at least 7 days before the event for a refund. Contact our team via email with your registration details.',
        },
        {
          q: 'Will there be future events?',
          a: 'Yes! We organize multiple events throughout the year including workshops, CTFs, seminars, and training programs. Follow our social media for updates.',
        },
      ],
    },
    ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-20 lg:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white border border-blue-100 rounded-full shadow-sm">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our events and club
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left group"
                      >
                        <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Can't find the answer you're looking for? Feel free to reach out to our team. We're here to help!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}