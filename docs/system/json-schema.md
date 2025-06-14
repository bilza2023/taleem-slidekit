
# JSON Schema for SlideKit Output

This document defines the structure and rules of the JSON object produced by `SlideKit.build()`. This JSON is the **canonical output** of the authoring system and the **only input** accepted by the Player engine.

---

## 1. Top-Level Structure

```json
{
  "designWidth": 1020,
  "designHeight": 576,
  "totalDuration": 25,
  "slidesData": [ ... ]
}
````

### Fields:

| Key             | Type   | Description                             |
| --------------- | ------ | --------------------------------------- |
| `designWidth`   | number | Canvas width in pixels (typically 1020) |
| `designHeight`  | number | Canvas height in pixels (typically 576) |
| `totalDuration` | number | End time of final slide (in seconds)    |
| `slidesData`    | array  | List of all slides with visual items    |

---

## 2. slidesData: Slide Objects

Each slide object has:

```json
{
  "startTime": 10,
  "endTime": 20,
  "background": { ... },
  "items": [ ... ]
}
```

### Keys:

| Key          | Type   | Description                           |
| ------------ | ------ | ------------------------------------- |
| `startTime`  | number | When this slide becomes active        |
| `endTime`    | number | When this slide ends                  |
| `background` | object | Slide background (inherited or local) |
| `items`      | array  | List of text, image, or graphic items |

---

## 3. Item Format

Each item is a drawable object consumed by the Player’s Pixi renderer.

### Example (text):

```json
{
  "type": "text",
  "text": "Welcome!",
  "x": 0,
  "y": 60,
  "width": 1020,
  "fontSize": 64,
  "fontFamily": "Inter",
  "color": 16777215,
  "textAlign": "center",
  "visible": true,
  "showAt": 0
}
```

### Example (image):

```json
{
  "type": "image",
  "src": "rocketTakeoff",
  "x": 100,
  "y": 160,
  "width": 400,
  "height": 300,
  "rotation": 0,
  "visible": true,
  "showAt": 1
}
```

> ⚠ All positions (`x`, `y`, `width`) are in **absolute canvas units** (not percent)

---

## 4. Background Object

Each slide can define a background. If omitted, the global background is used.

```json
{
  "backgroundColor": "#000000",
  "backgroundImage": "rocketTakeoff",
  "backgroundImageOpacity": 0.3,
  "pattern": {
    "type": "dots",
    "props": {
      "color": "#ffffff",
      "opacity": 0.05,
      "spacing": 30,
      "radius": 2
    }
  }
}
```

This structure is returned by `getDefaultBackground()` and modified via `setSlideBackground()`.

---

## 5. Visibility and Timing

Each item may include:

* `showAt`: time (in seconds) when this item should first appear
* `visible`: always `true` by default

> The Player checks `currentTime >= showAt` for each item, per frame

There is **no `exitAt`** — once visible, items persist until slide ends.

---

## 6. Optional Fields

Some item types may include:

| Key          | Type   | Applies to | Meaning                  |
| ------------ | ------ | ---------- | ------------------------ |
| `rotation`   | number | image      | In radians (default = 0) |
| `lineGap`    | number | text       | Vertical line spacing    |
| `fontStyle`  | string | text       | e.g. `"italic"`          |
| `fontWeight` | string | text       | `"normal"`, `"bold"`     |

---

## 7. Summary

This JSON schema is:

* **The contract** between authoring code and the Player
* **Fully declarative** — no behavior is inferred
* **Strictly timed** — `startTime`, `endTime`, and `showAt` govern visibility

SlideKit’s role is to make it easy to produce this structure without writing it by hand.

→ For how this JSON is built, see [`SlideKit/slideKit.md`](../SlideKit/slideKit.md)
→ For background definition logic, visit [`../background/background-config.md`](../background/background-config.md)

```

Next: `globalThemes.md` to explain theme structure? Or pause?
```
