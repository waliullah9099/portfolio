"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * 538,
});

const Star = ({ size, color }: { size: string; color: string }) => {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateRandomPosition = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 538,
    });

    setRandomPosition(generateRandomPosition());
  }, []);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      initial={{
        x: randomPosition.x,
        y: randomPosition.y,
        opacity: 0.6,
      }}
      animate={{
        x: [randomPosition.x, randomPosition.x + Math.random() * 100 - 50],
        y: [randomPosition.y, randomPosition.y + Math.random() * 100 - 50],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: Math.random() * 4 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default Star;
