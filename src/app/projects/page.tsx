import { Metadata } from "next";
import { CallToActionPanel, PageSection, ProjectCard, SectionHeading } from "@/components/site";
import { projects, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Projects | ${siteInfo.brandName}`,
  description: "A work portfolio layout for maintenance support, line work, metering, panel installation, and field execution projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Work portfolio and execution snapshots"
          description="Project cards are written to highlight scope, location, category, and status without making risky claims about ownership or department affiliation."
        />
      </PageSection>

      <PageSection>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </PageSection>

      <CallToActionPanel
        title="Add real project photos, work-order-backed titles, and verified client types during final content onboarding"
        description="This structure already supports strong before-and-after storytelling for electrical and utility-support execution."
        primaryHref="/contact"
        primaryLabel="Prepare Final Portfolio"
        secondaryHref="/gallery"
        secondaryLabel="Open Gallery Layout"
      />
    </>
  );
}
