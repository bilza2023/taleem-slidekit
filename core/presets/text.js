// =========================
// File: /presets/text.js — final with color-picked theme presets
// =========================

import { ItemBuilders } from "taleem-video-deckbuilder";
import { makeVPos } from "./util/verticalPos";

const DESIGN_W = 1020;
const DESIGN_H = 576;
const vPos = makeVPos(DESIGN_H);

const resolveY = (v, yFallback) =>
  (v && vPos[v] !== undefined) ? vPos[v] : (yFallback ?? 0);

export const textPresets = {
  // Positional heading presets (keep these)

  leftHeading({ text }, theme, { v = "top" } = {}) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: theme?.fontFamilyHeading,
      color: theme?.headingColor,
      x: 0,
      y: resolveY(v),
      showAt: 0,
      visible: true
    };
  },

  centerHeading({ text }, theme, { v = "center" } = {}) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 64,
      fontWeight: "bold",
      fontFamily: theme?.fontFamilyHeading,
      color: theme?.headingColor,
      x: 0,
      width: DESIGN_W,
      y: resolveY(v),
      textAlign: "center",
      showAt: 0,
      visible: true
    };
  },

  rightHeading({ text }, theme, { v = "bottom" } = {}) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 48,
      fontWeight: "bold",
      fontFamily: theme?.fontFamilyHeading,
      color: theme?.headingColor,
      x: 0,
      width: DESIGN_W,
      y: resolveY(v),
      textAlign: "right",
      showAt: 0,
      visible: true
    };
  },

  // Appearance-only text styles

  smallText({ text }, theme) {
    const base = ItemBuilders.text(text);
    return {
      ...base,
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: theme?.fontFamilyBase,
      color: theme?.baseTextColor,
      visible: true,
      showAt: 0
    };
  },

  caption({ text }, theme) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 14,
      fontStyle: "italic",
      fontFamily: theme?.fontFamilyBase,
      color: theme?.secondaryColor,
      visible: true,
      showAt: 0
    };
  },

  footnote({ text }, theme) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 12,
      fontWeight: "light",
      fontFamily: theme?.fontFamilyBase,
      color: theme?.bulletColor,
      visible: true,
      showAt: 0
    };
  },

  heroText({ text }, theme) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 72,
      fontWeight: "900",
      fontFamily: theme?.fontFamilyHeading,
      color: theme?.primaryColor,
      visible: true,
      showAt: 0
    };
  },

  quoteLine({ text }, theme) {
    return {
      ...ItemBuilders.text(text),
      fontSize: 36,
      fontStyle: "italic",
      lineGap: 8,
      fontFamily: theme?.fontFamilyBase,
      color: theme?.baseTextColor,
      visible: true,
      showAt: 0
    };
  },
  bulletLine({ text }, theme) {
    return {
      ...ItemBuilders.text(`• ${text}`),
      fontSize: 40,
      fontWeight: "normal",
      fontFamily: theme?.fontFamilyBase,
      color: theme?.bulletColor,
      visible: true,
      showAt: 0
    };
  }
////////////////////////////////////////  
};
