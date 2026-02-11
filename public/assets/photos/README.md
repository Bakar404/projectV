# Photos for Falling Background Animation

## How to Add Your Photos

1. **Add your images to this folder** (`public/assets/photos/`)
   - Supported formats: PNG, JPG, JPEG
   - ⚠️ HEIC format won't work in browsers - convert to JPG/PNG first

2. **Update the image list** in `/src/components/FallingPhotos.jsx`
   - Open the file and find the `IMAGE_FILENAMES` array (around line 18)
   - Add your image filenames to the array

### Example:

If you add these files:

- `photo1.jpg`
- `photo2.png`
- `photo3.jpeg`

Update `IMAGE_FILENAMES` in `FallingPhotos.jsx` to:

```javascript
const IMAGE_FILENAMES = ["photo1.jpg", "photo2.png", "photo3.jpeg"];
```

The photos will then appear as falling background animations! 📸
