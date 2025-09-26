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

const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  let charCount = 0;
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => {
        const wordSpan = (
          <span key={i} className="inline-block">
            {word.split('').map((char, j) => {
              const style = {
                animation: `fadeInUp 0.5s ease-out ${charCount * 0.01}s forwards`,
                opacity: 0,
                display: 'inline-block',
              };
              charCount++;
              return <span key={j} style={style}>{char}</span>;
            })}
          </span>
        );
        if (i < words.length - 1) {
          charCount++; // for the space
          return <>{wordSpan} </>;
        }
        return wordSpan;
      })}
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
            0% { opacity: 0; transform: translateY(-40px); }
            60% { opacity: 1; transform: translateY(5px); }
            80% { transform: translateY(-2px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes halo {
            0% { box-shadow: 0 0 60px 10px #4a00e0, 0 0 100px 20px #007cf0, inset 0 0 80px 10px #4a00e0; }
            50% { box-shadow: 0 0 70px 15px #007cf0, 0 0 110px 25px #ff00c3, inset 0 0 90px 15px #007cf0; }
            100% { box-shadow: 0 0 60px 10px #4a00e0, 0 0 100px 20px #007cf0, inset 0 0 80px 10px #4a00e0; }
        }
        @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-10px, 15px) rotate(-6deg); }
            50% { transform: translate(15px, -10px) rotate(6deg); }
            75% { transform: translate(5px, 10px) rotate(-3deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <img
            src="https://raw.githubusercontent.com/SatvickMalhotra/My-portfolio/main/Pics/Generated%20Image%20September%2008%2C%202025%20-%205_25PM.png"
            alt="Satvick Malhotra"
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-800/80
                       animate-[halo_8s_ease-in-out_infinite,float_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          <AnimatedText text="Satvick Malhotra" />
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
          style={{textShadow: '0 2px 4px rgba(0,0,0,0.7)'}}
        >
          <BouncingText text="Architecting the Future of Data & AI." className="block mb-2 font-semibold" />
          <AnimatedText text="I am a Data Engineer and AI Product Manager passionate about building intelligent systems that solve real-world problems." />
        </p>
      </div>
    </section>
  );
};