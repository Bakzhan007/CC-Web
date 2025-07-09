import { useState } from 'react';
import { ChevronRight, Clock, Briefcase, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Jobs = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const jobCategories = ['All', 'Accountant', 'Sales', 'Economist'];

  const jobs = [
    {
      title: 'Chief accountant',
      category: 'Accountant',
      location: 'Aktau',
      type: 'Full-time',
      description:
        'Join our engineering team to build scalable solutions that impact millions of users worldwide.',
      requirements: ['5+ years experience', 'React/TypeScript', 'Node.js', 'Cloud platforms'],
    },
    {
      title: 'Sales specialist',
      category: 'Sales',
      location: 'Aktau',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences that delight our customers.',
      requirements: ['3+ years experience', 'Figma/Sketch', 'Design systems', 'User research'],
    },
    {
      title: 'Economist',
      category: 'Economist',
      location: 'Aktau',
      type: 'Full-time',
      description:
        'We invite an experienced economist to develop and control the financial and economic direction of our construction projects. The vacancy includes:',
      requirements: [
        'Higher economic or financial education',
        'Experience in a similar position from 5 years',
        'Confident proficiency in 1C: Enterprise 8 and MS Excel',
        'Skills in financial planning, budgeting and building financial models',
        'Experience in working with estimate documentation and cost calculations',
        'Knowledge of project performance evaluation methods (NPV, IRR)',
        'Experience in investment analytics and preparation of presentations for investors',
      ],
    },
  ];

  const filteredJobs =
    selectedCategory === 'All'
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.careerOpenPositionsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.careerOpenPositionsDescription}
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {jobCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition"
            >
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded flex items-center group">
                  {t.careerApplyButton}
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="mt-4 text-gray-700">{job.description}</p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t.careerRequirementTitle}
                </h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;