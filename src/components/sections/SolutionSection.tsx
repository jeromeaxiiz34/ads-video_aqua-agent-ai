import { useEffect, useState } from "react";
import { Check, Zap, Bot, Calendar } from "lucide-react";

export const SolutionSection = () => {
  const [messages, setMessages] = useState<Array<{ id: number; text: string; isBot: boolean }>>([]);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    // Simulate WhatsApp conversation
    const conversation = [
      { id: 1, text: "Bonjour, je souhaite une assurance auto", isBot: false, delay: 500 },
      { id: 2, text: "Bonjour ! Je peux vous aider immédiatement. Quel type de véhicule ?", isBot: true, delay: 2000 },
      { id: 3, text: "Une Renault Clio essence", isBot: false, delay: 3500 },
      { id: 4, text: "Parfait ! Je propose un rendez-vous demain 14h avec un conseiller ?", isBot: true, delay: 5000 },
      { id: 5, text: "Oui parfait !", isBot: false, delay: 6500 },
    ];

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
      {/* WhatsApp Chat Mockup */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[320px] overflow-hidden mb-6">
        {/* WhatsApp Header */}
        <div className="bg-primary p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Agent IA Assurance</h3>
            <p className="text-white/80 text-xs">En ligne</p>
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
          {messages.length > 0 && messages.length < 5 && (
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
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-gray-800">Réponses instantanées ⚡</span>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Bot className="w-5 h-5 text-secondary" />
            </div>
            <span className="font-semibold text-gray-800">Qualification automatique 🤖</span>
          </div>
          <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <span className="font-semibold text-gray-800">Rendez-vous pris 24/7 📅</span>
          </div>
        </div>
      )}
    </div>
  );
};
