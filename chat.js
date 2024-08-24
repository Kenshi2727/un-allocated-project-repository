// Make sure to include these imports:
import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.gooGemini);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
