import React from 'react';
import { CheckCircle, Users } from 'lucide-react';
import AfterHeader from '../components/Afterheader';
import Aboutimage from "../images/simpleimage.avif";
import IAImage from "../images/IAImage.jpg";
import { useNavigate } from 'react-router-dom';
import gifAccuiel from "../images/gifAccuiel.gif";
import { motion } from 'framer-motion';
import fadel from "../images/Fadel.jpeg";
import carlos from "../images/carlos.jpeg";
import carlos2 from "../images/carlos2.jpeg";
import Person from "../images/person.jpg";
import Personne from "../images/personne.jpg";
import richard from "../images/richard.jpg";
import gaston from "../images/gaston.jpeg";
import fabrice from "../images/fabrice.jpeg";
import { image, link } from 'framer-motion/client';
import magloire from "../images/magloire.jpeg";

const About = () => {

  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "BATCHOUDI Gnim-Wazou Gaston",
      role: "Expert en Recherche Opérationnelle et aide à la décision, Simulation",
      twitter: "https://x.com/gastonbatchoudi?t=M-mvjDzc0bZwpgK-BXk8Ag&s=09",
      linkdin: " https://www.linkedin.com/in/gaston-batchoudi-b96b1021b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: gaston
    },
    {
      name: "Essognim Richard Wilouwou",
      role: "Expert en Recherche opérationnelle, Aide à la décision ,IA",
      image: richard,
      linkdin: "https://www.linkedin.com/in/essognim-richard-wilouwou-a2031821a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "PAKA Fabrice Essinam", role: "Analyse des données",
      image: fabrice, linkdin: "https://www.linkedin.com/in/fabrice-paka-junior-data-scientist-dataanalyst-alternance2025-toutelafrance-teletravail/"
    },

    {
      name: "TAGBA Bouwedéu Magloire",
      image:magloire,
      role: "Aspirant Data Scientist",
      linkdin: "https://www.linkedin.com/in/magloire-tagba-baa1b9341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "ALASSANI FADEL ", role: "Chargé de communication ",
      image: fadel,
      twitter: "https://x.com/fadel_alas97857?t=xB6srnrt_V63qUjcpixj_Q&s=09",
      linkdin: "https://www.linkedin.com/in/alassani-fadel-2a1839353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      name: "DJOYOU Wiyao Carlos", role: "Développeur fullStack",
      linkdin: "www.linkedin.com/in/carlos-djoyou-322801231",
      twitter: "https://x.com/Paristone240601",
      image: carlos
    },

  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-navy-900">
      <div className="relative py-24 px-6">
        <div className="container mx-auto">
          <AfterHeader
            titre={"À Propos d'OptimBrains"}
            description={''}
            imageURL={IAImage} />
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

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Notre Approche et Nos Valeurs
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-navy-800 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-3" />
                  Votre partenaire de confiance
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
                  navigate("/contact");
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
                  className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <p>{member.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <a href={member.linkdin} className="text-green-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
                            2.761 2.239 5 5 5h14c2.761 0 5-2.239 
                            5-5v-14c0-2.761-2.239-5-5-5zm-11 
                            19h-3v-10h3v10zm-1.5-11.268c-.966 
                            0-1.75-.79-1.75-1.764s.784-1.764 
                            1.75-1.764 1.75.79 
                            1.75 1.764-.784 1.764-1.75 
                            1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 
                            0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 
                            1.379-1.562 2.838-1.562 3.033 0 3.592 1.996 
                            3.592 4.59v5.605z"/>
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
                  {/* <li>
                    <a href={member.github} className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                    </a>
                </li> */}
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



