# Audio Assets

Place your background music file here as `our-song.mp3`

## Supported Formats

- MP3 (recommended)
- WAV
- OGG

## Tips

- Keep file size under 10MB for faster loading
- Choose a romantic, calm song (not too loud)
- Test volume levels before sharing

## How to Add Your Song

1. Find your special song (make sure you have the rights to use it)
2. Convert it to MP3 if needed (many free online converters available)
3. Rename it to `our-song.mp3`
4. Place it in this folder (`public/assets/`)
5. The app will automatically play it when the user clicks the play button!

## Alternative: Use a Different Path

If you want to use a different filename or location, update the `SONG_URL` constant in:
`src/components/AudioPlayer.jsx`

```javascript
const SONG_URL = "/assets/your-custom-name.mp3";
```

---

**Note**: For demo purposes, the app will work without an audio file, but the music player will show an error in the browser console. Add your song for the full experience! 🎵
