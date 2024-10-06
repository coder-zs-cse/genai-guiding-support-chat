'use client'

import React, { useState } from 'react';
import GuidedTour, { Step } from '@/components/guided-tour';

const App: React.FC = () => {
  const [isTourActive, setIsTourActive] = useState(false);

  const steps: Step[] = [
    {
      id: 'step1',
      attachTo: { element: '#file', on: 'bottom' },
      text: 'Open the File menu'
    },
    {
      id: 'step2',
      attachTo: { element: '#import', on: 'right' },
      text: 'Click on Import'
    },
    {
      id: 'step3',
      attachTo: { element: '#import-audio', on: 'right' },
      text: 'Select Audio'
    },
    {
      id: 'step4',
      attachTo: { element: '#import-audio-url', on: 'right' },
      text: 'Choose From URL'
    }
  ];

  const handleStartTour = () => {
    setIsTourActive(true);
  };

  const handleEndTour = () => {
    // Delay setting isTourActive to false
    // setIsTourActive(false);
  };

  return (
    <div className=' '>
      <h1 id="welcome-message" className='inline-block'>Welcome to Our App</h1>
      <ul id="feature-list" className='flex justify-between'>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
      <button id="get-started-button" className='bg-blue-500 text-white p-2 rounded-md w-fit'>Get Started</button>
      <button onClick={handleStartTour} className='bg-blue-500 text-white p-2 rounded-md w-fit'>Start Tour</button>

      {isTourActive && (
        <GuidedTour 
          steps={steps} 
          onEnd={handleEndTour}
          key={isTourActive ? 'active' : 'inactive'}
        />
      )}
    </div>
  );
};

export default App;
