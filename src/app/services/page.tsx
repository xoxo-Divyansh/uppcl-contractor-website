import { Metadata } from "next";
import { CallToActionPanel, PageSection, SectionHeading, ServiceCard } from "@/components/site";
import { services, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Services | ${siteInfo.brandName}`,
  description: "Review the core service categories for electrical contracting, maintenance, supply, tender support, and manpower.",
};

export default function ServicesPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Services aligned with tenders, utility support, and electrical execution"
          description="Each service area is grouped to make the business easier to understand for procurement teams, private partners, and subcontracting enquiries."
        />
      </PageSection>

      <PageSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </PageSection>

      <CallToActionPanel
        title="This page can later expand into BOQ categories, equipment lists, and execution scope details"
        description="For the MVP, the service architecture already communicates capability in a clear and professional way."
        primaryHref="/projects"
        primaryLabel="View Project Examples"
        secondaryHref="/contact"
        secondaryLabel="Discuss Client Requirements"
      />
    </>
  );
}
