import React from "react";
import { GridBG } from "../GridBG/GridBG";

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
      <div className="fixed inset-0 -z-10 overflow-hidden w-full bg-[#0a0a0a] h-dvh">
      {/* Top Left Gradient Blob */}
        <GridBG />
      </div>
    );
};

export default DecoBG;