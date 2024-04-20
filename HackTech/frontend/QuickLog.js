// QuickLog.js
import React, { useState } from 'react';
import './QuickLog.css'; // Import CSS file for styling

function QuickLog() {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Handle option selection here, e.g., fetch relevant data based on the selected option
  };

  return (
    <div className="quick-log">
      <h1>Quick Log</h1>
      <div className="options">
        <button
          className={selectedOption === 'all' ? 'selected' : ''}
          onClick={() => handleOptionSelect('all')}
        >
          All Past Images and Data
        </button>
        <button
          className={selectedOption === 'week' ? 'selected' : ''}
          onClick={() => handleOptionSelect('week')}
        >
          Images and Data from the Last Week
        </button>
        <button
          className={selectedOption === 'important' ? 'selected' : ''}
          onClick={() => handleOptionSelect('important')}
        >
          Important Images and Data
        </button>
      </div>
      {/* Render content based on selected option */}
      {selectedOption && (
        <div className="selected-option-content">
          {/* Content based on the selected option */}
          Selected Option: {selectedOption}
        </div>
      )}
    </div>
  );
}

export default QuickLog;
