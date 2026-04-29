import ActionBar from "@/components/hero/ActionBar";
import BackgroundLayer from "@/components/hero/BackgroundLayer";
import HeroContent from "@/components/hero/HeroContent";
import QuickActionCard from "@/components/hero/QuickActionCard";

export default function HeroShell() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundLayer />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-7 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <ActionBar />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.08fr_0.72fr] lg:items-start">
          <HeroContent />
          <QuickActionCard />
        </div>
        <div className="mt-6 lg:hidden">
          <QuickActionCard compact />
        </div>
      </div>
    </section>
  );
}
