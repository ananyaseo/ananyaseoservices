import { useEffect } from "react";
import React from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface UseSEOOptions {
  title: string;
  description: string;
  url?: string;
  canonicalUrl?: string;
  schemaData?: {
    name: string;
    description: string;
    serviceType: string;
    url?: string;
  };
  additionalSchema?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
}

export function useSEO({
  title,
  description,
  url,
  canonicalUrl: canonicalUrlOverride,
  schemaData,
  additionalSchema,
  breadcrumbs,
}: UseSEOOptions): React.ReactElement | null {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = canonicalUrlOverride || `https://www.ananyaseo.com${url || window.location.pathname}`;
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
  }, [title, description, url, canonicalUrlOverride]);

  // Build all JSON-LD schemas as inline JSX elements
  const schemas: React.ReactElement[] = [];

  // Organization schema
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
  schemas.push(
    React.createElement("script", {
      key: "org-schema",
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(orgSchema) }
    })
  );

  // Service schema
  if (schemaData) {
    const schemaUrl = `https://www.ananyaseo.com${schemaData.url || url || ""}`;
    const serviceSchema = {
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
    schemas.push(
      React.createElement("script", {
        key: "service-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(serviceSchema) }
      })
    );
  }

  // Additional schema (VideoObject, FAQPage, etc.)
  if (additionalSchema) {
    schemas.push(
      React.createElement("script", {
        key: "additional-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(additionalSchema) }
      })
    );
  }

  // Breadcrumb schema
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
    schemas.push(
      React.createElement("script", {
        key: "breadcrumb-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(breadcrumbSchema) }
      })
    );
  }

  return schemas.length > 0 ? React.createElement(React.Fragment, null, ...schemas) : null;
}
