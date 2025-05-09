'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFetchBot } from '../api';

export function ChatWidget() {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); 
  const { fetchBotResponse } = useFetchBot();

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');
    setLoading(true); 

    const botReply = await fetchBotResponse(userMessage);
    setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    setLoading(false); 
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const closeChat = () => setIsOpen(false);

  return (
    <div>
      {/* Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={toggleChat}
            className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <span className="text-lg font-semibold">Chat</span>
          </button>
        </div>
      )}

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="fixed bottom-5 right-5 w-[350px] max-w-full p-4 bg-blue-700 text-white rounded-lg shadow-lg z-40"
          >
            <button
              onClick={closeChat}
              className="absolute top-2 right-2 text-2xl text-white focus:outline-none"
            >
              &times;
            </button>

            <div className="text-center mb-4">
              <label className="text-2xl font-bold">Your Chat Bot</label>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1"
                >
                  <div className="text-sm font-semibold text-gray-200">
                    {message.sender === 'user' ? 'You' : 'Bot'}:
                  </div>
                  <div
                    className={`p-3 rounded-lg shadow-sm ${
                      message.sender === 'user' ? 'bg-gray-800' : 'bg-gray-700'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-center text-gray-300"
                >
                  Typing...
                </motion.div>
              )}
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !loading && handleSendMessage()} // Disable enter if loading
                className="p-3 rounded-l-lg w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Ask a question..."
                disabled={loading} // Disable input field when loading
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-green-600 hover:bg-green-500 text-white rounded-r-lg transition duration-200 ease-in-out"
                disabled={loading} 
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
