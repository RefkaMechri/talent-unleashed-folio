export const GradientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient mesh */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'var(--gradient-mesh)',
          animation: 'gradientShift 20s ease infinite',
        }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s', animationDuration: '10s' }} />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '4s', animationDuration: '12s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '6s', animationDuration: '14s' }} />
      
      {/* Scan line effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
        }}
      />
    </div>
  );
};
