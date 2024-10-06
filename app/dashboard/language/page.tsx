"use client";

import React, { useState } from "react";
import MicButton from "@/components/global/Mic/Mic";
import { speechToText } from "@/api/speechAPI";
import { useCopilotChat } from "@copilotkit/react-core";
import { Role, TextMessage } from "@copilotkit/runtime-client-gql";

const LanguagePage: React.FC = () => {
  const [transcript, setTranscript] = useState("");
  const {
    visibleMessages, // An array of messages that are currently visible in the chat.
    appendMessage, // A function to append a message to the chat.
    setMessages, // A function to set the messages in the chat.
    deleteMessage, // A function to delete a message from the chat.
    reloadMessages, // A function to reload the messages from the API.
    stopGeneration, // A function to stop the generation of the next message.
    isLoading, // A boolean indicating if the chat is loading.
  } = useCopilotChat();

  console.log("visibleMessages", visibleMessages);
  
  const handleRecordingComplete = async (audio: Blob) => {
    try {
      const response = await speechToText(audio);
      console.log("Transcript:", response.transcript);
      appendMessage(
        new TextMessage({
          content: response.transcript,
          role: Role.User,
        }),
      );
      setTranscript(response.transcript);
    } catch (error) {
      console.error("Error converting speech to text:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Speech to Text</h1>
      <MicButton onRecordingComplete={handleRecordingComplete} />
      <p>{transcript}</p>
    </div>
  );
};

export default LanguagePage;
