import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, MessageSquare, Instagram, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* College Address */}
            <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Engineering College Ajmer<br />
                    Near Saraswati Nagar,<br />
                    Jaipur Road, Ajmer,<br />
                    Rajasthan - 305001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:pte@ecajmer.ac.in"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    pte@ecajmer.ac.in
                  </a>
                  <p className="text-gray-500 text-sm mt-1">For all inquiries</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <Phone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-gray-900">+91 9351007194</p>
                    <p className="text-gray-900">+91 8209875515</p>
                    <p className="text-gray-900">+91 9828202003</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Contact Coordinators</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/powertech_club_eca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all group"
                >
                  <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-gray-900 text-sm">@powertech club_eca</span>
                </a>
                <a
                  href="https://instagram.com/CYBERSECURITYCLUB_ECA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all group"
                >
                  <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-gray-900 text-sm">@CYBERSECURITYCLUB_ECA</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="hackathon">Hackathon Registration</option>
                  <option value="membership">Club Membership</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24-48 hours
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-white border border-gray-200 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Campus</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Engineering College Ajmer is located on Jaipur Road, easily accessible by public transport. 
            Our campus houses state-of-the-art facilities including dedicated cyber security labs, 
            modern computing infrastructure, and collaborative learning spaces.
          </p>
          <a
            href="https://www.ecajmer.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            Visit College Website
            <Send className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}