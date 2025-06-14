// /testDecks/testTwoSlidesClean.js
import {
  DeckBuilder,
  GobalThemes,
  GlobalBackgrounds
} from "taleem-video-deckbuilder";

import { imageLeftBulletsRight } from "./slidePresets/imageLeftBulletsRight.js";
import { titleAndImageSlide } from "./slidePresets/titleAndImageSlide.js";

// === SETUP ===
const theme = GobalThemes.royalBlue;
const deck = new DeckBuilder();
deck.setGlobalBackground(GlobalBackgrounds.dotsBg(theme));

// === Timings===
const slideEndTimes = [10, 20];
// === Slide 1 ===
// Duration: 6s → showAt must be < 6
imageLeftBulletsRight({
  image: { src: "rocketTakeoff" },
  bullets: [
    "Ignition systems online",
    "Fuel pressure stable",
    "Launch stabilizers engaged"
  ]
}, theme, deck, slideEndTimes[0], {
  showAt: [0, 1, 2, 3] // image at 0, bullets staggered
});

// === Slide 2 ===
// Duration: 5s → showAt must be < 5
titleAndImageSlide({
  title: "Liftoff Achieved",
  image: { src: "rocketTakeoff" }
}, theme, deck, slideEndTimes[1], {
  showAt: [0] // title and image appear together
});

export const presentationData = deck.build();
