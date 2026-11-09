import React from "react";

type Linha = { nome: string; entrada: string; saida: string };

const PADRAO: Linha[] = [
  { nome: "Toni", entrada: "15h40", saida: "15h49" },
  { nome: "Ananias", entrada: "15h50", saida: "16h55" },
];

export const RegistroAcesso: React.FC<{ linhas?: Linha[] }> = ({ linhas = PADRAO }) => (
  <div
    style={{
      width: 600,
      background: "#e8eefc",
      border: "8px solid #050810",
      borderRadius: 24,
      padding: 28,
      fontFamily: "Arial, sans-serif",
      color: "#0b1530",
    }}
  >
    <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 18 }}>REGISTRO DE ACESSO</div>
    <div style={{ display: "flex", fontSize: 28, fontWeight: 700, borderBottom: "5px solid #050810", paddingBottom: 8 }}>
      <div style={{ flex: 2 }}>Nome</div>
      <div style={{ flex: 1 }}>Entrou</div>
      <div style={{ flex: 1 }}>Saiu</div>
    </div>
    {linhas.map((l) => (
      <div key={l.nome} style={{ display: "flex", fontSize: 36, fontWeight: 900, padding: "14px 0", borderBottom: "3px solid #94a3b8" }}>
        <div style={{ flex: 2 }}>{l.nome}</div>
        <div style={{ flex: 1 }}>{l.entrada}</div>
        <div style={{ flex: 1 }}>{l.saida}</div>
      </div>
    ))}
  </div>
);
