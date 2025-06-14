// /pos/applyPos.js
// Final positional system for Taleem canvas slides
// No longer requires designW per call — uses layoutConfig internally
// Supports dx (horizontal box tweak) + dy (vertical shift)

import { pos } from "./grid.js";
import { layoutConfig } from "./config.js";
function apply(item, key, { dx = 0, dy = 0 } = {}) {
  const def = pos[key];
  if (!def) throw new Error(`Invalid position key: ${key}`);

  const { designW } = layoutConfig;

  item.y = def.y + dy;
  item.textAlign = def.align;

  if (def.align === "left") {
    item.x = dx;
    item.width = designW;
  }

  else if (def.align === "center") {
    item.x = 0;
    item.width = designW + dx;
  }

  else if (def.align === "right") {
    item.x = 0;
    item.width = designW + dx;
  }
}

export const applyPos = {
  topLeft:       (item, opts) => apply(item, "topLeft", opts),
  topCenter:     (item, opts) => apply(item, "topCenter", opts),
  topRight:      (item, opts) => apply(item, "topRight", opts),

  centerLeft:    (item, opts) => apply(item, "centerLeft", opts),
  center:        (item, opts) => apply(item, "center", opts),
  centerRight:   (item, opts) => apply(item, "centerRight", opts),

  bottomLeft:    (item, opts) => apply(item, "bottomLeft", opts),
  bottomCenter:  (item, opts) => apply(item, "bottomCenter", opts),
  bottomRight:   (item, opts) => apply(item, "bottomRight", opts),
};
