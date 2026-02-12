import { motion } from 'motion/react';
import { Globe, Network, Bug, Search, Brain, Shield, AlertCircle } from 'lucide-react';

export function ProblemStatements() {
  const problemStatements = [
    {
      id: 'PS-01',
      category: 'Web Security',
      icon: Globe,
      title: 'E-Commerce Security Platform',
      difficulty: 'Hard',
      difficultyColor: 'red',
      description: 'Design and implement a secure e-commerce platform that addresses common web vulnerabilities including SQL injection, XSS, CSRF, and insecure authentication mechanisms.',
      objectives: [
        'Identify and fix at least 10 OWASP Top 10 vulnerabilities',
        'Implement secure session management and authentication',
        'Create a comprehensive security testing report',
        'Develop secure payment integration mechanisms',
      ],
      skills: ['Web Security', 'Penetration Testing', 'Secure Coding', 'OWASP'],
    },
    {
      id: 'PS-02',
      category: 'Network Security',
      icon: Network,
      title: 'Intrusion Detection System',
      difficulty: 'Medium',
      difficultyColor: 'yellow',
      description: 'Build a network intrusion detection system (NIDS) that can identify suspicious network traffic patterns and alert administrators in real-time.',
      objectives: [
        'Analyze network packets and identify anomalies',
        'Detect common attack patterns (DDoS, port scanning, etc.)',
        'Create a dashboard for real-time monitoring',
        'Generate automated alerts and reports',
      ],
      skills: ['Network Analysis', 'Packet Sniffing', 'Pattern Recognition', 'Python'],
    },
    {
      id: 'PS-03',
      category: 'Malware Analysis',
      icon: Bug,
      title: 'Ransomware Behavior Analysis',
      difficulty: 'Hard',
      difficultyColor: 'red',
      description: 'Analyze a sample ransomware (in a sandbox environment) to understand its behavior, encryption mechanisms, and develop detection and prevention strategies.',
      objectives: [
        'Perform static and dynamic malware analysis',
        'Reverse engineer encryption methods used',
        'Create YARA rules for detection',
        'Develop mitigation strategies and recovery procedures',
      ],
      skills: ['Reverse Engineering', 'Malware Analysis', 'Assembly', 'Sandboxing'],
    },
    {
      id: 'PS-04',
      category: 'Digital Forensics',
      icon: Search,
      title: 'Cyber Crime Investigation',
      difficulty: 'Medium',
      difficultyColor: 'yellow',
      description: 'Investigate a simulated cyber crime scenario by analyzing disk images, network logs, and memory dumps to identify the attacker and reconstruct the attack timeline.',
      objectives: [
        'Extract and analyze digital evidence from disk images',
        'Reconstruct the attack timeline using log analysis',
        'Identify attacker indicators of compromise (IOCs)',
        'Prepare a detailed forensic report with findings',
      ],
      skills: ['Digital Forensics', 'Log Analysis', 'Evidence Collection', 'Forensic Tools'],
    },
    {
      id: 'PS-05',
      category: 'AI & Cyber Defense',
      icon: Brain,
      title: 'ML-Powered Threat Detection',
      difficulty: 'Hard',
      difficultyColor: 'red',
      description: 'Develop a machine learning model that can detect and classify cyber threats by analyzing system logs, network traffic, or user behavior patterns.',
      objectives: [
        'Train ML models on labeled security datasets',
        'Achieve high accuracy in threat classification',
        'Minimize false positives and false negatives',
        'Deploy the model with real-time prediction capabilities',
      ],
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'Threat Intelligence'],
    },
    {
      id: 'PS-06',
      category: 'Security Operations',
      icon: Shield,
      title: 'Automated Vulnerability Scanner',
      difficulty: 'Medium',
      difficultyColor: 'yellow',
      description: 'Create an automated vulnerability scanning tool that can identify security weaknesses in web applications, networks, or systems and provide remediation recommendations.',
      objectives: [
        'Scan for common vulnerabilities automatically',
        'Prioritize vulnerabilities based on severity (CVSS)',
        'Generate comprehensive security reports',
        'Suggest remediation steps for identified issues',
      ],
      skills: ['Vulnerability Assessment', 'Scripting', 'Security Tools', 'Automation'],
    },
  ];

  const getDifficultyColor = (color: string) => {
    const colors = {
      red: 'text-red-700 border-red-200 bg-red-50',
      yellow: 'text-yellow-700 border-yellow-200 bg-yellow-50',
      green: 'text-green-700 border-green-200 bg-green-50',
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
            Problem Statements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from diverse security challenges across multiple domains
          </p>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">How to Choose</h4>
            <p className="text-gray-600">
              Teams can select any one problem statement to work on during the hackathon. Choose based on your team's strengths and interests. All problem statements are designed to test practical security skills and innovative thinking.
            </p>
          </div>
        </motion.div>

        {/* Problem Statements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problemStatements.map((ps, index) => (
            <motion.div
              key={ps.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <ps.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{ps.id}</div>
                    <div className="text-sm text-blue-600 font-medium">{ps.category}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(ps.difficultyColor)}`}>
                  {ps.difficulty}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{ps.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{ps.description}</p>

              {/* Objectives */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-600 mb-2">Key Objectives:</h4>
                <ul className="space-y-1">
                  {ps.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-purple-600 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {ps.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-50 border border-purple-100 rounded text-xs text-purple-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white border border-blue-100 rounded-xl text-center shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Resources Provided</h4>
            <p className="text-gray-600 text-sm">
              Sample datasets, vulnerable applications, documentation, and starter code will be provided for each problem statement.
            </p>
          </div>

          <div className="p-6 bg-white border border-indigo-100 rounded-xl text-center shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Mentorship Available</h4>
            <p className="text-gray-600 text-sm">
              Industry experts and faculty mentors will be available throughout the event to guide and assist teams.
            </p>
          </div>

          <div className="p-6 bg-white border border-purple-100 rounded-xl text-center shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Submission Format</h4>
            <p className="text-gray-600 text-sm">
              Submit source code, documentation, demo video, and a presentation explaining your solution and approach.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}