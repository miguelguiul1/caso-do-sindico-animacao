import React from "react";
import { useCurrentFrame } from "remotion";

export type Pose =
  | "parado"
  | "andando"
  | "apontando"
  | "assustado"
  | "caido"
  | "nervoso";

type Props = {
  pose?: Pose;
  cor?: string; // cor da roupa
  pele?: string;
  escala?: number;
};

const CONTORNO = "#0b0f1a";
const LARGURA = 6;

const Membro: React.FC<{
  x: number;
  y: number;
  comprimento: number;
  angulo: number;
  cor: string;
}> = ({ x, y, comprimento, angulo, cor }) => (
  <g transform={`rotate(${angulo} ${x} ${y})`}>
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + comprimento}
      stroke={CONTORNO}
      strokeWidth={22}
      strokeLinecap="round"
    />
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + comprimento}
      stroke={cor}
      strokeWidth={22 - LARGURA}
      strokeLinecap="round"
    />
  </g>
);

export const Personagem: React.FC<Props> = ({
  pose = "parado",
  cor = "#3b82f6",
  pele = "#f2c9a0",
  escala = 1,
}) => {
  const frame = useCurrentFrame();
  // ciclo de passo: ~0.8s a 30fps
  const t = pose === "andando" ? Math.sin((frame / 12) * Math.PI) : 0;
  const balanco = t * 28;
  const assustado = pose === "assustado";
  const caido = pose === "caido";
  const nervoso = pose === "nervoso";
  // nervoso: tremor leve no corpo todo
  const tremorX = nervoso ? Math.sin(frame * 2.3) * 2.5 : 0;
  const tremor = assustado ? Math.sin(frame * 1.8) * 3 : 0;
  // ângulos dos braços (0 = pendurado; 90 = horizontal para a direita da tela, -90 = esquerda)
  const bracoTras = assustado
    ? 150 + tremor
    : pose === "apontando"
      ? 10
      : caido
        ? 25
        : nervoso
          ? 25 + Math.sin(frame * 2.9) * 4
          : balanco;
  const bracoFrente = assustado
    ? -150 - tremor
    : pose === "apontando"
      ? -90
      : caido
        ? -30
        : nervoso
          ? -25 - Math.sin(frame * 2.9 + 1) * 4
          : -balanco;

  return (
    <svg
      width={200 * escala}
      height={400 * escala}
      viewBox="0 0 200 400"
      style={{ overflow: "visible" }}
    >
      <g
        transform={
          caido
            ? "rotate(90 100 370)"
            : nervoso
              ? `translate(${tremorX} 0)`
              : undefined
        }
      >
        {/* braço de trás */}
        <Membro
          x={100}
          y={140}
          comprimento={90}
          angulo={bracoTras}
          cor={pele}
        />
        {/* perna de trás */}
        <Membro
          x={100}
          y={250}
          comprimento={120}
          angulo={-balanco}
          cor="#1e293b"
        />
        {/* perna da frente */}
        <Membro
          x={100}
          y={250}
          comprimento={120}
          angulo={balanco}
          cor="#1e293b"
        />
        {/* corpo */}
        <rect
          x={65}
          y={120}
          width={70}
          height={140}
          rx={22}
          fill={cor}
          stroke={CONTORNO}
          strokeWidth={LARGURA}
        />
        {/* braço da frente */}
        <Membro
          x={100}
          y={140}
          comprimento={90}
          angulo={bracoFrente}
          cor={pele}
        />
        {/* cabeça */}
        <circle
          cx={100}
          cy={75}
          r={42}
          fill={pele}
          stroke={CONTORNO}
          strokeWidth={LARGURA}
        />
        {caido ? (
          <>
            {[86, 114].map((x) => (
              <g
                key={x}
                stroke={CONTORNO}
                strokeWidth={4}
                strokeLinecap="round"
              >
                <line x1={x - 6} y1={66} x2={x + 6} y2={78} />
                <line x1={x + 6} y1={66} x2={x - 6} y2={78} />
              </g>
            ))}
            <path
              d="M90 98 Q100 92 110 98"
              fill="none"
              stroke={CONTORNO}
              strokeWidth={4}
              strokeLinecap="round"
            />
          </>
        ) : nervoso ? (
          <>
            <circle
              cx={86}
              cy={72}
              r={8}
              fill="#fff"
              stroke={CONTORNO}
              strokeWidth={3}
            />
            <circle
              cx={114}
              cy={72}
              r={8}
              fill="#fff"
              stroke={CONTORNO}
              strokeWidth={3}
            />
            <circle cx={83} cy={72} r={3} fill={CONTORNO} />
            <circle cx={111} cy={72} r={3} fill={CONTORNO} />
            <path
              d="M88 98 Q94 94 100 98 Q106 102 112 98"
              fill="none"
              stroke={CONTORNO}
              strokeWidth={4}
              strokeLinecap="round"
            />
            <path
              d="M142 48 Q150 62 142 68 Q134 62 142 48Z"
              fill="#7dd3fc"
              stroke={CONTORNO}
              strokeWidth={3}
            />
          </>
        ) : assustado ? (
          <>
            <circle
              cx={86}
              cy={70}
              r={9}
              fill="#fff"
              stroke={CONTORNO}
              strokeWidth={3}
            />
            <circle
              cx={114}
              cy={70}
              r={9}
              fill="#fff"
              stroke={CONTORNO}
              strokeWidth={3}
            />
            <circle cx={86} cy={70} r={3} fill={CONTORNO} />
            <circle cx={114} cy={70} r={3} fill={CONTORNO} />
            <ellipse cx={100} cy={96} rx={9} ry={12} fill={CONTORNO} />
          </>
        ) : (
          <>
            <circle cx={86} cy={72} r={5} fill={CONTORNO} />
            <circle cx={114} cy={72} r={5} fill={CONTORNO} />
          </>
        )}
      </g>
    </svg>
  );
};
