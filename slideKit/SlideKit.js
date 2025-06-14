// slideKit/SlideKit.js
import { cloneBackground } from "./backgroundUtils.js";

export class SlideKit {
  constructor(deck, theme, presets, globalBackground) {
    this.deck = deck;
    this.theme = theme;
    this.presets = presets;
    this.globalBackground = globalBackground;
  }

  // add(name, endTime, data, { showAt = [], config = {} } = {}) {
  //   const fn = this.presets[name];
  //   if (!fn) throw new Error(`Unknown slide preset: "${name}"`);
  //   fn(endTime, data, {
  //     showAt,
  //     config,
  //     theme: this.theme,
  //     deck: this.deck
  //   });
  // }

 add(name, endTime, data, { showAt = [], config = {} } = {}) {
  const fn = this.presets[name];
  if (!fn) {throw new Error(`Unknown slide preset: "${name}"`);}
  // ✅ Correct argument order: data, theme, deck, endTime, opts
  fn(data, this.theme, this.deck, endTime, { showAt, config });
 }

 setSlideBackground(endTime, override = {}) {
  const original = this.deck.globalBackground;
  this.deck.setGlobalBackground(cloneBackground(original, override));
  this.deck.addSlide(endTime); // background will be auto-cloned
  this.deck.setGlobalBackground(original); // restore
}


  build() {
    return this.deck.build();
  }
}
