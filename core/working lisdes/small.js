// =========================
// File: textSmallTextSlide.js — test smallText preset without vPos
// =========================

import { DeckBuilder, GobalThemes } from "taleem-video-deckbuilder";
import { textPresets } from "./presets/text.js";

const DESIGN_W = 1020;

const deck = new DeckBuilder();
deck.setGlobalBackground({ backgroundColor: "#f0f0f0" });
const slide = deck.addSlide(8);
const theme = GobalThemes.royalBlue;

// Use smallText preset with manually set y
const item = textPresets.smallText({ text: "This is small text" }, theme);
// item.x = 0;
// item.y = 60;               // hardcoded Y
// item.width = DESIGN_W;
// item.textAlign = "center";
slide.addItem(item);

export const presentationData = deck.build();
