import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { heroActionBarPrompt, heroActionBarShortcuts } from "@/content/site";

export default function ActionBar() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[1.75rem] border border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.08))] px-5 py-5 shadow-[0_24px_52px_rgba(3,14,31,0.16)] backdrop-blur-md sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78">
              Quick project path
            </p>
            <h2 className="mt-2 max-w-2xl text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[1.6rem]">
              {heroActionBarPrompt}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {heroActionBarShortcuts.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/14 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                {item.label}
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
