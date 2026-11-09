import React from "react";
import { AbsoluteFill } from "remotion";

const C = "#050810";

export const CamarimDasMeninas: React.FC<{}> = () => (
  <AbsoluteFill style={{ background: "#0b1530" }}>
    <svg width={1280} height={720} viewBox="0 0 1280 720">
      <rect width={1280} height={470} fill="#1a1f4d" />
      {/* espelho grande */}
      <rect
        x={150}
        y={80}
        width={520}
        height={300}
        rx={12}
        fill="#27438f"
        stroke={C}
        strokeWidth={8}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <circle
          key={i}
          cx={175 + i * 58}
          cy={62}
          r={11}
          fill="#f9a8d4"
          stroke={C}
          strokeWidth={4}
        />
      ))}
      {/* penteadeira */}
      <rect
        x={130}
        y={380}
        width={560}
        height={26}
        rx={6}
        fill="#be185d"
        stroke={C}
        strokeWidth={6}
      />
      <rect
        x={150}
        y={406}
        width={20}
        height={80}
        fill="#be185d"
        stroke={C}
        strokeWidth={5}
      />
      <rect
        x={650}
        y={406}
        width={20}
        height={80}
        fill="#be185d"
        stroke={C}
        strokeWidth={5}
      />
      {[220, 300, 380, 470].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={350}
          width={26}
          height={30}
          rx={4}
          fill={["#f472b6", "#e8eefc", "#facc15", "#a78bfa"][i]}
          stroke={C}
          strokeWidth={4}
        />
      ))}
      {/* arara de roupas */}
      <line x1={880} y1={200} x2={1200} y2={200} stroke={C} strokeWidth={8} />
      <line x1={890} y1={200} x2={890} y2={470} stroke={C} strokeWidth={8} />
      <line x1={1190} y1={200} x2={1190} y2={470} stroke={C} strokeWidth={8} />
      {[920, 990, 1060, 1130].map((x, i) => (
        <path
          key={x}
          d={`M${x} 200 l-24 20 v90 h48 v-90Z`}
          fill={["#ec4899", "#3b82f6", "#a855f7", "#f59e0b"][i]}
          stroke={C}
          strokeWidth={5}
        />
      ))}
      <rect y={470} width={1280} height={250} fill="#07102a" />
      <line x1={0} y1={470} x2={1280} y2={470} stroke={C} strokeWidth={8} />
    </svg>
  </AbsoluteFill>
);
