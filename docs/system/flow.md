
# System Flow Overview

This document explains the end-to-end architecture of the SlideKit Canvas system, from deck creation to final player JSON. It is intended for technical authors and engineers who want to understand how the system works internally, extend it, or write slide definitions programmatically.

---

## 1. System Overview

The SlideKit stack is composed of several interlocking components:

- **SlideKit API** (`createKit`, `add`, `build`)  
- **DeckBuilder** (data structure for assembling slides)  
- **Slide Presets** (functions that transform input into slide content)  
- **Theme and Background Configuration**  
- **Final JSON Output** (used by the Player)

The goal is to write slides in expressive JavaScript using high-level preset functions — the result is structured, player-ready JSON.

---

## 2. Flow Summary

```txt
createKit → SlideKit → Presets → DeckBuilder → JSON → Player
````

### Example Flow:

1. **`createKit.setTheme(...)`** — sets the global visual theme.
2. **`createKit.create()`** — returns a `SlideKit` instance with theme + base background.
3. **`kit.add("titleAndImageSlide", 10, data, opts)`** — delegates to a slide preset.
4. **Preset** builds individual items using `textPresets`, `applyPos`, and layout config.
5. **Slide** is added to the `DeckBuilder` object.
6. **`kit.build()`** — compiles the entire `DeckBuilder` into canonical JSON.
7. **Player** consumes this JSON and renders slides on canvas, frame by frame.

---

## 3. Modules in Flow

### 3.1 `createKit.js`

Sets global config:

* `themeName`, `bgImage`, `bgOpacity`, `patternName`

Also injects:

* Global theme → from `GlobalThemes`
* Global background → using `getDefaultBackground()`

```js
const kit = createKit.create();
kit.add("titleAndImageSlide", 10, {...}, {...});
```

---

### 3.2 `SlideKit.js`

Central orchestrator. Provides:

* `.add(name, endTime, data, opts)` — looks up slide preset by name
* `.build()` — calls `deck.build()` to finalize JSON
* `.setSlideBackground(...)` — sets temporary override for 1 slide

SlideKit does **not** handle positioning or visual details — that’s delegated to **presets**.

---

### 3.3 Slide Presets

Located in `slidePresets/`. Each preset:

* Knows how to lay out a specific slide type
* Uses `textPresets`, `ItemBuilders`, and `applyPos`
* Accepts `data`, `theme`, `deck`, `endTime`, `{ showAt, config }`

Example signature:

```js
function titleAndImageSlide(data, theme, deck, endTime, { showAt, config });
```

Presets build **items**, configure their positioning and visibility, then push them to the deck.

---

### 3.4 `DeckBuilder` (from `taleem-video-deckbuilder`)

Acts as the data container for all slides and items. It:

* Tracks global background and theme
* Adds slides via `.addSlide(endTime)`
* Adds items to each slide
* Emits full structure via `.build()` → JSON

DeckBuilder has **no rendering**, just structured construction.

---

### 3.5 Final JSON

The `kit.build()` call returns the exact structure consumed by the canvas Player.

Example output shape:

```json
{
  "designWidth": 1020,
  "designHeight": 576,
  "totalDuration": 20,
  "slidesData": [
    {
      "startTime": 0,
      "endTime": 10,
      "background": { ... },
      "items": [
        { "type": "text", "text": "Hello", "x": 0, "y": 0, ... }
      ]
    }
  ]
}
```

---

## 4. Player Side

The Player (not covered in this repo) consumes the final JSON and:

* Uses `startTime`, `endTime`, and `showAt` to determine which items appear when
* Renders slides frame-by-frame using Pixi.js
* Applies animations or transitions defined per item (if any)

> The player is **data-driven** — all dynamic behavior is precomputed in the exported JSON.

---

## 5. Summary

SlideKit is a declarative pipeline:

* Declare slide types using presets
* Use themes and layout abstractions
* Emit JSON that conforms to Player expectations

Authors don’t manipulate canvas — they define intent.

---

Next:
→ See [`SlideKit/intro.md`](../SlideKit/intro.md) for how to use SlideKit in author code.
→ See [`system/json-schema.md`](./json-schema.md) for details of the JSON format.


Author Notes 15 jun 2025
.setSlideBackground(...) — sets temporary override for 1 slide  -> may be wrong it may set slide bg for all the next slides.

Flow Summary
A simple flow is 

  this lib -->json -->Player
  