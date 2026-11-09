import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Corredor: React.FC<{}> = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#0f2147" />
      {/* armários */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect
            x={20 + i * 70}
            y={150}
            width={62}
            height={320}
            fill="#1e3a8a"
            stroke={C}
            strokeWidth={6}
          />
          <line
            x1={51 + i * 70}
            y1={150}
            x2={51 + i * 70}
            y2={470}
            stroke={C}
            strokeWidth={3}
          />
          <circle cx={40 + i * 70} cy={320} r={4} fill="#e8eefc" />
        </g>
      ))}
      {/* porta da secretaria */}
      <rect
        x={760}
        y={110}
        width={240}
        height={360}
        rx={8}
        fill="#27438f"
        stroke={C}
        strokeWidth={8}
      />
      <rect
        x={800}
        y={150}
        width={160}
        height={80}
        rx={4}
        fill="#e8eefc"
        stroke={C}
        strokeWidth={5}
      />
      <text
        x={880}
        y={200}
        textAnchor="middle"
        fontSize={22}
        fontWeight={900}
        fontFamily="Arial Black, Arial"
        fill={C}
      >
        SECRETARIA
      </text>
      <circle
        cx={970}
        cy={320}
        r={9}
        fill="#facc15"
        stroke={C}
        strokeWidth={3}
      />
      {/* câmera no teto */}
      <rect
        x={1100}
        y={20}
        width={90}
        height={36}
        rx={8}
        fill="#334155"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={1180}
        cy={38}
        r={9}
        fill="#ef4444"
        stroke={C}
        strokeWidth={3}
      />
      {/* luminárias */}
      {[200, 520, 840].map((x) => (
        <rect
          key={x}
          x={x}
          y={0}
          width={140}
          height={16}
          fill="#cbd5e1"
          stroke={C}
          strokeWidth={4}
        />
      ))}
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      <line
        x1={0}
        y1={600}
        x2={1280}
        y2={600}
        stroke="#0f2147"
        strokeWidth={4}
      />
    </svg>
  </AbsoluteFill>
);
