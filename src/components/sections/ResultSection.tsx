import { useEffect, useState } from "react";
import { TrendingUp, Check, Clock } from "lucide-react";

export const ResultSection = () => {
  const [showStats, setShowStats] = useState(false);
  const [conversions, setConversions] = useState(0);
  const [appointments, setAppointments] = useState(0);

  useEffect(() => {
    const statsTimer = setTimeout(() => setShowStats(true), 500);

    // Animate counters
    if (showStats) {
      const conversionInterval = setInterval(() => {
        setConversions((prev) => {
          if (prev >= 35) {
            clearInterval(conversionInterval);
            return 35;
          }
          return prev + 1;
        });
      }, 30);

      const appointmentInterval = setInterval(() => {
        setAppointments((prev) => {
          if (prev >= 100) {
            clearInterval(appointmentInterval);
            return 100;
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
  }, [showStats]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary flex flex-col items-center justify-center p-8">
      {/* Glowing WhatsApp Icon Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      {showStats && (
        <div className="relative z-10 space-y-8 w-full animate-fade-in">
          {/* Title */}
          <h2 className="text-white text-3xl font-bold text-center mb-8">Résultats Garantis</h2>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Conversions */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">{conversions}%</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">de conversions en plus</p>
            </div>

            {/* Zero Leads Lost */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter delay-100">
              <div className="flex items-center justify-between mb-2">
                <Check className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">0</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">lead perdu</p>
            </div>

            {/* Automated Appointments */}
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl animate-counter delay-200">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-primary" />
                <span className="text-5xl font-bold text-primary">{appointments}%</span>
              </div>
              <p className="text-gray-700 font-semibold text-lg">rendez-vous automatiques</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
