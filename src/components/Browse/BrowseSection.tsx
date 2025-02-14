import React from 'react';
import BrowseTopbar from './Topbar/BrowseTopbar';
import FilterSidebar from './Sidebar/FilterSidebar';

const BrowseSection: React.FC = () => {
  return (
    <div className="py-12">
      <div className="mx-auto" style={{ maxWidth: '80%', marginLeft: '10%' }}>
        <BrowseTopbar />
        <div className="flex">
          <div className="w-1/5 pr-4">
            <FilterSidebar />
          </div>
          <div className="w-4/5">
            {/* Items Display Area */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
