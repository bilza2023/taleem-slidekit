// =========================
// File: textSmallTextSlide.js — test smallText preset without vPos
// =========================

import { DeckBuilder, GobalThemes } from "taleem-video-deckbuilder";
import { textPresets } from "./presets/text.js";
import { applyPos } from "./pos/ applyPos.js";

const DESIGN_W = 1020;

const deck = new DeckBuilder();
deck.setGlobalBackground({ backgroundColor: "#f0f0f0" });
const slide = deck.addSlide(8);
const theme = GobalThemes.royalBlue;
const alignments = [
    "topLeft", "topCenter", "topRight",
    "centerLeft", "center", "centerRight",
    "bottomLeft", "bottomCenter", "bottomRight"
  ];
  
  alignments.forEach(key => {
    const item = textPresets.smallText({ text: key }, theme);
    applyPos[key](item, DESIGN_W);
    slide.addItem(item);
  });
  

export const presentationData = deck.build();
