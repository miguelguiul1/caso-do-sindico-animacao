import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Portaria: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={720} height={1280} viewBox="0 0 720 1280">
      <rect width={720} height={900} fill="#10224a" />
      {/* porta de vidro */}
      <rect x={400} y={200} width={260} height={640} rx={8} fill="#1b3a7a" stroke={C} strokeWidth={8} />
      <line x1={530} y1={200} x2={530} y2={840} stroke={C} strokeWidth={6} />
      <circle cx={512} cy={520} r={8} fill="#e8eefc" />
      <circle cx={548} cy={520} r={8} fill="#e8eefc" />
      {/* luminária */}
      <circle cx={230} cy={130} r={30} fill="#facc15" stroke={C} strokeWidth={6} />
      {/* piso */}
      <rect y={900} width={720} height={380} fill="#07102a" />
      <line x1={0} y1={900} x2={720} y2={900} stroke={C} strokeWidth={8} />
      {/* balcão */}
      <rect x={40} y={640} width={300} height={260} rx={10} fill="#1e3a8a" stroke={C} strokeWidth={8} />
      <rect x={30} y={620} width={320} height={34} rx={8} fill="#2f56a8" stroke={C} strokeWidth={6} />
      {/* quadro de chaves */}
      <rect x={70} y={300} width={240} height={200} rx={8} fill="#334155" stroke={C} strokeWidth={8} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={110 + i * 56} cy={360} r={9} fill="#facc15" stroke={C} strokeWidth={3} />
          <circle cx={110 + i * 56} cy={430} r={9} fill="#facc15" stroke={C} strokeWidth={3} />
        </g>
      ))}
    </svg>
  </AbsoluteFill>
);
