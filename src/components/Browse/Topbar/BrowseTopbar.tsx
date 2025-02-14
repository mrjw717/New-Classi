// src/components/Browse/Topbar/BrowseTopbar.tsx
import React, { useState } from 'react';
import { Home, Search, MapPin, List, Grid } from 'lucide-react';
import { theme } from '../../../theme/theme';

const BrowseTopbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'search' | 'location' | 'list' | 'grid'>('search');
  const [viewType, setViewType] = useState<'list' | 'grid'>('grid');

  const handleButtonClick = (buttonName: 'location' | 'list' | 'grid') => {
    if (buttonName === 'list' || buttonName === 'grid') {
      setViewType(buttonName);
    } else {
      setActiveButton(prev => prev === buttonName ? null : buttonName);
    }
  };

  const getButtonStyle = (buttonName: string) => {
    let style = {};
    const isActive = activeButton === buttonName;

    if (buttonName === 'search') {
      style = theme.buttons.primaryActive;
    } else if (buttonName === 'location') {
      style = isActive ? theme.buttons.locationActive : theme.buttons.locationInactive;
    } else if (buttonName === 'list') {
      style = viewType === 'list' ? theme.buttons.listActive : theme.buttons.listInactive;
    } else if (buttonName === 'grid') {
      style = viewType === 'grid' ? theme.buttons.gridActive : theme.buttons.gridInactive;
    }

    return style;
  };

  const getIconColor = (buttonName: string) => {
    const isActive = activeButton === buttonName;
    if (buttonName === 'search') {
      return 'white';
    } else if (buttonName === 'location') {
      return isActive ? 'white' : theme.colors.orange;
    } else if (buttonName === 'list' || buttonName === 'grid') {
      return viewType === buttonName ? 'white' : theme.colors.violet;
    }
    return 'white';
  };

  return (
    <div className="bg-white py-4 shadow-md">
      <div className="flex items-center" style={{ maxWidth: '100%' }}>
        {/* Logo Area */}
        <div className="w-64">
          <a
            href="/"
            className="text-2xl font-bold"
            style={{ color: theme.colors.primary, textAlign: 'left' }}
          >
            <Home
              size={30}
              style={{ display: 'inline-block', marginRight: '8px' }}
            />
            Classifinds
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search listings..."
            className="border rounded-md py-2 px-4 mr-2 w-full"
          />
        </div>

        {/* Icons (Right-Aligned) */}
        <div className="flex">
          <button
            className="font-bold py-2 px-4 rounded-md"
            style={{
              ...getButtonStyle('search'),
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onClick={() => handleButtonClick('search')}
          >
            <Search size={20} style={{ display: 'inline-block', color: getIconColor('search') }} />
          </button>

          {/* Location Button */}
          <button
            className="font-bold ml-2"
            style={{
              ...getButtonStyle('location'),
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onClick={() => handleButtonClick('location')}
          >
            <MapPin size={20} style={{ display: 'inline-block', color: getIconColor('location') }} />
          </button>

          {/* Sort Button */}
          <button
            className="font-bold ml-2"
            style={{
              ...getButtonStyle('list'),
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onClick={() => handleButtonClick('list')}
          >
            <List size={20} style={{ display: 'inline-block', color: getIconColor('list') }} />
          </button>

          {/* Grid View Button */}
          <button
            className="font-bold ml-2"
            style={{
              ...getButtonStyle('grid'),
              display: 'inline-flex',
              alignItems: 'center',
            }}
            onClick={() => handleButtonClick('grid')}
          >
            <Grid size={20} style={{ display: 'inline-block', color: getIconColor('grid') }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseTopbar;
