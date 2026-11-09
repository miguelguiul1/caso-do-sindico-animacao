import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Estacionamento: React.FC<{}> = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#0a1230" />
      {[80, 210, 420, 700, 900, 1150].map((x, i) => (
        <circle key={x} cx={x} cy={40 + (i % 3) * 30} r={3} fill="#e8eefc" />
      ))}
      <circle cx={1100} cy={90} r={30} fill="#e8eefc" />
      {/* poste de luz */}
      <rect
        x={60}
        y={140}
        width={14}
        height={330}
        fill="#334155"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={40}
        y={120}
        width={80}
        height={26}
        rx={8}
        fill="#facc15"
        stroke={C}
        strokeWidth={5}
      />
      {/* carros ao fundo */}
      {[200, 520, 840].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x} 470 v-60 q0 -20 22 -24 l40 -50 h120 l50 50 q30 4 30 30 v54Z`}
            fill={["#1d4ed8", "#7f1d1d", "#374151"][i]}
            stroke={C}
            strokeWidth={6}
          />
          <circle
            cx={x + 62}
            cy={470}
            r={26}
            fill="#111827"
            stroke={C}
            strokeWidth={6}
          />
          <circle
            cx={x + 200}
            cy={470}
            r={26}
            fill="#111827"
            stroke={C}
            strokeWidth={6}
          />
        </g>
      ))}
      {/* câmera de segurança */}
      <rect
        x={1180}
        y={150}
        width={14}
        height={320}
        fill="#334155"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={1110}
        y={140}
        width={90}
        height={34}
        rx={8}
        fill="#334155"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={1124}
        cy={157}
        r={8}
        fill="#ef4444"
        stroke={C}
        strokeWidth={3}
      />
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={60 + i * 210}
          y={590}
          width={110}
          height={10}
          fill="#e8eefc"
          opacity={0.6}
        />
      ))}
      {/* caixas de som */}
      <rect
        x={1010}
        y={410}
        width={90}
        height={110}
        rx={8}
        fill="#1f2937"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={1055}
        cy={470}
        r={26}
        fill="#111827"
        stroke={C}
        strokeWidth={4}
      />
      <rect
        x={1040}
        y={330}
        width={70}
        height={80}
        rx={8}
        fill="#1f2937"
        stroke={C}
        strokeWidth={6}
      />
    </svg>
  </AbsoluteFill>
);
