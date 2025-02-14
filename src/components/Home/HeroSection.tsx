import React from 'react';
import { theme } from '../../theme/theme';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Find What You Need with Classifinds
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your local marketplace for everything.
        </p>
        <button
          className="font-bold py-3 px-8 rounded-md"
          style={{
            background: theme.colors.primaryGradient,
            color: 'white',
            transition: 'all 0.3s ease',
          }}
        >
          Explore Listings
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
