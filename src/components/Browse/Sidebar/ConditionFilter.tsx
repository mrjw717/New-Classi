import React from 'react';

const ConditionFilter: React.FC = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium text-gray-600 mb-2">Condition</h3>
      <select className="border rounded-md py-2 px-3 w-full">
        <option>Any</option>
        <option>New</option>
        <option>Used</option>
      </select>
    </div>
  );
};

export default ConditionFilter;
