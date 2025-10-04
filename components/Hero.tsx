import React from 'react';

const BouncingText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            className="inline-block"
            style={{
              animation: `bounceIn 0.8s ease-out ${i * 0.15}s forwards`,
              opacity: 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};

// New word-by-word animation component to fix spacing issues.
const AnimatedWords: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');
  return (
    <>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            className="inline-block"
            style={{
              animation: `fadeInUp 0.5s ease-out ${i * 0.08}s forwards`,
              opacity: 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </>
  );
};


export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
            0% { opacity: 0; transform: translateY(-40px); }
            60% { opacity: 1; transform: translateY(5px); }
            80% { transform: translateY(-2px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes halo {
            0% { box-shadow: 0 0 60px 10px var(--secondary-color), 0 0 100px 20px var(--primary-color), inset 0 0 80px 10px var(--secondary-color); }
            50% { box-shadow: 0 0 70px 15px var(--primary-color), 0 0 110px 25px var(--secondary-color), inset 0 0 90px 15px var(--primary-color); }
            100% { box-shadow: 0 0 60px 10px var(--secondary-color), 0 0 100px 20px var(--primary-color), inset 0 0 80px 10px var(--secondary-color); }
        }
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, 15px) rotate(-6deg); }
            50% { transform: translate(15px, -10px) rotate(6deg); }
            75% { transform: translate(5px, 10px) rotate(-3deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
        }
        /* New animation for the main heading to ensure visibility */
        @keyframes fadeInH1 {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <img
            src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Generated%20Image%20September%2008%2C%202025%20-%205_25PM.png"
            alt="Satvick Malhotra"
            className="w-48 h-48 rounded-full object-cover border-4 border-[var(--border-color)]
                       animate-[halo_8s_ease-in-out_infinite,float_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]"
          style={{ 
            filter: 'drop-shadow(0 0 8px var(--primary-color))',
            animation: 'fadeInH1 1s ease-out 0.3s forwards',
            opacity: 0,
          }}
        >
          Satvick Malhotra
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--text-muted-color)]"
          style={{textShadow: '0 2px 4px rgba(0,0,0,0.7)'}}
        >
          <BouncingText text="Architecting the Future of Data & AI." className="block mb-2 font-semibold" />
          <AnimatedWords text="I am a Data Engineer and AI Product Manager passionate about building intelligent systems that solve real-world problems." />
        </p>
      </div>
    </section>
  );
};