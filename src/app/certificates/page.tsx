import { Metadata } from "next";
import { CallToActionPanel, PageSection, SectionHeading } from "@/components/site";
import { certificates, officialTenderLinks, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Certificates | ${siteInfo.brandName}`,
  description: "A compliance page layout for registrations, contractor licenses, completion records, and controlled document sharing.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Certificates, registrations, and compliance support"
          description="This page is designed to build confidence without exposing sensitive records publicly. It is ideal for GST, MSME, licenses, and completion evidence summaries."
        />
      </PageSection>

      <PageSection className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5">
          {certificates.map((item) => (
            <div key={item.title} className="section-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-[var(--heading)]">
                  {item.title}
                </h2>
                <span className="rounded-full border border-[var(--border-strong)] bg-[var(--primary-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="section-card overflow-hidden p-0">
          <div className="utility-grid px-7 py-6 text-white">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recommended public notice
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/78">
              Document summaries can be displayed publicly, while detailed
              certificate copies, work orders, or authorization letters should
              be shared only on request or during procurement discussions.
            </p>
          </div>
          <div className="space-y-4 p-7">
            {officialTenderLinks.map((item) => (
              <a
                key={item.title}
                className="block rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
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
        title="A polished company profile PDF can be generated from the same content structure"
        description="Once the client shares the final document set, this page becomes the perfect source for brochure, PDF, and email-ready credentials."
        primaryHref="/contact"
        primaryLabel="Request Content Handover"
        secondaryHref="/about"
        secondaryLabel="Review Firm Profile"
      />
    </>
  );
}
