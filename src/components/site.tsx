import Link from "next/link";
import { ReactNode } from "react";
import LeadForm from "@/components/contact/LeadForm";
import TopUtilityBar from "@/components/hero/TopUtilityBar";
import {
  ArrowRightIcon,
  BoltIcon,
  BriefcaseIcon,
  ClipboardIcon,
  HardHatIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/icons";
import {
  NavigationItem,
  ProjectItem,
  ServiceItem,
  SiteHighlight,
  siteInfo,
} from "@/content/site";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "hero";
};

const iconMap = {
  briefcase: BriefcaseIcon,
  bolt: BoltIcon,
  clipboard: ClipboardIcon,
  hardhat: HardHatIcon,
  shield: ShieldIcon,
  users: UsersIcon,
};

export function PageSection({
  children,
  className,
  id,
  variant = "default",
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
        variant === "hero" ? "pt-12 pb-10 md:pt-20 md:pb-14" : "py-11 md:py-16"
      } ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <h2 className="text-balance text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--heading)] sm:text-[2.85rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.02rem]">
        {description}
      </p>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(246,248,248,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_18px_34px_rgba(16,25,33,0.16)]">
            <BoltIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
              {siteInfo.shortLabel}
            </p>
            <p className="text-sm text-[var(--muted)]">{siteInfo.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {siteInfo.navigation.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="button-secondary" href={siteInfo.whatsAppHref}>
            WhatsApp
          </a>
          <Link className="button-primary" href="/contact">
            Contact
          </Link>
        </div>

        <details className="relative group lg:hidden">
          <summary className="list-none rounded-2xl border border-[var(--border)] bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--heading)] shadow-sm">
            Menu
          </summary>
          <div className="absolute right-4 top-[72px] w-[min(320px,calc(100vw-2rem))] rounded-3xl border border-[var(--border)] bg-white/95 p-4 shadow-[0_24px_80px_rgba(12,29,55,0.16)] backdrop-blur-xl">
            <div className="grid gap-2">
              {siteInfo.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--primary-soft)] hover:text-[var(--heading)]"
                >
                  {item.label}
                </Link>
              ))}
              <a className="button-secondary justify-center" href={siteInfo.whatsAppHref}>
                WhatsApp
              </a>
              <Link className="button-primary justify-center" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function NavLink({ item }: { item: NavigationItem }) {
  return (
    <Link
      href={item.href}
      className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--heading)]"
    >
      {item.label}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-[rgba(248,250,252,0.88)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 pb-28 sm:px-6 md:pb-10 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            {siteInfo.shortLabel}
          </p>
          <h2 className="max-w-md text-2xl font-semibold tracking-tight text-[var(--heading)]">
            {siteInfo.brandName}
          </h2>
          <p className="max-w-lg text-sm leading-7 text-[var(--muted)]">
            {siteInfo.footerNote}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Quick links
          </p>
          <div className="mt-4 grid gap-3">
            {siteInfo.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--heading)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Contact readiness
          </p>
          <a className="footer-contact" href={siteInfo.phoneHref}>
            <PhoneIcon className="h-4 w-4" />
            {siteInfo.phone}
          </a>
          <a className="footer-contact" href={`mailto:${siteInfo.email}`}>
            <MailIcon className="h-4 w-4" />
            {siteInfo.email}
          </a>
          <div className="footer-contact">
            <MapPinIcon className="h-4 w-4" />
            {siteInfo.location}
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileContactBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-3 gap-3 rounded-[1.45rem] border border-[var(--border)] bg-[rgba(250,252,252,0.96)] p-3 shadow-[0_18px_45px_rgba(10,18,28,0.16)] backdrop-blur-xl md:hidden">
      <a
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-3 py-3 text-sm font-semibold text-white"
        href={siteInfo.phoneHref}
      >
        <PhoneIcon className="h-4 w-4" />
        Call
      </a>
      <a
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--trust)] px-3 py-3 text-sm font-semibold text-white"
        href={siteInfo.whatsAppHref}
      >
        <UsersIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-white px-3 py-3 text-sm font-semibold text-[var(--heading)]"
        href="/contact#request-profile"
      >
        <MailIcon className="h-4 w-4" />
        Contact
      </Link>
    </div>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <TopUtilityBar />
      <SiteHeader />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <SiteFooter />
      <MobileContactBar />
    </div>
  );
}

export function StatCard({ item }: { item: SiteHighlight }) {
  return (
    <div className="section-card p-5">
      <p className="text-3xl font-semibold tracking-[-0.04em] text-[var(--heading)]">
        {item.value}
      </p>
      <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
        {item.label}
      </p>
      <p className="mt-3 text-[0.98rem] leading-6 text-[var(--muted)]">
        {item.description}
      </p>
    </div>
  );
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon];

  return (
    <div className="section-card p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight tracking-[-0.035em] text-[var(--heading)]">
        {service.title}
      </h3>
      <p className="mt-3 text-[0.98rem] leading-7 text-[var(--muted)]">
        {service.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.points.map((point) => (
          <span key={point} className="tag-pill">
            {point}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="section-card overflow-hidden p-0">
      <div className="utility-grid flex min-h-44 items-end px-6 py-5 text-white">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/68">
            {project.category}
          </p>
          <h3 className="mt-2 text-[1.85rem] font-semibold leading-tight tracking-[-0.04em]">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="grid gap-5 p-6">
        <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">
            {project.location}
          </span>
          <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">
            {project.status}
          </span>
          <span className="rounded-full border border-[var(--border)] bg-white px-3 py-1">
            {project.duration}
          </span>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-white/76 px-4 py-3">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Scope of work
          </p>
          <p className="mt-2 text-[0.98rem] leading-7 text-[var(--muted)]">
            {project.scope}
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Execution proof note
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {project.note}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CallToActionPanel({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <PageSection>
      <div className="utility-grid overflow-hidden rounded-[2rem] px-7 py-8 text-white shadow-[0_24px_85px_rgba(7,26,59,0.22)] sm:px-9">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-white/78">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="button-light" href={primaryHref}>
              {primaryLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link className="button-outline-light" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}

export function ContactPanel() {
  return (
    <div className="grid gap-6">
      <LeadForm />

      <div className="section-card p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">
          Contact readiness checklist
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
          Replace the placeholder phone, email, address, and maps link with the
          client&apos;s verified business details before going live. The layout is
          already prepared for quick final data entry.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a className="contact-card" href={siteInfo.phoneHref}>
            <PhoneIcon className="h-5 w-5 text-[var(--primary)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--heading)]">Call</p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {siteInfo.phone}
              </p>
            </div>
          </a>
          <a className="contact-card" href={siteInfo.whatsAppHref}>
            <UsersIcon className="h-5 w-5 text-[var(--primary)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--heading)]">
                WhatsApp
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                Prefilled project discussion message ready
              </p>
            </div>
          </a>
          <a className="contact-card" href={`mailto:${siteInfo.email}`}>
            <MailIcon className="h-5 w-5 text-[var(--primary)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--heading)]">
                Email
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {siteInfo.email}
              </p>
            </div>
          </a>
          <div className="contact-card">
            <MapPinIcon className="h-5 w-5 text-[var(--primary)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--heading)]">
                Office coverage
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                {siteInfo.location}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-alt)] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            Recommended form fields
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {siteInfo.formFields.map((field) => (
              <div
                key={field}
                className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--muted)]"
              >
                {field}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
