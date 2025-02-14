import React from 'react';

const SubcategoryFilter: React.FC = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-600 mb-2">Subcategory</h3>
      <select className="border rounded-md py-2 px-3 w-full">
        <option>Any</option>
        <option>Subcategory 1</option>
        <option>Subcategory 2</option>
      </select>
    </div>
  );
};

export default SubcategoryFilter;
