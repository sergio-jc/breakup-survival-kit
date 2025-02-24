import { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
  message: string;
  articles?: unknown;
  videos?: unknown;
  questions?: unknown;
}

const socket = io("/");

export const useFetchMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({});

  const fetchMessages = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/messages");
    const data = await response.json();
    setMessages(data);
    setIsLoading(false);
  };

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [ message,...prevMessages]);
  };

  const generateResponse = (
    event: React.FormEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    if (message.length <= 1) return;
    console.log("me use generate Response");
    setGenerating(true);
    socket.emit("generate-response", message);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const recieveResponse = (response: string) => {
    console.log("🚀 ~ recieveResponse ~ response:", response);
    const formattedResponse = JSON.parse(response);
    setResponse(formattedResponse);
  };

  useEffect(() => {
    socket.on("response", recieveResponse);
    return () => {
      socket.off("response", recieveResponse);
    };
  }, []);

  return {
    messages,
    isLoading,
    response,
    addMessage,
    generateResponse,
    generating,
    setMessage
  };
};
