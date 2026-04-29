import { HTMLAttributes, ReactNode } from "react";

type IconProps = HTMLAttributes<SVGElement>;

function IconBase({
  children,
  className,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </IconBase>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </IconBase>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="m10 16 2 2 4-4" />
    </IconBase>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m9 6 6 6-6 6" />
    </IconBase>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="4" width="14" height="17" rx="2.5" />
      <path d="M9 4.5h6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 4.5Z" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </IconBase>
  );
}

export function GalleryIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="m7 15 3-3 3 3 2-2 4 4" />
      <circle cx="9" cy="9" r="1.5" />
    </IconBase>
  );
}

export function HardHatIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 13a7 7 0 0 1 14 0" />
      <path d="M4 13h16" />
      <path d="M8 13V9.5A4 4 0 0 1 12 5.5 4 4 0 0 1 16 9.5V13" />
      <path d="M6 17h12" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m5 7 7 6 7-6" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6.5 4.5h3l1.2 4-1.8 1.8a15 15 0 0 0 5.8 5.8l1.8-1.8 4 1.2v3A2.5 2.5 0 0 1 18.2 21C10.4 20.5 3.5 13.6 3 5.8A2.5 2.5 0 0 1 5.5 3Z" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.2-3.6" />
    </IconBase>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
      <path d="M13.5 18a3.5 3.5 0 0 1 7 0" />
    </IconBase>
  );
}
