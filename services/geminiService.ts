import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateRomanticPoem = async (topic: string, mood: string = 'romantic'): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  try {
    const prompt = `Write a short, deeply touching, and rhyming 4-line poem for my partner's birthday. 
    Focus specifically on this topic/memory: "${topic}".
    The mood should be ${mood}. 
    Keep it personal, sweet, and evocative. Do not include a title.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 150,
      }
    });

    return response.text || "My love for you is beyond words...";
  } catch (error) {
    console.error("Error generating poem:", error);
    throw new Error("Could not generate poem at this moment.");
  }
};
