import React from 'react';

interface StepRendererProps {
  step: any;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const StepRenderer: React.FC<StepRendererProps> = ({ step, onNext, onPrev, isFirstStep, isLastStep }) => {
  return (
    <div className="step-renderer" style={{
      position: 'absolute',
      top: `${step.top}px`,
      left: `${step.left}px`,
      padding: '10px',
      background: 'white',
      border: '1px solid black',
      borderRadius: '5px',
      zIndex: 1000
    }}>
      <p>{step.content}</p>
      <div>
        {!isFirstStep && <button onClick={onPrev}>Previous</button>}
        <button onClick={onNext}>{isLastStep ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  );
};

export default StepRenderer;