"use client";
import React, { useState } from "react";
import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { CopilotPopup, useCopilotChatSuggestions  } from "@copilotkit/react-ui";
import { CopilotTextarea } from "@copilotkit/react-textarea";
import HelpAgent from "@/components/help-agent";
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
      instructions: "Suggest possible features to take guided tour of",
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
            }
          }
        }
      }
    ],
    handler: (args: { steps: Step[] }) => {
      console.log("args.steps", args.steps);
      setTourSteps(args.steps);
      setIsTourActive(true);
    }
  });

  const endTour = () => {
    setIsTourActive(false);
    setTourSteps([]);
  };

  return (
    <div className="app debug relat ">
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
