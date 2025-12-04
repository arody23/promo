import { useEffect, useState } from "react";

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
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "sec" },
  ];

  return (
    <div className="flex items-center justify-center gap-3">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="glass-card px-4 py-3 min-w-[70px] animate-countdown">
            <div className="text-2xl md:text-3xl font-bold text-secondary">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs text-muted-foreground">{unit.label}</div>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl text-muted-foreground">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
