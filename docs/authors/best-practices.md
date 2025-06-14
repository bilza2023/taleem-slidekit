
# Best Practices for Authoring SlideKit Decks

This guide provides battle-tested recommendations for writing maintainable, scalable, and visually consistent SlideKit decks. These practices improve author experience, presentation clarity, and long-term evolution.

---

## 1. Organize Slides Logically

- Group slides by topic or section.
- Use comments to mark sections.

```js
// === Chapter 1: Introduction ===
kit.add("titleAndImageSlide", 6, { ... });
````

* Keep related slides close to preserve flow context.

---

## 2. Align Timings to Audio/Narration

* Always match `endTime` to the duration of spoken content.
* Use `showAt[]` for sequencing emphasis (1 bullet per idea).
* Prefer clean, staggered reveals: `showAt: [8, 9, 10]` not `[8, 8, 8]`.

---

## 3. Use Presets for 90% of Slides

* Presets are layout-safe and theme-aware.
* Avoid manual `x`, `y`, `fontSize` unless doing experimental layout.
* If a new layout is needed repeatedly — **add a preset**, don't hack.

---

## 4. Manage Visual Load

* Avoid too many items per slide (3–5 max).
* Use `imageLeftBulletsRight` for parallel explanation.
* Use `quoteSlide` to break pace and reset attention.

---

## 5. Timebox Complexity

* Keep slide duration between **5s and 15s** unless required.
* Use short slides for transitions or visual resets.

---

## 6. Use Backgrounds for Context Shift

* Change `backgroundImage` or `pattern` every 3–5 slides to signal progress.
* Avoid extreme color shifts unless meaningful (e.g. start/end).

---

## 7. Theme Stability

* Stick to 1 theme per deck unless showcasing design contrast.
* Custom themes must define **all required keys**:

  * `fontFamilyBase`, `headingColor`, `bulletColor`, etc.

---

## 8. JSON Validation Loop

* Always inspect JSON before deploying:

```js
console.log(JSON.stringify(kit.build(), null, 2));
```

Check:

* `startTime` monotonicity
* `showAt` alignment
* Item count per slide

---

## 9. Treat Decks as Code

* Use version control.
* Use named files (`chapter1-intro.js`, `lesson2-diagrams.js`)
* Consider `buildDeck()` wrappers for repeated slide groups.

---

## 10. Minimalism Wins

* Let timing, not text, do the pacing.
* Avoid full sentences unless quoting.
* Every slide should **express 1 core idea**.

---

## 11. Summary

The best SlideKit decks are:

* Simple to read
* Easy to maintain
* Narration-friendly
* Visually restrained
* Timed with intention

→ For a guided walkthrough, see [`writing-decks.md`](./writing-decks.md)
→ To understand errors to avoid, see [`common-errors.md`](./common-errors.md)

```

Next: `architecture.md` — the high-level diagram of the entire system. Shall we forge it?
```
