import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo/logo-light-hor.png';

const Footer = () => {
  const { t } = useLanguage();

  const services = [
    t.servicesList.commercial.title,
    t.servicesList.residential.title,
    t.servicesList.renovation.title,
    t.servicesList.design.title,
    t.servicesList.management.title,
    t.servicesList.sustainable.title,
  ];

  const quickLinks = [
    { name: t.footerLinks.sale, href: '/sale' },
    { name: `${t.servicesTitle} ${t.servicesSubtitle}`, href: '#services' },
    { name: `${t.projectsTitle} ${t.projectsSubtitle}`, href: '/projects' },
    { name: t.contact, href: '#contact' },
    { name: t.footerLinks.forPartner, href: '/partner' },
    { name: t.footerLinks.news, href: '/news' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="logo flex items-center space-x-2 mb-6">
              <img
                src={logoLight}
                alt="CaspianCoast Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
              />
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">{t.footerDescription}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-slate-300">+7 (700) 636-36-31</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-slate-300">caspiancoast@list.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-slate-300">Business Center Nesibek-Nur, 16 - 22/1</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.homePage}</h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, idx) => (
                <li key={idx}>
                  <Link to={href} className="text-slate-300 hover:text-blue-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.stayUpdated}</h4>
            <p className="text-slate-300 mb-4">{t.newsletterDescription}</p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">{t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
