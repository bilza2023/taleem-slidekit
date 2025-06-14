// /slidePresets/titleWithBulletsSlide.js
// Builds a title + bullet list slide using center heading and top-left aligned bullets

import { textPresets } from "../core/presets/text.js";
import { applyPos } from "../core/pos/applyPos.js";

const defaultConfig = {
  titleDy: 40,
  bulletBaseDy: 150,
  bulletSpacing: 100,
  bulletDx: 60
};

export function titleWithBulletsSlide(data, theme, deck, showAt = [], config = {}) {
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

  return slide;
}
