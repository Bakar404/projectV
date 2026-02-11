import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * PixelCharacter Component
 * Displays an animated pixel art character that delivers the love letter
 *
 * Animation states:
 * - walking: Character walks in from the left
 * - idle: Character stands while letter is being read
 * - celebrating: Character celebrates when "Yes" is clicked
 */

const PixelCharacter = ({ state = "idle" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  // Idle animation (subtle bounce between two frames)
  useEffect(() => {
    if (state === "idle") {
      const idleInterval = setInterval(() => {
        setCurrentFrame((prev) => (prev === 0 ? 1 : 0));
      }, 600);
      return () => clearInterval(idleInterval);
    }
  }, [state]);

  // Walking animation
  useEffect(() => {
    if (state === "walking") {
      const walkInterval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % 4);
      }, 150);
      return () => clearInterval(walkInterval);
    }
  }, [state]);

  // Celebrating animation (faster alternating)
  useEffect(() => {
    if (state === "celebrating") {
      const celebrateInterval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % 4);
      }, 200);
      return () => clearInterval(celebrateInterval);
    }
  }, [state]);

  const getCharacterImage = () => {
    if (state === "walking") {
      // Use walking frames
      const walkFrames = [
        "/character-walk1.png",
        "/character-walk2.png",
        "/character-walk3.png",
        "/character-walk4.png",
      ];
      return walkFrames[currentFrame];
    } else if (state === "celebrating") {
      // Use all poses for celebration
      const celebrateFrames = [
        "/character-stand1.png",
        "/character-stand2.png",
        "/character-stand3.png",
        "/character-stand4.png",
      ];
      return celebrateFrames[currentFrame];
    } else {
      // Idle - gentle alternation
      const idleFrames = ["/character-stand1.png", "/character-stand2.png"];
      return idleFrames[currentFrame];
    }
  };

  return (
    <motion.div
      initial={state === "walking" ? { x: -100, opacity: 0 } : { opacity: 1 }}
      animate={
        state === "walking"
          ? { x: 0, opacity: 1 }
          : state === "celebrating"
            ? {
                y: [0, -10, 0, -15, 0],
                scale: [1, 1.1, 1, 1.15, 1],
                rotate: [0, -5, 5, -5, 0],
              }
            : { opacity: 1 }
      }
      transition={
        state === "walking"
          ? { duration: 1.5, ease: "easeOut" }
          : state === "celebrating"
            ? { duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }
            : { duration: 0.3 }
      }
      className="flex items-end justify-center"
    >
      <img
        src={getCharacterImage()}
        alt="Character"
        className="w-20 h-20 md:w-28 md:h-28 object-contain"
        style={{
          imageRendering: "pixelated",
          imageRendering: "-moz-crisp-edges",
          imageRendering: "crisp-edges",
        }}
      />
    </motion.div>
  );
};

export default PixelCharacter;
