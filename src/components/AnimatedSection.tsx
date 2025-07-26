"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0.1,
  y = 40,
  scale = 1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0, scale: 1 });
  }, [inView, controls]);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y, scale }}
      animate={controls}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
} 