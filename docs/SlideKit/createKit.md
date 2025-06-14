`p-p`

Here is the complete, precise draft for `docs/SlideKit/createKit.md` — defining how to configure the SlideKit environment before building slides.

---

````md
# createKit API

The `createKit` module is the entry point for setting up a `SlideKit` instance. It allows authors to configure global settings — such as the visual theme, background image, and canvas pattern — before creating slides.

This file documents all available methods, configuration rules, and internal validations.

---

## 1. Purpose

The goal of `createKit` is to:

I. Allow authors to define **global appearance and layout context**
II. Validate all config up front (with useful error messages)
III. Return a configured `SlideKit` instance ready for use

Think of it as the system bootloader: before you write slides, you define the world they’ll live in.

---

## 2. Usage

```js
import { createKit } from "./slideKit/createKit.js";

// Step 1: Configure global settings
createKit.setTheme("neonDark");
createKit.setPattern("dots");
createKit.setBgImage("rocketTakeoff");
createKit.setBgOpacity(0.25);

// Step 2: Create the SlideKit
const kit = createKit.create();
````

Once `kit` is created, you can call `.add(...)` to define slides and `.build()` to generate final JSON.

---

## 3. Configuration Methods

### 3.1 `setTheme(name)`

Sets the global theme for all text and items.

```js
createKit.setTheme("neonDark");
```

Valid theme names are taken from `GlobalThemes`. If an unknown name is used, an error is thrown:

```bash
Error: Unknown theme: "xyz"
```

---

### 3.2 `setBgImage(name)`

Sets a background image that appears behind all slides (unless overridden).

```js
createKit.setBgImage("rocketTakeoff");
```

Valid image names must exist in the known asset list. Unknown names will throw:

```bash
Error: Unknown background image: "abc"
```

---

### 3.3 `setPattern(name)`

Applies a semi-transparent background pattern (e.g. dots, bricks, stripes).

```js
createKit.setPattern("dots");
```

If the pattern name is unknown, an error is thrown. Example patterns:

* `"dots"` — spaced white dots
* `"bricks"` — blocky grid
* `"waves"` — light sine waves
* `"stripes"` — soft horizontal lines

Each pattern is internally defined with color, opacity, and layout props.

---

### 3.4 `setBgOpacity(value)`

Controls the opacity of the background image layer (`0` = invisible, `1` = fully visible).

```js
createKit.setBgOpacity(0.3);
```

Must be a number between 0 and 1. Invalid values throw:

```bash
Error: Opacity must be 0–1
```

---

## 4. create()

Call `.create()` only once all settings are defined. It returns a fully-configured `SlideKit`:

```js
const kit = createKit.create();
```

This method:

I. Loads the theme object from `GlobalThemes`
II. Builds a background using `getDefaultBackground(...)`
III. Applies `bgImage`, `bgOpacity`, and `pattern` as overrides
IV. Initializes a `DeckBuilder` instance and sets its background
V. Returns a new `SlideKit(deck, theme, presets, background)`

---

## 5. Internals: Known Assets

To see available options at runtime, you can access:

```js
createKit.themes     // { neonDark: "neonDark", royalBlue: "royalBlue", ... }
createKit.patterns   // { dots: {...}, bricks: {...}, ... }
createKit.assets     // { images: ["rocketTakeoff", "galaxy", "taleemLogo", ...] }
```

---

## 6. Error Handling

Every config method performs input validation. It will throw immediately if:

* Theme is unknown
* Background image is not in asset list
* Pattern name is invalid
* Opacity is not between 0–1

This ensures authors never silently misconfigure a kit.

---

## 7. Summary

`createKit` is the system initializer. It lets you:

* Choose global theme and visual background
* Set a reusable design baseline for all slides
* Safely bootstrap a `SlideKit` with confidence

Once created, the `SlideKit` instance governs all slide definitions and controls the final JSON output.

→ See [`slideKit.md`](./slideKit.md) for methods on the `SlideKit` instance returned by `.create()`.

```

Next file: `slideKit.md` — want to proceed?
```
