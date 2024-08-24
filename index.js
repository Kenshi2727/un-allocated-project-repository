import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'; 
import fs from 'fs';
dotenv.config()
// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.gooGemini);
// Get the generative model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Write a story about a magic backpack.";
// const result = await model.generateContent(prompt);
// console.log(result.response.text());

// function fileToGenerativePart(path, mimeType) {
//     return {
//       inlineData: {
//         data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//         mimeType,
//       },
//     };
//   }
  
//   const prompt = "Describe how this product might be manufactured.";
//   const mediaPath = "images";
//   // Note: The only accepted mime types are some image types, image/*.
//   const imagePart = fileToGenerativePart(
//     `${mediaPath}/future.png`,
//     "image/png",
//   );
  
//   const result1 = await model.generateContent([prompt, imagePart]);
//   console.log(result1.response.text());

  console.log("<------------------------------------------------------------------------------------------------------------------------------>");
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" },{ text: "I have 2 dogs in my house." },{ text: "How many paws are in my house?" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?"},{text:"That's wonderful!  Do you have any favorite breeds?  What are their names? �  I'd love to hear more about your furry friends."},{text:"That's a fun question! Since you have two dogs, and each dog has four paws, there are a total of **eight** paws in your house! �"}],
      },
    ],
  });
  let result = await chat.sendMessage("How you calculated that?");
  console.log(result.response.text());
  result = await chat.sendMessage("Man i killed one of them out of anger! What to do?");
  console.log(result.response.text());
  