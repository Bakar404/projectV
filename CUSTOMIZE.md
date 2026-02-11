# 🎨 Quick Customization Guide

This file provides quick reference for the most common customizations.

## 1️⃣ Edit the Letter (Most Important!)

**File**: `src/components/LetterCard.jsx`

Find this section around line 30:

```javascript
// ✏️ CUSTOMIZE YOUR LETTER HERE:
const LETTER_LINES = [
  "Your first line here...",
  "Your second line here...",
  // Add as many as you want!
];
```

**Tips**:

- Keep lines relatively short (under 80 characters)
- 8-12 lines work best for pacing
- Make it personal and from the heart!

---

## 2️⃣ Add Your Song

**Steps**:

1. Put your MP3 file in: `public/assets/our-song.mp3`
2. That's it! The app will find it automatically.

**Alternative path**: Edit `src/components/AudioPlayer.jsx` (line 20):

```javascript
const SONG_URL = "/assets/your-file-name.mp3";
```

---

## 3️⃣ Change When Reactions Appear

**File**: `src/components/LetterCard.jsx` (around line 45)

```javascript
// ✏️ CUSTOMIZE REACTION POINTS
const REACTION_INDICES = [3, 7]; // 0-based index
```

- `[3, 7]` means after the 4th and 8th lines
- Can add more: `[2, 5, 9]`
- Or remove all: `[]`

---

## 4️⃣ Customize Reaction Buttons

**File**: `src/components/LetterCard.jsx` (around line 48)

```javascript
const REACTIONS = [
  {
    emoji: "🥹",
    label: "So sweet",
    response: "You deserve all the sweetness! 💕",
  },
  // Add more reactions here!
];
```

---

## 5️⃣ Change Colors

**File**: `src/App.jsx` (line 38)

Main background gradient:

```javascript
className =
  "min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200";
```

**Color Options**:

- `pink` → `purple`, `blue`, `red`, `orange`, `green`
- Shades: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

---

## 6️⃣ Adjust Animation Speed

**Typewriter speed** (`src/components/LetterCard.jsx` around line 70):

```javascript
}, 50); // Lower = faster, Higher = slower (milliseconds)
```

**Heart animation** (`src/components/Celebration.jsx` around line 85):

```javascript
duration: heart.duration, // Adjust per-heart animation time
```

---

## 7️⃣ More Hearts or Confetti

**File**: `src/components/Celebration.jsx`

```javascript
const hearts = Array.from({ length: 20 }, ...   // Change 20 to more/less
const confettiDots = Array.from({ length: 30 }, ... // Change 30 to more/less
```

---

## 8️⃣ Change the Title

**File**: `src/components/LetterCard.jsx` (around line 120)

```javascript
<h1>To my favorite person 💌</h1>
```

Change to:

- "To My Love 💕"
- "Dear [Their Name] 💌"
- "For You ❤️"

---

## 9️⃣ Modify the Valentine Question

**File**: `src/App.jsx` (around line 70)

```javascript
<h2>Will you be my Valentine? 💝</h2>
```

Change to:

- "Will you go out with me? 💕"
- "Will you be mine? ❤️"
- Your own question!

---

## 🔟 Change Celebration Message

**File**: `src/components/Celebration.jsx` (around line 40)

```javascript
<h1>Yay!! 🎉</h1>
<p>I love you ❤️</p>
<p>You make every day special 💕</p>
```

Make it personal to you both!

---

## 📱 Testing Checklist

Before sharing your love letter:

- [ ] Customize all letter lines
- [ ] Add your special song
- [ ] Test on mobile (responsive design)
- [ ] Check reaction buttons work
- [ ] Verify music plays and volume slider works
- [ ] Make sure celebration animates nicely
- [ ] Read through the whole experience
- [ ] Share with your special someone! 💕

---

## 🚀 Deploy When Ready

```bash
npm run build
```

Then upload the `dist/` folder to:

- **Vercel**: Easiest (free)
- **Netlify**: Also easy (free)
- **GitHub Pages**: Good for sharing

---

**Need help?** Check the main [README.md](README.md) for more details!

💝 Good luck! Make it special! 💝
