import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Career: React.FC = () => {
  const jobs = [
    { title: 'Project Manager', location: 'Astana', type: 'Full-time' },
    { title: 'Architect', location: 'Almaty', type: 'Full-time' },
    { title: 'Civil Engineer', location: 'Atyrau', type: 'Contract' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-[104px] sm:pt-[112px] lg:pt-[128px] flex-1">
        {/* Hero */}
        <section className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2098628/pexels-photo-2098628.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Career at CaspianCoast"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            Careers at CaspianCoast
          </h1>
        </section>

        {/* Jobs */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Current Openings</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                  <p className="text-slate-600 mb-1">{job.location}</p>
                  <p className="text-slate-500 mb-4">{job.type}</p>
                  <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Can't find a suitable position?</h2>
            <p className="mb-6">
              Send your resume to
              <a href="mailto:hr@caspiancoast.com" className="underline ml-1">hr@caspiancoast.com</a>
              .
            </p>
            <a
              href="mailto:hr@caspiancoast.com"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold"
            >
              Send Resume
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;