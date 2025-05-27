'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.15 }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
} 