import { Metadata } from "next";
import Image from "next/image";
import { CallToActionPanel, PageSection, SectionHeading } from "@/components/site";
import { galleryItems, siteInfo } from "@/content/site";

export const metadata: Metadata = {
  title: `Gallery | ${siteInfo.brandName}`,
  description: "Gallery layout for site photos, safety visuals, electrical panels, manpower, and infrastructure execution evidence.",
};

export default function GalleryPage() {
  return (
    <>
      <PageSection variant="hero">
        <SectionHeading
          title="Gallery framework for real execution visuals"
          description="This page is ready for authentic work photos, progress imagery, and equipment visuals that help build trust for infrastructure and utility-sector visitors."
        />
      </PageSection>

      <PageSection>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div key={item.title} className="section-card overflow-hidden p-0">
              <div className="relative flex h-52 items-end p-5 text-white">
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt ?? item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
                  />
                ) : (
                  <div className="utility-grid absolute inset-0" />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,47,0.14),rgba(7,24,47,0.78))]" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    Frame {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[15px] leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <CallToActionPanel
        title="Use permission-cleared photography only, especially around utility sites and restricted zones"
        description="The current gallery cards are structured placeholders so the site can be demonstrated immediately and finalized once approved visuals arrive."
        primaryHref="/contact"
        primaryLabel="Prepare Media Collection"
        secondaryHref="/projects"
        secondaryLabel="See Portfolio Cards"
      />
    </>
  );
}
