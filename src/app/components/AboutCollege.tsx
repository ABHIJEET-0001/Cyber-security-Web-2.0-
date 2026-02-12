import { motion } from 'motion/react';
import { Building2, Award, Users, Lightbulb, ExternalLink } from 'lucide-react';

export function AboutCollege() {
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
            Engineering College Ajmer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A premier government engineering institution committed to excellence in technical education
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white border border-blue-100 rounded-2xl shadow-sm">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Institution</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Government Engineering College Ajmer (GECA), established in 1997, is a leading Government Institute of Rajasthan affiliated with Bikaner Technical University (BTU). With 29 years of academic excellence, the college offers B.Tech, M.Tech, MCA, and MBA programs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Known for quality education, modern facilities, and a focus on innovation, GECA continues to be a trusted center for technical learning and student development.
              </p>
              <a
                href="https://www.ecajmer.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                Visit Official Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 bg-white border border-purple-100 rounded-xl shadow-sm">
              <Award className="w-10 h-10 text-purple-600 mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Government Recognition</h4>
              <p className="text-gray-600 leading-relaxed">
                As a government engineering institution, we are recognized by AICTE and affiliated with Bikaner Technical University (BTU), ensuring that our curriculum meets national standards.
              </p>
            </div>

            <div className="p-6 bg-white border border-blue-100 rounded-xl shadow-sm">
              <Users className="w-10 h-10 text-blue-600 mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600 leading-relaxed">
                Our faculty comprises experienced educators and industry professionals who bring real-world expertise to the classroom, ensuring students receive both theoretical knowledge and practical insights.
              </p>
            </div>

            <div className="p-6 bg-white border border-indigo-100 rounded-xl shadow-sm">
              <Lightbulb className="w-10 h-10 text-indigo-600 mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation & Research</h4>
              <p className="text-gray-600 leading-relaxed">
                The college actively promotes research, innovation, and entrepreneurship through various technical clubs, laboratories, and industry collaborations, fostering a culture of continuous learning.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Institutional Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Institutional Support for the Club</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure</h4>
              <p className="text-gray-600">
                Dedicated lab spaces, high-speed internet, and modern computing facilities for cyber security research and training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Faculty Mentorship</h4>
              <p className="text-gray-600">
                Experienced faculty coordinators provide academic guidance and support for club activities and events.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Funding & Resources</h4>
              <p className="text-gray-600">
                Financial support for organizing events, workshops, and providing training resources to club members.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}