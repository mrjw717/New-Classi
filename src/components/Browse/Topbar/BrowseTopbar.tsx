// src/components/Browse/Topbar/BrowseTopbar.tsx
import React, { useState } from 'react';
import { Home, Search, List, Grid } from 'lucide-react';
import { theme } from '../../../theme/theme';
import SortButton from './SortButton';
import LocationDropdown from './LocationDropdown';

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

  const handleSortClick = () => {
    // Add sort logic here
    console.log('Sort button clicked');
  };

  return (
    <div className="bg-white py-4">
      <div className="flex items-center justify-between w-full">
        {/* Logo Area */}
        <div className="max-w-sidebar min-w-sidebar">
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
        <div className="flex-grow pl-6">
          <input
            type="text"
            placeholder="Search listings..."
            className="border rounded-md py-2 px-4 w-full rounded-r-none"
            style={{ borderRight: 'none' }}
          />
        </div>

        {/* Icons (Right-Aligned) */}
        <div className="flex items-center">
          <button
            className="font-bold py-2 px-4 rounded-md"
            style={{
              ...theme.buttons.primaryActive,
              display: 'inline-flex',
              alignItems: 'center',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
            }}
            onClick={() => handleButtonClick('search')}
          >
            <Search size={20} style={{ display: 'inline-block', color: getIconColor('search') }} />
          </button>

          {/* Vertical Line */}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          {/* Location Button */}
          <LocationDropdown getButtonStyle={getButtonStyle} getIconColor={getIconColor} />

          {/* Vertical Line */}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          {/* Sort Button */}
          <SortButton onClick={handleSortClick} />

          {/* Vertical Line */}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          {/* List View Button */}
          <button
            className="font-bold rounded-r-none ml-2"
            style={{
              ...getButtonStyle('list'),
              display: 'inline-flex',
              alignItems: 'center',
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0',
            }}
            onClick={() => handleButtonClick('list')}
          >
            <List size={20} style={{ display: 'inline-block', color: getIconColor('list') }} />
          </button>

          {/* Grid View Button */}
          <button
            className="font-bold rounded-l-none"
            style={{
              ...getButtonStyle('grid'),
              display: 'inline-flex',
              alignItems: 'center',
              borderTopLeftRadius: '0',
              borderBottomLeftRadius: '0',
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
