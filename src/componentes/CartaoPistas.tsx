import React from "react";

const C = "#050810";

type Props = { numero: 1 | 2 | 3 | 4 | 5 | 6; largura?: number };

export const TITULOS_PISTAS = [
  "Cabo desencapado",
  "Poça d’água",
  "Garrafinha térmica",
  "Lasca de glitter",
  "Celular do Bruno",
  "Boné preto",
];

const Desenho: React.FC<{ numero: number }> = ({ numero }) => {
  switch (numero) {
    case 1: // cabo desligado da tomada
      return (
        <g>
          <rect
            x={60}
            y={90}
            width={70}
            height={90}
            rx={8}
            fill="#e8eefc"
            stroke={C}
            strokeWidth={8}
          />
          <rect x={80} y={115} width={8} height={26} fill={C} />
          <rect x={102} y={115} width={8} height={26} fill={C} />
          <path
            d="M160 190 Q200 120 250 170 Q300 220 340 150"
            fill="none"
            stroke={C}
            strokeWidth={16}
            strokeLinecap="round"
          />
          <path
            d="M160 190 Q200 120 250 170 Q300 220 340 150"
            fill="none"
            stroke="#f59e0b"
            strokeWidth={9}
            strokeLinecap="round"
          />
          <rect
            x={150}
            y={176}
            width={30}
            height={26}
            rx={4}
            fill="#1f2937"
            stroke={C}
            strokeWidth={5}
          />
          <path
            d="M338 150 l14 -14 M338 150 l16 4 M338 150 l8 16"
            stroke="#facc15"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </g>
      );
    case 2: // poça no chão, roupa seca
      return (
        <g>
          <ellipse
            cx={170}
            cy={200}
            rx={120}
            ry={34}
            fill="#1d4ed8"
            stroke={C}
            strokeWidth={7}
          />
          <path
            d="M120 195 q40 -12 80 0"
            fill="none"
            stroke="#93c5fd"
            strokeWidth={5}
          />
          <rect
            x={280}
            y={80}
            width={80}
            height={110}
            rx={18}
            fill="#8b5cf6"
            stroke={C}
            strokeWidth={7}
          />
          <path
            d="M296 112 l48 0 M296 134 l48 0 M296 156 l48 0"
            stroke="#c4b5fd"
            strokeWidth={5}
          />
        </g>
      );
    case 3: // garrafinha térmica com nome
      return (
        <g>
          <rect
            x={150}
            y={52}
            width={100}
            height={26}
            rx={8}
            fill="#334155"
            stroke={C}
            strokeWidth={7}
          />
          <rect
            x={130}
            y={78}
            width={140}
            height={150}
            rx={26}
            fill="#0ea5e9"
            stroke={C}
            strokeWidth={8}
          />
          <rect
            x={146}
            y={118}
            width={108}
            height={36}
            rx={8}
            fill="#e8eefc"
            stroke={C}
            strokeWidth={4}
          />
          <text
            x={200}
            y={144}
            textAnchor="middle"
            fontSize={22}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill={C}
          >
            Bruninho
          </text>
        </g>
      );
    case 4: // lasca de glitter prata
      return (
        <g>
          <ellipse
            cx={200}
            cy={170}
            rx={92}
            ry={30}
            fill="#334155"
            stroke={C}
            strokeWidth={8}
          />
          <ellipse
            cx={200}
            cy={158}
            rx={86}
            ry={24}
            fill="#475569"
            stroke={C}
            strokeWidth={6}
          />
          <path
            d="M232 144 l24 -8 l-6 22 l-16 4Z"
            fill="#cbd5e1"
            stroke={C}
            strokeWidth={4}
          />
          <path
            d="M270 100 l4 -14 l4 14 l14 4 l-14 4 l-4 14 l-4 -14 l-14 -4Z"
            fill="#fff"
          />
          <path
            d="M150 96 l3 -9 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3Z"
            fill="#e2e8f0"
          />
        </g>
      );
    case 5: // celular com rascunho
      return (
        <g>
          <rect
            x={120}
            y={46}
            width={160}
            height={190}
            rx={18}
            fill="#0f172a"
            stroke={C}
            strokeWidth={8}
          />
          <rect x={132} y={64} width={136} height={150} rx={6} fill="#fef9c3" />
          <text
            x={140}
            y={86}
            fontSize={11}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill={C}
          >
            RASCUNHO
          </text>
          <text x={140} y={108} fontSize={12} fontFamily="Arial" fill={C}>
            À meia-noite eu
          </text>
          <text x={140} y={124} fontSize={12} fontFamily="Arial" fill={C}>
            mostro tudo no discurso.
          </text>
          <text x={140} y={150} fontSize={12} fontFamily="Arial" fill="#b91c1c">
            Planilha: faltam
          </text>
          <text
            x={140}
            y={166}
            fontSize={12}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill="#b91c1c"
          >
            R$ 12.800
          </text>
        </g>
      );
    default: // boné preto
      return (
        <g>
          <path
            d="M110 170 Q110 90 200 90 Q290 90 290 170Z"
            fill="#111827"
            stroke={C}
            strokeWidth={8}
          />
          <path
            d="M280 170 Q340 170 350 190 Q300 196 270 186Z"
            fill="#1f2937"
            stroke={C}
            strokeWidth={7}
          />
          <circle
            cx={200}
            cy={92}
            r={8}
            fill="#334155"
            stroke={C}
            strokeWidth={4}
          />
          <text
            x={200}
            y={146}
            textAnchor="middle"
            fontSize={20}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill="#e8eefc"
          >
            SOM
          </text>
        </g>
      );
  }
};

export const CartaoPistas: React.FC<Props> = ({ numero, largura = 400 }) => (
  <svg width={largura} height={largura * 0.95} viewBox="0 0 420 400">
    <rect
      x={6}
      y={6}
      width={408}
      height={388}
      rx={30}
      fill="#10224a"
      stroke={C}
      strokeWidth={10}
    />
    <circle cx={60} cy={60} r={36} fill="#22c55e" stroke={C} strokeWidth={7} />
    <text
      x={60}
      y={74}
      textAnchor="middle"
      fontSize={44}
      fontWeight={900}
      fontFamily="Arial Black, Arial"
      fill={C}
    >
      {numero}
    </text>
    <g transform="translate(10 40)">
      <Desenho numero={numero} />
    </g>
    <text
      x={210}
      y={365}
      textAnchor="middle"
      fontSize={32}
      fontWeight={900}
      fontFamily="Arial Black, Arial"
      fill="#fff"
    >
      {TITULOS_PISTAS[numero - 1]}
    </text>
  </svg>
);

// Plaquinhas numeradas 1 a 6 (fala 17)
export const Plaquinhas: React.FC = () => (
  <div style={{ display: "flex", gap: 16 }}>
    {[1, 2, 3, 4, 5, 6].map((n) => (
      <div
        key={n}
        style={{
          width: 96,
          height: 120,
          background: "#facc15",
          border: "7px solid #050810",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial Black, Arial",
          fontWeight: 900,
          fontSize: 70,
          color: "#050810",
        }}
      >
        {n}
      </div>
    ))}
  </div>
);
