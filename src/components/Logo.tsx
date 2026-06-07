"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const dimensions = {
    sm: { containerW: 160, containerH: 52 },
    md: { containerW: 240, containerH: 78 },
    lg: { containerW: 300, containerH: 97 },
  };

  const { containerW, containerH } = dimensions[size];

  return (
    <div
      className={`relative overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: containerW, height: containerH }}
    >
      <Image
        src="/LogoVF-transparent.png"
        alt="ADSolutions – Logiciels sur mesure"
        fill
        sizes="(max-width: 768px) 240px, 340px"
        className="object-contain"
        priority
      />
    </div>
  );
}
