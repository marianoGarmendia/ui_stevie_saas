import React, { useState } from 'react';

import VoiceTypeSelector from './VoiceTypeSelector';
import VoiceOptionSelector from './VoiceOptionSelector';
import { useVoice } from '../Context/useVoices';
import { Mic, User, User2 } from 'lucide-react';

const VoiceSelector = () => {
    const { firstLocutor, setFirstLocutor, secondLocutor, setSecondLocutor } = useVoice();

  const [firstVoice, setFirstVoice] = useState({
    type: 'men',
    option: null
  });
  
  const [secondVoice, setSecondVoice] = useState({
    type: 'woman',
    option: null
  });

  const handleFirstVoiceTypeChange = (type) => {
    setFirstVoice({
      type,
      option: null
    });

    setFirstLocutor({type, option: null});
  };

  const handleSecondVoiceTypeChange = (type) => {
    setSecondVoice({
      type,
      option: null
    });

    setSecondLocutor({type, option: null});
  };

  const handleFirstVoiceOptionChange = (option) => {
    setFirstVoice({
      ...firstVoice,
      option
    });
    setFirstLocutor({
      ...firstVoice,
      option
    });
  };

  const handleSecondVoiceOptionChange = (option) => {
    setSecondVoice({
      ...secondVoice,
      option
    });
    setSecondLocutor({
      ...secondVoice,
      option
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-8 ">
      <h2 className="text-2xl font-bold text-[#eee] mb-6 flex items-center">
        <Mic className="mr-2 text-indigo-600" size={24} />
        Voice Selection
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Voice Section */}
        <div className="bg-background/60 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <User className="text-blue-500 mr-2" size={20} />
            <h3 className="text-lg font-medium text-[#eee]">First Voice</h3>
          </div>
          
          <VoiceTypeSelector
            label="Voice Type"
            selectedType={firstVoice.type}
            onChange={handleFirstVoiceTypeChange}
          />
          
          <VoiceOptionSelector
            label="Voice Option"
            voiceType={firstVoice.type}
            selectedOption={firstVoice.option}
            onChange={handleFirstVoiceOptionChange}
          />

          {firstVoice.option && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Selected:</span> {firstVoice.option.name} ({firstVoice.type})
              </p>
            </div>
          )}
        </div>
        
        {/* Second Voice Section */}
        <div className="bg-background/60 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <User2 className="text-purple-500 mr-2" size={20} />
            <h3 className="text-lg font-medium text-[#eee">Second Voice</h3>
          </div>
          
          <VoiceTypeSelector
            label="Voice Type"
            selectedType={secondVoice.type}
            onChange={handleSecondVoiceTypeChange}
          />
          
          <VoiceOptionSelector
            label="Voice Option"
            voiceType={secondVoice.type}
            selectedOption={secondVoice.option}
            onChange={handleSecondVoiceOptionChange}
          />

          {secondVoice.option && (
            <div className="mt-4 p-3 bg-purple-50 rounded-md border border-purple-100">
              <p className="text-sm text-purple-800">
                <span className="font-medium">Selected:</span> {secondVoice.option.name} ({secondVoice.type})
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Summary Section */}
      <div className="mt-6 bg-background/60 rounded-lg p-4 border border-gray-200">
        <h3 className="text-lg font-medium text-[#eee] mb-2">Voice Selection Summary</h3>
        <div className="space-y-2">
          <p className="text-[#eee]">
            <span className="font-medium">First Voice:</span> {firstVoice.option ? `${firstVoice.option.name} (${firstVoice.type})` : 'Not selected'}
          </p>
          <p className="text-[#eee]">
            <span className="font-medium">Second Voice:</span> {secondVoice.option ? `${secondVoice.option.name} (${secondVoice.type})` : 'Not selected'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceSelector;