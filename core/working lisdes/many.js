

import { DeckBuilder, GobalThemes } from "taleem-video-deckbuilder";
import { textPresets }           from "./presets/text.js";

// Design constants (must match DeckBuilder settings)
const DESIGN_W = 1020;
const DESIGN_H = 576;

// Initialize deck and make a light background
const deck = new DeckBuilder();
deck.setGlobalBackground({ backgroundColor: "#f9f1e0" });

// Create a single slide (10s)
const slide = deck.addSlide(10);
const theme = GobalThemes.royalBlue;

// --- Top row ---
slide.addItem(textPresets.leftHeading({ text: "Top Left" },    theme, { v: "top" }));
slide.addItem(textPresets.centerHeading({ text: "Top Center" }, theme, { v: "top" }));
slide.addItem(textPresets.rightHeading({ text: "Top Right" },   theme, { v: "top" }));

// --- Upper third ---
slide.addItem(textPresets.leftHeading({ text: "Upper Third Left" },    theme, { v: "upperThird" }));
slide.addItem(textPresets.centerHeading({ text: "Upper Third Center" }, theme, { v: "upperThird" }));
slide.addItem(textPresets.rightHeading({ text: "Upper Third Right" },   theme, { v: "upperThird" }));

// --- Center row ---
slide.addItem(textPresets.leftHeading({ text: "Center Left" },    theme, { v: "center" }));
slide.addItem(textPresets.centerHeading({ text: "Center" },        theme, { v: "center" }));
slide.addItem(textPresets.rightHeading({ text: "Center Right" },   theme, { v: "center" }));

// --- Lower third ---
slide.addItem(textPresets.leftHeading({ text: "Lower Third Left" },    theme, { v: "lowerThird" }));
slide.addItem(textPresets.centerHeading({ text: "Lower Third Center" }, theme, { v: "lowerThird" }));
slide.addItem(textPresets.rightHeading({ text: "Lower Third Right" },   theme, { v: "lowerThird" }));

// --- Bottom row ---
slide.addItem(textPresets.leftHeading({ text: "Bottom Left" },    theme, { v: "bottom" }));
slide.addItem(textPresets.centerHeading({ text: "Bottom Center" }, theme, { v: "bottom" }));
slide.addItem(textPresets.rightHeading({ text: "Bottom Right" },   theme, { v: "bottom" }));

// Export the deck JSON
export const presentationData = deck.build();
