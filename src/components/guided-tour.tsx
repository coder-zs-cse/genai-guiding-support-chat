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
      
      // First check if element already exists
      const existingElement = document.querySelector(selector);
      if (existingElement) {
        resolve(existingElement);
        return;
      }

      // If not, create a mutation observer to watch for DOM changes
      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        } else if (Date.now() - startTime > timeout) {
          observer.disconnect();
          reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Also keep checking with requestAnimationFrame as a fallback
      const checkElement = () => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        } else if (Date.now() - startTime > timeout) {
          observer.disconnect();
          reject(new Error(`Element ${selector} not found within ${timeout}ms`));
        } else {
          requestAnimationFrame(checkElement);
        }
      };
      checkElement();
    });
  };

  useEffect(() => {
    // Delay tour start slightly to ensure DOM is ready
    const initTour = async () => {
      try {
        // Wait for document to be fully loaded
        if (document.readyState !== 'complete') {
          await new Promise(resolve => window.addEventListener('load', resolve, { once: true }));
        }

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
        
        // Add steps after ensuring tour is initialized
        for (const step of steps) {
          try {
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
          } catch (error) {
            console.warn(`Failed to add step ${step.id}:`, error);
          }
        }

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

        // Start tour with a small delay
        setTimeout(() => tour.start(), 100);
      } catch (error) {
        console.error('Failed to initialize tour:', error);
        onEnd(); // Call onEnd if tour fails to initialize
      }
    };

    initTour();

    return () => {
      if (tourRef.current) {
        tourRef.current.cancel();
      }
    };
  }, [steps, onEnd]);

  return null;
};

export default GuidedTour;