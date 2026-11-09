import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Camarim: React.FC<{ cabo?: boolean }> = ({ cabo = false }) => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#10224a" />
      {/* cortina vermelha (pista da prova 1) */}
      <rect
        x={40}
        y={40}
        width={250}
        height={430}
        fill="#b91c1c"
        stroke={C}
        strokeWidth={8}
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={80 + i * 48}
          y1={44}
          x2={80 + i * 48}
          y2={468}
          stroke="#7f1d1d"
          strokeWidth={8}
        />
      ))}
      {/* espelho com lâmpadas */}
      <rect
        x={420}
        y={90}
        width={440}
        height={260}
        rx={10}
        fill="#1b3a7a"
        stroke={C}
        strokeWidth={8}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <circle
          key={i}
          cx={445 + i * 55}
          cy={74}
          r={11}
          fill="#facc15"
          stroke={C}
          strokeWidth={4}
        />
      ))}
      {/* bancada */}
      <rect
        x={400}
        y={360}
        width={480}
        height={26}
        rx={6}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={6}
      />
      <rect
        x={420}
        y={386}
        width={20}
        height={90}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={840}
        y={386}
        width={20}
        height={90}
        fill="#1e3a8a"
        stroke={C}
        strokeWidth={5}
      />
      {/* amplificador */}
      <rect
        x={1000}
        y={300}
        width={170}
        height={170}
        rx={10}
        fill="#1f2937"
        stroke={C}
        strokeWidth={8}
      />
      <circle
        cx={1085}
        cy={385}
        r={50}
        fill="#111827"
        stroke={C}
        strokeWidth={6}
      />
      <circle
        cx={1085}
        cy={385}
        r={16}
        fill="#374151"
        stroke={C}
        strokeWidth={4}
      />
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
      {cabo && (
        <g>
          <rect
            x={930}
            y={440}
            width={40}
            height={26}
            rx={4}
            fill="#e8eefc"
            stroke={C}
            strokeWidth={5}
          />
          <path
            d="M950 466 Q930 510 840 520 Q760 528 700 600 Q660 640 600 640"
            fill="none"
            stroke={C}
            strokeWidth={12}
            strokeLinecap="round"
          />
          <path
            d="M950 466 Q930 510 840 520 Q760 528 700 600 Q660 640 600 640"
            fill="none"
            stroke="#f59e0b"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <ellipse
            cx={610}
            cy={650}
            rx={130}
            ry={26}
            fill="#1d4ed8"
            opacity={0.65}
            stroke={C}
            strokeWidth={4}
          />
        </g>
      )}
    </svg>
  </AbsoluteFill>
);
