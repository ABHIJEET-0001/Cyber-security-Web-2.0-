import { motion } from 'motion/react';
import { Shield, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-100/50 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border border-blue-100 rounded-full shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-800 font-medium">Official Technical Club</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 tracking-tight">
              Cyber Security Club
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-blue-600 tracking-tight">
              & PowerTech EE Club
            </h2>
            <div className="text-xl sm:text-2xl text-gray-600 mb-2 font-light">
              Engineering College Ajmer
            </div>
            <div className="text-lg sm:text-xl text-gray-500">
              Government Engineering Institution
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Defending the Digital Future
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => onNavigate('hackathon')}
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              Current Hackathon
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onNavigate('hackathon')}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg font-medium transition-all hover:shadow-md"
            >
              Register / Join Club
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all group">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-500">Active Members</div>
            </div>
            
            <div className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all group">
              <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-500">Events Conducted</div>
            </div>
            
            <div className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all group">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-500">Participants Trained</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}