

# Slide Presets

Slide presets are reusable layout templates. Each one defines a **specific type of slide**, with a consistent layout strategy, item configuration, and animation flow.

Presets abstract away positioning, styling, and composition logic. They allow authors to build expressive slides by declaring **intent and content**, not coordinates.

---

## 1. What is a Slide Preset?

A slide preset is a function with the following signature:

```js
function myPreset(data, theme, deck, endTime, { showAt = [], config = {} });
````

Each preset:

* Receives semantic input (`title`, `bullets`, `image`)
* Builds Pixi-friendly items (`ItemBuilders`)
* Positions them using `applyPos(...)`
* Pushes them into a `deck.addSlide(endTime)`

---

## 2. Registered Presets

These presets are currently registered and callable via `kit.add(name, ...)`:

### 2.1 `"titleAndImageSlide"`

> A large title centered near the top with a full-size image below.

**Inputs:**

```js
{
  title: "Welcome",
  image: { src: "rocketTakeoff" }
}
```

**Options:**

* `showAt: [0]`
* `config: { imageWidth, imageHeight }`

**Internals:**

* Uses `textPresets.centerHeading`
* Image placed at `(imageDx, imageDy)` with default sizing
* Both items share `showAt[0]`

---

### 2.2 `"imageLeftBulletsRight"`

> Fixed image on the left, bullets on the right.

**Inputs:**

```js
{
  image: { src: "rocketTakeoff" },
  bullets: ["One", "Two", "Three"]
}
```

**Options:**

* `showAt: [0, 1, 2, 3]`
* `config: { bulletSpacing, bulletDx }`

**Flow:**

* First `showAt[0]` → image
* Then each bullet gets `showAt[1...]`

Layout is fully responsive via spacing and offsets.

---

### 2.3 `"imageAndBulletsSlide"`

> Image on top-left, bullets below it (or to the side depending on spacing).

**Inputs and flow same as above**, but layout is compact and designed for stacked content.

---

## 3. Authoring Notes

### 3.1 Slide Duration (`endTime`)

Each preset assumes the slide lasts from `startTime = previousEndTime` to `endTime`. You must provide `endTime` when calling the preset via `kit.add(...)`.

### 3.2 Visibility Timing (`showAt[]`)

Each visual item in a preset can be staged using `showAt[index]` — index maps to the order of items.

For example, in `imageLeftBulletsRight`:

```js
showAt: [2, 3, 4, 5]
```

Means:

* `2` → image
* `3` → bullet 1
* `4` → bullet 2
* `5` → bullet 3

---

## 4. Extending Presets

To add new layouts:

1. Write a new function in `slidePresets/`
2. Follow signature: `(data, theme, deck, endTime, { showAt, config })`
3. Register in `slidePresets/index.js`

Then you can use:

```js
kit.add("myNewSlide", 8, { ... });
```

---

## 5. Summary

Presets are the **primary building blocks** for authoring semantic slides. Each one captures a layout pattern and exposes clean inputs — enabling scalable, readable, and theme-consistent presentations.

→ See [`text-presets.md`](./text-presets.md) for text styling used inside these presets.
→ For layout engine, visit [`../layout/positioning.md`](../layout/positioning.md)

```

Want to proceed to `text-presets.md` or switch direction to `json-schema.md` next?
```
