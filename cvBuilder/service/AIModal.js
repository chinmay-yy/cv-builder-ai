// Import the required modules
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// Get the API key from environment variables
const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

// Get the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Configuration for text generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// Start a chat session with the AI model
export const AIChatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings if needed
  // history: Optional history of the conversation
});
