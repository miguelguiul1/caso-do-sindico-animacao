import React from "react";

// Moldura comum dos cartões (mesmo visual: contorno grosso azul-escuro).
export const Moldura: React.FC<{
  largura?: number;
  titulo?: string;
  cor?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ largura = 440, titulo, cor = "#10224a", children, style }) => (
  <div
    style={{
      width: largura,
      boxSizing: "border-box",
      background: cor,
      border: "8px solid #050810",
      borderRadius: 24,
      padding: 16,
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      ...style,
    }}
  >
    {titulo && (
      <div
        style={{
          fontFamily: "Arial Black, Arial",
          fontWeight: 900,
          fontSize: 24,
          marginBottom: 10,
          color: "#22c55e",
          letterSpacing: 1,
        }}
      >
        {titulo}
      </div>
    )}
    {children}
  </div>
);
