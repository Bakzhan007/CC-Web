import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const faqItems = [
  {
    question: 'What services do you offer?',
    answer:
      'We provide a full range of construction and development services along the Caspian coast.'
  },
  {
    question: 'How can I start a project with CaspianCoast?',
    answer:
      'Get in touch through our contact form or call our sales office. Our team will guide you through the next steps.'
  },
  {
    question: 'Do you work with residential and commercial clients?',
    answer:
      'Yes, our portfolio includes residential complexes, commercial centers and industrial facilities.'
  },
  {
    question: 'Where are you located?',
    answer: 'Our head office is located at 123 Coastal Avenue, CC 12345.'
  },
  {
    question: 'Can I tour your completed projects?',
    answer:
      'Absolutely. Contact us to arrange a visit to one of our completed developments.'
  },
  {
    question: 'How do I apply for a job?',
    answer: 'Visit the career page to see open positions and submit your application.'
  }
]

function Faq() {
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
                Frequently Asked Questions
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