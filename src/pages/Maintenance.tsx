import { useLanguage } from '../contexts/LanguageContext';
import { DotLottieReact, setWasmUrl } from '@lottiefiles/dotlottie-react';
// WASM-плеер и анимация лежат у нас, а не грузятся с unpkg/jsdelivr/lottie.host во время работы
import wasmUrl from '@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm?url';
import animationUrl from '../assets/lottie/maintenance.lottie?url';

setWasmUrl(wasmUrl);


function Maintenance() {
    const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-slate-100">

      {/* Maintenance text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {t.maintenanceTitle}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl">
        {t.maintenanceMessage}      
      </p>
            {/* Video animation */}
    <DotLottieReact
      src={animationUrl}
      loop
      autoplay
      style={{ width: 300, height: 300 }}
    />
    </div>
  );
}

export default Maintenance;
