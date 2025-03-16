import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
console.log("API Key:", process.env.OPENAI_API_KEY ? "Loaded" : "MISSING");
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await client.chat.completions.create({
  model: "gpt-4o",
  max_tokens: 300,
  messages: [
    { role: "system", content: "Ти настроен на радостний разговор" },
    {
      role: "user",
      content: "Напиши смешную историю о программистах",
    },
  ],
});

console.log(completion);
console.log(completion.choices[0].message);
// console.log(completion.choices[0].message.content);
