# Firefox Startpage

Personal Firefox new-tab replacement — a local HTML file set as the browser home page.

## Files

- `BensWebsite.html` — main file, contains all CSS (inline `<style>` block) and HTML
- `clock.js` — updates the clock display every second (12h format)
- `style.css` — nearly empty; all real styles live in BensWebsite.html
- `target-for-darts-darts-sport-transparent-background-png.png` — unused after the design refactor (can be deleted)

> `misc.js` is referenced in the HTML but doesn't exist — orphaned script tag.

## Design System

**Dark mode** (default, 19:00–09:00):
- Background: `#08080d`
- Text: `#f0f0f5`
- Ambient glow: two radial gradients (purple top-left, blue bottom-right)

**Light mode** (auto-activated 09:00–19:00):
- Background: `#f7f3ea` (warm cream)
- Text: `#1a1a2e`
- Toggled via `.light` class on `<body>`

**Glassmorphism pattern** used on all interactive elements:
- `background: rgba(255,255,255, 0.04–0.08)`
- `border: 1px solid rgba(255,255,255, 0.07–0.1)`
- `backdrop-filter: blur(20–24px)`
- `border-radius: 13–18px`
- Hover: `translateY(-4 to -5px) scale(1.025–1.06)` with cubic-bezier spring easing

**Typography:** System font stack (`-apple-system`, `SF Pro Display`, `Helvetica Neue`); widget labels are `0.65–0.75rem`, `600` weight, `uppercase`, `0.1em` letter-spacing.

## Layout

- Full-screen flexbox column, content centered
- Fixed positions: clock (top-left), theme toggle (below clock, left)
- Container children (top to bottom): search bar → large widget grid (3×2) → small widget grid (6×1) → projects section (2 cards)

## Personal Project Links

| Name | URL |
|------|-----|
| Darts App | `https://darts-app-production.up.railway.app/` |
| Gewinnspiel | `https://gewinnspiel-production.up.railway.app` |

## Testing

Open `BensWebsite.html` directly in Firefox. No build step or server needed.
