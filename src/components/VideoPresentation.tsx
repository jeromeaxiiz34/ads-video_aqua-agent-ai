import { useState, useEffect } from "react";
import { HookSection } from "./sections/HookSection";
import { ProblemSection } from "./sections/ProblemSection";
import { SolutionSection } from "./sections/SolutionSection";
import { ResultSection } from "./sections/ResultSection";
import { CTASection } from "./sections/CTASection";

export const VideoPresentation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { component: HookSection, duration: 6000 }, // 0-6s
    { component: ProblemSection, duration: 9000 }, // 7-15s
    { component: SolutionSection, duration: 13000 }, // 16-28s
    { component: ResultSection, duration: 8000 }, // 29-36s
    { component: CTASection, duration: 4000 }, // 37-40s
  ];

  useEffect(() => {
    const totalDuration = sections[currentSection].duration;
    const interval = 50; // Update every 50ms for smooth progress
    let elapsed = 0;

    const progressTimer = setInterval(() => {
      elapsed += interval;
      const progressPercent = (elapsed / totalDuration) * 100;
      setProgress(progressPercent);

      if (elapsed >= totalDuration) {
        clearInterval(progressTimer);
        if (currentSection < sections.length - 1) {
          setCurrentSection(currentSection + 1);
          setProgress(0);
        } else {
          // Video finished, restart
          setTimeout(() => {
            setCurrentSection(0);
            setProgress(0);
          }, 1000);
        }
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [currentSection]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="relative w-full h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Video Container - Vertical Format */}
      <div className="relative w-full max-w-[360px] h-[640px] bg-whatsapp-dark rounded-2xl overflow-hidden shadow-2xl">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-whatsapp-gray/30 z-50">
          <div
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Current Section */}
        <div className="w-full h-full overflow-y-auto">
          <CurrentComponent />
        </div>

        {/* Section Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? "w-8 bg-primary"
                  : index < currentSection
                  ? "w-1 bg-primary/50"
                  : "w-1 bg-whatsapp-gray/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
