
# SlideKit Introduction

The `SlideKit` system is the top-level authoring API for building structured, theme-aware, player-ready slide presentations in JavaScript. It abstracts the low-level details of layout, positioning, and visual style, and lets authors focus on **semantic intent** — what kind of slide to show, with what content, when.

---

## 1. What is SlideKit?

SlideKit is a **composition layer**. It does not render, draw, or animate. Instead, it provides:

- A simple API for defining slides using semantic presets (e.g. `titleAndImageSlide`)
- A global theme and background system
- An internal `DeckBuilder` that collects slide items
- An export method (`.build()`) to generate JSON for the Player

It allows you to write code like this:

```js
import { createKit } from "./slideKit/createKit.js";

createKit.setTheme("neonDark");
createKit.setBgImage("rocketTakeoff");
createKit.setPattern("dots");
createKit.setBgOpacity(0.3);

const kit = createKit.create();

kit.add("titleAndImageSlide", 10, {
  title: "The Future Awaits",
  image: { src: "rocketTakeoff" }
}, {
  showAt: [2]
});

const presentation = kit.build();
````

---

## 2. Responsibilities

SlideKit’s job is to:

* Apply **global settings** (theme, background, patterns) to all slides
* Provide a clean API (`kit.add(...)`) for attaching content via slide presets
* Keep track of **timing** (via `endTime` and `showAt`)
* Return a complete presentation object for the Player

It does **not** manage:

* Rendering
* Animation behavior
* Raw positioning logic (delegated to presets and `applyPos`)

---

## 3. Relationship to Other Modules

| Module            | Role                               |
| ----------------- | ---------------------------------- |
| `DeckBuilder`     | Internal object storing slides     |
| `createKit`       | Entry point and config manager     |
| `slidePresets`    | Collection of reusable slide types |
| `textPresets`     | Low-level styling primitives       |
| `applyPos`        | Positioning system (grid-based)    |
| Player (external) | Renders the JSON data              |

---

## 4. What is a Slide Preset?

Presets define **what a slide means**.

Each preset has:

* A **name** like `"imageLeftBulletsRight"`
* A fixed layout strategy
* Expectations for `data`, `theme`, and `deck`

Presets are **registered by name** into `slidePresets/index.js`, and accessed via `kit.add(...)`:

```js
kit.add("imageLeftBulletsRight", 20, {
  image: { src: "rocketTakeoff" },
  bullets: ["Thrust", "Stability", "Escape velocity"]
});
```

Each preset ultimately builds **items** and pushes them to the underlying `deck`.

---

## 5. Configuration Options

Before creating a kit, you can configure:

| Method              | Effect                                |
| ------------------- | ------------------------------------- |
| `setTheme(name)`    | Sets global theme (e.g. `"neonDark"`) |
| `setBgImage(name)`  | Sets background image for all slides  |
| `setPattern(name)`  | Sets background pattern               |
| `setBgOpacity(num)` | Controls opacity of background image  |

After creating the kit, you can optionally use:

```js
kit.setSlideBackground(endTime, override)
```

This inserts a slide with a different background (note: it may persist for following slides — see [docs/system/flow.md](../system/flow.md) for discussion).

---

## 6. Output

Call `.build()` to finalize the presentation and generate the Player-compatible JSON:

```js
const json = kit.build();
```

Output structure:

* `designWidth`, `designHeight`
* `totalDuration`
* `slidesData[]`, each with:

  * `startTime`, `endTime`
  * `background`
  * `items[]` (text, images, etc.)

This JSON can then be rendered by the canvas-based Player.

---

## 7. Summary

SlideKit lets engineers build presentations like **data pipelines**, not manual drawings. It embraces configuration, theme systems, layout presets, and structured output — all intended to scale, reuse, and automate educational content for Taleem.Help and beyond.

Next:
→ Continue to [`createKit.md`](./createKit.md) for details on global config methods.
→ Or explore [`slideKit.md`](./slideKit.md) for full method documentation.

```

Ready to move to `createKit.md` next? Or want to shift to schema, presets, or flow control?
```
