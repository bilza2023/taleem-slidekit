// slideKit/createKit.js
import { SlideKit } from "./SlideKit.js";
import { slidePresets } from "../slidePresets/index.js";
import {
  DeckBuilder,
  GlobalThemes
} from "taleem-video-deckbuilder";

import { getDefaultBackground } from "./getDefaultBackground.js";

// internal config state
const config = {
  themeName: "royalBlue",
  bgImage: null,
  bgOpacity: 1,
  patternName: null
};

// known assets and pattern names
const assets = {
  images: ["rocketTakeoff", "physicsForce", "galaxy", "space", "taleemLogo"]
};

const themes = Object.keys(GlobalThemes).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});

const patterns = {
  dots: { type: "dots", props: { color: "#ffffff", opacity: 0.2, spacing: 30, radius: 2 } },
  bricks: { type: "bricks", props: { color: "#ffffff", opacity: 0.07, brickWidth: 60, brickHeight: 30, gap: 4 } },
  stripes: { type: "stripes", props: { color: "#ffffff", opacity: 0.05 } },
  waves: { type: "waves", props: { color: "#ffffff", opacity: 0.08 } }
  // Add more patterns here...
};

export const createKit = {
  setTheme(name) {
    if (!themes[name]) throw new Error(`Unknown theme: ${name}`);
    config.themeName = name;
  },

  setBgImage(name) {
    if (!assets.images.includes(name)) throw new Error(`Unknown background image: ${name}`);
    config.bgImage = name;
  },

  setBgOpacity(value) {
    if (typeof value !== "number" || value < 0 || value > 1) throw new Error("Opacity must be 0–1");
    config.bgOpacity = value;
  },

  setPattern(name) {
    if (!patterns[name]) throw new Error(`Unknown pattern: ${name}`);
    config.patternName = name;
  },

  create() {
    const theme = GlobalThemes[config.themeName];
    const background = getDefaultBackground(theme);

    if (config.bgImage) background.backgroundImage = config.bgImage;
    if (config.bgOpacity < 1) background.backgroundImageOpacity = config.bgOpacity;
    if (config.patternName) background.pattern = patterns[config.patternName];

    const deck = new DeckBuilder();
    deck.setGlobalBackground(background);

    return new SlideKit(deck, theme, slidePresets, background);
  },

  themes,
  patterns,
  assets
};
