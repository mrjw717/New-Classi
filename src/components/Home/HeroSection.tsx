import React from 'react';
import { theme } from '../../theme/theme';

const HeroSection: React.FC = () => {
  return (
    <div className="py-10" style={{ background: theme.colors.snowMist, zIndex: 1 }}>
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
          Find Exactly What
        </h1>
        <h1 className="text-6xl font-extrabold" style={{ color: theme.colors.primary }}>
          You're Looking For
        </h1>
        <p className="text-lg" style={{ color: theme.colors.nightGrey, marginTop: '20px' }}>
          The most trusted classifieds platform for buying and selling in your local community.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
