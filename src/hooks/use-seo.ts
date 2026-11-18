import { useEffect } from "react";
import React from "react";

// Captured during static prerendering (no DOM available) so the build can
// write the real title/description/canonical into the static HTML head.
export const ssrHead: {
  title?: string;
  description?: string;
  canonical?: string;
} = {};

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
  includeProfessionalServiceSchema?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export function useSEO({
  title,
  description,
  url,
  canonicalUrl: canonicalUrlOverride,
  schemaData,
  additionalSchema,
  includeProfessionalServiceSchema = false,
  breadcrumbs,
}: UseSEOOptions): React.ReactElement | null {
  if (typeof window === "undefined") {
    ssrHead.title = title;
    ssrHead.description = description;
    ssrHead.canonical =
      canonicalUrlOverride || `https://www.ananyaseo.com${url || ""}`;
  }

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

  if (includeProfessionalServiceSchema) {
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://www.ananyaseo.com/#business",
      "name": "Ananya SEO Services",
      "url": "https://www.ananyaseo.com/",
      "logo": "https://www.ananyaseo.com/wp-content/uploads/2018/03/cropped-Ananya_nospace_528x150-1.jpg",
      "image": [
        "https://www.ananyaseo.com/wp-content/uploads/2018/03/cropped-Ananya_nospace_528x150-1.jpg"
      ],
      "description": "Digital marketing company offering Search Engine Optimization (SEO), PPC advertising, and Social Media Marketing services.",
      "priceRange": "INR 18,000 - INR 100,000",
      "currenciesAccepted": "INR",
      "telephone": "+91-9845038936",
      "email": "sanand.rao@gmail.com",
      "hasMap": "https://maps.app.goo.gl/Mc33ZNH6rcBSegiGA",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "49, 2nd Main, Arakere MICO Layout I Stage",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560076",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.8921,
        "longitude": 77.5984
      },
      "areaServed": [
        { "@type": "City", "name": "Bangalore" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "State", "name": "Andhra Pradesh" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Place", "name": "Global markets" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/ananya-seo-services",
        "https://www.facebook.com/ananya.seo.services",
        "https://maps.app.goo.gl/Mc33ZNH6rcBSegiGA"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:30",
          "closes": "18:30"
        }
      ]
    };
    schemas.push(
      React.createElement("script", {
        key: "professional-service-schema",
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(professionalServiceSchema) }
      })
    );
  }

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
