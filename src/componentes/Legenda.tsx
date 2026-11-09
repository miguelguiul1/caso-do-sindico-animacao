import React from "react";

type Props = { texto: string; destaque?: number; quem?: string };

// Faixa fina na base (até 15% de 720 = 108px), no máximo 2 linhas.
// Versão estática; destaque palavra a palavra (Whisper) vem depois.
export const Legenda: React.FC<Props> = ({ texto, destaque = -1, quem }) => (
  <>
    {quem && (
      <div
        style={{
          position: "absolute",
          left: 24,
          bottom: 104,
          background: "#22c55e",
          color: "#050810",
          border: "4px solid #050810",
          borderRadius: 10,
          padding: "2px 14px",
          fontFamily: "Arial Black, Arial",
          fontWeight: 900,
          fontSize: 22,
        }}
      >
        {quem}
      </div>
    )}
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 96,
        boxSizing: "border-box",
        padding: "0 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(5, 8, 16, 0.65)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: texto.length > 95 ? 30 : 34,
          fontWeight: 800,
          lineHeight: 1.18,
          color: "#fff",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {texto.split(" ").map((p, i) => (
          <span key={i} style={{ color: i === destaque ? "#22c55e" : "#fff" }}>
            {p}{" "}
          </span>
        ))}
      </div>
    </div>
  </>
);
