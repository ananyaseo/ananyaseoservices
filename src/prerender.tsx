import { renderToString } from "react-dom/server";
import App from "./App";
import { ssrHead } from "./hooks/use-seo";
import "./index.css";

const SITE = "https://www.ananyaseo.com";

/**
 * Called once per route by vite-prerender-plugin at build time.
 * Returns the static HTML for #root plus the head tags for that page.
 */
export async function prerender(data: { url: string }) {
  ssrHead.title = undefined;
  ssrHead.description = undefined;
  ssrHead.canonical = undefined;

  const html = renderToString(<App url={data.url} />);

  const title = ssrHead.title ?? "SEO & Digital Marketing Agency India | Ananya SEO";
  const description =
    ssrHead.description ??
    "Grow your business with Ananya SEO. We provide SEO, responsive WordPress web development, and digital marketing solutions across industries.";
  const canonical = ssrHead.canonical ?? `${SITE}${data.url === "/" ? "" : data.url}`;

  const elements = new Set([
    { type: "meta", props: { name: "description", content: description } },
    { type: "link", props: { rel: "canonical", href: canonical } },
    { type: "meta", props: { property: "og:title", content: title } },
    { type: "meta", props: { property: "og:description", content: description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "meta", props: { name: "twitter:title", content: title } },
    { type: "meta", props: { name: "twitter:description", content: description } },
  ]);

  return {
    html,
    head: { lang: "en", title, elements },
  };
}
