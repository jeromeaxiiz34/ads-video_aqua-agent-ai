import { useEffect, useState, useRef } from "react";
import { Check, Zap, Bot, Calendar } from "lucide-react";
import { videoContent } from "@/data/content";
import favicon from "@/assets/favicone_orange.png";

export const SolutionSection = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; isBot: boolean }>>([]);
  const [showFeatures, setShowFeatures] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const conversation = videoContent.solution.conversation;

    const timers = conversation.map((msg) =>
      setTimeout(() => {
        setMessages((prev) => [...prev, msg]);
      }, msg.delay)
    );

    const featuresTimer = setTimeout(() => setShowFeatures(true), 7500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(featuresTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-whatsapp-lightGreen flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={favicon} alt="Axiiz" className="h-10 w-10" />
      </div>

      {/* WhatsApp Chat Mockup */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[320px] overflow-hidden mb-6">
        {/* WhatsApp Header */}
        <div className="bg-primary p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{videoContent.solution.chatHeader.name}</h3>
            <p className="text-white/80 text-xs">{videoContent.solution.chatHeader.status}</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-[280px] overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isBot ? "justify-start" : "justify-end"} animate-slide-up`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-xl ${
                  msg.isBot
                    ? "bg-white shadow-sm border border-gray-100 text-gray-800"
                    : "bg-primary text-white"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
          {messages.length > 0 && messages.length < videoContent.solution.conversation.length && (
            <div className="flex justify-start">
              <div className="bg-white shadow-sm border border-gray-100 p-3 rounded-xl flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing delay-200" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-typing delay-300" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feature Highlights */}
      {showFeatures && (
        <div className="space-y-3 w-full animate-fade-in">
          {videoContent.solution.features.map((feature, index) => {
            const IconComponent = feature.icon === "Zap" ? Zap : feature.icon === "Bot" ? Bot : Calendar;
            const bgColor = feature.color === "primary" ? "bg-primary/10" : "bg-secondary/10";
            const textColor = feature.color === "primary" ? "text-primary" : "text-secondary";
            
            return (
              <div key={index} className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                <div className={`${bgColor} p-2 rounded-lg`}>
                  <IconComponent className={`w-5 h-5 ${textColor}`} />
                </div>
                <span className="font-semibold text-gray-800">{feature.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
