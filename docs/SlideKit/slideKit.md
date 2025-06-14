

# SlideKit Class Reference

This document covers the full API of the `SlideKit` instance returned by `createKit.create()`. This is the object used to define slides, apply slide-specific backgrounds, and export final presentation data.

All methods here are **author-facing** — they are the core tools for building JSON decks from scratch using named presets.

---

## 1. Overview

A `SlideKit` instance encapsulates:

- A `DeckBuilder` for managing slide content
- A `theme` for consistent visual styling
- A `presets` registry (by name)
- A `globalBackground` template

It is constructed internally as:

```js
new SlideKit(deck, theme, presets, background)
````

You do not create this directly — it is returned by `createKit.create()`.

---

## 2. Method Reference

### 2.1 `add(name, endTime, data, options)`

Adds a slide using a named preset.

```js
kit.add("titleAndImageSlide", 10, {
  title: "Welcome!",
  image: { src: "rocketTakeoff" }
}, {
  showAt: [2],
  config: { imageWidth: 400 }
});
```

#### Parameters:

| Name      | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| `name`    | string | Preset name (must be registered) |
| `endTime` | number | Time at which slide ends         |
| `data`    | object | Content passed to the preset     |
| `options` | object | `{ showAt: [], config: {} }`     |

#### Internally:

* Looks up `presets[name]`
* Passes all args to preset: `(data, theme, deck, endTime, { showAt, config })`
* Preset adds one or more items to the current slide

If preset is not found, an error is thrown:

```bash
Error: Unknown slide preset: "xyz"
```

---

### 2.2 `setSlideBackground(endTime, override)`

Temporarily overrides the background for **subsequent slides**, starting at a given time.

```js
kit.setSlideBackground(20, {
  backgroundColor: "#111122",
  backgroundImage: "galaxy",
  backgroundImageOpacity: 0.5,
  pattern: { type: "dots", props: { color: "#ffffff", opacity: 0.05 } }
});
```

This call:

1. Clones the current background
2. Applies the given overrides
3. Sets it as the new background
4. Adds a no-item slide at `endTime` to lock the change
5. Restores original background for following slides unless changed again

> 🔍 Note: Background overrides may persist across multiple slides. To revert, you must explicitly reset the background using another call or `deck.setGlobalBackground(...)`.

---

### 2.3 `build()`

Returns the final, player-ready presentation object as JSON:

```js
const json = kit.build();
```

This calls:

```js
deck.build()
```

The returned object includes:

```json
{
  "designWidth": 1020,
  "designHeight": 576,
  "totalDuration": ...,
  "slidesData": [ ... ]
}
```

All `items` inside each slide are structured Pixi-friendly drawing instructions.

---

## 3. Internals

The SlideKit object exposes:

* `this.deck` → internal `DeckBuilder` instance
* `this.theme` → resolved from `GlobalThemes[themeName]`
* `this.presets` → full preset registry
* `this.globalBackground` → initial background before overrides

These internals are not meant to be modified directly, but can be accessed for advanced authorship/debugging.

---

## 4. Best Practices

* Always define global config using `createKit` before calling `kit.add(...)`
* Use `showAt[]` to control timed appearance of items
* Avoid hardcoding positions — let presets handle layout
* Use `setSlideBackground()` when slide appearance context changes
* Use `.build()` only once all slides have been added

---

## 5. Summary

The `SlideKit` instance is your central slide authoring tool. It manages:

* When slides appear
* What content they contain
* How they are themed and structured
* What JSON is generated for the Player

Next:
→ To understand individual presets, see [`../presets/slide-presets.md`](../presets/slide-presets.md)
→ For output format, visit [`../system/json-schema.md`](../system/json-schema.md)

```

