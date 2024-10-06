import React, { useState, useEffect } from 'react';
import StepRenderer from './step-renderer';

export interface Step {
  id: string;
  elementSelector: string;
  description: string;
}

interface GuidedTourProps {
    steps: Step[];
    onEnd: () => void;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ steps, onEnd }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const targetElement = document.querySelector(`#${steps[currentStep].elementSelector}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetElement.classList.add('highlight');
    }
  }, [currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      document.querySelector('.highlight')?.classList.remove('highlight');
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    document.querySelector('.highlight')?.classList.remove('highlight');
    onEnd();
  };

  return (
    <div className="guided-tour">
      <button className="guided-tour__close-btn" onClick={handleClose}>
        &times;
      </button>
      <StepRenderer
        step={steps[currentStep]}
        onNext={handleNext}
        onPrev={handlePrev}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === steps.length - 1}
      />
    </div>
  );
};

export default GuidedTour;