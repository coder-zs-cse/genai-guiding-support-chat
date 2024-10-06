# GenAI Powered Guiding-Tour-Navigation Chat Feature
This project implements a GenAI-powered Guiding Tour generation support Chat feature using Next.js 14 with TypeScript. It leverages the CopilotKit library for context understanding and tour building, Groq API for AI models, and Shepherd.js for the UI of tour guides.

*Ask a query like 'How do i import audio from URL?' and let the AI do the magic for you!*

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
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Install dependencies:
```
npm install
# or
yarn install
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
# or
yarn dev
```

Open your browser and navigate to ```http://localhost:3000```

## Key Components
CopilotKit Integration > This project uses the following hooks from CopilotKit:

- useCopilotAction: For handling tour-related actions
- useCopilotReadable: For reading and understanding the app context
- useCopilotChatSuggestions: For generating chat suggestions during the tour
