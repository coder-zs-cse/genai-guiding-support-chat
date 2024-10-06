import React, { useState, useEffect, useCallback } from 'react';
import StepRenderer from './step-renderer';

export interface Step {
  id: string;
  highlightSelector: string;
  description: string;
}

interface GuidedTourProps {
    steps: Step[];
    onEnd: () => void;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ steps, onEnd }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const waitForElement = useCallback((selector: string, callback: (element: Element) => void, timeout = 5000) => {
    const startTime = Date.now();
    const checkElement = () => {
      const element = document.querySelector(selector);
      if (element) {
        callback(element);
      } else if (Date.now() - startTime < timeout) {
        setTimeout(checkElement, 100);
      } else {
        console.log(`Element with selector ${selector} not found within ${timeout}ms`);
      }
    };
    checkElement();
  }, []);

  useEffect(() => {
    console.log(`Current step: ${currentStep}`); // Logging current step
    const selector = `#${steps[currentStep].highlightSelector}`;
    const style = document.createElement('style');
    style.innerHTML = `${selector} { outline: 2px solid blue; box-shadow: 0 0 10px rgba(0,0,255,0.5); }`;
    document.head.appendChild(style);

    // waitForElement(selector, (targetElement) => {
    //   targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
    //   const handleElementClick = () => {
    //     handleNext();
    //   };
    //   targetElement.addEventListener('click', handleElementClick);

    //   return () => {
    //     targetElement.removeEventListener('click', handleElementClick);
    //   };
    // });

    return () => {
      document.head.removeChild(style);
    };
  }, [currentStep, steps, waitForElement]);

  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prevStep => {
        const nextStep = prevStep + 1;
        console.log(`Moving to step: ${nextStep}`); // Logging next step
        return nextStep;
      });
    } else {
      handleClose();
    }
  }, [currentStep, steps.length]);

  const handlePrev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  }, [currentStep]);

  const handleClose = useCallback(() => {
    onEnd();
  }, [onEnd]);

  return (
    <div className="guided-tour  ">
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