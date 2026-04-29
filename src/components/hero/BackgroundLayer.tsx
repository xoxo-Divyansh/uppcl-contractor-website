import Image from "next/image";
import { siteImages } from "@/content/site";

export default function BackgroundLayer() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <Image
        src={siteImages.heroBackdrop}
        alt=""
        fill
        priority
        className="object-cover object-right opacity-[0.62]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(124deg,rgba(9,14,19,0.58),rgba(15,22,30,0.52))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,119,0.1),transparent_22%),radial-gradient(circle_at_78%_20%,rgba(83,133,187,0.06),transparent_16%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_22%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[48%] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] lg:block" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block" />
    </div>
  );
}
