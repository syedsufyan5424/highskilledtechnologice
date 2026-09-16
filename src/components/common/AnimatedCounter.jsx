import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    const totalSteps = 60;
    const increment = end / totalSteps;
    const stepTime = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formatted = Number.isInteger(value)
    ? Math.floor(count)
    : count.toFixed(1);

  return (
    <span ref={ref} className="font-extrabold text-white">
      {formatted}
      {suffix}
    </span>
  );
}
