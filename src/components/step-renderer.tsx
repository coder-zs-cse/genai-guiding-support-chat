import React from 'react';
import GuidedTour, { Step } from "@/components/guided-tour";

interface StepRendererProps {
  step: Step;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const StepRenderer: React.FC<StepRendererProps> = ({ step, onNext, onPrev, isFirstStep, isLastStep }) => {
  return (
    <div className="step-renderer highlight" style={{
      // position: 'absolute',
      // top: `${step.top}px`,
      // left: `${step.left}px`,
      padding: '10px',
      background: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      zIndex: 1000
    }}>
      <p>{step?.description}</p>
      <div>
        {!isFirstStep && <button onClick={onPrev}>Previous</button>}
        <button onClick={onNext}>{isLastStep ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  );
};

export default StepRenderer;