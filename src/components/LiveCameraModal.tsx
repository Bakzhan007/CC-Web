import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LiveCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

// Ссылка на прямой эфир камеры (ipglaz.kz). autoplay=1 — сразу запускаем поток,
// т.к. пользователь открыл окно осознанно.
const CAMERA_SRC =
  'https://ipglaz.kz/service/api/iframe.php?iframe_player=1&dev=6f0f61e1dbcb47848199ec04cd6250e2&autoplay=1&archive=1';

const LiveCameraModal: React.FC<LiveCameraModalProps> = ({ isOpen, onClose, title = 'Тікелей камера' }) => {
  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
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

        {/* Видео (4:3, как у камеры 800x600) */}
        <div className="relative w-full bg-black" style={{ aspectRatio: '4 / 3' }}>
          <iframe
            src={CAMERA_SRC}
            title={title}
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
