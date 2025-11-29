import React from "react";

type DecoBGProps = {
    className?: string;
    style?: React.CSSProperties;
    variant?: "waves" | "dots" | "grid";
    opacity?: number;
};

/**
 * Decorative background component used purely for visuals.
 * - Renders absolutely positioned SVG art that doesn't capture pointer events.
 * - Accepts className and style to integrate into layouts.
 */
const DecoBG: React.FC<DecoBGProps> = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden w-full bg-[#0a0a0a]">
      {/* Top Left Gradient Blob */}
      <div
        style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle at 30% 30%, #60cc87 0%, transparent 70%)",
        opacity: 0.35,
        filter: "blur(40px)",
        zIndex: 0,
        }}
      />
      {/* Bottom Right Gradient Blob */}
      <div
        style={{
        position: "absolute",
        bottom: "-120px",
        right: "-120px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle at 70% 70%, #60cc87 0%, transparent 70%)",
        opacity: 0.25,
        filter: "blur(40px)",
        zIndex: 0,
        }}
      />
      {/* Center Faint Grid */}
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ opacity: 0.13, zIndex: 0 }}
      >
        <defs>
        <pattern
          id="modernGrid"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          {/* Thin grid lines */}
          <path
        d="M 64 0 L 0 0 0 64"
        fill="none"
        stroke="#2d2d2d"
        strokeWidth="1"
          />
          {/* Dots at intersections */}
          <circle cx="0" cy="0" r="8" fill="#60cc87" opacity="0.5" />
        </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#modernGrid)" />
      </svg>
      </div>
    );
};

export default DecoBG;