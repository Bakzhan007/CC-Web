import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Home,
  ClipboardList,
  FileText,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';

function AfterPurchase() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Finalize Documents',
      desc: 'Review and sign all ownership papers to complete the transaction.'
    },
    {
      icon: Home,
      title: 'Inspect Your Property',
      desc: 'Walk through your new space and note any issues that need attention.'
    },
    {
      icon: FileText,
      title: 'Plan Renovations',
      desc: 'Connect with our trusted partners if you wish to customize your home.'
    },
    {
      icon: CheckCircle,
      title: 'Settle In',
      desc: 'Move in and enjoy your new property with peace of mind.'
    }
  ];

  const contacts = [
    { icon: Phone, label: '360', sub: 'Call Center' },
    { icon: Mail, label: 'support@cc.kz', sub: 'Customer Support' }
  ];
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-[104px] sm:pt-[112px] lg:pt-[128px]">
        {/* Hero */}
        <section className="relative">
          <div className="h-60 sm:h-80 md:h-[24rem] lg:h-[28rem] overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="After purchase banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
                What to do after purchase
              </h1>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
              Your next steps
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow p-6 text-center flex flex-col items-center"
                >
                  <step.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts */}
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
      </main>
      <Footer />
    </div>
  );
}

export default AfterPurchase;