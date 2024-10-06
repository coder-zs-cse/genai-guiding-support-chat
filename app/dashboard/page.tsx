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
            highlightSelector: {
              type: "string",
              description: "CSS selector id for the element to be highlighted",
              required: true,
            },
            description: {
              type: "string",
              description: "Description of the step",
              required: true,
            }
          }
        }
      }
    ],
    handler: (args: { steps: { id: string, highlightSelector: string, description: string }[] }) => {
      console.log("args.steps", args.steps);

      setTourSteps(args.steps);
      setIsTourActive(true);
    }

  });

  // useCopilotAction({
  //   name: "buildSteps",
  //   description: "Build a guide with steps as per user query",
  //   parameters: [
  //     {
  //       name: "steps",
  //       description: "List of css selector id of buttons to be clicked",
  //       type: "string[]",
  //       items: {
  //         type: "string",
  //         description: "CSS selector id for the element to be clicked",
  //         required: true,
  //       },
  //     },
  //   ],
  //   handler: (args: { steps: string[] }) => {
  //     console.log("args.steps", args.steps);
  //     // setTourSteps(args.steps);
  //     // setIsTourActive(true);
  //   },
  // });
  const startTour = (steps: Step[]) => {
    setTourSteps(steps);
    setIsTourActive(true);
  };

  const endTour = () => {
    setIsTourActive(false);
    setTourSteps([]);
  };

  return (
    <div className="app debug relative ">
      {/* <HelpAgent onStartTour={startTour} /> */}
      <CopilotPopup
        labels={{
          title: "Support Chat",
          initial: "Ask me anything about the application",
        }}
      />
      Hello
      {isTourActive && <GuidedTour steps={tourSteps} onEnd={endTour} />}
    </div>
  );
};

export default App;
