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
  const [showFullLetter, setShowFullLetter] = useState(false);

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
              <LetterCard onComplete={handleLetterComplete} hideContent={showQuestion} />

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
              {!showFullLetter ? (
                <>
                  <Celebration />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-center"
                  >
                    <motion.button
                      onClick={() => setShowFullLetter(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                      style={{ backgroundColor: "#ffb3c6" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#ff9db8")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#ffb3c6")
                      }
                    >
                      View Full Letter
                    </motion.button>
                  </motion.div>
                </>
              ) : (
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                    style={{ color: "#ffb3c6" }}
                  >
                    To حبيبتي
                  </motion.h1>
                  <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-h-[400px] overflow-y-auto">
                    <p className="mb-3">Hi baby girl, I hope you like the surprise I'm sorry I couldn't get something to you earlier,</p>
                    <p className="mb-3">I just wanted to create something special for you this year.</p>
                    <p className="mb-3">I love you so so so much and I wanted us to spend this year's Valentine's as official fiancés!!</p>
                    <p className="mb-3">I'm so happy and grateful for you and all that you do for me whether it's making my life easier, planning or just you being there looking so delicious.</p>
                    <p className="mb-3">Can't believe a class can be so life changing, I will be forever happy that I took STAT 214 and met my-very-soon to be wife there!</p>
                    <p className="mb-3">I can't wait for our engagement part coming up so soon, I think everything has been working out very very nicely alhamdulillah!</p>
                    <p className="mb-3">You make my life 1000000x better habibiti I just want you to know that,</p>
                    <p className="mb-3">I wake up everyday looking forward to us sitting down together, and it doesn't have to be anything special it can be something as simple as just walking together.</p>
                    <p className="mb-3">For that and many other reasons, there is no one else in this universe that I would like to spend Valentine's Day with so….</p>
                  </div>
                  <div className="flex justify-center">
                    <motion.button
                      onClick={() => setShowFullLetter(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                      style={{ backgroundColor: "#ffb3c6" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#ff9db8")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#ffb3c6")
                      }
                    >
                      Back to Celebration
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
