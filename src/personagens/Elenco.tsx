import React from "react";
import { Personagem, Pose, EstiloCabelo, Extra } from "./Personagem";

export type AtorId =
  | "paulo"
  | "matos"
  | "bruno"
  | "gui"
  | "rafa"
  | "duda"
  | "jorge"
  | "larissa";

type Ficha = {
  nome: string;
  cor: string; // roupa
  calca: string;
  pele: string;
  cabelo: { estilo: EstiloCabelo; cor: string };
  extras?: Extra[];
  unhaQuebrada?: boolean;
};

export const ELENCO: Record<AtorId, Ficha> = {
  paulo: {
    nome: "Delegado Paulo",
    cor: "#1e3a5f",
    calca: "#0f172a",
    pele: "#c68b59",
    cabelo: { estilo: "quepe", cor: "#0f2a4a" },
    extras: ["distintivo"],
  },
  matos: {
    nome: "Dr. Matos",
    cor: "#f1f5f9",
    calca: "#475569",
    pele: "#f2c9a0",
    cabelo: { estilo: "curto", cor: "#9ca3af" },
    extras: ["jaleco", "oculos"],
  },
  bruno: {
    nome: "Bruno",
    cor: "#8b5cf6",
    calca: "#1e293b",
    pele: "#f2c9a0",
    cabelo: { estilo: "topete", cor: "#3b2a1a" },
  },
  gui: {
    nome: "Gui",
    cor: "#0ea5e9",
    calca: "#1e293b",
    pele: "#a16a3d",
    cabelo: { estilo: "curto", cor: "#1a1209" },
  },
  rafa: {
    nome: "Rafa",
    cor: "#111827",
    calca: "#374151",
    pele: "#f2c9a0",
    cabelo: { estilo: "topete", cor: "#facc15" },
    extras: ["fone"],
  },
  duda: {
    nome: "Duda",
    cor: "#ec4899",
    calca: "#1e293b",
    pele: "#8d5a35",
    cabelo: { estilo: "longo", cor: "#111111" },
  },
  jorge: {
    nome: "Seu Jorge",
    cor: "#374151",
    calca: "#1f2937",
    pele: "#d9a066",
    cabelo: { estilo: "curto", cor: "#d1d5db" },
    extras: ["fone"],
  },
  larissa: {
    nome: "Larissa",
    cor: "#f9a8d4",
    calca: "#7c3aed",
    pele: "#f2c9a0",
    cabelo: { estilo: "longo", cor: "#7c4a2a" },
    unhaQuebrada: true,
  },
};

type AtorProps = {
  quem: AtorId;
  pose?: Pose;
  escala?: number;
  sangue?: boolean;
};

export const Ator: React.FC<AtorProps> = ({
  quem,
  pose = "parado",
  escala = 1,
  sangue,
}) => {
  const f = ELENCO[quem];
  return (
    <Personagem
      pose={pose}
      escala={escala}
      cor={f.cor}
      calca={f.calca}
      pele={f.pele}
      cabelo={f.cabelo}
      extras={f.extras}
      unhaQuebrada={f.unhaQuebrada}
      sangue={sangue}
    />
  );
};

// Rosto simples para painéis (cinco suspeitos etc.)
export const Rosto: React.FC<{ quem: AtorId; tamanho?: number }> = ({
  quem,
  tamanho = 90,
}) => {
  const f = ELENCO[quem];
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 100 100">
      {f.cabelo.estilo === "longo" && (
        <path
          d="M14 40 Q10 96 30 98 L70 98 Q90 96 86 40Z"
          fill={f.cabelo.cor}
          stroke="#050810"
          strokeWidth={4}
        />
      )}
      <circle
        cx={50}
        cy={52}
        r={34}
        fill={f.pele}
        stroke="#050810"
        strokeWidth={5}
      />
      <path
        d="M17 48 Q16 16 50 16 Q84 16 83 48 Q70 34 50 34 Q30 34 17 48Z"
        fill={f.cabelo.cor}
        stroke="#050810"
        strokeWidth={4}
      />
      <circle cx={38} cy={54} r={4} fill="#050810" />
      <circle cx={62} cy={54} r={4} fill="#050810" />
      <path
        d="M40 72 Q50 78 60 72"
        fill="none"
        stroke="#050810"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
};
