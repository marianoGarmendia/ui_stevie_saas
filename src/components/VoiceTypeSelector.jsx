import React from 'react';




const VoiceTypeSelector = ({
  label,
  selectedType,
  onChange
}) => {
  return (
    <div className="mb-4 bg-background p-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg border border-gray-700">
      <label className="block text-sm font-medium text-[#eee] mb-2">{label}</label>
      <div className="flex space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={selectedType === 'men'}
            onChange={() => onChange('men')}
          />
          <span className="ml-2 text-gray-700">Men</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={selectedType === 'woman'}
            onChange={() => onChange('woman')}
          />
          <span className="ml-2 text-gray-700">Woman</span>
        </label>
      </div>
    </div>
  );
};

export default VoiceTypeSelector;