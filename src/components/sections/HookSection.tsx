import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { videoContent } from "@/data/content";
import logoFull from "@/assets/logo_axiiz_full.png";

export const HookSection = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Notification appears at 0.5s
    const notificationTimer = setTimeout(() => setShowNotification(true), 500);
    // Text appears at 1.5s
    const textTimer = setTimeout(() => setShowText(true), 1500);

    return () => {
      clearTimeout(notificationTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <img src={logoFull} alt="Axiiz" className="h-8 w-auto" />
      </div>

      {/* WhatsApp Notification Icon */}
      {showNotification && (
        <div className="absolute top-20 animate-pulse-notification">
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50" />
            <div className="relative bg-white p-6 rounded-full shadow-2xl">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
          </div>
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center animate-bounce-subtle">
            1
          </div>
        </div>
      )}

      {/* Hook Text */}
      {showText && (
        <div className="mt-48 animate-fade-in">
          <h1 className="text-white text-2xl font-bold text-center leading-tight px-4">
            {videoContent.hook.title}
          </h1>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
    </div>
  );
};
