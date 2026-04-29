import { PhoneIcon, ShieldIcon, UsersIcon } from "@/components/icons";
import { heroTopUtilityItems, siteInfo } from "@/content/site";

export default function TopUtilityBar() {
  return (
    <div className="border-b border-white/10 bg-[linear-gradient(90deg,rgba(17,26,37,0.98),rgba(27,39,53,0.96))] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-center gap-2.5">
          {heroTopUtilityItems.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/80"
            >
              <ShieldIcon className="h-3.5 w-3.5 text-[#8cb2d8]" />
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-semibold text-white/92 transition hover:bg-white/14"
            href={siteInfo.phoneHref}
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-[#3d7d70] bg-[var(--trust)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#27584d]"
            href={siteInfo.whatsAppHref}
          >
            <UsersIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
