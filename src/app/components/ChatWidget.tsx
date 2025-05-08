"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatWidget() {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to manage chat visibility

  const handleSendMessage = async () => {
    const userMessage = input;
    setMessages([...messages, { user: userMessage, bot: "..." }]);
    setInput("");

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    setMessages([...messages, { user: userMessage, bot: data.reply }]);
  };

  // Toggle chat box visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Chat Bot Trigger Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={toggleChat}
          className="p-3 bg-purple-600 rounded-full text-white shadow-lg focus:outline-none hover:bg-purple-700"
        >
          <span className="text-xl">💬</span> {/* You can replace this with an image/icon */}
        </button>
      </div>

      {/* Chat Widget UI */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-[350px] max-w-full p-4 bg-blue-700 text-white rounded-lg shadow-lg">
          {/* Chat Bot Label */}
          <div className="text-center mb-4">
            <label className="text-2xl font-bold text-white-500">Your Chat Bot</label>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[400px]">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2 mb-2">
                  <div className="text-sm font-semibold">You:</div>
                  <div className="bg-gray-800 p-3 rounded-lg shadow-sm">
                    {message.user}
                  </div>
                  <div className="text-sm font-semibold">Bot:</div>
                  <div className="bg-gray-700 p-3 rounded-lg shadow-sm">
                    {message.bot}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-3 rounded-l-lg w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white-500"
              placeholder="Ask a question..."
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-green-600 hover:bg-green-500 text-white rounded-r-lg transition duration-200 ease-in-out"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
