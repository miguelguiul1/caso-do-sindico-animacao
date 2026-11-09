import React from "react";
import { AbsoluteFill } from "remotion";

const CONTORNO = "#050810";

export const SalaoDeFestas: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={720} height={1280} viewBox="0 0 720 1280">
      {/* parede */}
      <rect width={720} height={900} fill="#10224a" />
      {/* janelas com lua */}
      {[90, 420].map((x) => (
        <rect key={x} x={x} y={180} width={210} height={300} rx={8}
          fill="#1b3a7a" stroke={CONTORNO} strokeWidth={8} />
      ))}
      <circle cx={190} cy={270} r={34} fill="#e8eefc" />
      {/* varal de luzes */}
      <path d="M0 90 Q360 190 720 90" fill="none" stroke={CONTORNO} strokeWidth={6} />
      {[80, 200, 320, 440, 560, 670].map((x, i) => (
        <circle key={x} cx={x} cy={110 + Math.sin((x / 720) * Math.PI) * 62}
          r={12} fill={i % 2 ? "#facc15" : "#f472b6"} stroke={CONTORNO} strokeWidth={4} />
      ))}
      {/* piso */}
      <rect y={900} width={720} height={380} fill="#07102a" />
      <line x1={0} y1={900} x2={720} y2={900} stroke={CONTORNO} strokeWidth={8} />
      {/* mesa de festa */}
      <rect x={440} y={800} width={240} height={30} rx={6} fill="#1e3a8a" stroke={CONTORNO} strokeWidth={6} />
      <rect x={470} y={830} width={20} height={90} fill="#1e3a8a" stroke={CONTORNO} strokeWidth={5} />
      <rect x={630} y={830} width={20} height={90} fill="#1e3a8a" stroke={CONTORNO} strokeWidth={5} />
      <rect x={500} y={740} width={60} height={60} rx={6} fill="#f472b6" stroke={CONTORNO} strokeWidth={5} />
    </svg>
  </AbsoluteFill>
);
