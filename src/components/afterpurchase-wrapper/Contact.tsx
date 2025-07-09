import React from 'react';
import { Phone, Mail } from 'lucide-react';

const contacts = [
  { icon: Phone, label: '360', sub: 'Call Center' },
  { icon: Mail, label: 'support@cc.kz', sub: 'Customer Support' }
];

const Contact: React.FC = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
        Need help?
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        {contacts.map((c, i) => (
          <div key={i} className="flex items-center space-x-4">
            <c.icon className="w-8 h-8 text-blue-600" />
            <div>
              <div className="font-medium text-slate-900">{c.label}</div>
              <div className="text-slate-700 text-sm">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;