import React from 'react';
import DistanceFilter from './DistanceFilter';
import PriceRangeFilter from './PriceRangeFilter';
import ConditionFilter from './ConditionFilter';
import SubcategoryFilter from './SubcategoryFilter';

const FilterSidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Filters</h2>
      <DistanceFilter />
      <PriceRangeFilter />
      <ConditionFilter />
      <SubcategoryFilter />
    </div>
  );
};

export default FilterSidebar;
