import React from "react";

const C = "#050810";

type Props = { hora?: string; largura?: number };

// Celular com a selfie do Toni e a hora no canto.
export const CartaoCelular: React.FC<Props> = ({ hora = "15:48", largura = 420 }) => {
  const altura = largura * 1.9;
  return (
    <svg width={largura} height={altura} viewBox="0 0 420 798">
      <rect x={6} y={6} width={408} height={786} rx={56} fill="#0f172a" stroke={C} strokeWidth={10} />
      <rect x={30} y={60} width={360} height={680} rx={28} fill="#1b3a7a" />
      <rect x={150} y={22} width={120} height={20} rx={10} fill={C} />
      <text x={210} y={118} textAnchor="middle" fontSize={44} fontWeight={900}
        fontFamily="Arial Black, Arial" fill="#fff">{hora}</text>
      {/* selfie do Toni */}
      <circle cx={210} cy={430} r={110} fill="#f2c9a0" stroke={C} strokeWidth={8} />
      <path d="M100 400 Q110 310 210 310 Q310 310 320 400 Q260 350 210 350 Q160 350 100 400Z"
        fill="#2b1d12" stroke={C} strokeWidth={6} />
      <circle cx={172} cy={440} r={9} fill={C} />
      <circle cx={248} cy={440} r={9} fill={C} />
      <path d="M165 490 Q210 535 255 490" fill="none" stroke={C} strokeWidth={8} strokeLinecap="round" />
      <rect x={110} y={560} width={200} height={110} rx={50} fill="#3b82f6" stroke={C} strokeWidth={8} />
      <text x={210} y={715} textAnchor="middle" fontSize={34} fontWeight={900}
        fontFamily="Arial Black, Arial" fill="#fff">Toni</text>
    </svg>
  );
};
