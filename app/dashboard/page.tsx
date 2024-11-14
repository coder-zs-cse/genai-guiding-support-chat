"use client";
import React, { useState } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotPopup, useCopilotChatSuggestions  } from "@copilotkit/react-ui";
import GuidedTour, { Step } from "@/components/guided-tour";
import { navbar } from "@/constants/navbar";
import { sampleGuides } from "@/constants/sampleGuides";

const App = () => {
  const [tourSteps, setTourSteps] = useState<Step[]>([]);
  const [isTourActive, setIsTourActive] = useState(false);

  useCopilotReadable({
    description: "Entire navbar structure",
    value: navbar,
  });

  useCopilotReadable({
    description: "Sample guides with steps",
    value: sampleGuides,
  });

  useCopilotChatSuggestions(
    {
      instructions: "What guides can user possibly take?",
    },
    [navbar],
  );

  useCopilotAction({
    name: "buildSteps",
    description: "Build a guide with steps as per user query",
    parameters: [
      {
        name: "steps",
        description: "List of steps to be displayed in the guided tour",
        type: "object[]",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Unique identifier for the step",
              required: true,
            },
            attachTo: {
              type: "object",
              properties: {
                element: {
                  type: "string",
                  description: "CSS selector for the element to be highlighted",
                  required: true,
                },
                on: {
                  type: "string",
                  enum: ["top", "bottom", "left", "right"],
                  description: "Position of the tooltip relative to the element",
                  required: true,
                },
              },
              required: true,
            },
            text: {
              type: "string",
              description: "Description of the step",
              required: true,
            },
            advanceOn: {
              type: "object",
              properties: {
                selector: { type: "string", required: true },
                event: { type: "string", required: true }
              },
              required: true,
              description: "Specifies which element and event triggers the next step"
            }
          }
        }
      }
    ],
    handler: (args: { steps: Step[] }) => {
      const stepsWithAdvance = args.steps.map(step => ({
        ...step,
        buttons: [],
        advanceOn: {
          selector: step.attachTo.element,
          event: 'click'
        }
      }));
      
      setTourSteps(stepsWithAdvance);
      setIsTourActive(true);
    }
  });

  const endTour = () => {
    setIsTourActive(false);
    setTourSteps([]);
  };

  return (
    <div className="app relative">
      {/* <HelpAgent onStartTour={startTour} /> */}
      <CopilotPopup
        labels={{
          title: "Support Chat",
          initial: "Ask me anything about the application",
        }}
      />
      {isTourActive && <GuidedTour steps={tourSteps} onEnd={endTour} />}
    </div>
  );
};

export default App;
