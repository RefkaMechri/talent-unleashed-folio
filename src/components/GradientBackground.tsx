export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient mesh - more intense */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'var(--gradient-mesh)',
          animation: 'gradientShift 25s ease infinite',
        }}
      />
      
      {/* Multiple floating orbs with different colors */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl animate-float opacity-40"
           style={{ 
             background: 'radial-gradient(circle, hsl(210 100% 56% / 0.4) 0%, transparent 70%)',
             animationDelay: '0s', 
             animationDuration: '10s' 
           }} />
      <div className="absolute bottom-20 right-20 w-[450px] h-[450px] rounded-full blur-3xl animate-float opacity-40" 
           style={{ 
             background: 'radial-gradient(circle, hsl(280 100% 70% / 0.4) 0%, transparent 70%)',
             animationDelay: '3s', 
             animationDuration: '12s' 
           }} />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl animate-float opacity-35" 
           style={{ 
             background: 'radial-gradient(circle, hsl(180 100% 50% / 0.35) 0%, transparent 70%)',
             animationDelay: '6s', 
             animationDuration: '14s' 
           }} />
      <div className="absolute bottom-1/3 left-1/3 w-[380px] h-[380px] rounded-full blur-3xl animate-float opacity-35" 
           style={{ 
             background: 'radial-gradient(circle, hsl(330 100% 65% / 0.35) 0%, transparent 70%)',
             animationDelay: '9s', 
             animationDuration: '16s' 
           }} />
      <div className="absolute top-1/4 left-1/2 w-[350px] h-[350px] rounded-full blur-3xl animate-float opacity-30" 
           style={{ 
             background: 'radial-gradient(circle, hsl(210 100% 56% / 0.3) 0%, transparent 70%)',
             animationDelay: '12s', 
             animationDuration: '18s' 
           }} />
      
      {/* Grid overlay for tech aesthetic */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 56% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 56% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Scan line effect - subtle */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--neon-cyan)) 2px, hsl(var(--neon-cyan)) 4px)',
        }}
      />
    </div>
  );
};
