import PptxGenJS from "pptxgenjs";
import { BRAND, deckSlides, type DeckSlideData } from "./deck-data";

const IMG_W = 7.6; // inches, service slide image width

/** Fetch a bundled asset and convert it to a base64 data URI for pptxgenjs. */
const toDataUrl = async (url: string): Promise<string> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  const blob = await res.blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const addHeader = (pptx: PptxGenJS, slide: DeckSlideData) => {
  const s = pptx.addSlide();
  s.background = { color: BRAND.navy };
  if (slide.kicker) {
    s.addText(slide.kicker.toUpperCase(), {
      x: 0.7,
      y: 0.5,
      w: 12,
      h: 0.4,
      fontFace: "Poppins",
      fontSize: 13,
      bold: true,
      color: BRAND.orange,
      charSpacing: 2,
    });
  }
  s.addText(slide.title, {
    x: 0.7,
    y: 0.9,
    w: 12,
    h: 0.9,
    fontFace: "Poppins",
    fontSize: 34,
    bold: true,
    color: BRAND.white,
  });
  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      x: 0.7,
      y: 1.75,
      w: 11.9,
      h: 0.9,
      fontFace: "Open Sans",
      fontSize: 15,
      color: BRAND.softText,
    });
  }
  s.addText("Ananya SEO Services · ananyaseo.com", {
    x: 0.7,
    y: 7.05,
    w: 6,
    h: 0.3,
    fontFace: "Open Sans",
    fontSize: 10,
    color: BRAND.softText,
  });
  return s;
};

const addCard = (
  s: ReturnType<PptxGenJS["addSlide"]>,
  card: { icon?: string; title: string; text: string },
  x: number,
  y: number,
  w: number,
  h: number
) => {
  s.addShape("roundRect", {
    x,
    y,
    w,
    h,
    fill: { color: BRAND.navyLight },
    line: { color: BRAND.white, transparency: 85 },
    rectRadius: 0.12,
  });
  s.addShape("roundRect", {
    x: x + 0.35,
    y: y + 0.35,
    w: 0.55,
    h: 0.55,
    fill: { color: BRAND.green, transparency: 70 },
    line: { color: BRAND.green },
    rectRadius: 0.1,
  });
  s.addText(card.title, {
    x: x + 0.35,
    y: y + 1.05,
    w: w - 0.7,
    h: 0.5,
    fontFace: "Poppins",
    fontSize: 17,
    bold: true,
    color: BRAND.white,
  });
  s.addText(card.text, {
    x: x + 0.35,
    y: y + 1.55,
    w: w - 0.7,
    h: h - 1.8,
    fontFace: "Open Sans",
    fontSize: 12.5,
    color: BRAND.softText,
  });
};

const buildSlide = (
  pptx: PptxGenJS,
  slide: DeckSlideData,
  images: Map<string, string>
) => {
  switch (slide.layout) {
    case "title": {
      const s = pptx.addSlide();
      s.background = { color: BRAND.navy };
      if (slide.image && images.has(slide.image)) {
        s.addImage({
          data: images.get(slide.image)!,
          x: 6.5,
          y: 0,
          w: 6.833,
          h: 7.5,
          sizing: { type: "cover", w: 6.833, h: 7.5 },
        });
        s.addShape("rect", {
          x: 6.5,
          y: 0,
          w: 6.833,
          h: 7.5,
          fill: { color: BRAND.navy, transparency: 35 },
        });
      }
      s.addText((slide.kicker || "").toUpperCase(), {
        x: 0.7,
        y: 1.5,
        w: 6,
        h: 0.4,
        fontFace: "Poppins",
        fontSize: 13,
        bold: true,
        color: BRAND.orange,
        charSpacing: 2,
      });
      s.addText(slide.title, {
        x: 0.7,
        y: 2.0,
        w: 6.4,
        h: 1.6,
        fontFace: "Poppins",
        fontSize: 44,
        bold: true,
        color: BRAND.white,
      });
      s.addText(slide.subtitle || "", {
        x: 0.7,
        y: 3.6,
        w: 6,
        h: 0.8,
        fontFace: "Poppins",
        fontSize: 19,
        bold: true,
        color: BRAND.green,
      });
      (slide.stats || []).forEach((stat, i) => {
        s.addText(stat.value, {
          x: 0.7 + i * 2.1,
          y: 5.4,
          w: 2,
          h: 0.8,
          fontFace: "Poppins",
          fontSize: 34,
          bold: true,
          color: BRAND.green,
        });
        s.addText(stat.label, {
          x: 0.7 + i * 2.1,
          y: 6.15,
          w: 2,
          h: 0.6,
          fontFace: "Open Sans",
          fontSize: 11,
          color: BRAND.softText,
        });
      });
      break;
    }
    case "capabilities": {
      const s = addHeader(pptx, slide);
      (slide.cards || []).forEach((card, i) =>
        addCard(s, card, 0.7 + i * 4.15, 2.9, 3.9, 3.3)
      );
      (slide.chips || []).forEach((chip, i) => {
        s.addText(chip, {
          x: 0.7 + i * 3.1,
          y: 6.55,
          w: 2.9,
          h: 0.45,
          align: "center",
          fontFace: "Open Sans",
          fontSize: 12,
          color: BRAND.softText,
          line: { color: BRAND.white, transparency: 70 },
        });
      });
      break;
    }
    case "audience": {
      const s = addHeader(pptx, slide);
      (slide.cards || []).forEach((card, i) =>
        addCard(s, card, 0.7, 2.9 + i * 1.45, 7.4, 1.3)
      );
      if (slide.image && images.has(slide.image)) {
        s.addImage({
          data: images.get(slide.image)!,
          x: 8.5,
          y: 2.9,
          w: 4.1,
          h: 4.1,
          sizing: { type: "cover", w: 4.1, h: 4.1 },
        });
      }
      break;
    }
    case "stats": {
      const s = addHeader(pptx, slide);
      (slide.stats || []).forEach((stat, i) => {
        s.addText(stat.value, {
          x: 0.7 + i * 4.15,
          y: 3.4,
          w: 3.9,
          h: 1.2,
          align: "center",
          fontFace: "Poppins",
          fontSize: 60,
          bold: true,
          color: BRAND.green,
        });
        s.addText(stat.label, {
          x: 0.7 + i * 4.15,
          y: 4.65,
          w: 3.9,
          h: 0.8,
          align: "center",
          fontFace: "Open Sans",
          fontSize: 14,
          color: BRAND.white,
        });
      });
      (slide.chips || []).forEach((chip, i) => {
        s.addText(chip, {
          x: 1.2 + i * 2.85,
          y: 6.3,
          w: 2.7,
          h: 0.45,
          align: "center",
          fontFace: "Open Sans",
          fontSize: 11.5,
          color: BRAND.softText,
          line: { color: BRAND.white, transparency: 70 },
        });
      });
      break;
    }
    case "service": {
      const s = addHeader(pptx, slide);
      const imageRight = slide.imageSide !== "left";
      const imgX = imageRight ? 8.0 : 0.7;
      const textX = imageRight ? 0.7 : 8.0;
      if (slide.image && images.has(slide.image)) {
        s.addImage({
          data: images.get(slide.image)!,
          x: imgX,
          y: 2.9,
          w: 4.6,
          h: 3.6,
          sizing: { type: "cover", w: 4.6, h: 3.6 },
        });
      }
      (slide.bullets || []).forEach((b, i) => {
        s.addText(b, {
          x: textX + 0.35,
          y: 2.95 + i * 0.62,
          w: 6.2,
          h: 0.6,
          fontFace: "Open Sans",
          fontSize: 13.5,
          color: BRAND.white,
          bullet: { characterCode: "2713", color: BRAND.green },
        });
      });
      if (slide.link) {
        s.addText(slide.link.label.toUpperCase(), {
          x: textX + 0.35,
          y: 6.6,
          w: 5,
          h: 0.5,
          fontFace: "Poppins",
          fontSize: 12,
          bold: true,
          color: BRAND.green,
        });
      }
      break;
    }
    case "strengths": {
      const s = addHeader(pptx, slide);
      (slide.cards || []).forEach((card, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        addCard(s, card, 0.7 + col * 6.15, 2.8 + row * 2.05, 5.9, 1.9);
      });
      break;
    }
    case "cta": {
      const s = pptx.addSlide();
      s.background = { color: BRAND.navy };
      s.addText((slide.kicker || "").toUpperCase(), {
        x: 0.7,
        y: 1.3,
        w: 6,
        h: 0.4,
        fontFace: "Poppins",
        fontSize: 13,
        bold: true,
        color: BRAND.orange,
        charSpacing: 2,
      });
      s.addText(slide.title, {
        x: 0.7,
        y: 1.8,
        w: 6.5,
        h: 1.6,
        fontFace: "Poppins",
        fontSize: 44,
        bold: true,
        color: BRAND.white,
      });
      s.addText(slide.subtitle || "", {
        x: 0.7,
        y: 3.4,
        w: 5.8,
        h: 0.8,
        fontFace: "Open Sans",
        fontSize: 15,
        color: BRAND.softText,
      });
      [
        "sanand.rao@gmail.com",
        "+91 98450 38936",
        "www.ananyaseo.com",
      ].forEach((line, i) => {
        s.addShape("roundRect", {
          x: 0.7,
          y: 4.4 + i * 0.85,
          w: 0.5,
          h: 0.5,
          fill: { color: BRAND.green, transparency: 70 },
          line: { color: BRAND.green },
          rectRadius: 0.08,
        });
        s.addText(line, {
          x: 1.4,
          y: 4.4 + i * 0.85,
          w: 5.5,
          h: 0.5,
          fontFace: "Open Sans",
          fontSize: 16,
          color: BRAND.white,
        });
      });
      // Form mock
      s.addShape("roundRect", {
        x: 7.6,
        y: 1.0,
        w: 5.0,
        h: 5.9,
        fill: { color: BRAND.white },
        rectRadius: 0.15,
      });
      s.addText("Start the Conversation", {
        x: 8.0,
        y: 1.35,
        w: 4.2,
        h: 0.5,
        fontFace: "Poppins",
        fontSize: 16,
        bold: true,
        color: BRAND.navy,
      });
      ["Full Name *", "Email Address *", "Your Message *"].forEach((ph, i) => {
        s.addShape("roundRect", {
          x: 8.0,
          y: 2.05 + i * 1.15,
          w: 4.2,
          h: i === 2 ? 1.6 : 0.75,
          fill: { color: "F3F5F7" },
          line: { color: "D7DEE6" },
          rectRadius: 0.08,
        });
        s.addText(ph, {
          x: 8.2,
          y: 2.1 + i * 1.15,
          w: 3.9,
          h: 0.5,
          fontFace: "Open Sans",
          fontSize: 11,
          color: BRAND.navy,
          transparency: 40,
        });
      });
      s.addShape("roundRect", {
        x: 8.0,
        y: 5.75,
        w: 4.2,
        h: 0.75,
        fill: { color: BRAND.green },
        rectRadius: 0.08,
      });
      s.addText("Elevate Your Business", {
        x: 8.0,
        y: 5.85,
        w: 4.2,
        h: 0.55,
        align: "center",
        fontFace: "Poppins",
        fontSize: 14,
        bold: true,
        color: BRAND.white,
      });
      break;
    }
  }
};

/** Downloads the deck as a branded .pptx file. */
export const downloadDeckPptx = async () => {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "DECK", width: 13.333, height: 7.5 });
  pptx.layout = "DECK";
  pptx.author = "Ananya SEO Services";
  pptx.company = "Ananya SEO Services";
  pptx.title = "Ananya SEO Services — Company Deck";
  pptx.subject = "Your One-Stop Solution for Digital Marketing Success";

  const images = new Map<string, string>();
  for (const slide of deckSlides) {
    if (slide.image && !images.has(slide.image)) {
      images.set(slide.image, await toDataUrl(slide.image));
    }
  }

  for (const slide of deckSlides) buildSlide(pptx, slide, images);
  await pptx.writeFile({ fileName: "ananya-seo-services-deck.pptx" });
};
