import React from 'react';
import { LucideIcon } from 'lucide-react';
import { theme } from '../../theme/theme';
import { Home } from 'lucide-react';

interface NavbarProps {
  appName: string;
}

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
  return (
    <nav className="bg-white py-4 shadow-md">
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
        <div>
          <a
            href="/login"
            className="mr-4"
            style={{ color: theme.colors.primary }}
          >
            Login
          </a>
          <a
            href="/register"
            className="font-bold py-2 px-6 rounded-md"
            style={{
              background: theme.colors.primaryGradient,
              color: 'white',
            }}
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
