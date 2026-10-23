import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  // Заявка уходит менеджеру в WhatsApp (как в ContactModal) — бэкенда для форм нет
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? '').trim();
    const name = [get('firstName'), get('lastName')].filter(Boolean).join(' ');
    const lines = [`Здравствуйте! Меня зовут ${name}.`];
    if (get('projectType')) lines.push(`Тип проекта: ${get('projectType')}`);
    if (get('message')) lines.push(get('message'));
    lines.push('', 'Контакты:', `Телефон: ${get('phone')}`);
    if (get('email')) lines.push(`Email: ${get('email')}`);
    const url = `https://api.whatsapp.com/send/?phone=77006363631&text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    form.reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t.phone,
      details: ['+7 (700) 636-36-31'],
      action: 'tel:+77006363631'
    },
    {
      icon: Mail,
      title: t.email,
      details: ['caspiancoast@list.ru'],
      action: 'mailto:caspiancoast@list.ru'
    },
    {
      icon: MapPin,
      title: t.address,
      details: ['Business Center Nesibek-Nur, 16 - 22/1',],
      action: '#'
    },
    {
      icon: Clock,
      title: t.businessHours,
      details: ['Mon-Fri: 9:00 AM - 6:00 PM'],
      action: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.contactTitle}
            <span className="text-brand-400"> {t.contactSubtitle}</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">{t.contactInformation}</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-300 mb-1">
                        {info.action.startsWith('tel:') || info.action.startsWith('mailto:') ? (
                          <a href={info.action} className="hover:text-brand-400 transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-slate-800 rounded-xl p-8 text-center">
              <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{t.visitOffice}</h4>
              <p className="text-slate-300">
                {t.visitOfficeDescription}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.sendMessage}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.firstName}
                  </label>
                  <input
                    id="contact-firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    {t.lastName}
                  </label>
                  <input
                    id="contact-lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.phone}
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+\-\(\)\s]{10,20}"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  placeholder="+7 (707) 0123-45-67"
                />
              </div>

              <div>
                <label htmlFor="contact-projectType" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.projectType}
                </label>
                <select id="contact-projectType" name="projectType" defaultValue="" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors">
                  <option value="" disabled>{t.selectProjectType}</option>
                  <option>{t.projectTypes.commercial}</option>
                  <option>{t.projectTypes.residential}</option>
                  <option>{t.projectTypes.renovation}</option>
                  <option>{t.projectTypes.industrial}</option>
                  <option>{t.projectTypes.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 text-white py-4 rounded-lg font-semibold hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{t.sendMessage}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;