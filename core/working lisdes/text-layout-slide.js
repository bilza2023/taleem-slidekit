
// =========================
// File: demoDeck.js – demonstrates all three alignments
// =========================

import { DeckBuilder, GobalThemes } from "taleem-video-deckbuilder";
import { textPresets } from "./presets/text.js";

const theme = GobalThemes.royalBlue;

const deck = new DeckBuilder();

deck.setGlobalBackground({
  backgroundColor: "#fffbe6"
});

const slide = deck.addSlide(6);

slide.addItem(textPresets.leftHeading({ text: "Left Heading" }, theme, { y: 120 }));
slide.addItem(textPresets.centerHeading({ text: "Centered Heading" }, theme, { y: 260 }));
slide.addItem(textPresets.rightHeading({ text: "Right Heading" }, theme, { y: 400 }));

export const presentationData = deck.build();
