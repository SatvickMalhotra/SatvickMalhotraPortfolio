import React, { useState, useEffect } from 'react';
import { WhatsappIcon } from './icons/Icons';

export const WhatsAppWidget: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const WHATSAPP_LINK = 'https://wa.me/918700612665';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true);
      if (!hasInteracted) {
        setShowPopup(true);
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handlePopupResponse = (shouldOpenChat: boolean) => {
    setShowPopup(false);
    setHasInteracted(true);
    if (shouldOpenChat) {
      window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Persistent WhatsApp Icon */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-8 left-8 z-50 p-3 rounded-full bg-green-500/80 backdrop-blur-sm
                    text-white shadow-lg shadow-green-500/40
                    transition-all duration-500 ease-in-out
                    hover:bg-green-500 hover:scale-110 hover:shadow-green-500/60
                    ${showIcon ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'}`}
        aria-label="Contact on WhatsApp"
        title="Contact on WhatsApp"
      >
        <WhatsappIcon className="w-7 h-7 text-3xl" />
      </a>

      {/* Timed Pop-up */}
      {showPopup && (
        <div
          className="fixed bottom-28 left-8 z-50 w-full max-w-xs sm:max-w-sm p-5
                     bg-[var(--card-background-color)] backdrop-blur-md border border-[var(--border-color)] rounded-xl
                     shadow-2xl shadow-black/40
                     transition-all duration-500 ease-out animate-slide-in-up"
        >
          <style>{`
            @keyframes slide-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-in-up {
              animation: slide-in-up 0.5s forwards;
            }
          `}</style>
          <p className="text-base text-[var(--text-color)] mb-4">
            Interested in collaborating or have a question? Let's connect on WhatsApp!
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => handlePopupResponse(false)}
              className="px-4 py-2 text-sm font-semibold rounded-md text-[var(--text-muted-color)]
                         hover:bg-white/10 transition-colors"
            >
              Maybe Later
            </button>
            <button
              onClick={() => handlePopupResponse(true)}
              className="px-4 py-2 text-sm font-semibold rounded-md bg-green-500 text-white
                         transition-all duration-300
                         hover:bg-green-300 hover:scale-125"
            >
              Chat Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};