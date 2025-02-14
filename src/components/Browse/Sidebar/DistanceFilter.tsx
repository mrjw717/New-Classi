import React from 'react';

const DistanceFilter: React.FC = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-600 mb-2">Distance</h3>
      <input type="range" className="w-full" />
    </div>
  );
};

export default DistanceFilter;
