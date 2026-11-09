import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Fachada: React.FC<{}> = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={720} fill="#070d24" />
      <circle cx={1120} cy={90} r={34} fill="#e8eefc" />
      <rect
        x={200}
        y={150}
        width={880}
        height={360}
        fill="#10224a"
        stroke={C}
        strokeWidth={8}
      />
      <polygon
        points="180,150 640,60 1100,150"
        fill="#1b3a7a"
        stroke={C}
        strokeWidth={8}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x={250 + i * 140}
            y={190}
            width={90}
            height={90}
            fill="#facc15"
            stroke={C}
            strokeWidth={6}
          />
          <rect
            x={250 + i * 140}
            y={320}
            width={90}
            height={90}
            fill={i % 2 ? "#f472b6" : "#38bdf8"}
            stroke={C}
            strokeWidth={6}
          />
        </g>
      ))}
      <rect
        x={540}
        y={410}
        width={200}
        height={100}
        fill="#050810"
        stroke="#e8eefc"
        strokeWidth={4}
      />
      <rect
        x={380}
        y={100}
        width={520}
        height={54}
        rx={8}
        fill="#050810"
        stroke="#e8eefc"
        strokeWidth={4}
      />
      <text
        x={640}
        y={138}
        textAnchor="middle"
        fontSize={34}
        fontWeight={900}
        fontFamily="Arial Black, Arial"
        fill="#facc15"
      >
        COLÉGIO HORIZONTE
      </text>
      {/* varal de luzes */}
      <path
        d="M0 540 Q320 600 640 540 Q960 480 1280 540"
        fill="none"
        stroke={C}
        strokeWidth={5}
      />
      {[100, 260, 420, 640, 860, 1020, 1180].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={552 + Math.sin(x / 140) * 18}
          r={11}
          fill={i % 2 ? "#facc15" : "#f472b6"}
          stroke={C}
          strokeWidth={4}
        />
      ))}
      <rect y={600} width={1280} height={120} fill="#050a1c" />
      <line x1={0} y1={600} x2={1280} y2={600} stroke={C} strokeWidth={8} />
    </svg>
  </AbsoluteFill>
);
