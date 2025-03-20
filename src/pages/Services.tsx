import React, { useState } from 'react';
import { Brain, LineChart, Users, Database, Lightbulb, GraduationCap } from 'lucide-react';
import IAImage from "../images/IAImage.jpg";
import AfterHeader from '../components/Afterheader';
import serviceImage from "../images/Support.jpeg";
import AIGIF from "../images/Intelligence_Artificielle.gif";
import Servicecontent from '../components/Servicecontent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Services() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const abonnement = async (e: React.FormEvent) => {
      e.preventDefault(); // Correction de e.preventedDefault()
  
      if (!email) {
        setMessage("Veuillez entrer un email valide.");
        return;
      }
  
      try {
        const response = await axios.post("https://apioptimbrains.onrender.com/abonnement", {
          email: email,
        });
  
        setMessage(response.data.message); // Afficher le message de succès
        setEmail(""); // Réinitialiser l'input après abonnement
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error.response?.data?.message || "Erreur lors de l'abonnement");
        } else {
          setMessage("Une erreur inconnue est survenue.");
        }
      }
    };
    
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-blue-400" />,
      title: "Solutions IA sur mesure",
      description: "Développement de solutions d'intelligence artificielle personnalisées pour répondre aux besoins spécifiques de votre entreprise."
    },
    {
      icon: <Database className="h-12 w-12 text-blue-400" />,
      title: "Analyse de données",
      description: "Nous transformons vos données brutes en insights stratégiques pour une prise de décision éclairée."
    },
    {
      icon: <LineChart className="h-12 w-12 text-blue-400" />,
      title: "Optimisation de la production",
      description: "Amélioration des processus de production grâce à nos algorithmes de planification, l'automatisation intelligente et l'analyse prédictive."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-400" />,
      title: "Conseil en transformation digitale",
      description: "Accompagnement stratégique pour intégrer l'IA et les technologies digitales dans votre modèle d'affaires."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-400" />,
      title: "Planification RH",
      description: "Optimisation de la gestion des ressources humaines grâce à des outils prédictifs et analytiques avancés."
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-400" />,
      title: "Formation",
      description: "Profitez de nos formations pratiques et personnalisées sur l'utilisation de l'IA pour améliorer votre efficacité et votre rentabilité."
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">

      <div className="relative py-24 ">

        <AfterHeader titre={'Nos Services'} 
        description={'Découvrez comment nos solutions technologiques peuvent transformer votre entreprise et stimuler sa croissance.'} 
        imageURL={AIGIF}/>
        {/* Hero Section */}
        {/* <div className="container mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nos solutions technologiques peuvent transformer votre entreprise et stimuler sa croissance.
          </p>
        </div> */}

        {/* Services Grid */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-navy-800 p-8 rounded-lg hover:transform hover:scale-105 transition-transform">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto mt-20 px-6 mb-10">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Avez-vous un projet en tête?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Nous pouvons vous aider à concrétiser vos idées. Discutons de ce que nous pouvons créer ensemble et faire grandir grâce à l'IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={()=>{
                navigate("/contact")
              }}
               className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
                Contactez-nous
              </button>
              <button className="border border-white/20 hover:border-blue-400 text-white px-8 py-3 rounded-full transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        <Servicecontent/>

        {/* Newsletter Section */}
        <div className="container mx-auto mt-20 px-6">
          <div className="bg-navy-800 rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Restez à l'écoute
              </h2>
              <p className="text-gray-300 mb-8">
                Souscrivez à notre Newsletter pour recevoir nos dernières actualités et conseils en IA et optimisation.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={abonnement}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 rounded-full bg-navy-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500" />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
                >
                  S'abonner
                </button>
              </form>
              {message && <p className='text-white mt-5'>{message}</p>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;