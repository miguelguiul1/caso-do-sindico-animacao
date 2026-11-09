import React from "react";
import { AbsoluteFill } from "remotion";

export const Fita: React.FC = () => (
  <AbsoluteFill>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <g transform="rotate(-5 640 400)">
        <rect
          x={-40}
          y={380}
          width={1360}
          height={46}
          fill="#facc15"
          stroke="#050810"
          strokeWidth={6}
        />
        <text
          x={640}
          y={412}
          textAnchor="middle"
          fontSize={26}
          fontWeight={900}
          fontFamily="Arial Black, Arial"
          fill="#050810"
          letterSpacing={6}
        >
          ISOLADO · ISOLADO · ISOLADO · ISOLADO · ISOLADO · ISOLADO
        </text>
      </g>
    </svg>
  </AbsoluteFill>
);
