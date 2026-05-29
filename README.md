# @robertocoratti/ui

SCSS-first design system with optional React wrappers. Every Layout primitives, fluid type/space scales, light/dark theming via CSS cascade layers.

Demo: [ui.robertocoratti.com](https://ui.robertocoratti.com)

## Installation

```sh
pnpm add @robertocoratti/ui sass
```

React components are optional — the system works as plain HTML + SCSS.

## Usage

### SCSS (recommended)

```scss
@use "@robertocoratti/ui/scss";
```

Override any token before importing:

```scss
@use "@robertocoratti/ui/scss" with (
  $font-path: "/assets/fonts",
  $color-themes: (
    "light": (
      "bg": ("base", "100"),
      "fg": ("primary", "700"),
      "heading": ("accent", "700"),
      "focus": ("accent", "500"),
    ),
    "dark": (
      "bg": ("base", "900"),
      "fg": ("primary", "300"),
      "heading": ("accent", "100"),
      "focus": ("accent", "300"),
    ),
  ),
);
```

### CSS only (no Sass)

```ts
import "@robertocoratti/ui/css";
```

### React

```ts
import "@robertocoratti/ui/css";
import { Stack, Button, Container } from "@robertocoratti/ui";
```

## Theming

Set `data-theme` on `<html>` to switch themes at runtime:

```html
<html data-theme="light"> <!-- or "dark" -->
```

Without `data-theme`, the theme follows `prefers-color-scheme`.

## Every Layout primitives

All primitives work as plain CSS classes without React:

| Class | Purpose |
|---|---|
| `.box` | Padded box, invertable colors |
| `.center` | Horizontally centered column |
| `.cluster` | Wrapping flex row with gap |
| `.container` | Page-width wrapper with named widths |
| `.cover` | Full-height section with centered child |
| `.frame` | Fixed aspect-ratio media wrapper |
| `.grid` | Responsive auto-fill grid |
| `.icon` | Inline SVG sized to text |
| `.imposter` | Absolutely centered overlay |
| `.reel` | Horizontal scroll track |
| `.sidebar` | Two-column sidebar layout |
| `.stack` | Vertical stack with gap |
| `.switcher` | Row that wraps at threshold |

## Font path

Local fonts are served from `$font-path` (default: `/fonts`). Override to match your asset path:

```scss
@use "@robertocoratti/ui/scss" with ($font-path: "/static/fonts");
```

Fonts are not included in the npm package. Download them from Google Fonts or use the CDN via `preview-head.html`.

## Cascade layers

Output is organized into `@layer reset, base, tokens, layouts, components, utilities`. Consumer rules without a layer override everything.

## License

MIT
