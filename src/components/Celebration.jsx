import React from "react";
import { motion } from "framer-motion";
import { PartyPopper, Heart as HeartIcon } from "lucide-react";

/**
 * Celebration Component
 * Displays the final celebration with floating hearts animation
 * Shown when the user clicks "Yes" to the Valentine question
 */

const Celebration = () => {
  // Generate multiple hearts with random positioning
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    size: 20 + Math.random() * 30,
  }));

  const confettiDots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center relative z-10"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4"
        style={{ color: "#ffb3c6" }}
      >
        Yeah Boi! <PartyPopper className="w-16 h-16" />
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-4xl font-semibold mb-4 flex items-center justify-center gap-3"
        style={{ color: "#ffb3c6" }}
      >
        I love you so much bbg!!{" "}
        <HeartIcon className="w-10 h-10" fill="currentColor" />
      </motion.p>

      {/* Floating Hearts Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            initial={{
              y: "100vh",
              x: `${heart.left}vw`,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 1, 1, 0],
              rotate: [0, 15, -15, 0],
              scale: [0.8, 1.2, 1, 0.8],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              fontSize: `${heart.size}px`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
          >
            <HeartIcon
              className="w-full h-full"
              fill="#ffb3c6"
              color="#ffb3c6"
            />
          </motion.div>
        ))}

        {/* Confetti Dots */}
        {confettiDots.map((dot) => (
          <motion.div
            key={`dot-${dot.id}`}
            initial={{
              y: "-10vh",
              x: `${dot.left}vw`,
              opacity: 0,
            }}
            animate={{
              y: "100vh",
              opacity: [0, 1, 1, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ["#ffb3c6", "#ffd6e0", "#cdb4db", "#bde0fe"][
                Math.floor(Math.random() * 4)
              ],
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Celebration;
