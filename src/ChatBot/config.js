import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Legal Assistant",
  initialMessages: [
    createChatBotMessage(
      `Hello! How may I be of help with your legal question?`
    ),
  ],
};

export default config;