import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });

      const reply = response.choices[0]?.message?.content || "Sorry, I didn't understand that.";

      return res.status(200).json({ reply });
    } catch (error) {
      console.error("OpenAI API Error:", error);  // ✅ Now using the error
      return res.status(500).json({ error: "Failed to fetch response from OpenAI." });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
