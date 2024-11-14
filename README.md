# GenAI Powered Guiding-Tour-Navigation Chat Feature
This project implements a GenAI-powered Guiding Tour generation support Chat feature using Next.js 14 with TypeScript. It leverages the CopilotKit library for application context understanding and tour building, Groq API for AI models, and Shepherd.js for the UI of tour guides.

Tired of navigating through 100s of features, buttons, inputs, forms in complex websites?    
for ex like Video Editing Softwares, or Cloud Providers websites, package documentation.  
### *Ask a query like 'How do i import audio from URL?' and let the AI do the magic for you!*

![image](https://github.com/user-attachments/assets/f4f01b20-5dcd-47c0-8c94-e57d60f8f279)

![image](https://github.com/user-attachments/assets/aa902347-5fa5-45e1-99e5-dbc24448573e)

![image](https://github.com/user-attachments/assets/6a48d730-1d8f-4857-9dc9-51a544ad5893)

![image](https://github.com/user-attachments/assets/23004ab5-c190-4316-87e7-5bde2ada87f5)

![image](https://github.com/user-attachments/assets/611c8362-9865-4f04-a05a-0693046c97d9)

## Tech Stack

- Next.js 14
- TypeScript
- CopilotKit
- Groq API
- Shepherd.js

## Prerequisites

1. Groq API key

## Installation

Clone the repository:
```
git clone https://github.com/coder-zs-cse/genai-guiding-support-chat.git
cd genai-guiding-support-chat
```

Install dependencies:
```
npm install
# or
pnpm install
```

Set up environment variables:
Create a .env.local file in the root directory and add your Groq API key:
```
GROQ_API_KEY=your_api_key_here
```

Usage

Start the development server:
```
npm run dev
```

Open your browser and navigate to ```http://localhost:3000```

## Key Components
CopilotKit Integration > This project uses the following hooks from CopilotKit:

- useCopilotAction: For handling tour generating actions.
- useCopilotReadable: For reading and understanding the application context.
- useCopilotChatSuggestions: For generating chat suggestions for guiding tours.
