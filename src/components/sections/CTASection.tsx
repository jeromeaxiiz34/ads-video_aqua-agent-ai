import { useEffect, useState } from "react";
import { Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { videoContent } from "@/data/content";
import logoFull from "@/assets/logo_axiiz_full.png";

export const CTASection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary via-secondary to-primary flex flex-col items-center justify-center p-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce-subtle" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-bounce-subtle delay-500" />
      </div>

      {showContent && (
        <div className="relative z-10 text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logoFull} alt="Axiiz Logo" className="h-16 w-auto animate-fade-in" />
          </div>

          {/* Main CTA Text */}
          <div className="space-y-4">
            <h2 className="text-white text-3xl font-bold leading-tight">
              {videoContent.cta.title}
            </h2>
            <p className="text-white/90 text-xl font-medium">{videoContent.cta.subtitle}</p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-bounce-subtle">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl group transition-all duration-300 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              {videoContent.cta.buttonText}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Small Badge */}
          <div className="pt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-white text-sm font-medium">{videoContent.cta.badge}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
