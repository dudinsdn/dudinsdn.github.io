# Priangan Signal Lab

Personal portfolio for Dudin, an electronics, IoT, backend, and AI developer
based in Ciamis, West Java. The site connects physical devices, dependable
software, intelligent workflows, and creative technology in one visual signal
route.

**Live site:** [dudinsdn.github.io](https://dudinsdn.github.io/)

## Highlights

- Responsive editorial layout for phones, tablets, laptops, and wide displays.
- Light and dark themes with a persistent browser preference.
- Scroll-triggered reveals and animated engineering illustrations.
- Mobile-specific signal-map sequencing and tablet transition choreography.
- Accessible color contrast and `prefers-reduced-motion` support.
- Live WIB clock, section-aware navigation, and mobile navigation controls.
- No build step, framework, or runtime dependency.

## Sections

### Origin

Introduces Dudin and visualizes the route from a physical device through a
backend and AI system to a useful output.

### Systems

Presents four connected fields:

- Connected devices
- Backend systems
- AI experiments
- Creative lab

### Experiments

Currently displays a **Coming Soon** transmission for a practical ESP-12E,
real-time clock, and eight-digit display experiment. Its animated status panel
will later become the entry point for published firmware, field notes, and
results.

### Transmit

Contains collaboration status and direct contact channels.

## Stack

- Semantic HTML5
- Modern CSS with custom properties, responsive breakpoints, and keyframes
- Vanilla JavaScript
- GitHub Pages

## Run locally

No installation is required. Clone the repository and serve its root directory:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Opening `index.html` directly also works, although a local server more closely
matches the deployed environment.

## Project structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── images/
│   └── js/
│       └── script.js
└── README.md
```

- `index.html` contains the page structure, portfolio copy, metadata, and
  experiment status.
- `assets/css/style.css` contains design tokens, layout, and components.
- `assets/css/animations.css` contains reveal behavior and animation keyframes.
- `assets/css/responsive.css` contains device breakpoints and reduced-motion
  overrides.
- `assets/js/script.js` handles themes, navigation, viewport reveals, active
  sections, and the WIB clock.

## Design direction

The visual system combines West Java topographic field notes, bold editorial
typography, and engineering diagrams. Yellow, purple, and signal red identify
active states while the route animations reinforce the journey from hardware to
useful software.
