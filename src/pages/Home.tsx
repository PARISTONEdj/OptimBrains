import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import IA_Automatisation from '../images/IA_gif.gif';
import Accueilcontent from '../components/Accueilcontent';
import { useNavigate } from 'react-router-dom';
import iagif from "../images/IA_gif.gif";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      title: "Solutions IA sur mesure",
      description: "Des solutions d'intelligence artificielle adaptées à vos besoins spécifiques."
    },
    {
      title: "Expertise technique",
      description: "Une équipe d'experts en IA, data science et développement logiciel."
    },
    {
      title: "Accompagnement personnalisé",
      description: "Un suivi sur mesure pour garantir le succès de votre transformation digitale."
    }
  ];

  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-navy-900">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
             backgroundImage: `url(${iagif})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80"></div>
        </div>

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
              <button 
              onClick={()=>{
                  navigate("/services");
              }}
              className="border border-white/20 hover:border-blue-400 text-white px-8 py-3 rounded-full flex items-center justify-center transition-colors">
                Nos services
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-navy-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-navy-900 p-8 rounded-lg">
                <CheckCircle className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Accueilcontent/>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez comment OptimBrains peut vous aider à optimiser vos processus et à prendre de meilleures décisions grâce à l'IA.
            </p>
            <button onClick={()=>{
              navigate("/contact")
            }} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;