export default function Cta() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
          Хотите стать партнером?
        </h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Свяжитесь с нами по телефону +7 (700) 636-36-31 или отправьте письмо на
          info@caspiancoast.com, и мы обсудим детали сотрудничества.
        </p>
        <a
          href="mailto:info@caspiancoast.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Написать письмо
        </a>
      </div>
    </section>
  );
}