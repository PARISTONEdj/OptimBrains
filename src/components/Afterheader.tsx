

import React from 'react';

interface AfterHeaderProps {
  titre: string;
  description: string;
  imageURL: string;
}

const AfterHeader: React.FC<AfterHeaderProps> = ({ titre, description, imageURL }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 mb-10"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      {/* Overlay plus sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
      {/* Contenu centré */}
      <div className="relative container mx-auto mb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{titre}</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
      </div>
    </div>
  );
  
};

export default AfterHeader;

