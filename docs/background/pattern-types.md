
# Pattern Types

Patterns are optional background overlays used to add subtle texture to slides. They render behind all content and on top of the background color/image.

Each pattern is defined by a `type` and a set of `props`.

---

## 1. Where Patterns Are Used

Set globally via:

```js
createKit.setPattern("dots");
````

Or per-slide:

```js
kit.setSlideBackground(20, {
  pattern: {
    type: "bricks",
    props: { color: "#ffffff", opacity: 0.05 }
  }
});
```

---

## 2. Pattern Registry

All supported patterns are defined in `createKit.js`. Current types:

---

### 2.1 `dots`

**Props:**

```js
{
  color: "#ffffff",
  opacity: 0.2,
  spacing: 30,
  radius: 2
}
```

* Evenly spaced grid of circles
* Commonly used for tech or space slides

---

### 2.2 `bricks`

**Props:**

```js
{
  color: "#ffffff",
  opacity: 0.07,
  brickWidth: 60,
  brickHeight: 30,
  gap: 4
}
```

* Classic offset block texture
* Good for subtle structure behind diagrams

---

### 2.3 `stripes`

**Props:**

```js
{
  color: "#ffffff",
  opacity: 0.05
}
```

* Horizontal stripe fill
* Thin, wide bands

---

### 2.4 `waves`

**Props:**

```js
{
  color: "#ffffff",
  opacity: 0.08
}
```

* Gentle wave texture
* Often used in academic or light slides

---

## 3. Validation

Pattern type must match one of the known keys. If the pattern or props are invalid, the renderer may fallback to no pattern or throw (depending on Player version).

---

## 4. Summary

Patterns offer visual rhythm and identity. Used well, they enhance depth without distraction.

→ For full background system, see [`background-config.md`](./background-config.md)
→ To preview JSON structure with patterns, refer to [`../system/json-schema.md`](../system/json-schema.md)

```

That closes the `background/` and `themes/` cluster.

Next: `writing-decks.md` — a high-value, author-focused guide. Proceed?
```
