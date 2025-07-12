import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Maintenance() {
    const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100">

      {/* Maintenance text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {t.maintenanceTitle}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl">
        {t.maintenanceMessage}      
      </p>
            {/* Video animation */}
    <DotLottieReact
      src="https://lottie.host/3b2d0ef5-3984-4d79-b3c8-8bc9f6f4c5f1/4rooKvFRq2.lottie"
      loop
      autoplay
      style={{ width: 300, height: 300 }}
    />
    </div>
  );
}

export default Maintenance;
