import React from "react";
import { AbsoluteFill } from "remotion";
import { SalaoDeFestas } from "../cenarios/SalaoDeFestas";

const OPCOES = [
  { letra: "A", nome: "Ananias" },
  { letra: "B", nome: "Marcos" },
  { letra: "C", nome: "Toni" },
];

export const Votacao: React.FC = () => (
  <AbsoluteFill>
    <SalaoDeFestas />
    <AbsoluteFill style={{ background: "rgba(5,8,16,0.8)", alignItems: "center", justifyContent: "center", gap: 28, fontFamily: "Arial Black, Arial, sans-serif" }}>
      <div style={{ color: "#fff", fontSize: 76, fontWeight: 900, textAlign: "center", WebkitTextStroke: "8px #000", paintOrder: "stroke fill", padding: "0 40px" }}>
        Quem matou?
      </div>
      {OPCOES.map((o) => (
        <div key={o.letra} style={{ width: 560, display: "flex", alignItems: "center", gap: 24, background: "#10224a", border: "8px solid #050810", borderRadius: 28, padding: "18px 28px" }}>
          <div style={{ width: 90, height: 90, borderRadius: 45, background: "#22c55e", border: "6px solid #050810", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, fontWeight: 900, color: "#050810" }}>
            {o.letra}
          </div>
          <div style={{ color: "#fff", fontSize: 54, fontWeight: 900 }}>{o.nome}</div>
        </div>
      ))}
      <div style={{ color: "#22c55e", fontSize: 54, fontWeight: 900, textAlign: "center", WebkitTextStroke: "7px #000", paintOrder: "stroke fill" }}>
        Comente A, B ou C
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
);
