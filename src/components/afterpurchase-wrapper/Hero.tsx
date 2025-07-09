import React from 'react';

const Hero: React.FC = () => (
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
);

export default Hero;