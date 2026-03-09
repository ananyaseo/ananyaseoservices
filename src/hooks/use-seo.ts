import { useEffect } from "react";

export function useSEO({
  title,
  description,
  url,
  schemaData,
}: {
  title: string;
  description: string;
  url?: string;
  schemaData?: {
    name: string;
    description: string;
    serviceType: string;
    url?: string;
  };
}) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `https://ananyaseo.com${url || window.location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // Update JSON-LD Service Schema
    if (schemaData) {
      const schemaUrl = `https://ananyaseo.com${schemaData.url || url || window.location.pathname}`;
      const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": schemaData.name,
        "description": schemaData.description,
        "provider": {
          "@type": "Organization",
          "name": "Ananya SEO Services",
          "url": "https://ananyaseo.com",
          "logo": "https://ananyaseo.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9845038936",
            "email": "sanand.rao@gmail.com",
            "contactType": "customer service"
          }
        },
        "areaServed": "India",
        "serviceType": schemaData.serviceType,
        "url": schemaUrl
      };

      let script = document.querySelector('script[type="application/ld+json"][data-type="service-schema"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-type", "service-schema");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      const script = document.querySelector('script[type="application/ld+json"][data-type="service-schema"]');
      if (script) {
        document.head.removeChild(script);
      }
    }
  }, [title, description, url, schemaData]);
}
