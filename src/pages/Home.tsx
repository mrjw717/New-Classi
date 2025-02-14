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
      <BrowseSection />
    </MainLayout>
  );
};

export default Home;
