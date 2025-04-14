import { Gem } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from environment variable directly
const apiKey = import.meta.env.VITE_GEMENI_API_KEY;

// Add validation for API key
if (!apiKey) {
    console.error("Gemini API key is not configured");
    throw new Error("API key is required");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

// Add error handling for chat session
export const AIChatSession = model.startChat({
    generationConfig,
    history: [],
});

// Add error handling for content generation
export const generateContent = async (prompt) => {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Failed to generate content. Please check your API key configuration.");
    }
};
