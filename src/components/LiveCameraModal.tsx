import React, { useEffect, useState } from 'react';
import { X, Video } from 'lucide-react';
import { useModal } from '../hooks/useModal';
import { useLanguage } from '../contexts/LanguageContext';
import { LIVE_CAMERA_ENABLED } from '../config';

interface LiveCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

interface Camera {
  id: string;
  label: string;
}

// Камеры прямого эфира (ipglaz.kz). Достаточно указать dev-идентификатор —
// остальные параметры одинаковые для всех камер.
const CAMERAS: Camera[] = [
  { id: '6f0f61e1dbcb47848199ec04cd6250e2', label: 'Камера 1' },
  { id: '79bc1515743d41e8a5795e0537f4dfde', label: 'Камера 2' },
];

// autoplay=1 — сразу запускаем поток, т.к. пользователь открыл окно осознанно.
const cameraSrc = (dev: string) =>
  `https://ipglaz.kz/service/api/iframe.php?iframe_player=1&dev=${dev}&autoplay=1&archive=1`;

const COMING_SOON: Record<string, { title: string; text: string; close: string }> = {
  kz: {
    title: 'Тікелей эфир жақында іске қосылады',
    text: 'Құрылыс алаңындағы камералар қазір бапталуда. Жақын арада құрылыс барысын осы жерден онлайн режимде бақылай аласыз.',
    close: 'Түсінікті',
  },
  ru: {
    title: 'Прямой эфир скоро будет доступен',
    text: 'Сейчас мы настраиваем камеры на стройплощадке. Совсем скоро здесь можно будет наблюдать за ходом строительства в режиме онлайн.',
    close: 'Понятно',
  },
  en: {
    title: 'Live stream coming soon',
    text: 'We are setting up the cameras on the construction site. Soon you will be able to watch the construction progress here online.',
    close: 'Got it',
  },
};

const LiveCameraModal: React.FC<LiveCameraModalProps> = ({ isOpen, onClose, title = 'Тікелей камера' }) => {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(CAMERAS[0].id);

  const ref = useModal(isOpen, onClose);

  // При открытии всегда показываем первую камеру
  useEffect(() => {
    if (isOpen) setActiveId(CAMERAS[0].id);
  }, [isOpen]);

  if (!isOpen) return null;

  if (!LIVE_CAMERA_ENABLED) {
    const text = COMING_SOON[language] || COMING_SOON.ru;
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby="live-soon-title"
          tabIndex={-1}
          className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl outline-none"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-slate-100"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Video className="h-8 w-8" />
          </div>
          <h2 id="live-soon-title" className="mb-3 text-xl font-bold text-slate-900">{text.title}</h2>
          <p className="mb-6 leading-relaxed text-slate-600">{text.text}</p>
          <button
            onClick={onClose}
            className="rounded-xl bg-brand-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-brand-700"
          >
            {text.close}
          </button>
        </div>
      </div>
    );
  }

  const activeCamera = CAMERAS.find((c) => c.id === activeId) ?? CAMERAS[0];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-slate-100"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Переключатель камер */}
        {CAMERAS.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-slate-100 px-5 py-3">
            {CAMERAS.map((camera) => {
              const isActive = camera.id === activeCamera.id;
              return (
                <button
                  key={camera.id}
                  type="button"
                  onClick={() => setActiveId(camera.id)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-red-300 bg-red-50 text-red-600'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {camera.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Видео (4:3, как у камеры 800x600) */}
        <div
          className="relative mx-auto w-full bg-black"
          style={{ aspectRatio: '4 / 3', maxWidth: 'calc((100dvh - 12rem) * 4 / 3)' }}
        >
          <iframe
            key={activeCamera.id}
            src={cameraSrc(activeCamera.id)}
            title={`${title} — ${activeCamera.label}`}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            seamless
            allowFullScreen
          >
            Ваш браузер не поддерживает фреймы!
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default LiveCameraModal;
