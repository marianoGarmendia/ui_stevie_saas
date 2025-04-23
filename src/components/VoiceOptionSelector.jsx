import React from 'react';

import { getVoiceOptions } from '../data/voiceOptions';



const VoiceOptionSelector = ({
  label,
  voiceType,
  selectedOption,
  onChange
}) => {
  const options = getVoiceOptions(voiceType);

  return (
    <div className="mb-4 bg-background p-4 rounded-md shadow-md transition-all duration-300 hover:shadow-lg border border-gray-700">
      <label htmlFor={`voice-option-${label.toLowerCase().replace(' ', '-')}`} className="block text-sm font-medium text-[#eee] mb-2">
        {label}
      </label>
      <select
        id={`voice-option-${label.toLowerCase().replace(' ', '-')}`}
        className="form-select block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm transition duration-150 ease-in-out bg-background text-[#eee]"
        value={selectedOption?.id || ''}
        onChange={(e) => {
          const selected = options.find(option => option.id === e.target.value);
          if (selected) {
            onChange(selected);
          }
        }}
      >
        <option value="" disabled>Select a voice</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default VoiceOptionSelector;