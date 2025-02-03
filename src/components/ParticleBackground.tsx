import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[#1a1a2e]" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-particle-flow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            backgroundColor: Math.random() > 0.5 ? '#00ff9f' : '#ff00ff',
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;