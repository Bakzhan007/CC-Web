import { useLanguage } from '../../contexts/LanguageContext';

export default function Cta() {
  const { t } = useLanguage();
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
          {t.partnerCtaTitle}
        </h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          {t.partnerCtaDescription}
        </p>
        <a
          href="mailto:info@caspiancoast.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t.partnerCtaButton}
        </a>
      </div>
    </section>
  );
}