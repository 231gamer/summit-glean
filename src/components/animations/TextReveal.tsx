import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  type?: "words" | "characters" | "lines";
  className?: string;
  once?: boolean;
}

export function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  type = "words",
  className = "",
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-50px",
    amount: 0.3,
  });

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "characters" ? 0.03 : 0.1,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  if (type === "characters") {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={className}
        style={{ display: "inline-block" }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            style={{
              display: "inline-block",
              whiteSpace: char === " " ? "pre" : "normal",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === "words") {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={className}
        style={{ display: "inline-block" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            style={{
              display: "inline-block",
              marginRight: "0.25em",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Default: render as regular text with fade-in
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}