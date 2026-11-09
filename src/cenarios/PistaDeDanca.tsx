import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const PistaDeDanca: React.FC<{ claro?: boolean; relogio?: string }> = ({
  claro = false,
  relogio,
}) => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill={claro ? "#1a3a80" : "#0d1a3d"} />
      {/* feixes de luz */}
      {[160, 420, 700, 980].map((x, i) => (
        <polygon
          key={x}
          points={`${x},0 ${x - 90},470 ${x + 90},470`}
          fill={["#38bdf8", "#f472b6", "#facc15", "#a78bfa"][i]}
          opacity={claro ? 0.28 : 0.14}
        />
      ))}
      {/* globo */}
      <line x1={640} y1={0} x2={640} y2={70} stroke={C} strokeWidth={4} />
      <circle
        cx={640}
        cy={100}
        r={36}
        fill="#cbd5e1"
        stroke={C}
        strokeWidth={6}
      />
      <path
        d="M606 100 H674 M640 64 V136 M616 78 Q640 100 616 122 M664 78 Q640 100 664 122"
        fill="none"
        stroke="#64748b"
        strokeWidth={3}
      />
      {/* palco e cabine do DJ */}
      <rect
        x={40}
        y={300}
        width={360}
        height={170}
        fill="#1f2937"
        stroke={C}
        strokeWidth={8}
      />
      <rect
        x={70}
        y={250}
        width={300}
        height={50}
        rx={6}
        fill="#374151"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={150}
        cy={275}
        r={20}
        fill="#111827"
        stroke={C}
        strokeWidth={4}
      />
      <circle
        cx={290}
        cy={275}
        r={20}
        fill="#111827"
        stroke={C}
        strokeWidth={4}
      />
      <rect
        x={960}
        y={250}
        width={250}
        height={220}
        rx={10}
        fill="#1f2937"
        stroke={C}
        strokeWidth={8}
      />
      <circle
        cx={1085}
        cy={330}
        r={44}
        fill="#111827"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={1085}
        cy={430}
        r={26}
        fill="#111827"
        stroke={C}
        strokeWidth={5}
      />
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      {/* ladrilhos coloridos */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={80 + i * 150}
          y={540}
          width={110}
          height={40}
          fill={["#1d4ed8", "#9d174d", "#0f766e", "#6d28d9"][i % 4]}
          opacity={claro ? 0.8 : 0.45}
          stroke={C}
          strokeWidth={4}
        />
      ))}
      {relogio && (
        <g>
          <rect
            x={1060}
            y={20}
            width={190}
            height={70}
            rx={12}
            fill="#050810"
            stroke="#e8eefc"
            strokeWidth={4}
          />
          <text
            x={1155}
            y={70}
            textAnchor="middle"
            fontSize={46}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill="#facc15"
          >
            {relogio}
          </text>
        </g>
      )}
    </svg>
  </AbsoluteFill>
);
