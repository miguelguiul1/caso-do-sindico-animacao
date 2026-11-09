import React from "react";

const C = "#050810";

type Props = { numero: 1 | 2 | 3 | 4; largura?: number };

const TITULOS = ["Sachê rasgado", "Papel: R$ 18.400", "Multa do Ananias", "Chave: PORTARIA"];

const Desenho: React.FC<{ numero: number }> = ({ numero }) => {
  switch (numero) {
    case 1:
      return (
        <g>
          <path d="M120 70 L300 70 L300 230 L120 230Z" fill="#f8fafc" stroke={C} strokeWidth={8} />
          <path d="M120 70 L145 55 L170 75 L195 55 L220 75 L245 55 L270 75 L300 60" fill="none" stroke={C} strokeWidth={8} />
          <circle cx={210} cy={150} r={30} fill="#22c55e" stroke={C} strokeWidth={6} />
        </g>
      );
    case 2:
      return (
        <g>
          <rect x={90} y={60} width={240} height={180} rx={6} fill="#fef9c3" stroke={C} strokeWidth={8} />
          <text x={210} y={170} textAnchor="middle" fontSize={50} fontWeight={900} fontFamily="Arial Black, Arial" fill={C}>R$ 18.400</text>
        </g>
      );
    case 3:
      return (
        <g>
          <rect x={100} y={50} width={220} height={200} rx={6} fill="#fecaca" stroke={C} strokeWidth={8} />
          <text x={210} y={110} textAnchor="middle" fontSize={34} fontWeight={900} fontFamily="Arial Black, Arial" fill={C}>MULTA</text>
          <text x={210} y={165} textAnchor="middle" fontSize={30} fontWeight={700} fontFamily="Arial" fill={C}>Ananias</text>
          <line x1={130} y1={200} x2={290} y2={200} stroke={C} strokeWidth={5} />
        </g>
      );
    default:
      return (
        <g>
          <circle cx={150} cy={150} r={46} fill="#facc15" stroke={C} strokeWidth={8} />
          <circle cx={150} cy={150} r={14} fill="#1b3a7a" stroke={C} strokeWidth={5} />
          <rect x={190} y={138} width={140} height={24} fill="#facc15" stroke={C} strokeWidth={6} />
          <rect x={290} y={162} width={20} height={34} fill="#facc15" stroke={C} strokeWidth={5} />
          <rect x={235} y={185} width={110} height={50} rx={6} fill="#f8fafc" stroke={C} strokeWidth={6} />
          <text x={290} y={219} textAnchor="middle" fontSize={20} fontWeight={900} fontFamily="Arial Black, Arial" fill={C}>PORTARIA</text>
        </g>
      );
  }
};

export const CartaoPistas: React.FC<Props> = ({ numero, largura = 520 }) => (
  <svg width={largura} height={largura * 0.95} viewBox="0 0 420 400">
    <rect x={6} y={6} width={408} height={388} rx={30} fill="#10224a" stroke={C} strokeWidth={10} />
    <circle cx={60} cy={60} r={36} fill="#22c55e" stroke={C} strokeWidth={7} />
    <text x={60} y={74} textAnchor="middle" fontSize={44} fontWeight={900} fontFamily="Arial Black, Arial" fill={C}>{numero}</text>
    <g transform="translate(0 40)"><Desenho numero={numero} /></g>
    <text x={210} y={365} textAnchor="middle" fontSize={34} fontWeight={900} fontFamily="Arial Black, Arial" fill="#fff">
      {TITULOS[numero - 1]}
    </text>
  </svg>
);
