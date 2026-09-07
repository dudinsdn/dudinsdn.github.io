# Portfolio video

`dudin-portfolio.mp4` is the generated vertical portfolio video. It presents
the current portfolio themes and content in a 24-second retro-tech animation.

## Build

Run the renderer from the repository root:

```bash
bash tools/render-portfolio.sh
```

The command overwrites `assets/video/dudin-portfolio.mp4` with a fresh build.

## Requirements

- FFmpeg with `libx264`, AAC, `drawtext`, and `loudnorm` support
- DejaVu Sans fonts under `/usr/share/fonts/truetype/dejavu/`
- `assets/images/din-hand-pen-profile.jpg`
- `assets/images/din-profile-original.webp`
- `assets/audio/neon-pulse.mp3`
- `tools/portfolio.filter`

## Output

- Container: MP4
- Video: H.264, 1080 x 1920, 30 fps, YUV 4:2:0
- Audio: AAC stereo, 48 kHz
- Duration: 24 seconds
- Optimized for progressive playback with `faststart`

The soundtrack source and license are documented in
[`assets/audio/README.md`](../audio/README.md).

The MP4 is a generated artifact. Update the filter or render script and rebuild
it instead of editing the output file directly.
