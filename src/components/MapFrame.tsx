
import React from 'react'

const MapFrame: React.FC<{ latitude: number; longitude: number }> = ({ latitude, longitude }) => {
    return (
      <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg mt-20 mb-20">
        <iframe
          className="w-full h-full"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=fr&z=15&output=embed`}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    );
  };
export default MapFrame
