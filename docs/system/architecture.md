

# System Architecture

This document maps the architecture of the SlideKit system, including core modules, external dependencies, data flow, and authoring surfaces. It is intended for developers maintaining, extending, or integrating the system into rendering pipelines.

---

## 1. System Purpose

SlideKit is a declarative content builder that transforms high-level slide descriptions into a precise JSON format consumed by the canvas-based Player.

> Architecture = "Author Code → SlideKit API → JSON → Player"

---

## 2. Layered Overview

```txt
[Author Code]
    ↓
[createKit] ─── setTheme, setPattern, setBgImage
    ↓
[SlideKit Instance]
    ↓
[slidePresets/...] → [textPresets] + [applyPos]
    ↓
[DeckBuilder]
    ↓
[.build()]
    ↓
[Final JSON]
    ↓
[Player]
````

---

## 3. Module Breakdown

### 3.1 Author Entry

| Module          | Role                       |
| --------------- | -------------------------- |
| `createKit.js`  | Configures system settings |
| `SlideKit.js`   | Main authoring interface   |
| `slidePresets/` | Layout factories           |

---

### 3.2 Theme + Layout

| Module           | Role                               |
| ---------------- | ---------------------------------- |
| `GlobalThemes`   | Visual appearance (color/fonts)    |
| `textPresets.js` | Standard visual text styles        |
| `grid.js`        | Named position mapping             |
| `applyPos.js`    | Translates `posKey + dx/dy` to x/y |

---

### 3.3 Deck Composition

| Module                     | Role                              |
| -------------------------- | --------------------------------- |
| `DeckBuilder` (external)   | Core slide collection & builder   |
| `Slide` (from DeckBuilder) | Slide-level container             |
| `ItemBuilders`             | Produces drawable item structures |

---

### 3.4 Backgrounds

| Module                 | Role                                       |
| ---------------------- | ------------------------------------------ |
| `getDefaultBackground` | Constructs theme-based fallback background |
| `cloneBackground`      | Makes isolated, override-safe copies       |
| `patterns` (inline)    | Dot, brick, wave definitions               |

---

### 3.5 Output and Player

* `.build()` returns a structured JSON object
* JSON is loaded into the **Player** (external module)
* Player renders frames based on `currentTime`, `showAt`, and item types

---

## 4. External Dependencies

| Dependency                 | Used For            |
| -------------------------- | ------------------- |
| `taleem-video-deckbuilder` | Slide + item models |
| `GlobalThemes`             | Predefined themes   |
| `ItemBuilders`             | Text/Image schemas  |

---

## 5. Extension Points

* Add slide types in `slidePresets/`
* Add new themes via `GlobalThemes`
* Define new `applyPos` strategies if needed
* Customize JSON export if used in non-canvas targets

---

## 6. Summary

SlideKit is a **layered architecture**:

* Authors declare structure
* Presets apply design rules
* DeckBuilder consolidates into JSON
* Player interprets the result

This separation keeps authoring clean, rendering optimized, and content scalable.

→ For JSON contract, see [`json-schema.md`](./json-schema.md)
→ For authoring API, see [`../SlideKit/slideKit.md`](../SlideKit/slideKit.md)

```

Final doc: `player-runtime.md` — shall we bring it home?
```
