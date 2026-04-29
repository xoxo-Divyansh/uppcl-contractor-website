import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { heroProofPoints, siteInfo } from "@/content/site";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-3xl space-y-9">
      <div className="space-y-6">
        <h1 className="max-w-4xl text-balance text-[2.95rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white drop-shadow-[0_10px_28px_rgba(5,10,16,0.34)] sm:text-[4.15rem] lg:text-[5.25rem]">
          Reliable Electrical Contracting &amp; Tender Execution Across Uttar
          Pradesh
        </h1>
        <p className="max-w-2xl text-[1.04rem] leading-8 text-white/90 sm:text-[1.1rem]">
          Supporting utility, infrastructure and field operations with
          experienced teams and timely delivery.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link className="button-light" href="/projects">
          View Projects
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link className="button-outline-light" href="/contact#request-profile">
          Request Company Profile
        </Link>
        <Link className="button-outline-light" href="/contact">
          Contact Team
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {heroProofPoints.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-white/14 bg-[rgba(255,255,255,0.14)] px-5 py-5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] backdrop-blur-sm"
          >
            <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
              {item.value}
            </p>
            <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78">
              {item.label}
            </p>
            <p className="mt-3 text-[0.95rem] leading-6 text-white/84">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-white/14 bg-[rgba(255,255,255,0.12)] p-5 backdrop-blur-sm">
        <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-white/76">
          Public positioning note
        </p>
        <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-white/88">
          The website presents the business as an independent contractor,
          execution partner, or vendor for utility-related work. Official tender
          notices should always be verified on the relevant department or
          procurement portal.
        </p>
      </div>

      <div className="lg:hidden">
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/86 transition hover:text-white"
          href={siteInfo.whatsAppHref}
        >
          Need immediate coordination? Message on WhatsApp
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
