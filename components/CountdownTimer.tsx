
import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return null;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);

      if (newTimeLeft) {
        setTimeLeft(newTimeLeft);
      } else {
        // Timer has finished
        setTimeLeft(null);
        clearInterval(timerId);

        // Show notification for 10 seconds before redirecting
        setTimeout(() => {
          window.location.href = 'https://mtsn4jbg.netlify.app';
        }, 10000);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetDate]);

  const timerComponents: React.ReactElement[] = [];

  if (timeLeft) {
      Object.keys(timeLeft).forEach((interval) => {
        const value = timeLeft[interval as keyof TimeLeft];
        if (value === undefined) return;
        
        timerComponents.push(
          <div key={interval} className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]">
            <span className="text-2xl sm:text-3xl font-bold text-blue-500 dark:text-blue-400">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs sm:text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
              {interval === 'days' ? 'Hari' : interval === 'hours' ? 'Jam' : interval === 'minutes' ? 'Menit' : 'Detik'}
            </span>
          </div>
        );
      });
  }

  return (
    <div className="mt-8">
      {timerComponents.length > 0 ? (
        <>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-base font-semibold">
                Sistem akan kembali online dalam:
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4">
                {timerComponents}
            </div>
        </>
      ) : (
        <p className="text-green-600 dark:text-green-400 mt-6 text-lg font-semibold animate-pulse">
          Waktu habis! Mengalihkan Anda ke situs baru kami...
        </p>
      )}
    </div>
  );
};
