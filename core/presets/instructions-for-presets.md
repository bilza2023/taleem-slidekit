# Text & Item Positioning – Taleem Player Presets

## 1 Overview
Text items in Taleem Player use a dual-system approach:

- **Horizontal** – alignment-driven via `textAlign` + `width` (unknown text widths require anchoring).
- **Vertical** – token-driven via a percentage-to-pixel helper (`vPos`), hiding raw `y` values.

All **other items** (images, shapes, icons, tables) use explicit `x,y` anchors and may borrow `vPos` for vertical consistency.

---
## 2 Horizontal Positioning for Text

| Alignment     | Required fields                                     | Behavior                              |
|---------------|-----------------------------------------------------|---------------------------------------|
| **Left**      | `x: 0` or any left-offset, **omit** `textAlign`     | Anchor at left edge; text starts at `x` |
| **Center**    | `x: 0`, `width: designWidth`, `textAlign:"center"` | Anchor at midpoint; text centered around `x + width/2` |
| **Right**     | `x: 0`, `width: designWidth`, `textAlign:"right"`  | Anchor at right edge; text ends at `x + width`        |

> **Note:** Always use `x: 0` for alignment presets—let the player’s anchor math handle horizontal centering or right‑edge snapping.

---
## 3 Vertical Positioning for Text

Define your vertical slots once per deck using the **`makeVPos(designH)`** helper:

```js
// /presets/verticalPos.js
export const makeVPos = (designH) => ({
  top:        Math.round(designH * 0.10),  // 10%
  upperThird: Math.round(designH * 0.30),  // 30%
  center:     Math.round(designH * 0.50),  // 50%
  lowerThird: Math.round(designH * 0.70),  // 70%
  bottom:     Math.round(designH * 0.90)   // 90%
});
```

Use tokens instead of raw pixels in presets:

```js
// in your deck script
const DESIGN_H = deck.designHeight;
const vPos    = makeVPos(DESIGN_H);
```

> Presets accept either `{ v: "token" }` **or** `{ y: number }`. If `v` is missing or unrecognized, fallback to `y` or a default slot.

---
## 4 Preset API Signatures

All text presets share this signature:

```js
presetName({ text }, theme, opts = {})
```

- `opts.v` – vertical token (`top`, `upperThird`, `center`, `lowerThird`, `bottom`)
- `opts.y` – raw fallback Y coordinate (pixels)

### Example Presets

```js
// left-aligned heading
leftHeading({ text }, theme, { v = "top", y }) => ({
  ...ItemBuilders.text(text),
  ...theme?.text,
  fontSize: 48,
  fontWeight: "bold",
  x: 0,
  y: (vPos[v] ?? y),
  showAt: 0,
  visible: true
});

// centre-aligned headline
centerHeading({ text }, theme, { v = "center", y }) => ({
  ...ItemBuilders.text(text),
  ...theme?.text,
  fontSize: 64,
  fontWeight: "bold",
  x: 0,
  width: designW,
  y: (vPos[v] ?? y),
  textAlign: "center",
  showAt: 0,
  visible: true
});

// right-aligned caption
rightHeading({ text }, theme, { v = "bottom", y }) => ({
  ...ItemBuilders.text(text),
  ...theme?.text,
  fontSize: 48,
  fontWeight: "bold",
  x: 0,
  width: designW,
  y: (vPos[v] ?? y),
  textAlign: "right",
  showAt: 0,
  visible: true
});
```

---
## 5 Other Items Positioning

- **Images, shapes, icons, tables** use explicit `x, y` (top-left anchor).  
- For vertical spacing consistency, supply `y: vPos[token]`.  
- Horizontal centring for fixed-size items: compute `x = (designW - item.width) / 2` or wrap in an image-centering helper.
- Do **not** apply `textAlign` to non-text items—it has no effect.

---
## 6 Dos & Don’ts

### ✅ Dos
I. Use `textAlign` **only** for text when you need centre or right alignment.  
II. Read `designWidth` & `designHeight` from your `DeckBuilder` instance; avoid hard-coding.  
III. Reuse `vPos` tokens for vertical consistency; avoid raw `y` unless necessary.

### ❌ Don’ts
I. Mix `textAlign:"center"` with non-zero `x`; always use `x: 0` in those presets.  
II. Apply `textAlign` to images/shapes; it’s ignored.  
III. Hard-code raw pixel `y` values—prefer `vPos` tokens for maintainable spacing.

---
Follow these rules and **no further changes to `text.js`** will ever be needed for new slides—simply pick your preset, supply `v` or `y`, and the rest is automatic.
