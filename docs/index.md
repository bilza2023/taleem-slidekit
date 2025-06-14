

# SlideKit Documentation

Welcome to the technical documentation for the **SlideKit system** — a composable, themeable slide authoring framework for Taleem.Help presentations.

This doc suite is for engineers writing slide decks, extending presets, customizing themes, or integrating with the Player runtime.

---

## 📂 System Map

### 1. High-Level Architecture

- [Overview and Flow](./system/flow.md)
- [System Architecture](./system/architecture.md)
- [JSON Output Schema](./system/json-schema.md)
- [Player Runtime](./system/player-runtime.md)
- [DeckBuilder API](./system/deckbuilder-api.md) *(TBD)*

---

### 2. SlideKit API

- [SlideKit Introduction](./SlideKit/intro.md)
- [Global Configuration (`createKit`)](./SlideKit/createKit.md)
- [Authoring Slides (`SlideKit` instance)](./SlideKit/slideKit.md)

---

### 3. Slide Layouts and Presets

- [Slide Preset Catalog](./presets/slide-presets.md)
- [Text Styling Presets](./presets/text-presets.md)
- [Creating and Extending Presets](./presets/extending-presets.md) *(TBD)*

---

### 4. Layout and Design

- [Positioning Grid System](./layout/positioning.md)
- [Canvas Configuration (`layoutConfig`)](./layout/layoutConfig.md) *(TBD)*
- [Background Patterns](./background/pattern-types.md)
- [Background Config Overview](./background/background-config.md)
- [Global Theme Reference](./themes/globalThemes.md)

---

### 5. Authoring Guides

- [Writing Decks](./authors/writing-decks.md)
- [Common Errors](./authors/common-errors.md)
- [Best Practices](./authors/best-practices.md)

---

## ✅ Usage Contract

SlideKit authoring follows this pipeline:

```txt
Author Code
  ↓
SlideKit API
  ↓
Structured JSON
  ↓
Canvas Player (Pixi.js)
````

This documentation ensures you can control every step — from layout to visual identity to rendering behavior.

---

## 📎 Feedback

If you find any broken link, outdated section, or unclear behavior, please flag it in source or file an issue on your integration tracker.

> “Design with intent. Animate with purpose. Document with discipline.”
