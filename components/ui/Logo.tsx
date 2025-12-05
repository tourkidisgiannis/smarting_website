import React from "react";

interface LogoProps {
  className?: string;
  color?: string;
  title?: string;
}

export function Logo({
  className = "h-10 w-auto",
  color = "currentColor",
  title = "SMARTING.GR logo",
}: LogoProps) {
  const strokeWidth = 3;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMinYMid meet"
    >
      <title>{title}</title>
      <desc>House + clipped Wi-Fi signal and SMARTING.GR logotype</desc>

      {/* Define a clipPath for the house interior so wifi arcs stay inside */}
      <defs>
        <clipPath id="house-interior-clip">
          {/* interior rectangle slightly inset so arcs do not overlap stroke */}
          <rect x="14" y="40" width="52" height="28" rx="3" ry="3" />
        </clipPath>

        {/* small id-scoped unique filter / shape if needed in the future */}
      </defs>

      {/* House + door group */}
      <g
        transform="translate(0,0)"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Roof */}
        <polygon points="12,36 40,14 68,36" fill="none" />
        {/* Body: drawn as rounded rect stroke only; interior used for clipping */}
        <rect x="12" y="36" width="56" height="34" rx="4" ry="4" fill="none" />
        {/* Door: filled to create contrast and a clear 'inside' reference */}
        <rect
          x="34"
          y="50"
          width="12"
          height="20"
          rx="1.5"
          ry="1.5"
          fill={color}
          stroke="none"
        />
      </g>

      {/* Wi-Fi group — clipped to the house interior so arcs appear 'inside' */}
      <g clipPath="url(#house-interior-clip)">
        {/* Dot — positioned centered over the door area */}
        <circle cx="40" cy="60" r="3.8" fill={color} />

        {/* Arcs — slightly tighter radii and shorter sweep so they sit comfortably inside */}
        {/* Outer (largest) */}
        <path
          d="M21 52 A 19 19 0 0 1 59 52"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Middle */}
        <path
          d="M25 56 A 15 15 0 0 1 55 56"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* Inner (smallest) */}
        <path
          d="M29 60 A 11 11 0 0 1 51 60"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      {/* Logotype */}
    </svg>
  );
}

export default Logo;
