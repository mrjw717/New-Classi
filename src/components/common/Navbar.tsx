import React from 'react';
import { LucideIcon } from 'lucide-react';
import { theme } from '../../theme/theme';
import { Home } from 'lucide-react';
import UserArea from './UserArea';

interface NavbarProps {
  appName: string;
}

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
  return (
    <nav className="bg-white py-4" style={{ boxShadow: theme.shadows.soft, zIndex: 10 }}>
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold"
          style={{ color: theme.colors.primary }}
        >
          <Home
            size={30}
            color={theme.colors.primary}
            style={{ display: 'inline-block', marginRight: '8px' }}
          />
          {appName}
        </a>
        <UserArea />
      </div>
    </nav>
  );
};

export default Navbar;
