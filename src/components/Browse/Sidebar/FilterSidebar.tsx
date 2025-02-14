import React from 'react';
import DistanceFilter from './DistanceFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ConditionFilter from './ConditionFilter';
import SubcategoryFilter from './SubcategoryFilter';
import { theme } from '../../../theme/theme';

const FilterSidebar: React.FC = () => {
  return (
    <div className="p-4 rounded-md mt-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #E8E7EA, #FFFFFF)' }}>
      <DistanceFilter />
      <PriceRangeFilter />
      <ConditionFilter />
      <SubcategoryFilter />
    </div>
  );
};

export default FilterSidebar;
