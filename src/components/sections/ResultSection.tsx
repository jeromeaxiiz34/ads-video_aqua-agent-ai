import { useEffect, useState } from "react";
import { TrendingUp, Check, Clock } from "lucide-react";
import { videoContent } from "@/data/content";
import logoFull from "@/assets/logo_axiiz_full.png";


export const ResultSection = () => {
  const [showStats, setShowStats] = useState(false);
  const [conversions, setConversions] = useState(0);
  const [appointments, setAppointments] = useState(0);

  const targetConversions = videoContent.result.stats[0].value;
  const targetAppointments = videoContent.result.stats[2].value;

  useEffect(() => {
    const statsTimer = setTimeout(() => setShowStats(true), 500);

    // Animate counters
    if (showStats) {
      const conversionInterval = setInterval(() => {
        setConversions((prev) => {
          if (prev >= targetConversions) {
            clearInterval(conversionInterval);
            return targetConversions;
          }
          return prev + 1;
        });
      }, 30);

      const appointmentInterval = setInterval(() => {
        setAppointments((prev) => {
          if (prev >= targetAppointments) {
            clearInterval(appointmentInterval);
            return targetAppointments;
          }
          return prev + 2;
        });
      }, 20);

      return () => {
        clearInterval(conversionInterval);
        clearInterval(appointmentInterval);
      };
    }

    return () => clearTimeout(statsTimer);
  }, [showStats, targetConversions, targetAppointments]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <img src={logoFull} alt="Axiiz" className="h-8 w-auto" />
      </div>

      {/* Glowing WhatsApp Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      {showStats && (
        <div className="relative z-10 space-y-8 w-full animate-fade-in">
          {/* Title */}
          <h2 className="text-white text-3xl font-bold text-center mb-8">{videoContent.result.title}</h2>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Conversions */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">{videoContent.result.stats[0].prefix}{conversions}{videoContent.result.stats[0].suffix}</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">{videoContent.result.stats[0].label}</p>
            </div>

            {/* Zero Leads Lost */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter delay-100">
              <div className="flex items-center justify-between mb-2">
                <Check className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">{videoContent.result.stats[1].value}</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">{videoContent.result.stats[1].label}</p>
            </div>

            {/* Automated Appointments */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter delay-200">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">{videoContent.result.stats[2].prefix}{appointments}{videoContent.result.stats[2].suffix}</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">{videoContent.result.stats[2].label}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
