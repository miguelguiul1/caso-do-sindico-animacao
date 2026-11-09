import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const SalaoDeFestas: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#10224a" />
      {[110, 900].map((x) => (
        <rect
          key={x}
          x={x}
          y={110}
          width={270}
          height={250}
          rx={8}
          fill="#1b3a7a"
          stroke={C}
          strokeWidth={8}
        />
      ))}
      <circle cx={210} cy={190} r={32} fill="#e8eefc" />
      <path d="M0 40 Q640 120 1280 40" fill="none" stroke={C} strokeWidth={6} />
      {[100, 280, 460, 640, 820, 1000, 1180].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={52 + Math.sin((x / 1280) * Math.PI) * 52}
          r={12}
          fill={i % 2 ? "#facc15" : "#f472b6"}
          stroke={C}
          strokeWidth={4}
        />
      ))}
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      <rect
        x={880}
        y={380}
        width={300}
        height={30}
        rx={6}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={6}
      />
      <rect
        x={910}
        y={410}
        width={20}
        height={100}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={1130}
        y={410}
        width={20}
        height={100}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={1000}
        y={320}
        width={60}
        height={60}
        rx={6}
        fill="#f472b6"
        stroke={C}
        strokeWidth={5}
      />
    </svg>
  </AbsoluteFill>
);
