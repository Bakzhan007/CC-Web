import React, { useState } from 'react';
import { X, Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title = "Связаться с нами" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Здравствуйте! Меня зовут ${formData.name}.
    
${formData.message}

Контакты:
Телефон: ${formData.phone}
Email: ${formData.email}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=77006363631&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  const handlePhoneCall = () => {
    window.open('tel:+77006363631', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:caspiancoast@list.ru?subject=Запрос о услугах', '_self');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Quick Contact Options */}
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">Быстрая связь</h3>
          <div className="flex gap-3">
            <button
              onClick={handlePhoneCall}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Позвонить</span>
            </button>
            <button
              onClick={handleEmailClick}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Или оставьте сообщение</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Имя *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Телефон *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Сообщение *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                placeholder="Расскажите о ваших потребностях..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-brand-600 to-brand-400 hover:from-brand-700 hover:to-brand-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Отправить в WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;