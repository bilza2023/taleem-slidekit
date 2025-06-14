// /slidePresets/imageLeftBulletsRight.js
import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";
import { ItemBuilders } from "taleem-video-deckbuilder";

const defaultConfig = {
  imageDx: 40,
  imageDy: 120,
  imageWidth: 360,
  imageHeight: 300,
  bulletBaseDy: 100,
  bulletSpacing: 90,
  bulletDx: 460
};

export function imageLeftBulletsRight(data, theme, deck, endTime, { showAt = [], config = {} } = {}) {
  const cfg = { ...defaultConfig, ...config };
  const slide = deck.addSlide(endTime);

  let itemIndex = 0;

  // Add image if provided
  if (data.image?.src) {
    const imageItem = ItemBuilders.image(data.image.src);
    imageItem.x = cfg.imageDx;
    imageItem.y = cfg.imageDy;
    imageItem.width = cfg.imageWidth;
    imageItem.height = cfg.imageHeight;
    imageItem.showAt = showAt[itemIndex++] ?? 0;
    slide.addItem(imageItem);
  }

  // Add bullets
  data.bullets.forEach((text) => {
    const bullet = textPresets.bulletLine({ text }, theme);
    const bulletDy = cfg.bulletBaseDy + (itemIndex - 1) * cfg.bulletSpacing;
    applyPos.topLeft(bullet, { dy: bulletDy, dx: cfg.bulletDx });
    bullet.showAt = showAt[itemIndex++] ?? 0;
    slide.addItem(bullet);
  });

  return slide;
}
