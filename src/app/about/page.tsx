import { Metadata } from "next";
import { CallToActionPanel, PageSection, SectionHeading } from "@/components/site";
import { aboutPoints, companyHighlights, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `About | ${siteInfo.brandName}`,
  description: "Learn about the firm profile, work approach, service philosophy, and field execution focus.",
};

export default function AboutPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          align="left"
          title="About the firm"
          description="A serious electrical contractor website should read like a capable execution profile: disciplined on field work, careful with compliance, and clear about where the firm adds value."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {companyHighlights.map((item) => (
            <div key={item.label} className="section-card p-5">
              <p className="text-3xl font-semibold tracking-tight text-[var(--heading)]">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--primary)]">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="grid gap-6 lg:grid-cols-2">
        {aboutPoints.map((item) => (
          <div key={item.title} className="section-card p-7">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
              {item.title}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
              {item.description}
            </p>
          </div>
        ))}
      </PageSection>

      <CallToActionPanel
        title="Replace placeholder firm details with verified owner, location, and registration information"
        description="The current copy is structured for a contractor profile and can be quickly finalized once the client shares real business identity details."
        primaryHref="/contact"
        primaryLabel="Send Content Checklist"
        secondaryHref="/services"
        secondaryLabel="See Service Layout"
      />
    </>
  );
}
