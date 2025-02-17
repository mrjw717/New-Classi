import React from 'react';

    interface SidebarProps {
      children: React.ReactNode;
    }

    const Sidebar: React.FC<SidebarProps> = ({ children }) => {
      return (
        <div className="p-4 bg-white rounded-md shadow-md">
          {children}
        </div>
      );
    };

    export default Sidebar;
