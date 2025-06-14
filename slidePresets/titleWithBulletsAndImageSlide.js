// /slidePresets/titleWithBulletsAndImageSlide.js
// Same as titleWithBulletsSlide, but includes a fixed-position image on the right

import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";
import { ItemBuilders } from "taleem-video-deckbuilder";

const defaultConfig = {
  titleDy: 40,
  bulletBaseDy: 150,
  bulletSpacing: 100,
  bulletDx: 60,
  imageDx: 700,
  imageDy: 180,
  imageWidth: 240,
  imageHeight: 240
};

export function titleWithBulletsAndImageSlide(data, theme, deck, showAt = [], config = {}) {
  const cfg = { ...defaultConfig, ...config };
  const slide = deck.addSlide(10);

  const title = textPresets.centerHeading({ text: data.title }, theme);
  applyPos.topCenter(title, { dy: cfg.titleDy });
  if (showAt[0] != null) title.showAt = showAt[0];
  slide.addItem(title);

  data.bullets.forEach((text, index) => {
    const bullet = textPresets.bulletLine({ text }, theme);
    const bulletDy = cfg.bulletBaseDy + index * cfg.bulletSpacing;
    applyPos.topLeft(bullet, { dy: bulletDy, dx: cfg.bulletDx });
    if (showAt[index + 1] != null) bullet.showAt = showAt[index + 1];
    slide.addItem(bullet);
  });

  // Add image item (fixed positioning)
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
