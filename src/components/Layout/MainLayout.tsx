import React from 'react';
    import Navbar from '../common/Navbar';
    import Footer from '../common/Footer';
    import { theme } from '../../theme/theme';

    interface MainLayoutProps {
      children: React.ReactNode;
      appName: string;
    }

    const MainLayout: React.FC<MainLayoutProps> = ({ children, appName }) => {
      return (
        <div className="flex flex-col min-h-screen" style={{ background: theme.colors.snowMistLightGradient }}>
          <Navbar appName={appName} />
          <main className="flex-grow">
            <div className="min-h-screen">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      );
    };

    export default MainLayout;
