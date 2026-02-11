import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

/**
 * LetterCard Component
 * Displays the romantic letter with typewriter effect
 * Features:
 * - One line at a time with typewriter animation
 * - Blinking cursor at the end of current line
 * - User-controlled pacing with Continue button
 * - Reaction buttons at specific points
 * - Final Valentine question
 *
 * ✏️ EDIT THE LETTER: Update the LETTER_LINES array below with your own romantic lines
 * ✏️ EDIT REACTIONS: Update REACTION_INDICES to change where reaction buttons appear
 */

// ✏️ CUSTOMIZE YOUR LETTER HERE:
const LETTER_LINES = [
  "Hi baby girl, I hope you like the surprise I'm sorry I couldn't get something to you earlier,",
  "I just wanted to create something special for you this year.",
  "I love you so so so much and I wanted us to spend this year's Valentine's as official fiancés!!",
  "I'm so happy and grateful for you and all that you do for me whether it's making my life easier, planning or just you being there looking so delicious.",
  "Can't believe a class can be so life changing, I will be forever happy that I took STAT 214 and met my-very-soon to be wife there!",
  "I can't wait for our engagement part coming up so soon, I think everything has been working out very very nicely alhamdulillah!",
  "You make my life 1000000x better habibiti I just want you to know that,",
  "I wake up everyday looking forward to us sitting down together, and it doesn't have to be anything special it can be something as simple as just walking together.",
  "For that and many other reasons, there is no one else in this universe that I would like to spend Valentine's Day with so….",
];

const LetterCard = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect for current line
  useEffect(() => {
    if (currentLineIndex >= LETTER_LINES.length) return;

    setIsTyping(true);
    const fullLine = LETTER_LINES[currentLineIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= fullLine.length) {
        setCurrentText(fullLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Typing speed (50ms per character)

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  const handleContinue = () => {
    if (isTyping) return; // Don't advance while typing

    // Add current line to displayed lines
    setDisplayedLines([...displayedLines, LETTER_LINES[currentLineIndex]]);
    setCurrentText("");

    if (currentLineIndex + 1 >= LETTER_LINES.length) {
      // Letter is complete, trigger the Valentine question
      onComplete();
    } else {
      setCurrentLineIndex(currentLineIndex + 1);
    }
  };

  const isComplete = currentLineIndex >= LETTER_LINES.length;

  return (
    <div className="space-y-4">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        style={{ color: "#ffb3c6" }}
      >
        To حبيبتي
      </motion.h1>

      {/* Letter content area */}
      <div className="min-h-[300px] md:min-h-[350px] text-lg md:text-xl text-gray-700 leading-relaxed">
        {/* Already typed lines */}
        {displayedLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3"
          >
            {line}
          </motion.p>
        ))}

        {/* Current typing line with cursor */}
        {!isComplete && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3"
          >
            {currentText}
            {isTyping && (
              <span className="inline-block w-0.5 h-6 bg-rose-500 ml-1 cursor-blink" />
            )}
          </motion.p>
        )}
      </div>

      {/* Continue button */}
      {!isComplete && (
        <div className="flex justify-center">
          <motion.button
            onClick={handleContinue}
            disabled={isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
            style={{
              backgroundColor: isTyping ? "#cbd5e0" : "#ffb3c6",
              cursor: isTyping ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) =>
              !isTyping && (e.target.style.backgroundColor = "#ff9db8")
            }
            onMouseLeave={(e) =>
              !isTyping && (e.target.style.backgroundColor = "#ffb3c6")
            }
          >
            {isTyping ? "Writing..." : "Continues!"}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default LetterCard;
