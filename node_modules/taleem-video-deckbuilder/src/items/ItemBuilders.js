// ItemBuilders.js — Refactored to use shared defaultItems

import {
  createTextItem,
  createImageItem,
  createIconItem,
  createRectItem,
  createCircleItem,
  createTriangleItem,
  createRichTextItem,
  createTableItem,
  createArcItem,
} from "./defaultItems.js"; // Adjust path if needed

export const text = (t = "Demo Text") =>
  createTextItem({ text: t });

export const image = (s = "book") =>
  createImageItem({ src: s });

export const icon = (name = "BULB") =>
  createIconItem({ iconName: name });

export const rect = () =>
  createRectItem();

export const circle = () =>
  createCircleItem();

export const triangle = () =>
  createTriangleItem();

export const richText = (t = "Rich Text") =>
  createRichTextItem({ text: t });

export const table = () =>
  createTableItem({
    rows: [
      ["Name", "Age"],
      ["Ali", "17"],
      ["Sara", "16"]
    ]
  });

export const arc = () =>
  createArcItem();
