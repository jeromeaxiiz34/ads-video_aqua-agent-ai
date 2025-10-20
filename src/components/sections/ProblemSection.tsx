import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall, Mail, AlertCircle } from "lucide-react";
import { videoContent } from "@/data/content";
import logoNoir from "@/assets/logo_orange_noir.png";

export const ProblemSection = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const iconTimer = setTimeout(() => setShowIcon(true), 300);
    const notifTimer = setTimeout(() => setShowNotifications(true), 800);
    const textTimer = setTimeout(() => setShowText(true), 2000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(notifTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <img src={logoNoir} alt="Axiiz" className="h-8 w-auto" />
      </div>

      {/* Overwhelmed Broker Visual */}
      <div className="relative mb-8">
        {showIcon && (
          <div className="animate-fade-in">
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              <AlertCircle className="w-24 h-24 text-red-500" />
            </div>
          </div>
        )}

        {/* Notification Burst */}
        {showNotifications && (
          <div className="absolute inset-0">
            <div className="absolute -top-8 -left-8 bg-red-500 p-3 rounded-full shadow-lg animate-pulse-notification">
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-red-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                23
              </span>
            </div>
            <div className="absolute -top-4 -right-12 bg-blue-500 p-3 rounded-full shadow-lg animate-pulse-notification delay-100">
              <PhoneCall className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-blue-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                15
              </span>
            </div>
            <div className="absolute -bottom-4 -left-6 bg-purple-500 p-3 rounded-full shadow-lg animate-pulse-notification delay-200">
              <Mail className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 bg-white text-purple-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                42
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Problem Text */}
      {showText && (
        <div className="animate-slide-up">
          <p className="text-gray-800 text-xl font-semibold text-center leading-tight mb-4">
            {videoContent.problem.subtitle.split('…')[0]}…
          </p>
          <p className="text-red-600 text-2xl font-bold text-center leading-tight">
            {videoContent.problem.subtitle.split('…')[1]}
          </p>
        </div>
      )}
    </div>
  );
};
