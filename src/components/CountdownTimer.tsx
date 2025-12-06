import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "jours" },
    { value: timeLeft.hours, label: "heures" },
    { value: timeLeft.minutes, label: "minutes" },
    { value: timeLeft.seconds, label: "secondes" },
  ];

  return (
    <div className="glass-card p-4 md:p-8 lg:p-12 border-2 border-secondary/50 bg-gradient-to-br from-secondary/10 to-primary/10 relative overflow-hidden">
      {/* Background pulse effect */}
      <div className="absolute inset-0 bg-secondary/5 animate-pulse" />
      
      {/* Urgency header */}
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 relative z-10 flex-wrap">
        <Clock className="w-6 md:w-8 h-6 md:h-8 text-secondary animate-pulse shrink-0" />
        <span className="text-base md:text-xl lg:text-2xl font-bold text-secondary uppercase tracking-wider">
          Offre limitée !
        </span>
        <Clock className="w-6 md:w-8 h-6 md:h-8 text-secondary animate-pulse shrink-0" />
      </div>
      
      {/* Countdown units */}
      <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-4 relative z-10 flex-wrap">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-1 md:gap-2 lg:gap-4">
            <div className="bg-background/80 backdrop-blur-sm border border-secondary/30 rounded-xl md:rounded-2xl px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-6 min-w-[50px] md:min-w-[80px] lg:min-w-[120px] text-center shadow-lg shadow-secondary/20 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-4xl lg:text-6xl font-black text-secondary tabular-nums leading-none">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-[8px] md:text-xs lg:text-sm text-muted-foreground mt-0.5 md:mt-2 uppercase tracking-wider font-medium">
                {unit.label}
              </div>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="text-xl md:text-3xl lg:text-5xl text-secondary font-bold animate-pulse">:</span>
            )}
          </div>
        ))}
      </div>
      
      {/* Urgency message */}
      <p className="text-center text-muted-foreground mt-4 md:mt-6 text-xs md:text-sm lg:text-base relative z-10">
        Ne rate pas cette opportunité — les prix remontent après le <span className="text-secondary font-semibold">30 décembre 2025</span>
      </p>
    </div>
  );
};

export default CountdownTimer;
