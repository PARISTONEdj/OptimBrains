import React from 'react';
import { CheckCircle, Users } from 'lucide-react';

const About = () => {

  

  return (

    
    <div className="min-h-screen bg-navy-900">
      <div className="relative py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">À Propos d'OptimBrains</h1>
            
            <div className="bg-navy-800 p-8 rounded-lg mb-12">
              <p className="text-gray-300 mb-6">
                OptimBrains est une agence digitale spécialisée dans le développement de solutions d'intelligence artificielle sur mesure. Notre mission est d'aider les entreprises à exploiter pleinement le potentiel de leurs données et à optimiser leurs processus grâce aux technologies les plus avancées.
              </p>
              <p className="text-gray-300">
                Fondée par des experts en IA, Recherche opérationnelle, data science et développement logiciel, notre équipe combine expertise technique et vision stratégique pour offrir des solutions qui répondent parfaitement aux défis spécifiques de chaque client.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-navy-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3" />
                  Vos partenaires de confiance
                </h2>
                <p className="text-gray-300">
                  Une équipe compétente, très motivée avec des idées novatrices. Nous aimons ce que nous faisons et trouvons les meilleures solutions possibles pour vous aider à prendre de meilleures décisions pour la croissance de votre entreprise.
                </p>
              </div>
              <div className="bg-navy-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Users className="h-6 w-6 text-blue-400 mr-3" />
                  Notre engagement
                </h2>
                <p className="text-gray-300">
                  Lorsque vous vous associez à nous, vous ne développez pas votre entreprise seul. Nous sommes à vos côtés et mettons tout en œuvre pour contribuer à la croissance de votre équipe et de votre organisation.
                </p>
              </div>
            </div>

            <div className="bg-navy-800 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ensemble, nous pouvons rendre votre entreprise prospère
              </h2>
              <p className="text-gray-300 mb-8">
                Si vous recherchez un partenaire capable de vous fournir des solutions IA et d'optimisation adaptées pour améliorer votre efficacité, augmenter vos conversions et générer davantage de revenus, nous sommes là pour vous accompagner !
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
                Discutez avec un expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;