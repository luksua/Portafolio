import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Animated Subtle Pastel Shapes */}
      
      {/* Top right subtle lavender arch with gentle floating animation */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[#B8A8C1]/30 opacity-60 animate-float-slow" 
      />
      <div 
        className="absolute top-12 -right-16 w-64 h-64 rounded-full bg-[#F3F1F5] opacity-50 animate-float" 
      />

      {/* Floating purple circle accent */}
      <div 
        className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-[#6B4C7A] opacity-35 animate-float-reverse" 
      />

      {/* Middle subtle rounded rectangular block */}
      <div 
        className="absolute top-1/2 -left-20 w-80 h-96 rounded-[40px] bg-[#F3F1F5]/70 -rotate-12 opacity-60 animate-float" 
      />

      {/* Subtle fine vertical decorative line with gentle pulse */}
      <div 
        className="absolute top-1/3 right-1/4 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#E4E0E7] to-transparent opacity-60 animate-pulse-subtle" 
      />

      {/* Lower right delicate shape */}
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full border border-[#E4E0E7] opacity-50 animate-float-slow" 
      />
      <div 
        className="absolute bottom-32 right-12 w-3.5 h-3.5 rounded-full border border-[#6B4C7A] opacity-40 animate-float-reverse" 
      />

      {/* Bottom left gentle pastel tone */}
      <div 
        className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full bg-[#F3F1F5] opacity-40 blur-2xl animate-pulse-subtle" 
      />
    </div>
  );
};
