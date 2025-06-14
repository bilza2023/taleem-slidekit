
// /slidePresets/quoteSlide.js
// Builds a full quote slide with 3 lines and an author footer

import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";

export function quoteSlide(data, theme,deck) {
  
  const slide = deck.addSlide(10);
  deck.setGlobalBackground({ backgroundColor: theme.backgroundColor });

  const [line1Text, line2Text, line3Text] = data.lines;
  const authorText = data.author;

  const line1 = textPresets.quoteLine({ text: line1Text }, theme);
  const line2 = textPresets.quoteLine({ text: line2Text }, theme);
  const line3 = textPresets.quoteLine({ text: line3Text }, theme);
  const author = textPresets.footnote({ text: authorText }, theme);

  applyPos.topCenter(line1, { dy: 50 });
  applyPos.topCenter(line2, { dy: 150 });
  applyPos.topCenter(line3, { dy: 250 });
  applyPos.topRight(author, { dy: 350, dx: -100 });

  slide.addItem(line1);
  slide.addItem(line2);
  slide.addItem(line3);
  slide.addItem(author);

  return slide;
}
