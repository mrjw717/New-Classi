import React from 'react';
import { Bell, User, PlusCircle, BadgePlus } from 'lucide-react';
import { theme } from '../../theme/theme';

const UserArea: React.FC = () => {
  return (
    <div className="flex items-center">
      <button
        className="font-bold py-2 px-4 rounded-md mr-4"
        style={{
          background: theme.colors.violetGradient,
          color: 'white',
        }}
      >
        <BadgePlus size={20} style={{ display: 'inline-block', marginRight: '8px' }} />
        Post Ad
      </button>
      <button className="mr-4">
        <Bell size={24} color={theme.colors.violet} />
      </button>
      <button>
        <User size={30} color={theme.colors.violet} />
      </button>
    </div>
  );
};

export default UserArea;
