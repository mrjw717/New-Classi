import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  appName: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, appName }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar appName={appName} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
