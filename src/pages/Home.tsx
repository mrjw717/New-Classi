import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { BrowseSection } from '../components/Browse';
import HeroSection from '../components/Home/HeroSection';
import CategorySelector from '../components/Home/CategorySelector';
import { theme } from '../theme/theme';

const Home: React.FC = () => {
  return (
    <MainLayout appName="Classifinds">
      <HeroSection />
      <CategorySelector />
      <div style={{ background: theme.colors.snowMist }}>
        <hr style={{
          height: '1px',
          width: '70%',
          margin: '0 auto',
          opacity: 0.5,
          filter: 'blur(3px)',
          border: 'none',
          backgroundColor: theme.colors.ashGrey,
        }} />
      </div>
      <BrowseSection />
    </MainLayout>
  );
};

export default Home;
