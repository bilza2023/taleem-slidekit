`p-p`

Proceeding with `docs/background/background-config.md` — a detailed guide to how background configuration works across slides.

---

````md
# Background Configuration

SlideKit supports rich background customization using color, images, and patterns. These are applied either **globally** (via `createKit`) or **per-slide** (via `kit.setSlideBackground(...)`).

This document explains the background system, default behavior, and how to override settings cleanly.

---

## 1. Global Background

When `createKit.create()` is called, a default background is constructed:

```js
import { getDefaultBackground } from "./getDefaultBackground.js";
````

It uses the theme’s base color and then overlays any configured image or pattern.

```js
{
  backgroundColor: "#000000",
  backgroundImage: null,
  backgroundImageOpacity: 1.0,
  pattern: null
}
```

---

## 2. Configuration Methods

You can define background features using these methods:

```js
createKit.setBgImage("rocketTakeoff");
createKit.setPattern("dots");
createKit.setBgOpacity(0.25);
```

Each of these is optional. You may use:

* Only a solid color
* Only an image
* Only a pattern
* Or a combination

---

## 3. Per-Slide Backgrounds

To override the background mid-deck:

```js
kit.setSlideBackground(endTime, {
  backgroundColor: "#001122",
  backgroundImage: "galaxy",
  backgroundImageOpacity: 0.4,
  pattern: {
    type: "bricks",
    props: { color: "#ffffff", opacity: 0.05 }
  }
});
```

This change persists until another override is made.

---

## 4. Pattern Format

Patterns are defined as:

```js
{
  type: "dots" | "bricks" | "waves" | ...,
  props: {
    color: "#ffffff",
    opacity: 0.05,
    spacing: 30,     // for dots
    brickWidth: 60,  // for bricks
    ...
  }
}
```

Each `type` has a defined set of props. See [`pattern-types.md`](./pattern-types.md) for details.

---

## 5. Background Cloning

Internally, backgrounds are cloned using:

```js
cloneBackground(globalBackground, override)
```

This ensures mutations to one slide don’t leak to others.

---

## 6. Notes

* Background images must match asset names
* Opacity affects only the background image, not the entire slide
* `pattern` overlays are drawn on top of the base color, beneath content

---

## 7. Summary

The background system provides:

* Theme-integrated defaults
* Global + per-slide overrides
* Patterned layouts for subtle texture
* Full control over visual context per section of a presentation

→ See [`pattern-types.md`](./pattern-types.md) for pattern reference
→ For background use in Player JSON, see [`../system/json-schema.md`](../system/json-schema.md)

```

Next: `pattern-types.md` (quick, small) or switch to `writing-decks.md` (for authors)?
```
