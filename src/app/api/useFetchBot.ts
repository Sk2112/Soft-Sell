// hooks/useBotResponse.js
import { useState } from "react";

const GEMINI_API_KEY = "AIzaSyAB3toCXdUR7jayMNakvMbY8mkv3jeUlfo"; // Move to env in production

export function useFetchBot() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBotResponse = async (userMessage :string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";

      return botText;
    } catch (err) {
      setError("Failed to fetch response.");
      return "Something went wrong.";
    } finally {
      setLoading(false);
    }
  };

  return { fetchBotResponse, loading, error };
}
