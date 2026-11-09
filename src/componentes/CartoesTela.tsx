import React from "react";
import { useCurrentFrame } from "remotion";
import { Moldura } from "./Moldura";
import { AtorId, ELENCO, Rosto } from "../personagens/Elenco";

const SUSPEITOS: AtorId[] = ["gui", "rafa", "duda", "jorge", "larissa"];
const T = (extra: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "Arial Black, Arial",
  fontWeight: 900,
  ...extra,
});

export const CartaoHorario: React.FC<{ largura?: number }> = ({
  largura = 440,
}) => (
  <Moldura largura={largura} titulo="Horário da morte">
    <div
      style={T({
        fontSize: 56,
        textAlign: "center",
        lineHeight: 1.1,
        color: "#facc15",
      })}
    >
      23h15
      <br />a 23h35
    </div>
  </Moldura>
);

// Painel dos cinco suspeitos (silhuetas) ou resumo do caso
export const CartaoPainel: React.FC<{
  modo?: "suspeitos" | "resumo";
  largura?: number;
}> = ({ modo = "suspeitos", largura = 820 }) =>
  modo === "suspeitos" ? (
    <Moldura largura={largura} titulo="Os cinco suspeitos">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {SUSPEITOS.map((id) => (
          <div key={id} style={{ textAlign: "center" }}>
            <Rosto quem={id} tamanho={120} />
            <div style={T({ fontSize: 24 })}>{ELENCO[id].nome}</div>
          </div>
        ))}
      </div>
    </Moldura>
  ) : (
    <Moldura largura={largura} titulo="Resumo do caso">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {[
          ["5", "suspeitos"],
          ["6", "pistas"],
          ["4", "evidências"],
          ["1", "culpado"],
        ].map(([n, t]) => (
          <div key={t} style={{ textAlign: "center" }}>
            <div style={T({ fontSize: 96, color: "#facc15", lineHeight: 1 })}>
              {n}
            </div>
            <div style={T({ fontSize: 28 })}>{t}</div>
          </div>
        ))}
      </div>
    </Moldura>
  );

// Voto parcial: cinco rostos + contagem regressiva de 3 minutos
export const CartaoContagem: React.FC<{
  largura?: number;
  segundos?: number;
}> = ({ largura = 820, segundos = 180 }) => {
  const frame = useCurrentFrame();
  const restante = Math.max(0, segundos - Math.floor(frame / 30));
  const mm = Math.floor(restante / 60);
  const ss = String(restante % 60).padStart(2, "0");
  return (
    <Moldura largura={largura} titulo="Voto parcial · pausem o vídeo">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          {SUSPEITOS.map((id) => (
            <Rosto key={id} quem={id} tamanho={92} />
          ))}
        </div>
        <div style={T({ fontSize: 84, color: "#facc15" })}>
          {mm}:{ss}
        </div>
      </div>
    </Moldura>
  );
};

export const CartaoEnvelopes: React.FC<{ largura?: number }> = ({
  largura = 820,
}) => (
  <Moldura largura={largura} titulo="Novas evidências da central">
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {[
        ["A", "Story"],
        ["B", "Mão"],
        ["C", "Planilha"],
        ["D", "Laboratório"],
      ].map(([l, t]) => (
        <div key={l} style={{ textAlign: "center" }}>
          <svg width={150} height={110} viewBox="0 0 150 110">
            <rect
              x={6}
              y={6}
              width={138}
              height={98}
              rx={8}
              fill="#e8eefc"
              stroke="#050810"
              strokeWidth={6}
            />
            <path
              d="M6 12 L75 64 L144 12"
              fill="none"
              stroke="#050810"
              strokeWidth={6}
              strokeLinejoin="round"
            />
            <circle
              cx={75}
              cy={78}
              r={20}
              fill="#22c55e"
              stroke="#050810"
              strokeWidth={5}
            />
            <text
              x={75}
              y={89}
              textAnchor="middle"
              fontSize={28}
              fontWeight={900}
              fontFamily="Arial Black, Arial"
              fill="#050810"
            >
              {l}
            </text>
          </svg>
          <div style={T({ fontSize: 24 })}>{t}</div>
        </div>
      ))}
    </div>
  </Moldura>
);

export const CartaoPerguntas: React.FC<{ largura?: number }> = ({
  largura = 760,
}) => (
  <Moldura largura={largura} titulo="Relatório final">
    {[
      "Qual foi a causa da morte?",
      "Quem fez?",
      "Por quê?",
      "Quais são as provas?",
    ].map((p, i) => (
      <div
        key={p}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          margin: "8px 0",
        }}
      >
        <div
          style={T({
            width: 56,
            height: 56,
            borderRadius: 28,
            background: "#22c55e",
            border: "5px solid #050810",
            color: "#050810",
            fontSize: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
          })}
        >
          {i + 1}
        </div>
        <div style={T({ fontSize: 38 })}>{p}</div>
      </div>
    ))}
  </Moldura>
);

export const CartaoRelogio: React.FC<{
  largura?: number;
  segundos?: number;
}> = ({ largura = 440, segundos = 900 }) => {
  const frame = useCurrentFrame();
  const restante = Math.max(0, segundos - Math.floor(frame / 30));
  const mm = String(Math.floor(restante / 60)).padStart(2, "0");
  const ss = String(restante % 60).padStart(2, "0");
  return (
    <Moldura largura={largura} titulo="Tempo da equipe">
      <div
        style={T({
          fontSize: 84,
          textAlign: "center",
          color: "#facc15",
          lineHeight: 1,
        })}
      >
        {mm}:{ss}
      </div>
    </Moldura>
  );
};

export const CartaoTrofeu: React.FC<{ largura?: number }> = ({
  largura = 440,
}) => (
  <Moldura largura={largura} titulo="Melhor perícia">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg width={220} height={240} viewBox="0 0 220 240">
        <path
          d="M60 20 h100 v60 a50 50 0 0 1 -100 0Z"
          fill="#facc15"
          stroke="#050810"
          strokeWidth={8}
          strokeLinejoin="round"
        />
        <path
          d="M60 36 H28 q0 50 40 56 M160 36 h32 q0 50 -40 56"
          fill="none"
          stroke="#050810"
          strokeWidth={8}
          strokeLinecap="round"
        />
        <rect
          x={98}
          y={130}
          width={24}
          height={44}
          fill="#facc15"
          stroke="#050810"
          strokeWidth={7}
        />
        <rect
          x={64}
          y={174}
          width={92}
          height={22}
          rx={6}
          fill="#f59e0b"
          stroke="#050810"
          strokeWidth={7}
        />
        <rect
          x={50}
          y={196}
          width={120}
          height={28}
          rx={6}
          fill="#92400e"
          stroke="#050810"
          strokeWidth={7}
        />
        <path
          d="M110 44 l8 18 l20 2 l-15 13 l5 20 l-18 -11 l-18 11 l5 -20 l-15 -13 l20 -2Z"
          fill="#fff7ae"
        />
      </svg>
    </div>
  </Moldura>
);
