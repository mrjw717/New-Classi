import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Classifinds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
