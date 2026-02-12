import { Shield, Mail, MapPin, Phone, Instagram, Linkedin, Github, Twitter, ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { label: 'About Club', id: 'about-club' },
    { label: 'Current Hackathon', id: 'current-hackathon' },
    { label: 'Problem Statements', id: 'problem-statements' },
    { label: 'Team', id: 'team' },
    { label: 'FAQ', id: 'faq' },
  ];

  const resources = [
    { label: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
    { label: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
    { label: 'CVE Database', url: 'https://cve.mitre.org/' },
    { label: 'Security Tools', url: '#' },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-500" />
              <div>
                <div className="text-lg font-bold text-white">Cyber Security Club</div>
                <div className="text-xs text-gray-400">Engineering College Ajmer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building the next generation of cyber security professionals through hands-on learning, 
              competitive events, and industry collaboration.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/CYBERSECURITYCLUB_ECA" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-blue-900/50 rounded-lg transition-all">
                <Instagram className="w-4 h-4 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-900/50 rounded-lg transition-all">
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-900/50 rounded-lg transition-all">
                <Github className="w-4 h-4 text-gray-400 hover:text-blue-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 hover:bg-blue-900/50 rounded-lg transition-all">
                <Twitter className="w-4 h-4 text-gray-400 hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors inline-flex items-center gap-1"
                  >
                    {resource.label}
                    {resource.url !== '#' && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Engineering College Ajmer<br />
                  Jaipur Road, Ajmer, RJ 305001
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:pte@ecajmer.ac.in" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  pte@ecajmer.ac.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+919351007194" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  +91 9351007194
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} Cyber Security Club & PowerTech EE Club, Engineering College Ajmer.
              </p>
            </div>

            {/* Made with Love */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-sm flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by the Club Team
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-800/50 border border-gray-800 rounded-lg">
            <p className="text-gray-500 text-xs text-center leading-relaxed">
              <span className="font-semibold text-gray-400">Disclaimer:</span> This is an official student-run technical club 
              operating under the aegis of Engineering College Ajmer. All events and activities are conducted with 
              institutional approval and faculty supervision. For official college information, please visit{' '}
              <a href="https://www.ecajmer.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                www.ecajmer.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}