// DeckBuilderLite.js

import { designWidth, designHeight } from "../toolkit/designMeta.js";
import Slide from "./slide.js";
import { cloneBackground } from "./backgroundUtils.js";

export  class DeckBuilder {
  constructor() {
    this.slides               = [];
    this.currentStart         = 0;
    this.designWidth          = designWidth;
    this.designHeight         = designHeight;
    this.globalBackground     = null;
    this.minDuration          = 2;
    this.totalDuration = 0;
  }

  setGlobalBackgroundImage(backgroundImage,backgroundImageOpacity=1.0){
    if (!this.globalBackground) {
      throw new Error("Call setGlobalBackground() first.");
    }
    this.globalBackground.backgroundImage = backgroundImage;
    this.globalBackground.backgroundImageOpacity = backgroundImageOpacity;
  }
  setDesignWidth(w) {
    this.designWidth = w;
  }

  setDesignHeight(h) {
    this.designHeight = h;
  }

  setGlobalBackground(bg) {
    this.globalBackground = bg;
  }
  // addSlide(endTime) {
  //   const startTime = this.slides.length > 0 
  //     ? this.slides[this.slides.length - 1].endTime 
  //     : 0;
  
  //   const slide = new Slide(startTime, endTime);
  //   this.slides.push(slide);
  //   this.totalDuration = Math.max(this.totalDuration, endTime);
  //   return slide;
  // }
  
 
addSlide(endTime) {
  if (!this.globalBackground) {
    throw new Error("DeckBuilder: global background not set");
  }

  const startTime = this.slides.length > 0 
    ? this.slides[this.slides.length - 1].endTime 
    : 0;

  const background = cloneBackground(this.globalBackground);
  const slide = new Slide(startTime, endTime);
  slide.background = background; // 🔥 inject background directly

  this.slides.push(slide);
  this.totalDuration = Math.max(this.totalDuration, endTime);
  return slide;
}

  
  build() {
    return {
      designWidth,
      designHeight,
      totalDuration: this.totalDuration,
      slidesData: this.slides.map(slide => slide.toJSON())
    };
  }
  
}

