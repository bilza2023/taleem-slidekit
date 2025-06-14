

# Common Errors

This document lists the most frequent issues authors encounter while writing SlideKit decks — including incorrect timing, invalid inputs, and subtle bugs. Each entry includes what causes it, how to identify it, and how to fix it.

---

## 1. Incorrect `showAt` Timing

### ❌ Symptom:
Item appears too early, too late, or not at all.

### 🚨 Cause:
`showAt[t]` value is outside the slide's `[startTime, endTime)` window.

### ✅ Fix:
Ensure all `showAt` values fall **within the current slide’s active time range**.

```js
// Good: Slide ends at 16
kit.add("...", 16, { ... }, {
  showAt: [8, 9, 10]
});
````

---

## 2. Unknown Preset Name

### ❌ Error:

```bash
Error: Unknown slide preset: "someSlide"
```

### 🚨 Cause:

The given name is not registered in `slidePresets/index.js`.

### ✅ Fix:

* Double-check spelling
* Ensure preset file is exported
* Confirm it follows required signature

---

## 3. Invalid Theme or Asset Name

### ❌ Error:

```bash
Error: Unknown theme: "xyz"
```

or

```bash
Error: Unknown background image: "abc"
```

### 🚨 Cause:

Theme or image name not found in known registry.

### ✅ Fix:

Use `createKit.themes` and `createKit.assets.images` to inspect valid values:

```js
console.log(createKit.themes);
console.log(createKit.assets.images);
```

---

## 4. Slide Overlap or Time Gaps

### ❌ Symptom:

Slides flicker, disappear, or leave blank time gaps during playback.

### 🚨 Cause:

Incorrect `endTime` values or misordered slides.

### ✅ Fix:

* Always use strictly increasing `endTime`
* Avoid overlaps
* Ensure slide times connect smoothly

```js
// Slide 1: 0 → 10
// Slide 2: 10 → 20 ✅ no gap
```

---

## 5. Missing Item Appearance

### ❌ Symptom:

Slide is visible but blank.

### 🚨 Cause:

Items were created but never added to the slide, or all `showAt` are beyond slide time.

### ✅ Fix:

* Check your preset logic (if custom)
* Ensure every item is `slide.addItem(...)`
* Validate all `showAt` are visible within timing

---

## 6. Theme Properties Undefined

### ❌ Symptom:

Text renders with default font or color.

### 🚨 Cause:

Your theme is missing required keys like `headingColor` or `fontFamilyBase`.

### ✅ Fix:

Use full structure when defining or extending themes:

```js
{
  fontFamilyBase: "...",
  fontFamilyHeading: "...",
  baseTextColor: "#cccccc",
  ...
}
```

---

## 7. Forgetting `.build()`

### ❌ Symptom:

`undefined` or empty output.

### 🚨 Cause:

You called `kit.add(...)` but never exported.

### ✅ Fix:

Always finish with:

```js
const json = kit.build();
```

---

## 8. Misaligned showAt\[] Count

### ❌ Symptom:

Only first bullet appears, others vanish.

### 🚨 Cause:

Your `showAt[]` array is shorter than the number of items created by the preset.

### ✅ Fix:

Ensure one `showAt` value per visual item. Many presets use:

* `showAt[0]` → title or image
* `showAt[1..]` → bullets or lines

---

## 9. Pattern Misuse

### ❌ Symptom:

No pattern appears, or rendering fails.

### 🚨 Cause:

Pattern `type` or `props` are invalid or incomplete.

### ✅ Fix:

Use one of the supported pattern types (`dots`, `bricks`, etc.) and pass complete props.

```js
pattern: {
  type: "dots",
  props: { color: "#fff", opacity: 0.1, spacing: 30, radius: 2 }
}
```

---

## 10. Debugging Pro Tip

Always inspect raw output if something breaks:

```js
console.log(JSON.stringify(kit.build(), null, 2));
```

Then check:

* `startTime`, `endTime`
* `showAt`
* `background` per slide
* That each `slide.items[]` contains expected entries

---

## 11. Summary

Many issues in SlideKit stem from **time misalignment**, **preset misuse**, or **theme/property omissions**. Use this checklist as a debugging starter whenever things don’t appear as expected.

→ For full schema reference, see [`../system/json-schema.md`](../system/json-schema.md)
→ For slide writing workflow, see [`writing-decks.md`](./writing-decks.md)

```

Final support doc: `best-practices.md` — proceed?
```
