import React from 'react';
import { Home, ClipboardList, FileText, CheckCircle } from 'lucide-react';

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

const Steps: React.FC = () => (
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
);

export default Steps;