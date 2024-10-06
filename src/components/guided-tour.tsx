import React, { useEffect, useRef } from 'react';
import Shepherd, { Tour } from 'shepherd.js';

export interface Step {
  id: string;
  attachTo: {
    element: string;
    on:  'top' | 'bottom' | 'left' | 'right';
  };
  text: string;
}

interface GuidedTourProps {
  steps: Step[];
  onEnd: () => void;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ steps, onEnd }) => {
  const tourRef = useRef<Tour | null>(null);

  // Add this function to wait for an element to appear in the DOM
  const waitForElement = (selector: string, timeout = 5000): Promise<Element> => {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
          resolve(element);
        } else if (Date.now() - startTime > timeout) {
          reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        } else {
          requestAnimationFrame(checkElement);
        }
      };
      checkElement();
    });
  };

  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        arrow: true,
        classes: 'shepherd-theme-default',
        scrollTo: true
      }
    });
    tourRef.current = tour;
    
    steps.forEach((step, index) => {
      tour.addStep({
        id: step.id,
        attachTo: step.attachTo,
        text: step.text,
        beforeShowPromise: () => waitForElement(step.attachTo.element),
        buttons: [
          ...(index > 0 ? [{
            text: 'Back',
            action: tour.back
          }] : []),
          {
            text: index === steps.length - 1 ? 'Finish' : 'Next',
            action: index === steps.length - 1 ? tour.complete : tour.next
          }
        ]
      });
    });

    tour.on('complete', () => {
      setTimeout(onEnd, 0);
    });
    tour.on('cancel', () => {
      setTimeout(onEnd, 0);
    });

    tour.start();

    return () => {
      if (tourRef.current) {
        tourRef.current.cancel();
      }
    };
  }, [steps, onEnd]);

  return null; // Changed from <></> to null
};

export default GuidedTour;