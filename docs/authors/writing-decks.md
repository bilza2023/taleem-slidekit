

# Writing Decks with SlideKit

This guide explains how to write full slide decks using SlideKit. It assumes you're a technical author with access to the full API and want to compose structured presentations using presets, themes, and timed content.

---

## 1. Workflow Summary

```txt
1. Configure global theme and background (createKit)
2. Create SlideKit instance
3. Add slides using semantic presets
4. Set timed appearance with showAt[]
5. Export JSON using kit.build()
````

---

## 2. Authoring Template

Here’s a minimal pattern to follow:

```js
import { createKit } from "./slideKit/createKit.js";

createKit.setTheme("neonDark");
createKit.setPattern("dots");
createKit.setBgImage("rocketTakeoff");
createKit.setBgOpacity(0.3);

const kit = createKit.create();

// Slide 1: ends at t = 8
kit.add("titleAndImageSlide", 8, {
  title: "The Future Awaits",
  image: { src: "rocketTakeoff" }
}, {
  showAt: [1]
});

// Slide 2: starts at t = 8, ends at t = 16
kit.add("imageLeftBulletsRight", 16, {
  image: { src: "rocketTakeoff" },
  bullets: [
    "Thrust vectoring",
    "Stability control",
    "Escape velocity"
  ]
}, {
  showAt: [8, 9, 10, 11]
});

const json = kit.build();
```

---

## 3. Choosing Slide Types

Each preset is designed for a purpose:

| Slide Type              | Use Case                   |
| ----------------------- | -------------------------- |
| `titleAndImageSlide`    | Opener or announcement     |
| `imageLeftBulletsRight` | Explainer, parallel layout |
| `imageAndBulletsSlide`  | Stacked image + list       |
| `quoteSlide`            | Quote or reflection moment |
| `titleWithBulletsSlide` | Agenda or summary          |

> See [`slide-presets.md`](../presets/slide-presets.md) for detailed list.

---

## 4. Timed Appearance

Use `showAt: [t0, t1, t2...]` to control when each item appears during the slide’s active time.

### Example:

```js
// Slide from t=8 to t=16
showAt: [8, 9, 10, 11]
```

Means:

* `8` → image
* `9, 10, 11` → bullets

**All `showAt` values must fall within the current slide’s time window.**

---

## 5. Background Overrides

You can change the visual tone mid-deck using:

```js
kit.setSlideBackground(20, {
  backgroundImage: "galaxy",
  pattern: { type: "bricks", props: {...} }
});
```

This change persists until another override is made.

---

## 6. Best Practices

* Use **presets** — don't build raw items unless you’re extending the system
* Keep `endTime` per slide aligned with narration/video if used
* Name your slides in comments for clarity
* Keep visuals minimal — focus on clarity and flow
* Group similar `showAt` stages across slides for consistency

---

## 7. Debugging Tips

* Use `console.log(JSON.stringify(kit.build(), null, 2))` to inspect structure
* Double-check `showAt[]` lengths match the number of visual elements
* Validate that `endTime` is strictly increasing
* Verify all `showAt[]` times fall within their respective slide windows

---

## 8. Exporting

```js
const presentation = kit.build();
// Save to file or feed into Player
```

> Tip: Use `.json` files with this structure for loading directly into the Player.

---

## 9. Summary

SlideKit is designed for programmatic, theme-aware, highly structured presentations. You write decks as code — and the result is reproducible, maintainable, and fully timed for animation.

→ To go deeper into item structures, check [`../system/json-schema.md`](../system/json-schema.md)
→ For available visual styles, see [`../presets/text-presets.md`](../presets/text-presets.md)

```

