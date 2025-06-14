
// pos.js
import { designWidth, designHeight } from "./designConstants.js";

const thirdW = designWidth / 3;
const thirdH = designHeight / 3;

export const pos = {
  TopLeft:       { x: thirdW * 0.2, y: thirdH * 0.3 },
  TopCenter:     { x: thirdW * 1.5, y: thirdH * 0.3 },
  TopRight:      { x: thirdW * 2.8, y: thirdH * 0.3 },

  CenterLeft:    { x: thirdW * 0.2, y: thirdH * 1.5 },
  Center:        { x: thirdW * 1.5, y: thirdH * 1.5 },
  CenterRight:   { x: thirdW * 2.8, y: thirdH * 1.5 },

  BottomLeft:    { x: thirdW * 0.2, y: thirdH * 2.7 },
  BottomCenter:  { x: thirdW * 1.5, y: thirdH * 2.7 },
  BottomRight:   { x: thirdW * 2.8, y: thirdH * 2.7 }
};
