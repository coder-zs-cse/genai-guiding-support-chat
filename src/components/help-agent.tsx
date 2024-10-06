import React, { useState } from 'react';
import { CopilotTextarea } from "@copilotkit/react-textarea";


interface HelpAgentProps {
    onStartTour: (steps: any[]) => void;
}

const HelpAgent: React.FC<HelpAgentProps> = ({ onStartTour }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async () => {
    // Here, we would typically make an API call to process the query
    // For this example, we'll simulate a response
    const simulatedResponse = [
      { element: '#step1', content: 'Click on the "Edit" button' },
      { element: '#step2', content: 'Select your image' },
      { element: '#step3', content: 'Click on "Remove Background"' },
    ];

    onStartTour(simulatedResponse);
  };

  return (
    <div className="help-agent">
      <h2>How can I help you?</h2>
      <CopilotTextarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask me anything about the application..."
        autosuggestionsConfig={{
          textareaPurpose: 'how to access various features of the application',
          chatApiConfigs: {
            suggestionsApiConfig: {
              maxTokens: 30,
            }
          }
        }}
      />
      <button onClick={handleSubmit}>Get Help</button>
    </div>
  );
};

export default HelpAgent;