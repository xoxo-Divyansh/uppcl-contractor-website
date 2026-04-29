import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRightIcon, PhoneIcon, UsersIcon } from "@/components/icons";
import { heroQuickActions, siteInfo } from "@/content/site";

type QuickActionCardProps = {
  compact?: boolean;
};

export default function QuickActionCard({
  compact = false,
}: QuickActionCardProps) {
  if (compact) {
    return (
      <div className="rounded-[1.75rem] border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.1))] p-5 backdrop-blur-md lg:hidden">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78">
          Quick access
        </p>
        <div className="mt-4 grid gap-3">
          {heroQuickActions.slice(0, 3).map((item) => (
            <ActionLink
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-white/16 bg-white/16 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/22"
              href={item.href}
            >
              <span>{item.label}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </ActionLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <aside className="hidden lg:block">
      <div className="relative rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.1))] p-6 shadow-[0_28px_75px_rgba(7,18,40,0.2)] backdrop-blur-md">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78">
          Project action desk
        </p>
        <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-white">
          Speak with the team through the fastest route for your requirement.
        </h2>

        <div className="mt-6 grid gap-3">
          {heroQuickActions.map((item) => (
            <ActionLink
              key={item.label}
              className="group flex items-center justify-between rounded-[1.4rem] border border-white/16 bg-white/16 px-4 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/22"
              href={item.href}
            >
              <span>{item.label}</span>
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </ActionLink>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/14 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            href={siteInfo.phoneHref}
          >
            <PhoneIcon className="h-4 w-4" />
            Call
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--trust)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#27584d]"
            href={siteInfo.whatsAppHref}
          >
            <UsersIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </aside>
  );
}

function ActionLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
