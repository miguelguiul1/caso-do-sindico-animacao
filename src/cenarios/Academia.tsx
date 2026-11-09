import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const Academia: React.FC = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={720} height={1280} viewBox="0 0 720 1280">
      <rect width={720} height={900} fill="#0f2147" />
      {/* espelho */}
      <rect x={60} y={170} width={600} height={380} rx={10} fill="#1b3a7a" stroke={C} strokeWidth={8} />
      <line x1={60} y1={550} x2={300} y2={170} stroke="#2f56a8" strokeWidth={10} opacity={0.5} />
      {/* relógio */}
      <circle cx={360} cy={90} r={40} fill="#e8eefc" stroke={C} strokeWidth={6} />
      <line x1={360} y1={90} x2={360} y2={62} stroke={C} strokeWidth={5} />
      <line x1={360} y1={90} x2={382} y2={100} stroke={C} strokeWidth={5} />
      {/* piso */}
      <rect y={900} width={720} height={380} fill="#07102a" />
      <line x1={0} y1={900} x2={720} y2={900} stroke={C} strokeWidth={8} />
      {/* esteira */}
      <rect x={60} y={820} width={220} height={40} rx={8} fill="#334155" stroke={C} strokeWidth={6} />
      <line x1={90} y1={820} x2={70} y2={650} stroke={C} strokeWidth={10} />
      <rect x={40} y={620} width={80} height={36} rx={8} fill="#475569" stroke={C} strokeWidth={6} />
      {/* halteres */}
      <rect x={480} y={850} width={160} height={14} fill="#94a3b8" stroke={C} strokeWidth={5} />
      {[470, 640].map((x) => (
        <rect key={x} x={x - 14} y={820} width={28} height={74} rx={6} fill="#1e293b" stroke={C} strokeWidth={5} />
      ))}
      {/* banco */}
      <rect x={430} y={950} width={240} height={36} rx={10} fill="#1e3a8a" stroke={C} strokeWidth={6} />
    </svg>
  </AbsoluteFill>
);
