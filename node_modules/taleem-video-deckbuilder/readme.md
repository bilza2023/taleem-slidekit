

# Canvas Deck Builder

Programmatic slide generator for Taleem Player. Converts structured JavaScript into validated JSON slides, compatible with all Taleem-compatible Players.

---

## 📦 Installation

```bash
npm install canvas-deck-builder
````

---

## ⚙️ Basic Usage

```js
import { DeckBuilder } from "canvas-deck-builder";
import * as GlobalBackgrounds from "canvas-deck-builder/GlobalBackgrounds";
import * as ItemBuilders from "canvas-deck-builder/ItemBuilders";

// 1. Create deck
const deck = new DeckBuilder();

// 2. Set global background
deck.setGlobalBackground(GlobalBackgrounds.bricksBg());

// 3. Add a slide (0s to 5s)
const slide = deck.addSlide(5);
slide.addItem(ItemBuilders.text("Welcome!", { x: 0, y: 0, showAt: 0 }));

// 4. Export
const json = deck.build();
```

---

## 🧠 Core Concepts

### I. `DeckBuilder`

* Controls slide sequence and layout.
* Use `.addSlide(endTime)` to insert a new slide.
* Call `.build()` to export a clean validated JSON object.
* You **must call** `setGlobalBackground(...)` before adding slides.

### II. `Slide`

* Returned by `deck.addSlide()`.
* Add items with `slide.addItem(itemObject)` or via helpers.
* Every item must have a `showAt` timestamp in seconds.

### III. Backgrounds

* Use `GlobalBackgrounds.*` (e.g. `bricksBg`, `linedBg`, etc.)
* Set via `deck.setGlobalBackground(...)`.
* Each slide automatically receives a clone of this unless overridden manually.

### IV. Items

* All items must have a `type`, `x`, `y`, `visible`, and `showAt`.
* Use helper builders from `ItemBuilders`:

  * `text(text, config)`
  * `image(src, config)`
  * `rect(config)`
  * `bulletList(items, config)`

---

## 🧾 JSON Output Format

`deck.build()` returns an object of the form:

```json
{
  "designWidth": 1020,
  "designHeight": 576,
  "totalDuration": 12,
  "slidesData": [
    {
      "startTime": 0,
      "endTime": 6,
      "background": {
        "backgroundColor": "#fdf6f0",
        "pattern": { "type": "bricks", "props": { ... } }
      },
      "items": [ ... ]
    }
  ]
}
```

**Note:** Each slide **must** contain a `background` key.

---

## 🎨 Optional: Themes

`GlobalThemes` provides theme presets (e.g. `chalkboard`, `neon`, `royalBlue`).

Themes are **not** required by DeckBuilder but are often used to configure background generators:

```js
const theme = GlobalThemes.neon;
const bg = GlobalBackgrounds.bricksBg(theme);
deck.setGlobalBackground(bg);
```

---

## 🛠 Advanced Utilities

### `ItemBuilders`

Use factory functions to avoid writing raw objects:

```js
ItemBuilders.text("Physics", { fontSize: 42, showAt: 1 });
ItemBuilders.image("book", { width: 100, x: 50, showAt: 2 });
```

### `SlideTemplates`

Optional helpers like `quoteSlide(...)`, `imageLeftBulletsRight(...)` are NOT part of the core — import separately if needed.

---

## ✅ Validation

All generated decks are structurally validated using a Zod schema inside the Player. If you mutate the JSON manually, re-validate before use.

---

## 🧪 Testing

Basic test coverage is included. To run:

```bash
npm test
```

Tested with [Vitest](https://vitest.dev).

---

## 🔒 Stability & Versioning

* The output JSON schema is **frozen and guaranteed stable**.
* Any breaking changes will increment the **major** version only.
* This module is used in Taleem Player and downstream systems.

---

## 🧬 License

MIT

