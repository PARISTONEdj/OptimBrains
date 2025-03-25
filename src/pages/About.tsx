import React from 'react';
import { CheckCircle, Users } from 'lucide-react';
import AfterHeader from '../components/Afterheader';
import Aboutimage from "../images/simpleimage.avif";
import IAImage from "../images/IAImage.jpg";
import { useNavigate } from 'react-router-dom';
import gifAccuiel from "../images/gifAccuiel.gif";
import { motion } from 'framer-motion';

const About = () => {

  const navigate = useNavigate();

  const teamMembers = [
    { name: "John Doe", role: "CEO", whatsapp : "", github : "", twitter : "",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" },
    { name: "Jane Smith", role: "CTO",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" },
    { name: "Alice Johnson", role: "Designer",
         image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" },
    { name: "Bob Brown", role: "Developer", 
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" }
  ];
  

  return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
     className="min-h-screen bg-navy-900">
      <div className="relative py-24 px-6">
        <div className="container mx-auto">
          <AfterHeader 
          titre={"À Propos d'OptimBrains"} 
          description={''}
           imageURL={IAImage}/>
          <div className="max-w-4xl mx-auto">
            {/* <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">À Propos d'OptimBrains</h1> */}
            
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
              <button
                onClick={() => {
                    window.open("https://wa.me/22891262289", "_blank");
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
                >
                Discutez avec un expert
                </button>
            </div>
          </div>
        </div>
      </div>


      <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                    <motion.h2
                        className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        
                    >
                        Notre équipe
                    </motion.h2>

                    <motion.p
                        className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        Un groupe d'experts et de professionnels pour vous servir.
                    </motion.p>
                 </div>

                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
            <motion.div 
                key={index} 
                className="text-center text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, scale: 0.8, y: 50 }} 
                whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{
                  duration: 0.6,
                  delay: index * 0.3, 
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <img 
                className="mx-auto mb-4 w-36 h-36 rounded-full" 
                src={member.image} 
                alt={`${member.name} Avatar`}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{member.name}</a>
                </h3>
                <p>{member.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                <li>
                    <a href={member.whatsapp} className="text-green-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8zM7.9 7.4c-.2 0-.4 0-.6.2-.2.2-.2.4-.2.6 0 .2-.2 3.8 3.4 6.6 3.6 2.8 6.6 2.6 6.8 2.6.2 0 .4-.2.6-.2.2-.2.2-.4.2-.6 0-.2.2-1.6-.2-2.4-.2-.6-.8-.6-1.2-.6s-1 .2-1.4.8c-.4.6-.6.8-1 .8-.2 0-.6-.2-1-.4-.8-.4-2.2-1.6-2.6-2.2-.2-.2-.2-.4-.2-.6 0-.2 0-.4.2-.6.2-.2.4-.4.6-.6s.4-.2.6-.4c.2 0 .2 0 .2-.2 0-.2 0-.4-.2-.6-.2-.2-.8-.6-1-.6-.2-.2-.4-.2-.6-.2z"></path>
                    </svg>
                    </a>
                </li>
                <li>
                    <a href={member.twitter} className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                    </a>
                </li>
                <li>
                    <a href={member.github} className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                    </a>
                </li>
                </ul>
            </motion.div>
            ))}

          
      </div>  
  </div>
    </section>
    </motion.div>
  );
};

export default About;



