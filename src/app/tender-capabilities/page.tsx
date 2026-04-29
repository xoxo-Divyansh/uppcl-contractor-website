import { Metadata } from "next";
import { CallToActionPanel, PageSection, SectionHeading } from "@/components/site";
import { officialTenderLinks, tenderCapabilities, tenderCategories, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Tender Capabilities | ${siteInfo.brandName}`,
  description: "Tender capability content for BOQ understanding, execution support, billing coordination, and official reference links.",
};

export default function TenderCapabilitiesPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Tender capabilities and execution support"
          description="This page helps the firm look organized and process-aware by showing how it handles surveys, BOQs, execution, coordination, and billing support."
        />
      </PageSection>

      <PageSection className="grid gap-6 lg:grid-cols-2">
        <div className="section-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
            Our tender capabilities
          </h2>
          <div className="mt-5 grid gap-3">
            {tenderCapabilities.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-[var(--muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="section-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
            Tender categories handled
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tenderCategories.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-[var(--muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
            Official tender references
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {officialTenderLinks.map((item) => (
              <a
                key={item.title}
                className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-base font-semibold text-[var(--heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      <CallToActionPanel
        title="This route turns the website from a brochure into a serious capability document"
        description="It is especially useful when the client wants to look prepared for suppliers, consultants, partners, and department-facing discussions."
        primaryHref="/contact"
        primaryLabel="Set Up Tender Enquiry Flow"
        secondaryHref="/projects"
        secondaryLabel="See Project Execution Layout"
      />
    </>
  );
}
