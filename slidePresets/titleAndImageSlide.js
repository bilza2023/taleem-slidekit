// /slidePresets/titleAndImageSlide.js
import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";
import { ItemBuilders } from "taleem-video-deckbuilder";

const defaultConfig = {
  titleDy: 60,
  imageDx: 280,
  imageDy: 160,
  imageWidth: 460,
  imageHeight: 300
};

export function titleAndImageSlide(data, theme, deck, endTime, { showAt = [], config = {} } = {}) {
  const cfg = { ...defaultConfig, ...config };
  const slide = deck.addSlide(endTime);

  const title = textPresets.centerHeading({ text: data.title }, theme);
  applyPos.topCenter(title, { dy: cfg.titleDy });
  title.showAt = showAt[0] ?? 0;
  slide.addItem(title);

  if (data.image?.src) {
    const imageItem = ItemBuilders.image(data.image.src);
    imageItem.x = cfg.imageDx;
    imageItem.y = cfg.imageDy;
    imageItem.width = cfg.imageWidth;
    imageItem.height = cfg.imageHeight;
    imageItem.showAt = showAt[0] ?? 0;
    slide.addItem(imageItem);
  }

  return slide;
}
