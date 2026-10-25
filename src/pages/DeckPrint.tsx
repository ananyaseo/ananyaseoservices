import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { deckSlides } from "@/slides/deck-data";
import SlideCanvas from "@/slides/SlideCanvas";

/**
 * Static, print-optimized render of the full deck.
 * Open /deck-print?print=1 to get the browser's print dialog
 * (choose "Save as PDF") with one slide per 1920x1080 page.
 */
const DeckPrint = () => {
  const location = useLocation();

  useEffect(() => {
    if (!new URLSearchParams(location.search).get("print")) return;
    // Let entrance animations finish before opening the print dialog.
    const t = setTimeout(() => window.print(), 1500);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <div className="as-print-root">
      {deckSlides.map((slide) => (
        <div key={slide.id} className="as-print-page">
          <SlideCanvas slide={slide} />
        </div>
      ))}
    </div>
  );
};

export default DeckPrint;
