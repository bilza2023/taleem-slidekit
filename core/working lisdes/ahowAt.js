import { DeckBuilder, GobalThemes, GlobalBackgrounds } from "taleem-video-deckbuilder";
import { titleWithBulletsSlide } from "./slidePresets/titleWithBulletsSlide.js";

// ===== SETUP =====
const theme = GobalThemes.royalBlue;
const deck = new DeckBuilder();
deck.setGlobalBackground(GlobalBackgrounds.dotsBg(theme));

// ===== DATA =====
const data = {
  title: "Why Learn Programming?",
  bullets: [
    "Think in systems",
    "Automate boring tasks",
    "Build ideas into reality"
  ]
};

// ===== TIMELINE =====
const showAt = [0, 1, 2.5, 4]; // title, bullet 1, 2, 3

// ===== SLIDE =====
titleWithBulletsSlide(data, theme, deck, showAt);

// ===== EXPORT =====
export const presentationData = deck.build();
