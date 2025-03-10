import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Intelligence Artificielle
            </span>{' '}
            au service de votre performance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Optimisez vos processus et maximisez vos résultats grâce à nos solutions 
            d'IA sur mesure et nos expertises en optimisation de production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center transition-colors">
              Demander une démo
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white/20 hover:border-blue-400 text-white px-8 py-3 rounded-full flex items-center justify-center transition-colors">
              Nos services
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;