import React from "react";
import { motion } from "framer-motion";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.jpg";
import service6 from "../images/service6.png";

interface ServiceCardProps {
  titre: string;
  description: string;
  imageurl?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ titre, description, imageurl, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Animation quand l'élément est 20% visible
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
      className="p-6 border rounded-lg shadow-md bg-white transition-transform"
    >
      {imageurl && <img src={imageurl} alt={titre} className="w-full h-40 object-cover rounded-t-lg" />}
      <h3 className="text-xl font-bold mt-4 text-gray-800">{titre}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

const ServiceContent: React.FC = () => {
  const services = [
    { titre: "Consultation initiale", description: "Nous commençons par un audit digital pour comprendre vos besoins, objectifs et défis spécifiques.", imageurl: service1 },
    { titre: "Analyse et stratégie", description: "Notre équipe analyse vos données et processus existants pour élaborer une stratégie personnalisée.", imageurl: service2 },
    { titre: "Conception de solution", description: "Nous concevons une solution sur mesure en utilisant les technologies d'IA les plus adaptées à vos besoins.", imageurl: service3 },
    { titre: "Développement", description: "Notre équipe d'experts développe la solution en suivant une méthodologie agile pour garantir qualité et flexibilité.", imageurl: service4 },
    { titre: "Test et déploiement", description: "La solution est rigoureusement testée avant d'être déployée dans votre entreprise ou environnement de production.", imageurl: service5 },
    { titre: "Support et évolution", description: "Nous assurons un suivi continu et faisons évoluer la solution pour qu'elle s'adapte à vos besoins changeants.", imageurl: service6 },
  ];

  return (
    <div className="bg-white p-10 lg:p-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Processus de travail</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceContent;
