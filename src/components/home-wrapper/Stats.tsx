import { useLanguage } from '../../contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();
  const stats = [
    { label: t.projectsCompleted, value: '50+' },
    { label: t.yearsExperience, value: '8+' },
    { label: t.awardsWon, value: '15' }
  ];

  return (
    <section id="stats" className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-6xl font-bold mb-2">{stat.value}</p>
              <p className="text-lg md:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;