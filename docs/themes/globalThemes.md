`p-p`

Proceeding with `docs/themes/globalThemes.md` — explaining how themes work, what they define, and how they integrate into presets.

---

````md
# Global Themes

Themes define the **visual appearance** of text and item elements across all slides. A theme is a simple JavaScript object with keys for color, font family, and role-specific styles.

Themes are selected at authoring time using:

```js
createKit.setTheme("neonDark");
````

---

## 1. Purpose

Themes are used to:

* Apply consistent visual styling across all slides
* Centralize font and color decisions
* Allow easy swapping for branding or tone

Presets like `centerHeading`, `bulletLine`, and `caption` all read from the active theme.

---

## 2. Where Themes Are Defined

Themes live in:

```js
import { GlobalThemes } from "taleem-video-deckbuilder";
```

To inspect available themes:

```js
console.log(Object.keys(GlobalThemes));
// ["neonDark", "royalBlue", "paper", ...]
```

---

## 3. Theme Structure

A theme is an object like:

```js
{
  fontFamilyHeading: "Arial Black",
  fontFamilyBase: "Inter",

  headingColor: "#ffffff",
  baseTextColor: "#cccccc",
  bulletColor: "#00ffff",

  primaryColor: "#ff00ff",
  secondaryColor: "#999999",

  backgroundColor: "#000000"
}
```

---

### 3.1 Fonts

| Key                 | Used For                   |
| ------------------- | -------------------------- |
| `fontFamilyHeading` | Headings and titles        |
| `fontFamilyBase`    | Bullets, quotes, footnotes |

Fonts must be web-safe or available via canvas renderer.

---

### 3.2 Colors

| Key               | Used For                  |
| ----------------- | ------------------------- |
| `headingColor`    | Title text                |
| `baseTextColor`   | Body text, quotes         |
| `bulletColor`     | Bullet lines, footnotes   |
| `primaryColor`    | Emphasis (e.g. hero text) |
| `secondaryColor`  | Captions, subtle content  |
| `backgroundColor` | Default canvas background |

Colors are defined in hex string form (`"#rrggbb"`). Internally they may be converted to numeric color codes (e.g. `0xffffff`).

---

## 4. Theme Application in Presets

All `textPresets.*` styles read from the theme:

```js
textPresets.bulletLine({ text }, theme)
→ uses theme.fontFamilyBase and theme.bulletColor
```

You can create custom presets that use theme properties the same way.

---

## 5. Extending Themes

To add a custom theme:

1. Fork `GlobalThemes` or define your own in authoring scope.
2. Use the same key structure.
3. Pass it directly into a custom SlideKit, or temporarily override during test.

---

## 6. Best Practices

* Use highly legible fonts (not cursive or serif-heavy)
* Test themes against all preset slide types
* Avoid low-contrast foreground/background combos
* Use `backgroundColor` as fallback even when using images

---

## 7. Summary

Themes enable visual consistency across slides, separating style from content. They power the entire appearance layer of the SlideKit authoring stack.

→ To define background visuals, see [`../background/background-config.md`](../background/background-config.md)
→ For how text elements apply themes, check [`../presets/text-presets.md`](../presets/text-presets.md)

```

Next: `background-config.md` or `pattern-types.md`? Or pause here?
```
