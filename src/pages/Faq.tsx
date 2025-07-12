import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'

function Faq() {
  const { t } = useLanguage()
  const faqItems = t.faqItems
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        <section className="relative">
          <div className="h-60 sm:h-80 md:h-[24rem] lg:h-[28rem] overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/2098628/pexels-photo-2098628.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="FAQ banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                {t.faqTitle}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-slate-200">
                <button
                  className="w-full flex items-center justify-between py-4 text-left"
                  onClick={() => toggle(index)}
                >
                  <span className="font-medium text-slate-900">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <p className="pb-4 text-slate-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Faq;