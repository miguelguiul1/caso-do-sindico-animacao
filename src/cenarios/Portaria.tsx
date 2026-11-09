import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Portaria: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#10224a" />
      <rect
        x={900}
        y={90}
        width={270}
        height={380}
        rx={8}
        fill="#1b3a7a"
        stroke={C}
        strokeWidth={8}
      />
      <line x1={1035} y1={90} x2={1035} y2={470} stroke={C} strokeWidth={6} />
      <circle cx={1018} cy={290} r={8} fill="#e8eefc" />
      <circle cx={1052} cy={290} r={8} fill="#e8eefc" />
      <circle
        cx={640}
        cy={60}
        r={28}
        fill="#facc15"
        stroke={C}
        strokeWidth={6}
      />
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      <rect
        x={90}
        y={340}
        width={380}
        height={170}
        rx={10}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={8}
      />
      <rect
        x={80}
        y={320}
        width={400}
        height={30}
        rx={8}
        fill="#2f56a8"
        stroke={C}
        strokeWidth={6}
      />
      <rect
        x={140}
        y={90}
        width={280}
        height={190}
        rx={8}
        fill="#334155"
        stroke={C}
        strokeWidth={8}
      />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle
            cx={190 + i * 62}
            cy={150}
            r={9}
            fill="#facc15"
            stroke={C}
            strokeWidth={3}
          />
          <circle
            cx={190 + i * 62}
            cy={220}
            r={9}
            fill="#facc15"
            stroke={C}
            strokeWidth={3}
          />
        </g>
      ))}
    </svg>
  </AbsoluteFill>
);
