import React, { useEffect, useRef } from 'react';
import Shepherd, { Tour } from 'shepherd.js';

export interface Step {
  id: string;
  attachTo: {
    element: string;
    on: 'top' | 'bottom' | 'left' | 'right';
  };
  text: string;
  advanceOn?: {
    selector: string;
    event: string;
  };
}

interface GuidedTourProps {
  steps: Step[];
  onEnd: () => void;
}

const GuidedTour: React.FC<GuidedTourProps> = ({ steps, onEnd }) => {
  const tourRef = useRef<Tour | null>(null);

  const waitForElement = (selector: string, timeout = 10000): Promise<Element> => {
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
        scrollTo: true,
        buttons: [],
      }
    });
    
    tourRef.current = tour;
    
    steps.forEach((step) => {
      tour.addStep({
        id: step.id,
        attachTo: step.attachTo,
        text: step.text,
        beforeShowPromise: () => waitForElement(step.attachTo.element),
        advanceOn: step.advanceOn || {
          selector: step.attachTo.element,
          event: 'click'
        },
        buttons: []
      });
    });

    tour.on('complete', () => {
      setTimeout(onEnd, 0);
    });
    
    tour.on('cancel', () => {
      setTimeout(onEnd, 0);
    });

    const lastStepIndex = steps.length - 1;
    tour.on('show', (evt) => {
      if (evt.step.id === steps[lastStepIndex].id) {
        const element = document.querySelector(steps[lastStepIndex].attachTo.element);
        if (element) {
          element.addEventListener('click', () => {
            tour.complete();
          }, { once: true });
        }
      }
    });

    tour.start();

    return () => {
      if (tourRef.current) {
        tourRef.current.cancel();
      }
    };
  }, [steps, onEnd]);

  return null;
};

export default GuidedTour;