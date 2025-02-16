import React from 'react';
import BrowseTopbar from './Topbar/BrowseTopbar';
import FilterSidebar from './Sidebar/FilterSidebar';
import { theme } from '../../theme/theme';
import ItemsDisplay from './ItemsDisplay';

const BrowseSection: React.FC = () => {
  return (
    <div className="pb-12" style={{ background: theme.colors.snowMistLightGradient }}>
      <div className="mx-auto" style={{ maxWidth: '87%' }}>
        <BrowseTopbar />
        <div className="flex flex-col md:flex-row">
          <div className="max-w-sidebar min-w-sidebar">
            <FilterSidebar />
          </div>
          <div className="w-full">
            <ItemsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
