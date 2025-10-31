import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { CloseIcon } from './icons/Icons';

interface BusinessCardModalProps {
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const QR_CODE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/SatvickMalhotra';

  return (
    <>
      <style>{`
          @keyframes scale-in-card {
              from { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
              to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }
          .animate-scale-in-card {
              animation: scale-in-card 0.2s forwards ease-out;
          }
          @keyframes fade-in-backdrop {
              from { opacity: 0; }
              to { opacity: 1; }
          }
          .animate-fade-in-backdrop {
              animation: fade-in-backdrop 0.2s forwards ease-out;
          }
      `}</style>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in-backdrop"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="fixed top-1/2 left-1/2 bg-[var(--card-background-color)] border border-[var(--border-color)] rounded-2xl shadow-2xl shadow-[var(--primary-color)]/20
                     w-[90vw] max-w-sm p-8 flex flex-col items-center text-center
                     animate-scale-in-card"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-[var(--text-muted-color)] hover:text-white transition-colors z-10 p-1 bg-black/20 rounded-full"
            aria-label="Close modal"
          >
            <CloseIcon className="w-6 h-6 text-2xl" />
          </button>
          
          <img 
            src={QR_CODE_URL} 
            alt="QR Code for Portfolio" 
            className="w-48 h-48 rounded-lg border-4 border-[var(--border-color)] bg-white p-2"
          />

          <h2 className="text-3xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
            Satvick Malhotra
          </h2>
          <p className="text-md text-[var(--text-muted-color)] mt-1">
            AI Product Manager & Data Engineer
          </p>
          
          <div className="flex justify-center items-center space-x-6 mt-8">
            {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="text-[var(--text-muted-color)] hover:text-white transition-colors duration-300 group relative flex items-center h-12">
                    <link.icon className="w-8 h-8 text-3xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};