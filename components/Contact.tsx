import React, { useState, useEffect } from 'react';
import { CloseIcon } from './icons/Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-color)]">{children}</h2>
);

export const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="contact" className="py-20">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[var(--text-muted-color)] mb-12">
            Have a project in mind, want to collaborate, or just say hi? Let's connect.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-lg
                       bg-[var(--card-background-color)]/80 border-2 border-[var(--secondary-color)]/50 text-[var(--secondary-color)] rounded-lg
                       backdrop-blur-sm transition-all duration-300 ease-in-out
                       hover:bg-[var(--secondary-color)]/20 hover:text-white hover:border-[var(--secondary-color)]
                       hover:shadow-lg hover:shadow-[var(--secondary-color)]/30 transform hover:-translate-y-1"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {isModalOpen && (
        <>
          <style>{`
              @keyframes scale-in {
                  from { transform: translate(-50%, -50%) scale(0.95); opacity: 0; }
                  to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              }
              .animate-scale-in {
                  animation: scale-in 0.2s forwards ease-out;
              }
              @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
              }
              .animate-fade-in {
                  animation: fade-in 0.2s forwards ease-out;
              }
          `}</style>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsModalOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="fixed top-1/2 left-1/2 bg-[var(--card-background-color)] border border-[var(--border-color)] rounded-2xl shadow-2xl shadow-[var(--primary-color)]/20
                         w-[90vw] max-w-3xl h-[90vh] max-h-[850px] p-4 pt-12 flex flex-col
                         animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-[var(--text-muted-color)] hover:text-white transition-colors z-10 p-1 bg-black/20 rounded-full"
                aria-label="Close contact form"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
              <div className="flex-grow h-full w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_sYnUINF5UcBTN6Js3oXwzsJOzTl8H3HrpjE27uyUqh_etw/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
