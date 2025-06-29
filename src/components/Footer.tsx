import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const services = [
    t.servicesList.commercial.title,
    t.servicesList.residential.title,
    t.servicesList.renovation.title,
    t.servicesList.design.title,
    t.servicesList.management.title,
    t.servicesList.sustainable.title
  ];

  const quickLinks = [
    { name: t.footerLinks.aboutUs, href: '#about' },
    { name: t.servicesTitle + ' ' + t.servicesSubtitle, href: '#services' },
    { name: t.projectsTitle + ' ' + t.projectsSubtitle, href: '#projects' },
    { name: t.contact, href: '#contact' },
    { name: t.footerLinks.careers, href: '#' },
    { name: t.footerLinks.news, href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <h3 className="text-2xl font-bold">CaspianCoast</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t.footerDescription}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-slate-300">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-slate-300">info@caspiancoast.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-slate-300">123 Coastal Avenue, CC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.ourServices}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
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
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.stayUpdated}</h4>
            <p className="text-slate-300 mb-4">
              {t.newsletterDescription}
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t.yourEmail}
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  {t.subscribe}
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            {t.allRightsReserved}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t.footerLinks.privacy}
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t.footerLinks.terms}
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              {t.footerLinks.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;