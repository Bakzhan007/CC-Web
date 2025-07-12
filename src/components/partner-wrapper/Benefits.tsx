import {
  Building2,
  DollarSign,
  GraduationCap,
  Handshake,
  CheckCircle,
  ClipboardList
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  const icons = [
    Building2,
    DollarSign,
    GraduationCap,
    CheckCircle,
    ClipboardList,
    Handshake
  ];
  const benefits = t.partnerBenefits.map((b, idx) => ({
    icon: icons[idx],
    title: b.title,
    description: b.description
  }));
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center mb-8">
          {t.partnerBenefitsTitle}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="text-center px-4 py-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <b.icon className="w-8 h-8 mx-auto text-blue-600 mb-4" />
              <h3 className="text-lg font-medium mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}