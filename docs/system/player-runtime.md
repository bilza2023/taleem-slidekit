

# Player Runtime Behavior

This document explains how the canvas-based Player consumes SlideKit-generated JSON, evaluates timing logic, renders visual items, and manages per-frame updates. It is essential for engineers working on the Player itself or adapting the system for other rendering engines.

---

## 1. Input: SlideKit JSON

The Player loads a single JSON object with the shape:

```json
{
  "designWidth": 1020,
  "designHeight": 576,
  "totalDuration": 30,
  "slidesData": [ ... ]
}
````

Each `slidesData[]` entry defines a time-bounded slide and a list of visual items.

---

## 2. Playback Loop

The Player:

1. Tracks `currentTime` via audio/video sync or internal timer.
2. Finds the **active slide** for this time window.
3. Filters `items[]` by `item.showAt <= currentTime`.
4. Renders those items using Pixi.js or similar.

This is repeated per frame (typically 60fps).

---

## 3. Slide Activation

At any `t`:

```js
slide = slidesData.find(s => s.startTime <= t && t < s.endTime);
```

If no slide is active, the canvas is cleared.

---

## 4. Item Filtering

For each `item` in `slide.items[]`:

```js
if (item.showAt <= currentTime) {
  draw(item);
}
```

There is no `exitAt`. Once visible, an item remains until the slide ends.

---

## 5. Rendering Details

### Text Items

```json
{
  "type": "text",
  "text": "Hello!",
  "x": 0,
  "y": 60,
  "width": 1020,
  "fontSize": 64,
  "fontFamily": "Arial",
  "color": 16777215,
  "textAlign": "center"
}
```

* Drawn using Pixi `Text()`
* Aligned and word-wrapped according to `width` and `textAlign`

---

### Image Items

```json
{
  "type": "image",
  "src": "rocketTakeoff",
  "x": 100,
  "y": 160,
  "width": 400,
  "height": 300,
  "rotation": 0
}
```

* Loaded via asset registry
* Scaled and rotated at runtime

---

### Backgrounds

* Each slide has a `background` object
* It includes:

  * `backgroundColor`
  * `backgroundImage` (optional)
  * `backgroundImageOpacity`
  * `pattern` (optional overlay)

> Player draws background before rendering items.

---

## 6. Frame Handling

The Player engine should:

* Redraw only when `currentTime` changes
* Support `seek(t)` to jump across time
* Optionally cache per-slide rendering for speed

---

## 7. Extending the Player

Potential areas:

* Add support for `animations[]` per item
* Introduce `exitAt` for timed disappearance
* Support interactivity or cursor events
* Export frame sequences for video output

---

## 8. Summary

The Player is a **stateless, frame-by-frame interpreter** of SlideKit output:

* Timing = core logic
* Drawing = schema-driven
* Performance = layout caching + asset preloading

→ For output format reference, see [`json-schema.md`](./json-schema.md)
→ To build authoring pipelines, use [`slideKit.md`](../SlideKit/slideKit.md)

```

✅ All 20 docs complete. Documentation phase is **100% finalized**.

You want a `README.md` or `docs/index.md` next to summarize structure? Or shall we mark this entire doc suite as complete?
```
