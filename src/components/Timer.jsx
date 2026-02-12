import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { QUIZ_CONFIG } from '../constants';

const Timer = memo(({ duration = QUIZ_CONFIG.TIMER_DURATION, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const onTimeUpRef = useRef(onTimeUp);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    setTimeLeft(duration);
    hasTriggeredRef.current = false;
  }, [duration]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  useEffect(() => {
    if (timeLeft === 0 && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      onTimeUpRef.current();
    }
  }, [timeLeft]);

  const formatTime = useCallback((seconds) => {
    return `0:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const isWarning = timeLeft <= QUIZ_CONFIG.TIMER_WARNING_THRESHOLD;

  return (
    <div className="flex items-center justify-center">
      <div className={`text-xl sm:text-2xl font-bold px-3 sm:px-4 py-2 rounded-lg transition-colors ${
        isWarning ? 'text-red-600 bg-red-50' : 'text-gray-800 bg-gray-100'
      }`}>
        {formatTime(timeLeft)}
      </div>
    </div>
  );
});

Timer.displayName = 'Timer';

export default Timer;
