import React from 'react';

const CategorySelector: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Select a Category
        </h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Category 1
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Category 2
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Category 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
