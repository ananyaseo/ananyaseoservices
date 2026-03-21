import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function useSEO({
  title,
  description,
  url,
  schemaData,
  additionalSchema,
  breadcrumbs,
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
  additionalSchema?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `https://www.ananyaseo.com${url || window.location.pathname}`;
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
      const schemaUrl = `https://www.ananyaseo.com${schemaData.url || url || window.location.pathname}`;
      const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": schemaData.name,
        "description": schemaData.description,
        "provider": {
          "@type": "Organization",
          "name": "Ananya SEO Services",
          "url": "https://www.ananyaseo.com",
          "logo": "https://www.ananyaseo.com/logo.png",
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

    // Update JSON-LD Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ananya SEO Services",
      "url": "https://www.ananyaseo.com/",
      "logo": "https://www.ananyaseo.com/logo.png",
      "description": "Digital Marketing Company offering Search Engine Optimization (SEO), Search Engine Marketing (PPC advertising) and Social Media Marketing (SMM).",
      "email": "sanand.rao@gmail.com",
      "telephone": "+91-9845038936",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "49, 2nd Main, Arakere MICO Layout I Stage",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560076",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ananya-seo-services",
        "https://www.facebook.com/ananya.seo.services",
        "http://www.youtube.com/c/AnanyaseoservicesBengaluru",
        "https://twitter.com/ananya_seo"
      ]
    };

    let orgScript = document.querySelector('script[type="application/ld+json"][data-type="organization-schema"]');
    if (!orgScript) {
      orgScript = document.createElement("script");
      orgScript.setAttribute("type", "application/ld+json");
      orgScript.setAttribute("data-type", "organization-schema");
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(orgSchema);

    // Update additional JSON-LD schema (e.g., FAQPage)
    if (additionalSchema) {
      let additionalScript = document.querySelector('script[type="application/ld+json"][data-type="additional-schema"]');
      if (!additionalScript) {
        additionalScript = document.createElement("script");
        additionalScript.setAttribute("type", "application/ld+json");
        additionalScript.setAttribute("data-type", "additional-schema");
        document.head.appendChild(additionalScript);
      }
      additionalScript.textContent = JSON.stringify(additionalSchema);
    } else {
      const additionalScript = document.querySelector('script[type="application/ld+json"][data-type="additional-schema"]');
      if (additionalScript) {
        document.head.removeChild(additionalScript);
      }
    }

    // Update JSON-LD BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `https://www.ananyaseo.com${item.url}`
        }))
      };

      let bcScript = document.querySelector('script[type="application/ld+json"][data-type="breadcrumb-schema"]');
      if (!bcScript) {
        bcScript = document.createElement("script");
        bcScript.setAttribute("type", "application/ld+json");
        bcScript.setAttribute("data-type", "breadcrumb-schema");
        document.head.appendChild(bcScript);
      }
      bcScript.textContent = JSON.stringify(breadcrumbSchema);
    } else {
      const bcScript = document.querySelector('script[type="application/ld+json"][data-type="breadcrumb-schema"]');
      if (bcScript) {
        document.head.removeChild(bcScript);
      }
    }

  }, [title, description, url, schemaData, additionalSchema, breadcrumbs]);
}
