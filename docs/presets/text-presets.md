`p-p`

Proceeding with `docs/presets/text-presets.md` — a full specification of the **visual text styles** used within slide presets.

---

````md
# Text Presets

Text presets are predefined styles for common text roles — titles, captions, bullets, footnotes, and more. Each preset is a factory function that produces a styled Pixi-compatible text item with optional theme integration and positioning logic.

These are used **inside slide presets** to build visual components consistently across slides.

---

## 1. Purpose

Text presets provide:

I. Consistent font sizes, colors, and alignment  
II. Theme-based styling for brand alignment  
III. Automatic default visibility (`visible: true, showAt: 0`)  
IV. Optional vertical alignment shortcuts (`v = "top" | "center" | "bottom"`)

They return **plain item objects**, typically passed directly to `applyPos()` and then added to a slide.

---

## 2. API Overview

Each preset follows the signature:

```js
function preset({ text }, theme, opts = {});
````

---

## 3. Positional Headings

These presets define layout-aware headings.

### 3.1 `centerHeading`

* Font size: 64
* Alignment: center
* Usage: main titles

```js
textPresets.centerHeading({ text: "Welcome" }, theme);
```

Optional: `opts.v = "top" | "center" | "bottom"`

---

### 3.2 `leftHeading`

* Font size: 48
* Alignment: left
* Usage: left-aligned sections

---

### 3.3 `rightHeading`

* Font size: 48
* Alignment: right
* Usage: end-of-slide titles or names

All headings are bold and inherit:

* `theme.headingColor`
* `theme.fontFamilyHeading`

---

## 4. Informational Text Presets

### 4.1 `heroText`

* Font size: 72
* Font weight: 900
* Color: `theme.primaryColor`
* Used for major slide openers or quotes

---

### 4.2 `bulletLine`

* Font size: 40
* Prefixes text with `•`
* Color: `theme.bulletColor`
* Used in all bullet lists

---

### 4.3 `quoteLine`

* Font size: 36
* Style: italic
* Line gap: 8
* For multiline poetic or inspirational text

---

### 4.4 `smallText`

* Font size: 16
* Weight: normal
* Color: `theme.baseTextColor`
* General-purpose note or hint

---

### 4.5 `caption`

* Font size: 14
* Style: italic
* Color: `theme.secondaryColor`
* Image labels, descriptions

---

### 4.6 `footnote`

* Font size: 12
* Weight: light
* Color: `theme.bulletColor`
* Author names, attributions

---

## 5. Visibility Defaults

All presets:

* Start with `visible: true`
* Default `showAt = 0` (appears immediately unless overridden)
* Can be manually staged using `item.showAt = t`

---

## 6. Theme Integration

Every preset reads from the `theme` object, which typically includes:

```js
{
  fontFamilyHeading,
  fontFamilyBase,
  headingColor,
  baseTextColor,
  bulletColor,
  primaryColor,
  secondaryColor
}
```

Themes can be defined globally via `createKit.setTheme(...)`.

---

## 7. Summary

Text presets provide reusable, theme-driven text styles for building structured slides. They separate appearance logic from layout logic and ensure visual consistency across all slide types.

→ See [`slide-presets.md`](./slide-presets.md) for how these presets are used inside layouts.
→ To define or tweak themes, see [`../themes/globalThemes.md`](../themes/globalThemes.md)

```

Next up: `positioning.md` (layout logic)? Or do you want to switch track to `json-schema.md` now?
```
