import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { useSEO } from "@/hooks/use-seo";

const SchemaMarkup = ({ include }: { include: boolean }) =>
  useSEO({
    title: "Test page",
    description: "Test description",
    includeProfessionalServiceSchema: include,
  });

describe("ProfessionalService schema", () => {
  it("is emitted only when explicitly enabled for a page", () => {
    const homepageMarkup = renderToStaticMarkup(React.createElement(SchemaMarkup, { include: true }));
    const otherPageMarkup = renderToStaticMarkup(React.createElement(SchemaMarkup, { include: false }));

    expect(homepageMarkup).toContain('"@type":"ProfessionalService"');
    expect(homepageMarkup).toContain('"currenciesAccepted":"INR"');
    expect(otherPageMarkup).not.toContain('"@type":"ProfessionalService"');
    expect(homepageMarkup).not.toContain('"@type":"Organization"');
    expect(otherPageMarkup).not.toContain('"@type":"Organization"');
  });
});