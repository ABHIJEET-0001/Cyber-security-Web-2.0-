import { motion } from 'motion/react';
import { Award, Handshake, Star, Building2 } from 'lucide-react';

export function Sponsors() {
  const sponsorshipTiers = [
    {
      tier: 'Platinum',
      amount: '₹50,000+',
      benefits: [
        'Logo on all event materials and website',
        'Dedicated booth at hackathon venue',
        'Speaking opportunity during event',
        'Direct access to talent pool',
        'Social media recognition',
        'Certificate of partnership',
      ],
      color: 'from-gray-600 to-gray-800',
      icon: Star,
    },
    {
      tier: 'Gold',
      amount: '₹25,000+',
      benefits: [
        'Logo on event materials and website',
        'Booth space at venue',
        'Brand mention during event',
        'Resume database access',
        'Social media features',
      ],
      color: 'from-yellow-500 to-orange-500',
      icon: Award,
    },
    {
      tier: 'Silver',
      amount: '₹10,000+',
      benefits: [
        'Logo on website and banners',
        'Brand mention on social media',
        'Access to participant database',
        'Certificate of sponsorship',
      ],
      color: 'from-gray-400 to-gray-500',
      icon: Handshake,
    },
  ];

  const partnerCategories = [
    {
      category: 'Technology Partners',
      description: 'Companies providing tools, platforms, and technical resources',
      examples: ['Cloud service providers', 'Security tool vendors', 'Development platforms'],
    },
    {
      category: 'Educational Partners',
      description: 'Training institutes and certification bodies',
      examples: ['Online learning platforms', 'Certification providers', 'Educational institutions'],
    },
    {
      category: 'Industry Partners',
      description: 'Cyber security firms and tech companies',
      examples: ['Security consulting firms', 'Software companies', 'Startups in security domain'],
    },
    {
      category: 'Media Partners',
      description: 'Publications and platforms for event publicity',
      examples: ['Tech blogs', 'Student networks', 'Social media influencers'],
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
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in shaping the future of cyber security education
          </p>
        </motion.div>

        {/* Why Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 bg-white border border-blue-100 rounded-2xl shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Partner With Us?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Talent Pipeline</h4>
              <p className="text-gray-600">
                Direct access to 500+ passionate cyber security students and upcoming professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-50 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Brand Visibility</h4>
              <p className="text-gray-600">
                Enhanced brand presence among tech-savvy students and academic community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">CSR Impact</h4>
              <p className="text-gray-600">
                Contribute to skill development and support cyber security education initiatives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sponsorship Tiers</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-center mb-6">
                  <tier.icon className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tier.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h4>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}>
                    {tier.amount}
                  </div>
                  <p className="text-gray-500 text-sm">and above</p>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-blue-600">Benefits Include:</h5>
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Partnership Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerCategories.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all shadow-sm"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.category}</h4>
                <p className="text-gray-500 mb-4">{partner.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-blue-600">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {partner.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs text-blue-700"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Partners Section (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-12 bg-white border border-gray-200 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Sponsors</h3>
          <p className="text-gray-600 mb-8">
            We're actively seeking partnerships with organizations committed to cyber security education.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-30">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 font-bold">Partner Logo</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Sponsoring?</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Let's collaborate to create impactful learning experiences and shape the future of cyber security. Download our sponsorship brochure or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20">
              Download Brochure
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-lg font-medium transition-all">
              Contact for Partnership
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}