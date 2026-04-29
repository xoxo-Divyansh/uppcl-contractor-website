import Link from "next/link";
import Image from "next/image";
import HeroShell from "@/components/hero/HeroShell";
import {
  ArrowRightIcon,
  CertificateIcon,
  ChevronRightIcon,
  ClipboardIcon,
  GalleryIcon,
  ShieldIcon,
} from "@/components/icons";
import {
  CallToActionPanel,
  ContactPanel,
  PageSection,
  ProjectCard,
  SectionHeading,
  ServiceCard,
  StatCard,
} from "@/components/site";
import {
  companyHighlights,
  contactReasons,
  homepageReasons,
  officialTenderLinks,
  projectTimeline,
  projects,
  services,
  siteImages,
  siteInfo,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <HeroShell />

      <PageSection>
        <div className="grid gap-5 md:grid-cols-4">
          {companyHighlights.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>
      </PageSection>

      <PageSection
        id="services"
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6">
          <SectionHeading
            title="Services built around field execution and documentation discipline"
            description="The website positions the firm as a serious execution partner for utility, infrastructure, and government-linked electrical work. Every service is written to support credibility, not inflated claims."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="button-primary" href="/services">
              Explore All Services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link className="button-secondary" href="/contact">
              Request Company Profile
            </Link>
          </div>
        </div>

        <div className="section-card overflow-hidden p-0">
          <div className="relative h-64">
            <Image
              src={siteImages.fieldCrew}
              alt="Electrical field crew working together on site equipment."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,21,29,0.08),rgba(13,21,29,0.62))]" />
            <div className="absolute left-5 top-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3 py-1 text-sm font-semibold text-white shadow-sm backdrop-blur-sm">
              <ShieldIcon className="h-4 w-4 text-[var(--accent)]" />
              Real field execution
            </div>
          </div>
          <div className="space-y-5 p-7">
            <h3 className="max-w-lg text-2xl font-semibold tracking-tight text-[var(--heading)]">
              Public copy stays careful: contractor, vendor, or project-support
              language instead of unverified official affiliation claims.
            </h3>
            <p className="max-w-xl text-[15px] leading-7 text-[var(--muted)]">
              This structure is designed for firms handling utility-related
              projects, subcontracting, supply, maintenance, and site
              execution. Sensitive records can stay private while still showing
              proof of registration, licenses, and execution capability.
            </p>
            <div className="grid gap-3">
              {homepageReasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3"
                >
                  <ChevronRightIcon className="mt-0.5 h-4 w-4 text-[var(--accent-strong)]" />
                  <p className="text-sm leading-6 text-[var(--muted)]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="projects"
        className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="space-y-6">
          <SectionHeading
            title="Project storytelling that speaks to engineers, procurement teams, and partners"
            description="The portfolio is framed around scope, geography, work type, site discipline, and status. That makes the firm look reliable even before real work-order PDFs are shared privately."
          />
          <div className="section-card p-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/75 px-3 py-1 text-sm font-semibold text-[var(--primary)] shadow-sm">
              <ClipboardIcon className="h-4 w-4" />
              Execution timeline
            </div>
            <div className="mt-5 space-y-4">
              {projectTimeline.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white/65 px-4 py-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--heading)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          <Link className="button-secondary justify-center" href="/projects">
            View Full Project Portfolio
          </Link>
        </div>
      </PageSection>

      <PageSection
        id="certificates"
        className="grid gap-10 lg:grid-cols-[1fr_0.95fr]"
      >
        <div className="space-y-6">
          <SectionHeading
            title="Certificates and registrations presented with the right level of public visibility"
            description="The site highlights the types of documents buyers expect while encouraging formal document requests for anything sensitive."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteInfo.certificationHighlights.map((item) => (
              <div
                key={item}
                className="section-card flex items-start gap-3 p-5"
              >
                <CertificateIcon className="mt-0.5 h-5 w-5 text-[var(--accent-strong)]" />
                <div>
                  <h3 className="text-base font-semibold text-[var(--heading)]">
                    {item}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    Public visibility can stay limited to verified status and
                    summary details until a genuine enquiry is received.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-card overflow-hidden p-0">
          <div className="relative h-56">
            <Image
              src={siteImages.substationWide}
              alt="Electrical yard infrastructure and switchyard equipment."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,26,0.14),rgba(11,18,26,0.7))]" />
          </div>
          <div className="utility-grid px-7 py-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Official references
            </p>
            <h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight">
              Keep procurement-sensitive information separate from official
              tender sources.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/76">
              The site can guide visitors to the correct official portals while
              making it clear that the business is an independent contractor or
              service provider.
            </p>
          </div>
          <div className="space-y-4 p-7">
            {officialTenderLinks.map((item) => (
              <a
                key={item.title}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3 className="text-base font-semibold text-[var(--heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
                <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-[var(--primary)] transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection id="gallery">
        <SectionHeading
          title="Gallery sections ready for real field photography, machinery, and completion evidence"
          description="Even in a demo state, the gallery layout is designed to support site work visuals, manpower presence, safety habits, equipment, and finished installations."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="section-card overflow-hidden p-0">
            <div className="relative flex h-full min-h-[320px] flex-col justify-between p-7 text-white">
              <Image
                src={siteImages.switchgearDetail}
                alt="Close-up of completed electrical installation hardware."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,19,28,0.22),rgba(12,19,28,0.78))]" />
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-3 py-1 text-sm font-semibold text-white">
                  <GalleryIcon className="h-4 w-4" />
                  Work gallery preview
                </div>
                <h3 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-white">
                  Replace placeholders with verified site photos, project
                  documentation visuals, and equipment shots.
                </h3>
              </div>
              <div className="relative grid gap-3 sm:grid-cols-2">
                {siteInfo.galleryCategories.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {siteInfo.galleryCategories.slice(4).map((item, index) => (
              <div key={item} className="section-card p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    Category {index + 5}
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-strong)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--heading)]">
                  {item}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Best used for authentic on-site imagery with visible safety
                  discipline and execution context.
                </p>
              </div>
            ))}
            <Link className="button-secondary justify-center" href="/gallery">
              Open Full Gallery Page
            </Link>
          </div>
        </div>
      </PageSection>

      <CallToActionPanel
        title="A strong first version already covers credibility, project presentation, and enquiry flow"
        description="This MVP is structured to help you pitch the client, collect their real data, and quickly convert the demo into a production-ready business website."
        primaryHref="/contact"
        primaryLabel="Discuss The Final Build"
        secondaryHref="/about"
        secondaryLabel="Review Site Structure"
      />

      <PageSection id="contact">
        <SectionHeading
          title="Contact flow focused on serious project conversations"
          description="The enquiry experience is written for business owners, procurement contacts, partners, and subcontractors who need quick access to profile information and work discussions."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="section-card p-7">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
              Best enquiry types for this website
            </h3>
            <div className="mt-5 grid gap-3">
              {contactReasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-white/75 px-4 py-3 text-sm font-medium text-[var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ContactPanel />
        </div>
      </PageSection>
    </>
  );
}
