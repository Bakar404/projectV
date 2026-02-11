# 🎨 Adding Your Pixel Character Images

Your pixel character will bring your love letter to life! Here's how to set it up.

## Quick Setup (3 Steps)

### Step 1: Extract Individual Frames

You provided sprite sheets (multiple characters in one image). We need to extract individual frames.

**Option A: Use the Extractor Tool (Easiest)**

1. Open `sprite-extractor.html` in your browser (double-click it)
2. Upload each of your sprite sheet images
3. For the **walking animation** sheets:
   - Set Frame Width: `32` (adjust based on your actual size)
   - Set Frame Height: `32` (adjust based on your actual size)
   - Set Columns: `4`
   - Set Rows: `1`
4. Click "Extract Frames"
5. Download all frames

**Option B: Manual Extraction**

- Use any image editor (Photoshop, GIMP, even Paint)
- Crop out individual character frames
- Save each as a separate PNG file

---

### Step 2: Save the Images

Save the extracted frames to `public/assets/` with these names:

**Standing/Idle Frames** (use images from your second sprite sheet):

- `public/assets/character-stand1.png`
- `public/assets/character-stand2.png`
- `public/assets/character-stand3.png`
- `public/assets/character-stand4.png`

**Walking Frames** (use images from your third/fourth sprite sheets):

- `public/assets/character-walk1.png`
- `public/assets/character-walk2.png`
- `public/assets/character-walk3.png`
- `public/assets/character-walk4.png`

---

### Step 3: Test!

The app should now show your character:

1. **Walking in** from the left when the page loads
2. **Standing** while the letter is being read
3. **Celebrating** when your fiancé clicks "Yes"

---

## What Your Images Will Do

### 🚶 Walking Animation (First 1.5 seconds)

Uses: `character-walk1.png` → `character-walk2.png` → `character-walk3.png` → `character-walk4.png`

The character walks in from the left side of the screen.

### 🧍 Idle/Standing (While reading the letter)

Uses: `character-stand1.png` ↔ `character-stand2.png` (gentle alternating)

The character stands beside the letter, giving a subtle "breathing" effect.

### 🎉 Celebrating (After clicking "Yes")

Uses: All 4 standing frames in sequence with bouncing animation

The character jumps and celebrates with joy!

---

## Troubleshooting

**Character not showing?**

- Check that images are in `public/assets/` folder
- Make sure filenames match exactly (case-sensitive!)
- Check browser console for errors (F12)

**Character looks blurry?**

- The app already uses pixelated rendering
- Make sure you saved as PNG (not JPG)
- Original images should be small (32x32 or 64x64 pixels)

**Animation too fast/slow?**

- Edit `src/components/PixelCharacter.jsx`
- Change the interval times:
  - Walking: `150` (line 28) - lower is faster
  - Idle: `600` (line 19) - time between idle frames
  - Celebrating: `200` (line 38) - celebration speed

**Want to use different names?**

- Edit the file paths in `src/components/PixelCharacter.jsx`
- Look for the `getCharacterImage()` function
- Update the paths in the arrays

---

## Quick Reference: File Structure

```
public/
  assets/
    character-stand1.png   ← Your idle frames
    character-stand2.png
    character-stand3.png
    character-stand4.png
    character-walk1.png    ← Your walking frames
    character-walk2.png
    character-walk3.png
    character-walk4.png
    our-song.mp3          ← Your song (optional)
```

---

## Tips for Best Results

✅ **Use PNG format** (supports transparency)  
✅ **Keep dimensions small** (32x32 or 64x64 pixels)  
✅ **Use transparent backgrounds** (looks best)  
✅ **Make sure character faces right** (for walking animation)

If your character faces left, it'll walk backwards! You can flip images in any image editor if needed.

---

## Already Have Individual Files?

If you already separated your sprite sheet into individual frames:

1. Just rename them to match the names above
2. Copy them to `public/assets/`
3. You're done! 🎉

---

Need help? Check the browser console (F12) for any error messages!
