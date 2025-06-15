
# Slide Presets Gallery

This is your go-to reference for all available slide presets in SlideKit.

Each section below includes:
- Preset name
- 1-line description
- Required `data` structure
- Copy-paste `kit.add(...)` usage
- Example `showAt[]` values (timed appearance)

---

## 🎞️ `titleAndImageSlide`

Large centered title with a prominent image below.

### Data:

```js
{
  title: "The Future Awaits",
  image: { src: "rocketTakeoff" }
}
````

### Usage:

```js
kit.add("titleAndImageSlide", 8, {
  title: "The Future Awaits",
  image: { src: "rocketTakeoff" }
}, {
  showAt: [2]
});
```

---

## 🎞️ `imageLeftBulletsRight`

Image fixed on the left, bullets stacked on the right.

### Data:

```js
{
  image: { src: "rocketTakeoff" },
  bullets: [
    "Thrust vectoring",
    "Stability control",
    "Escape velocity"
  ]
}
```

### Usage:

```js
kit.add("imageLeftBulletsRight", 12, {
  image: { src: "rocketTakeoff" },
  bullets: [
    "Thrust vectoring",
    "Stability control",
    "Escape velocity"
  ]
}, {
  showAt: [8, 9, 10, 11]
});
```

---

## 🎞️ `imageAndBulletsSlide`

Compact image on top-left, bullets stacked below it.

### Data:

```js
{
  image: { src: "rocketTakeoff" },
  bullets: [
    "Rocket engine",
    "Thermal shield",
    "Launch sequence"
  ]
}
```

### Usage:

```js
kit.add("imageAndBulletsSlide", 10, {
  image: { src: "rocketTakeoff" },
  bullets: [
    "Rocket engine",
    "Thermal shield",
    "Launch sequence"
  ]
}, {
  showAt: [6, 7, 8, 9]
});
```

---

## 🎞️ `quoteSlide`

3-line quote followed by author name in the corner.

### Data:

```js
{
  lines: [
    "Knowledge is power.",
    "But wisdom is direction.",
    "Only application is transformation."
  ],
  author: "Taleem.Help"
}
```

### Usage:

```js
kit.add("quoteSlide", 8, {
  lines: [
    "Knowledge is power.",
    "But wisdom is direction.",
    "Only application is transformation."
  ],
  author: "Taleem.Help"
});
```

> This preset does not use `showAt[]` — all content appears immediately.

---

## 🆕 Add Your Own

To register custom presets:

1. Define it in `slidePresets/myPreset.js`
2. Add to `slidePresets/index.js`
3. Use like:

```js
kit.add("myPreset", 10, { ... }, { showAt: [...] });
```

---

## Summary

Use this gallery to:

* Discover available layouts
* Copy working `kit.add()` examples
* Match your content to the right preset

→ To understand how presets work under the hood, see [`slide-presets.md`](./slide-presets.md)

```

All current presets documented. You can extend this doc with future presets as needed.

Call this file: **SlideKit Pattern Library v1**.
```
