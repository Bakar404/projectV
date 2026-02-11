# 💌 Interactive Love Letter App

A romantic, interactive typewriter-style love letter website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Typewriter Effect**: Each line appears one character at a time with a blinking cursor
- **User-Controlled Pacing**: Click "Continue" to reveal the next line at your own pace
- **Reaction Buttons**: Interactive moments throughout the letter where you can react
- **Background Music**: Play your special song with volume control and smooth fade effects
- **Valentine Question**: A sweet question appears at the end
- **Celebration Animation**: Floating hearts and confetti when "Yes" is clicked
- **Fully Responsive**: Beautiful on desktop and mobile devices
- **Smooth Animations**: All transitions powered by Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Add Your Song** (Optional but recommended)
   - Create a folder: `public/assets/`
   - Place your audio file as: `public/assets/our-song.mp3`
   - Supported formats: MP3, WAV, OGG
   - Or update the `SONG_URL` in `src/components/AudioPlayer.jsx`

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to: `http://localhost:5173`

## 🎨 Customization

### Edit the Letter Content

Open `src/components/LetterCard.jsx` and find the section marked with ✏️:

```javascript
// ✏️ CUSTOMIZE YOUR LETTER HERE:
const LETTER_LINES = [
  "Your first romantic line...",
  "Your second romantic line...",
  // Add as many lines as you want!
];
```

### Change Reaction Points

Still in `src/components/LetterCard.jsx`:

```javascript
// ✏️ CUSTOMIZE REACTION POINTS: Indices where reaction buttons appear (0-based)
const REACTION_INDICES = [3, 7]; // After line 4 and line 8
```

### Update the Song

In `src/components/AudioPlayer.jsx`:

```javascript
// ✏️ EDIT THIS: Update with your song file path
const SONG_URL = "/assets/our-song.mp3";
```

### Customize Colors

The app uses Tailwind CSS. Main gradient is in `src/App.jsx`:

```javascript
className =
  "min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200";
```

Change `pink` and `rose` to any Tailwind color (e.g., `purple`, `blue`, `red`).

## 📁 Project Structure

```
love-letter-app/
├── public/
│   └── assets/
│       └── our-song.mp3        # Your background music
├── src/
│   ├── components/
│   │   ├── AudioPlayer.jsx     # Music player with volume control
│   │   ├── Celebration.jsx     # Final celebration animation
│   │   └── LetterCard.jsx      # Main letter with typewriter effect
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles & animations
│   └── main.jsx                # React entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎭 Component Overview

### LetterCard

- Displays letter lines with typewriter animation
- Handles user pacing with "Continue" button
- Shows reaction buttons at specified points
- Triggers Valentine question when complete

### AudioPlayer

- Plays background music with smooth fade in/out
- Volume slider control
- Prevents autoplay (user must click play)
- Shows helpful hint before interaction

### Celebration

- Displays celebratory message
- Animates 20 floating hearts
- Adds confetti dots for extra flair
- Continuous animation loop

## 🎨 Customization Tips

### Make it Personal

1. **Letter Lines**: Write from the heart! 8-12 lines work best
2. **Reaction Emojis**: Use emojis that match your personality
3. **Song Choice**: Pick a song meaningful to both of you
4. **Colors**: Adjust the gradient to match their favorite colors

### Adjust Timing

- **Typing Speed**: In `LetterCard.jsx`, change the `50` in the typing interval
- **Fade Duration**: In `AudioPlayer.jsx`, adjust fade interval timing

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder. You can deploy this to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📱 Mobile Friendly

The app is fully responsive and works beautifully on:

- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 💡 Tips for Best Experience

1. **Test the music**: Make sure your audio file plays correctly
2. **Read through first**: Preview the letter before sharing
3. **Check on mobile**: View it on a phone to ensure it looks good
4. **Adjust volume**: The default is 50%, you can change it in `AudioPlayer.jsx`
5. **Share the link**: Deploy it and share the URL for a magical experience!

## 🐛 Troubleshooting

**Music won't play?**

- Check that the file path is correct
- Ensure the audio file is in `public/assets/`
- Try a different audio format (MP3 is most compatible)

**Animations are choppy?**

- This is usually a browser/device performance issue
- Try reducing the number of hearts in `Celebration.jsx`

**Text is cut off on mobile?**

- Shorten your letter lines
- Or adjust padding in the card component

## 📜 License

This project is open source and available for personal use. Feel free to customize and share! ❤️

## 🎉 Have Fun!

This is meant to be a sweet, personal gift. Take your time customizing it and make it truly yours!

Made with ❤️ using React, Vite, Tailwind CSS, and Framer Motion
