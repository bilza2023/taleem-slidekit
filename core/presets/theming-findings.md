
# Theming & Layout Architecture – Finalized Findings

This document captures the finalized conventions for how text, layout, and theming behave inside the Taleem canvas slide system.

---

## 🔁 Canonical Layout Model

The following rule defines how *any* text item should be positioned:

```js
item.x = 0;
item.width = DESIGN_W;
item.textAlign = [from enum];
item.y = [from enum] + dy;
````

These properties are automatically applied by:

```js
applyPos.enum(item, opts);
```

Where `enum` is one of:
`topLeft`, `topCenter`, `centerRight`, `bottomCenter`, etc.

✅ Authors never write `x`, `y`, or `width` manually.
✅ Padding is handled via `dx`, `dy`.

---

## 📐 Positioning Philosophy

To move text horizontally:

* Right-align or center-align: modify the **width** (not `x`)
* Left-align: modify **x** directly (via `dx`)

Examples:

```js
// center text, but pull in from both edges
applyPos.center(item, { dx: -100 });

// right-aligned, inset from right edge
applyPos.bottomRight(item, { dx: -80 });
```

### Principles:

I. To pull text left, **shrink the box**
II. To shift alignment zones, use `dx`
III. Never directly set `item.x` or `item.width` in slides

---

## 🎨 Theming Tokens

Every text preset must choose exactly one **color token** and one **font family token** from the theme:

### Required Color Tokens:

* `baseTextColor`
* `headingColor`
* `bulletColor`
* `primaryColor`
* `secondaryColor`

### Font Tokens:

* `fontFamilyBase`
* `fontFamilyHeading`

### 🔒 Final Rule:

> A preset **must not** inherit color from `theme.text`.
> It must explicitly select a token based on purpose.

Example:

```js
quoteLine → uses baseTextColor  
heroText → uses primaryColor  
caption → uses secondaryColor  
bulletLine → uses bulletColor
```

✅ There is no such thing as “missing color”.
Every theme **must** define these tokens.
Every preset **must** pick from them.

---

## 🎛 Slide Preset API

All slide factories follow this unified signature:

```js
export function slidePreset(data, theme, deck, showAt = [], config = {}) → Slide
```

Where:

* `data`: preset-specific content (uniform per type)
* `theme`: global theme object
* `deck`: the target DeckBuilder instance
* `showAt`: array of timeline start times (mapped top-to-bottom)
* `config`: layout tuning overrides (e.g., bullet spacing)

### Examples:

```js
quoteSlide(data, theme, deck, showAt);
bulletSlide(data, theme, deck, showAt, { bulletSpacing: 80 });
```

---

### Example `data` Shapes:

```js
// quoteSlide
{
  lines: [ "Line 1", "Line 2", "Line 3" ],
  author: "— Malcolm X"
}

// titleWithBulletsSlide
{
  title: "Why Learn Programming?",
  bullets: [ "Point A", "Point B", "Point C" ]
}
```

---

## ✅ Summary

You now have:

* Layout: 1 line, 1 function, total control
* Styling: Presets lock design; themes provide semantic tokens
* Slides: Declarative factories, not construction zones
* Animation: `showAt[]` maps item-to-time with zero ambiguity

This system is composable, scalable, and impossible to misuse.

**Mission complete.**

```
```
