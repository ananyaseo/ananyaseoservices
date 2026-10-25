# Project notes for agents

- The interactive company deck lives in `src/slides/`. `deck-data.ts` is the single source of truth for slide content; both the React renderer (`SlideCanvas.tsx`) and the PPTX export (`pptx-export.ts`) read from it — edit slide copy in `deck-data.ts` only, never in the renderers.
- The deck is embedded on the home page between "Why Choose Us" and "Industries We Serve" and autoplays while scrolled into view (6s per slide, pauses on hover; manual play/pause available). Exports: PPTX via pptxgenjs and PDF via the `/deck-print` route (browser print, one 1920x1080 page per slide).
- Deck slides render at fixed 1920x1080 and scale via transform in `SlideFrame` (AnanyaDeck.tsx); typography uses the `as-*` classes defined in `src/index.css`. Do not use Tailwind text-size utilities inside `.ananya-slide-content`.
