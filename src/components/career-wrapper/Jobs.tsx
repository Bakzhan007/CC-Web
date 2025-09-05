import { useState } from 'react';
import { ChevronRight, Clock, Briefcase, CheckCircle, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Jobs = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: t.jobCategories.all },
    { id: 'accountant', name: t.jobCategories.accountant },
    { id: 'sales', name: t.jobCategories.sales },
    { id: 'economist', name: t.jobCategories.economist },
  ];

  const jobs = [
    {
      id: 'chiefAccountant',
      title: t.jobs.chiefAccountant.title,
      category: 'accountant',
      location: t.jobLocations.aktau,
      type: t.jobTypes.fullTime,
      description: t.jobs.chiefAccountant.description,
      requirements: t.jobs.chiefAccountant.requirements,
    },
    {
      id: 'salesSpecialist', 
      title: t.jobs.salesSpecialist.title,
      category: 'sales',
      location: t.jobLocations.aktau,
      type: t.jobTypes.fullTime,
      description: t.jobs.salesSpecialist.description,
      requirements: t.jobs.salesSpecialist.requirements,
    },
    {
      id: 'economist',
      title: t.jobs.economist.title,
      category: 'economist',
      location: t.jobLocations.aktau,
      type: t.jobTypes.fullTime,
      description: t.jobs.economist.description,
      requirements: t.jobs.economist.requirements,
    },
  ];

  const filteredJobs =
    selectedCategory === 'all'
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.careerOpenPositionsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.careerOpenPositionsDescription}
          </p>
        </div>

        {/* Category Filter Pills - Modern BI Group Style */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {jobCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-sm ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Jobs Grid - Modern Card Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </span>
                      <span className="flex items-center text-gray-600 bg-gray-100 px-3 py-2 rounded-full">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.type}
                      </span>
                      <span className="flex items-center text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {jobCategories.find(cat => cat.id === job.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    {t.careerRequirementTitle}
                  </h4>
                  <div className="space-y-3">
                    {job.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group/btn shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {t.careerApplyButton}
                  <ChevronRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl shadow-lg p-12 max-w-md mx-auto">
              <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-6" />
              <p className="text-xl text-gray-500 mb-4">No positions available</p>
              <p className="text-gray-400">Check back later for new opportunities</p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Jobs;