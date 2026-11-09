import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Academia: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#0f2147" />
      <rect
        x={140}
        y={110}
        width={620}
        height={290}
        rx={10}
        fill="#1b3a7a"
        stroke={C}
        strokeWidth={8}
      />
      <line
        x1={140}
        y1={400}
        x2={380}
        y2={110}
        stroke="#2f56a8"
        strokeWidth={10}
        opacity={0.5}
      />
      <circle
        cx={450}
        cy={55}
        r={32}
        fill="#e8eefc"
        stroke={C}
        strokeWidth={6}
      />
      <line x1={450} y1={55} x2={450} y2={33} stroke={C} strokeWidth={5} />
      <line x1={450} y1={55} x2={468} y2={63} stroke={C} strokeWidth={5} />
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      <rect
        x={900}
        y={430}
        width={240}
        height={36}
        rx={8}
        fill="#334155"
        stroke={C}
        strokeWidth={6}
      />
      <line x1={1120} y1={430} x2={1130} y2={250} stroke={C} strokeWidth={10} />
      <rect
        x={1090}
        y={220}
        width={90}
        height={36}
        rx={8}
        fill="#475569"
        stroke={C}
        strokeWidth={6}
      />
      <rect
        x={150}
        y={430}
        width={170}
        height={14}
        fill="#94a3b8"
        stroke={C}
        strokeWidth={5}
      />
      {[145, 325].map((x) => (
        <rect
          key={x}
          x={x - 14}
          y={400}
          width={28}
          height={74}
          rx={6}
          fill="#1e293b"
          stroke={C}
          strokeWidth={5}
        />
      ))}
      <rect
        x={330}
        y={500}
        width={190}
        height={30}
        rx={10}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={6}
      />
    </svg>
  </AbsoluteFill>
);
