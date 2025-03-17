import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error(
    "Ошибка: API-ключ OpenAI отсутствует! Убедитесь, что он указан в .env файле."
  );
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

try {
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

  console.log(completion.choices[0].message);
} catch (error) {
  console.error("Ошибка при получении ответа от OpenAI:", error.message);
}
