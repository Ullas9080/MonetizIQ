import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminiPrompt } from "../configs/geminiPrompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const geminiAuth = async (req, res) => {
  try {
    const userId = req.params.userId; 

    const prompt = await geminiPrompt(userId);
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    res.json({ suggestions: text }); 

  } catch (error) {
    console.error("Gemini Error:", error.message);
    res.status(500).json({ 
      suggestions: "AI suggestions temporarily unavailable. Try again soon." 
    });
  }
};