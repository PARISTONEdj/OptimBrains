
import React from 'react';
import cta from "../images/cta-img.jpg";
import { ArrowRight } from 'lucide-react';
import gallery1 from "../images/gallery-1.jpg";
import gallery2 from "../images/gallery-2.jpg";
import gallery3 from "../images/gallery-3.jpg";


function Accueilcontent() {
    return (
        <div>
          <div className="bg-white h-[100px]" />
          <div className="relative w-full min-h-screen flex flex-col">
            {/* Partie supérieure blanche */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-white z-0" />
      
            {/* Partie inférieure grise */}
            <div className="absolute bottom-0 left-0 w-full h-2/3  z-0" />
      
            {/* Carte rouge superposée */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[1200px] bg-gray-500 text-white shadow-xl flex flex-col lg:flex-row z-10">
  
  {/* Section Texte */}
  <div className="w-full lg:w-1/3 flex flex-col justify-center p-8 text-center lg:text-left">
    <h1 className="text-2xl lg:text-3xl font-bold">Avez-vous un projet en tête?</h1>
    <p className="text-base lg:text-lg mt-4">
      Nous pouvons vous aider à concrétiser vos idées. Discutons de ce que nous pouvons créer ensemble et faire grandir grâce à l'IA.
    </p>
    <button className="mt-6 lg:mt-20 bg-gray-500 text-white px-6 py-3 border border-black text-lg flex items-center w-[250px] mx-auto lg:mx-0">
      Contactez-nous 
      <ArrowRight className="ml-2" size={20} />
    </button>
  </div>

  {/* Section Image */}
  <div className="w-full lg:w-2/3 flex-1 flex items-center justify-center overflow-hidden">
    <img 
      src={cta} 
      alt="Illustration" 
      className="w-full h-full object-cover"
    />
  </div>

</div>




          </div>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-6 p-6 lg:p-20 text-white rounded-lg mt-20 lg:mt-20 sm:mt-60 md:mt-30">
    <div className="flex-1 text-3xl lg:text-5xl font-extrabold text-center lg:text-left mb-6 lg:mb-0">
      Ensemble, nous pouvons rendre votre entreprise prospère
    </div>
    <div className="flex-1 text-base lg:text-lg leading-relaxed text-center lg:text-left text-justify">
      Lorsque vous vous associez à nous, vous ne développez pas votre entreprise seul. Nous sommes à vos côtés et mettons tout en œuvre pour contribuer à la croissance de votre équipe et de votre organisation. Ainsi, si vous recherchez un partenaire capable de vous fournir des solutions IA et d’optimisation adaptées pour améliorer votre efficacité, augmenter vos conversions et générer davantage de revenus, nous sommes là pour vous accompagner !
    </div>
  </div>



  <div className="bg-gray-100 p-6 sm:p-10 lg:p-20">
  <p className="text-xl sm:text-2xl lg:text-2xl font-bold text-center">Vos partenaires de confiance</p>
  
  <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 p-6 sm:p-10 lg:p-20">
    {/* Section avec flex interne, texte à gauche */}
    <div className="flex flex-col space-y-4 flex-1">
      <div className="text-3xl sm:text-4xl lg:text-5xl text-black text-center lg:text-left">
        Une équipe compétente, très motivée avec des idées novatrices
      </div>
    </div>

    {/* Texte justifié, section à droite */}
    <div className="flex flex-col flex-1 text-base sm:text-lg lg:text-xl text-gray-700 text-justify lg:text-left">
      Nous aimons ce que nous faisons et, par conséquent, nous trouvons les meilleures solutions possibles pour vous aider à prendre de meilleures décisions pour la croissance de votre entreprise. Nous sommes vos partenaires de confiance sur lesquels vous pouvez compter.
    </div>
  </div>

  {/* Section d'images avec wrap */}
  <div className="flex flex-wrap justify-center gap-6 sm:gap-6 lg:gap-8">
    <img src={gallery1} alt="" className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 object-cover" />
    <img src={gallery2} alt="" className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 object-cover" />
    <img src={gallery3} alt="" className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 object-cover" />
  </div>
</div>





        </div>
      );
      
  
}

export default Accueilcontent