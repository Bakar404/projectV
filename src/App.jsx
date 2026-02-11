import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift } from "lucide-react";
import LetterCard from "./components/LetterCard";
import AudioPlayer from "./components/AudioPlayer";
import Celebration from "./components/Celebration";
import FallingPhotos from "./components/FallingPhotos";

/**
 * Main App Component
 * Orchestrates the romantic love letter experience
 *
 * Flow:
 * 1. Show landing page with "Open for a Surprise"
 * 2. Show letter with typewriter effect
 * 3. User reads through at their own pace
 * 4. After final line, show Valentine question
 * 5. When "Yes" is clicked, show celebration
 */

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [letterComplete, setLetterComplete] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [showNoButton, setShowNoButton] = useState(true);

  const handleLetterComplete = () => {
    setLetterComplete(true);
    // Small delay before showing the question
    setTimeout(() => {
      setShowQuestion(true);
    }, 500);
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setShowNoButton(false);
  };

  const handleOpenSurprise = () => {
    setShowLanding(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-2 py-8 md:p-4 overflow-hidden"
      style={{ backgroundColor: "#ffd6e0" }}
    >
      {/* Falling Photos Background - Only show during letter page */}
      {!showLanding && !accepted && <FallingPhotos />}

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <Heart
          className="absolute top-10 left-10 w-16 h-16"
          style={{ color: "#ffb3c6" }}
        />
        <Heart
          className="absolute top-20 right-20 w-14 h-14"
          style={{ color: "#cdb4db" }}
        />
        <Heart
          className="absolute bottom-20 left-20 w-14 h-14"
          style={{ color: "#bde0fe" }}
        />
        <Heart
          className="absolute bottom-10 right-10 w-16 h-16"
          style={{ color: "#ffb3c6" }}
        />
      </div>

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md md:max-w-2xl bg-white/100 md:bg-white/75 rounded-3xl shadow-2xl p-6 md:p-12 z-10"
      >
        <AnimatePresence mode="wait">
          {showLanding ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Gift
                  className="w-24 h-24 mx-auto mb-8"
                  style={{ color: "#ffb3c6" }}
                  strokeWidth={1.5}
                />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-12"
                style={{ color: "#ffb3c6" }}
              >
                Suprise for Jenna :)
              </motion.h1>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={handleOpenSurprise}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: "#ffb3c6" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#ff9db8")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#ffb3c6")
                }
              >
                <span className="flex items-center gap-3">
                  Open for a Surprise
                  <Heart className="w-6 h-6" fill="currentColor" />
                </span>
              </motion.button>
            </motion.div>
          ) : !accepted ? (
            <motion.div
              key="letter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Letter content */}
              <LetterCard onComplete={handleLetterComplete} />

              {/* Valentine Question */}
              <AnimatePresence>
                {showQuestion && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <motion.h2
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 1,
                      }}
                      className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3"
                      style={{ color: "#ffb3c6" }}
                    >
                      Will you be my Valentine?{" "}
                      <Heart className="w-10 h-10" fill="currentColor" />
                    </motion.h2>

                    <div className="flex items-center justify-center gap-4">
                      <motion.button
                        onClick={handleAccept}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-4 text-white text-2xl font-bold rounded-full
                                   shadow-xl hover:shadow-2xl transform transition-all duration-300"
                        style={{ backgroundColor: "#ffb3c6" }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#ff9db8")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#ffb3c6")
                        }
                      >
                        <span className="flex items-center gap-2">
                          Yes <Heart className="w-6 h-6" fill="currentColor" />
                        </span>
                      </motion.button>

                      {showNoButton && (
                        <motion.button
                          onClick={handleReject}
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-12 py-4 text-white text-2xl font-bold rounded-full
                                     shadow-xl hover:shadow-2xl transform transition-all duration-300"
                          style={{ backgroundColor: "#cdb4db" }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#b89dd0")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#cdb4db")
                          }
                        >
                          No
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Audio Player */}
              <AudioPlayer />
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Celebration />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
