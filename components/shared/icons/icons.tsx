import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseLineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SunIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
      className={className}
      {...baseLineProps}
      {...rest}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
      className={className}
      {...baseLineProps}
      {...rest}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function MonitorIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
      className={className}
      {...baseLineProps}
      {...rest}
    >
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

export function ChevronDownIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={className}
      {...baseLineProps}
      {...rest}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CheckIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden
      className={className}
      {...baseLineProps}
      {...rest}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function FlagVietnamIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 16"
      width="24"
      height="16"
      role="img"
      aria-label="Vietnam"
      className={className}
      {...rest}
    >
      <rect width="24" height="16" rx="2" fill="#DA251D" />
      <polygon
        points="12,3 13.18,6.62 16.99,6.62 13.91,8.86 15.08,12.49 12,10.25 8.92,12.49 10.09,8.86 7.01,6.62 10.82,6.62"
        fill="#FFFF00"
      />
    </svg>
  );
}

export function FlagKoreaIcon({
  className,
  ...rest
}: Readonly<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 16"
      width="24"
      height="16"
      role="img"
      aria-label="Korea"
      className={className}
      {...rest}
    >
      <rect width="24" height="16" rx="2" fill="#FFFFFF" />
      <g transform="translate(12 8)">
        <circle r="4" fill="#003478" />
        <path
          d="M0,-4 a2,2 0 0,1 0,4 a2,2 0 0,0 0,4 a4,4 0 0,1 0,-8"
          fill="#C60C30"
        />
      </g>
      <g fill="#0B0B0B">
        <g transform="translate(4 3) rotate(33)">
          <rect x="-1.5" y="-0.25" width="3" height="0.5" rx="0.1" />
          <rect x="-1.5" y="0.7" width="3" height="0.5" rx="0.1" />
          <rect x="-1.5" y="-1.2" width="3" height="0.5" rx="0.1" />
        </g>
        <g transform="translate(20 3) rotate(-33)">
          <rect x="-1.5" y="-0.25" width="3" height="0.5" rx="0.1" />
          <rect x="-1.5" y="0.7" width="1.2" height="0.5" rx="0.1" />
          <rect x="0.3" y="0.7" width="1.2" height="0.5" rx="0.1" />
          <rect x="-1.5" y="-1.2" width="3" height="0.5" rx="0.1" />
        </g>
        <g transform="translate(4 13) rotate(-33)">
          <rect x="-1.5" y="-0.25" width="1.2" height="0.5" rx="0.1" />
          <rect x="0.3" y="-0.25" width="1.2" height="0.5" rx="0.1" />
          <rect x="-1.5" y="0.7" width="3" height="0.5" rx="0.1" />
          <rect x="-1.5" y="-1.2" width="3" height="0.5" rx="0.1" />
        </g>
        <g transform="translate(20 13) rotate(33)">
          <rect x="-1.5" y="-0.25" width="1.2" height="0.5" rx="0.1" />
          <rect x="0.3" y="-0.25" width="1.2" height="0.5" rx="0.1" />
          <rect x="-1.5" y="0.7" width="1.2" height="0.5" rx="0.1" />
          <rect x="0.3" y="0.7" width="1.2" height="0.5" rx="0.1" />
          <rect x="-1.5" y="-1.2" width="1.2" height="0.5" rx="0.1" />
          <rect x="0.3" y="-1.2" width="1.2" height="0.5" rx="0.1" />
        </g>
      </g>
    </svg>
  );
}
