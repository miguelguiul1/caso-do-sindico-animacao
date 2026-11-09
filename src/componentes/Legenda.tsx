import React from "react";

type Props = { texto: string; destaque?: number };

// Versão estática de teste. Destaque palavra a palavra (Whisper) vem depois.
export const Legenda: React.FC<Props> = ({ texto, destaque = -1 }) => (
  <div
    style={{
      position: "absolute",
      left: 40,
      right: 40,
      bottom: 140,
      textAlign: "center",
      fontFamily: "Arial Black, Arial, sans-serif",
      fontSize: 64,
      fontWeight: 900,
      lineHeight: 1.15,
      color: "#fff",
      WebkitTextStroke: "8px #000",
      paintOrder: "stroke fill",
    }}
  >
    {texto.split(" ").map((p, i) => (
      <span key={i} style={{ color: i === destaque ? "#22c55e" : "#fff" }}>
        {p}{" "}
      </span>
    ))}
  </div>
);
