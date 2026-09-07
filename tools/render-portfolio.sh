#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_path="${repo_dir}/assets/video/dudin-portfolio.mp4"

ffmpeg -hide_banner -y \
  -f lavfi -i "color=c=0xDCE7EF:s=1080x1920:r=30:d=15" \
  -loop 1 -framerate 30 -t 15 -i "${repo_dir}/assets/images/din-hand-pen-profile.jpg" \
  -loop 1 -framerate 30 -t 15 -i "${repo_dir}/assets/images/din-profile-original.webp" \
  -i "${repo_dir}/assets/audio/neon-pulse.mp3" \
  -filter_complex_script "${repo_dir}/tools/portfolio.filter" \
  -map "[outv]" -map 3:a:0 -t 24 \
  -c:v libx264 -preset medium -crf 22 -pix_fmt yuv420p \
  -af "atrim=0:24,asetpts=PTS-STARTPTS,loudnorm=I=-17:TP=-3:LRA=11,volume=-0.6dB,afade=t=in:st=0:d=0.35,afade=t=out:st=23.2:d=0.8" \
  -c:a aac -b:a 192k -ar 48000 \
  -movflags +faststart "${output_path}"

printf '%s\n' "Rendered ${output_path}"
