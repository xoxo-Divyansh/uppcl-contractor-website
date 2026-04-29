import { Metadata } from "next";
import { ContactPanel, PageSection, SectionHeading } from "@/components/site";
import { contactReasons, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact | ${siteInfo.brandName}`,
  description: "Contact details, enquiry channels, and business conversations for electrical contracting and tender support work.",
};

export default function ContactPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Call, WhatsApp, or send a project requirement"
          description="The contact flow is now designed to convert real enquiries into faster business conversations around manpower, maintenance, material supply, and tender-related execution support."
        />
      </PageSection>

      <PageSection
        id="request-profile"
        className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <div className="section-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
            Enquiry categories
          </h2>
          <div className="mt-5 grid gap-3">
            {contactReasons.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 text-sm font-medium text-[var(--muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <ContactPanel />
      </PageSection>
    </>
  );
}
