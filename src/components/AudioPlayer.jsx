import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Volume1, Volume2 } from "lucide-react";

/**
 * AudioPlayer Component
 * Plays background music with volume control and smooth fade in/out
 *
 * HOW TO USE:
 * 1. Place your audio file in /public/assets/our-song.mp3
 * 2. Or update the SONG_URL constant below to point to your audio file
 */

// ✏️ EDIT THIS: Update with your song file path
const SONG_URL = `${import.meta.env.BASE_URL}assets/our-song.mp3`;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Autoplay when component mounts
  useEffect(() => {
    const autoPlay = async () => {
      if (audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
          fadeIn();
        } catch (error) {
          // Autoplay may be blocked by browser, user will need to click play
          console.log("Autoplay prevented, user interaction required");
        }
      }
    };

    // Small delay to ensure audio is loaded
    const timer = setTimeout(autoPlay, 500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth fade in effect
  const fadeIn = () => {
    if (!audioRef.current) return;

    let currentVolume = 0;
    audioRef.current.volume = 0;

    clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = setInterval(() => {
      if (currentVolume < volume) {
        currentVolume += 0.05;
        audioRef.current.volume = Math.min(currentVolume, volume);
      } else {
        clearInterval(fadeIntervalRef.current);
      }
    }, 50);
  };

  // Smooth fade out effect
  const fadeOut = (callback) => {
    if (!audioRef.current) return;

    let currentVolume = audioRef.current.volume;

    clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = setInterval(() => {
      if (currentVolume > 0.05) {
        currentVolume -= 0.05;
        audioRef.current.volume = Math.max(currentVolume, 0);
      } else {
        clearInterval(fadeIntervalRef.current);
        if (callback) callback();
      }
    }, 50);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    setHasInteracted(true);

    if (isPlaying) {
      fadeOut(() => {
        audioRef.current.pause();
      });
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      fadeIn();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-6 p-4 rounded-xl"
      style={{ backgroundColor: "rgba(205, 180, 219, 0.4)" }}
    >
      <audio ref={audioRef} src={SONG_URL} loop />

      <div className="flex flex-col items-center gap-3">
        {!hasInteracted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm italic flex items-center gap-2 justify-center"
            style={{ color: "#8b5cf6" }}
          >
            <Music className="w-4 h-4" />
            Tap play to hear our song
          </motion.p>
        )}

        <button
          onClick={togglePlay}
          className="px-6 py-2 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          style={{ backgroundColor: "#ffb3c6" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff9db8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffb3c6")}
        >
          <span className="flex items-center gap-2">
            <Music className="w-5 h-5" />
            {isPlaying ? "Pause" : "Play our song"}
          </span>
        </button>

        {hasInteracted && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex items-center gap-3 w-full max-w-xs"
          >
            <Volume1 className="w-5 h-5" style={{ color: "#cdb4db" }} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
              style={{ backgroundColor: "#fff1e6" }}
            />
            <Volume2 className="w-5 h-5" style={{ color: "#cdb4db" }} />
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                width: 16px;
                height: 16px;
                background-color: #cdb4db;
                border-radius: 50%;
                cursor: pointer;
              }
              input[type="range"]::-moz-range-thumb {
                width: 16px;
                height: 16px;
                background-color: #cdb4db;
                border-radius: 50%;
                border: 0;
                cursor: pointer;
              }
            `}</style>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
