import React from 'react';

const PriceRangeFilter: React.FC = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-600 mb-2">Price Range</h3>
      <div className="flex items-center">
        <input
          type="number"
          placeholder="Min"
          className="border rounded-md py-2 px-3 mr-2 w-24"
        />
        -
        <input
          type="number"
          placeholder="Max"
          className="border rounded-md py-2 px-3 ml-2 w-24"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
