import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * FallingPhotos Component
 * Displays falling/dropping photos from local assets folder
 *
 * 📸 TO ADD YOUR PHOTOS:
 * 1. Create folder: public/assets/photos/
 * 2. Add your images there (PNG/JPG/JPEG format - HEIC won't work in browsers)
 * 3. Update the IMAGE_FILENAMES array below with your image filenames
 *
 * Example: If you add "photo1.jpg" to public/assets/photos/,
 * add "photo1.jpg" to the array below
 */

// ✏️ ADD YOUR IMAGE FILENAMES HERE:
const IMAGE_FILENAMES = [
  "FullSizeRender-1.jpeg",
  "FullSizeRender.jpeg",
  "IMG_0008.jpeg",
  "IMG_0213.jpeg",
  "IMG_0637.jpeg",
  "IMG_1563.jpeg",
  "IMG_3338.jpg",
  "IMG_4452.jpeg",
  "IMG_4455.jpeg",
  "IMG_6893.jpeg",
  "IMG_6912-3.JPG",
  "IMG_7221.jpeg",
  "IMG_7557.jpeg",
  "IMG_7618.jpeg",
  "IMG_8118.PNG",
  "IMG_8119.PNG",
  "IMG_8120.PNG",
  "IMG_8121.PNG",
  "IMG_8122.PNG",
  "IMG_8123.PNG",
  "IMG_8124.PNG",
  "IMG_8125.PNG",
  "IMG_8126.PNG",
  "IMG_8127.PNG",
  "IMG_8128.PNG",
  "IMG_8370.jpeg",
  "IMG_9246.jpg",
  "IMG_9447.jpeg",
  "IMG_9846.jpeg",
  "one.JPEG",
  "picture1screenshot.png",
  "pitcture2screenshot.png",
  "three.JPEG",
  "two.JPEG",
];

const FallingPhotos = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [fallingPhotos, setFallingPhotos] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Convert filenames to full paths
    const paths = IMAGE_FILENAMES.map(
      (filename) => `${import.meta.env.BASE_URL}assets/photos/${encodeURIComponent(filename)}`,
    );
    setImageUrls(paths);
    console.log("Loaded image paths:", paths);
  }, []);

  useEffect(() => {
    if (imageUrls.length > 0) {
      // Create initial falling photos
      createFallingPhotos();

      // Add new falling photo - more frequently on desktop, less on mobile
      const interval = setInterval(() => {
        addFallingPhoto();
      }, isMobile ? 4000 : 3000); // 4s on mobile, 3s on desktop

      return () => clearInterval(interval);
    }
  }, [imageUrls, isMobile]);

  function createFallingPhotos() {
    const photos = [];
    // Fewer photos on mobile (2-4), more on desktop (5-8)
    const initialCount = isMobile 
      ? Math.floor(Math.random() * 3) + 2
      : Math.floor(Math.random() * 4) + 5;
    
    for (let i = 0; i < initialCount; i++) {
      photos.push(generatePhotoData());
    }
    console.log("Created initial falling photos:", photos.length);
    setFallingPhotos(photos);
  }

  function addFallingPhoto() {
    setFallingPhotos((prev) => {
      // Keep fewer photos on mobile to improve performance
      const maxPhotos = isMobile ? 6 : 10;
      const updated = [...prev, generatePhotoData()];
      console.log("Added new falling photo, total:", updated.length);
      return updated.slice(-maxPhotos);
    });
  }

  function generatePhotoData() {
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    
    // Smaller sizes on mobile for better performance and visibility
    const sizeRange = isMobile 
      ? { min: 80, max: 150 }  // Mobile: 80-150px
      : { min: 150, max: 300 }; // Desktop: 150-300px
    
    const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
    
    return {
      id: Math.random(),
      imageUrl: randomImage,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      duration: Math.random() * 5 + 8, // Fall duration (8-13 seconds)
      delay: Math.random() * 2, // Random delay (0-2 seconds)
      rotation: Math.random() * 40 - 20, // Random rotation (-20 to 20 degrees)
      size: size,
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 md:z-0">
      {fallingPhotos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{
            y: -200,
            x: `${photo.left}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 0.85, 0.85, 0.5],
            rotate: photo.rotation,
          }}
          transition={{
            duration: photo.duration,
            delay: photo.delay,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: `${photo.size}px`,
            height: `${photo.size}px`,
          }}
        >
          <img
            src={photo.imageUrl}
            alt="Falling memory"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            style={{
              border: "3px solid rgba(255, 255, 255, 0.7)",
            }}
            onError={(e) => {
              console.error("❌ Failed to load image:", photo.imageUrl);
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPhotos;
