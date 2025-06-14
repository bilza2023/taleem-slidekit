`p-p`

Now writing `docs/layout/positioning.md` — defining the system of **grid-based layout positioning** via `applyPos()` and `pos`.

---

````md
# Positioning System

SlideKit uses a **grid-based positioning model** to simplify layout logic. Rather than setting `x` and `y` manually, authors use named positions like `topLeft` or `centerRight`, along with optional `dx` / `dy` adjustments.

All layout decisions in presets are routed through this system to ensure visual consistency across themes and resolutions.

---

## 1. Design Resolution

All positioning is based on a canonical canvas size:

```js
designWidth = 1020
designHeight = 576
````

Defined in:

```js
layoutConfig = {
  designW: 1020,
  designH: 576
}
```

---

## 2. Positional Keys

The positioning grid includes 9 named positions:

| Name           | Y (default) | Alignment |
| -------------- | ----------- | --------- |
| `topLeft`      | 40          | left      |
| `topCenter`    | 40          | center    |
| `topRight`     | 40          | right     |
| `centerLeft`   | 288         | left      |
| `center`       | 288         | center    |
| `centerRight`  | 288         | right     |
| `bottomLeft`   | 536         | left      |
| `bottomCenter` | 536         | center    |
| `bottomRight`  | 536         | right     |

These are defined in `grid.js` and used by name in `applyPos`.

---

## 3. applyPos API

The main function is:

```js
applyPos[key](item, { dx = 0, dy = 0 })
```

It:

* Applies the base `y` and `align` from the grid
* Uses `dx`, `dy` as optional offsets
* Sets the item’s `x`, `y`, `width`, and `textAlign`

---

## 4. Alignment Logic

| Align  | x    | width           | textAlign  |
| ------ | ---- | --------------- | ---------- |
| left   | `dx` | full width      | `"left"`   |
| center | `0`  | full width + dx | `"center"` |
| right  | `0`  | full width + dx | `"right"`  |

Note:

* `dx` affects horizontal offset for `left` aligned items
* For `center`/`right`, `dx` acts as width tweak, not x shift

---

## 5. Example Usage

```js
const title = textPresets.centerHeading({ text: "Hello" }, theme);
applyPos.topCenter(title, { dy: 40 });

const bullet = textPresets.bulletLine({ text: "Point 1" }, theme);
applyPos.topLeft(bullet, { dx: 60, dy: 160 });
```

---

## 6. When to Use Custom Positioning

If a layout requires precise or variable positions (e.g. for diagrams or multi-column text), you may bypass `applyPos` and set `x`, `y`, `width`, and `textAlign` manually.

However, for all standard slides — especially presets — `applyPos()` is the preferred layout interface.

---

## 7. Summary

The positioning system provides:

* Named anchors for quick layout
* Automatic alignment and sizing
* Theme-safe positioning for text and images

→ To see layout usage in action, check [`slide-presets.md`](../presets/slide-presets.md)
→ For text construction, see [`text-presets.md`](../presets/text-presets.md)

```

Next recommended: `json-schema.md` or go deeper into `globalThemes.md` / `background-config.md`?
```
