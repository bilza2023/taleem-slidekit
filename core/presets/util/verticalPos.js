// /presets/verticalPos.js


export const makeVPos = (designH) => ({
    top:         Math.round(designH * 0.10),
    upperThird:  Math.round(designH * 0.30),
    center:      Math.round(designH * 0.50),
    lowerThird:  Math.round(designH * 0.70),
    bottom:      Math.round(designH * 0.90)
  });
  