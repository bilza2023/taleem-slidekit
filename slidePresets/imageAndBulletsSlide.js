// /slidePresets/imageAndBulletsSlide.js
import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";
import { ItemBuilders } from "taleem-video-deckbuilder";

const defaultConfig = {
  imageDx: 60,
  imageDy: 100,
  imageWidth: 300,
  imageHeight: 280,
  bulletBaseDy: 400,
  bulletSpacing: 90,
  bulletDx: 60
};

export function imageAndBulletsSlide(data, theme, deck, endTime, { showAt = [], config = {} } = {}) {
  const cfg = { ...defaultConfig, ...config };
  const slide = deck.addSlide(endTime);

  if (data.image?.src) {
    const imageItem = ItemBuilders.image(data.image.src);
    imageItem.x = cfg.imageDx;
    imageItem.y = cfg.imageDy;
    imageItem.width = cfg.imageWidth;
    imageItem.height = cfg.imageHeight;
    imageItem.showAt = showAt[0] ?? 0;
    slide.addItem(imageItem);
  }

  data.bullets.forEach((text, index) => {
    const bullet = textPresets.bulletLine({ text }, theme);
    const bulletDy = cfg.bulletBaseDy + index * cfg.bulletSpacing;
    applyPos.topLeft(bullet, { dy: bulletDy, dx: cfg.bulletDx });
    bullet.showAt = showAt[index + 1] ?? 0;
    slide.addItem(bullet);
  });

  return slide;
}
