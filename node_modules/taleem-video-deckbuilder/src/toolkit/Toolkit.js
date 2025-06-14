// templateKit.js

/**AnimApi is just for generating the json for animations */
import AnimApi from './AnimApi.js';
import { ItemBuilders } from "../items/ItemBuilders.js"; 
import toPixiColor from "./toPixiColor.js";
import { designWidth, designHeight } from "./designMeta.js";
import {pos} from "./pos.js";
import {presets} from "../presets/index.js"

// Final toolkit export
export const TemplateToolkit = {

  designWidth,
  designHeight,
  pos,
  ItemBuilders,
  presets,
  AnimApi,
  toPixiColor
};
