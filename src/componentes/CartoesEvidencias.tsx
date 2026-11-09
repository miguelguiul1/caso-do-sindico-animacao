import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { Moldura } from "./Moldura";

const C = "#050810";

const Silhueta: React.FC<{
  cor?: string;
  x: number;
  y?: number;
  e?: number;
}> = ({ cor = "#94a3b8", x, y = 0, e = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${e})`}>
    <circle cx={0} cy={0} r={16} fill={cor} stroke={C} strokeWidth={4} />
    <rect
      x={-18}
      y={18}
      width={36}
      height={52}
      rx={12}
      fill={cor}
      stroke={C}
      strokeWidth={4}
    />
  </g>
);

// Câmera do corredor / do estacionamento
export const CartaoCamera: React.FC<{
  titulo: string;
  nome: string;
  inicio: string;
  fim: string;
  largura?: number;
  caixas?: boolean;
}> = ({ titulo, nome, inicio, fim, largura = 460, caixas }) => (
  <Moldura largura={largura} titulo={titulo}>
    <div
      style={{
        position: "relative",
        height: 210,
        background: "#06140f",
        border: "5px solid #050810",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 400 200">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <line
            key={i}
            x1={0}
            y1={i * 22}
            x2={400}
            y2={i * 22}
            stroke="#0b2a1e"
            strokeWidth={2}
          />
        ))}
        <rect y={150} width={400} height={50} fill="#0a1f17" />
        <Silhueta cor="#4ade80" x={200} y={70} e={1.3} />
        {caixas && (
          <>
            <rect
              x={250}
              y={120}
              width={40}
              height={40}
              fill="#16a34a"
              stroke={C}
              strokeWidth={3}
            />
            <rect
              x={265}
              y={92}
              width={34}
              height={30}
              fill="#22c55e"
              stroke={C}
              strokeWidth={3}
            />
          </>
        )}
      </svg>
      <div
        style={{
          position: "absolute",
          top: 8,
          left: 12,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "Arial Black, Arial",
          fontSize: 18,
          color: "#fff",
        }}
      >
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: 7,
            background: "#ef4444",
            display: "inline-block",
          }}
        />{" "}
        REC
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 12,
          fontFamily: "monospace",
          fontSize: 20,
          fontWeight: 900,
          color: "#4ade80",
        }}
      >
        {inicio} → {fim}
      </div>
    </div>
    <div
      style={{
        marginTop: 10,
        fontFamily: "Arial Black, Arial",
        fontSize: 28,
        fontWeight: 900,
      }}
    >
      {nome}: {inicio} às {fim}
    </div>
  </Moldura>
);

// Live do Instagram com contador de pessoas
export const CartaoLive: React.FC<{ largura?: number }> = ({
  largura = 440,
}) => {
  const frame = useCurrentFrame();
  const n = Math.round(
    interpolate(frame, [0, 75], [12, 300], { extrapolateRight: "clamp" }),
  );
  return (
    <Moldura largura={largura} cor="#2a1245">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            background: "#ef4444",
            border: "4px solid #050810",
            borderRadius: 8,
            padding: "2px 12px",
            fontFamily: "Arial Black, Arial",
            fontWeight: 900,
            fontSize: 22,
          }}
        >
          AO VIVO
        </div>
        <div
          style={{
            fontFamily: "Arial Black, Arial",
            fontWeight: 900,
            fontSize: 26,
          }}
        >
          Rafa · 23h00 – 23h40
        </div>
      </div>
      <svg width="100%" height={150} viewBox="0 0 400 150">
        <rect
          width={400}
          height={150}
          rx={10}
          fill="#4c1d95"
          stroke={C}
          strokeWidth={5}
        />
        <rect
          x={100}
          y={90}
          width={200}
          height={34}
          rx={6}
          fill="#1f2937"
          stroke={C}
          strokeWidth={5}
        />
        <circle
          cx={150}
          cy={107}
          r={13}
          fill="#111827"
          stroke={C}
          strokeWidth={3}
        />
        <circle
          cx={250}
          cy={107}
          r={13}
          fill="#111827"
          stroke={C}
          strokeWidth={3}
        />
        <Silhueta cor="#f2c9a0" x={200} y={24} e={1.1} />
      </svg>
      <div
        style={{
          marginTop: 10,
          fontFamily: "Arial Black, Arial",
          fontWeight: 900,
          fontSize: 50,
          color: "#facc15",
        }}
      >
        {n} <span style={{ fontSize: 26, color: "#fff" }}>assistindo</span>
      </div>
    </Moldura>
  );
};

export const CartaoTikTok: React.FC<{ largura?: number }> = ({
  largura = 440,
}) => (
  <Moldura largura={largura} cor="#050810">
    <div
      style={{
        fontFamily: "Arial Black, Arial",
        fontWeight: 900,
        fontSize: 28,
        marginBottom: 8,
      }}
    >
      <span style={{ color: "#22d3ee" }}>Tik</span>
      <span style={{ color: "#f43f5e" }}>Tok</span> · Duda
    </div>
    <svg width="100%" height={170} viewBox="0 0 400 170">
      <rect
        width={400}
        height={170}
        rx={10}
        fill="#1e1b4b"
        stroke="#e8eefc"
        strokeWidth={3}
      />
      {[70, 130, 200, 270, 330].map((x, i) => (
        <Silhueta
          key={x}
          cor={["#a78bfa", "#f472b6", "#ec4899", "#38bdf8", "#facc15"][i]}
          x={x}
          y={60 + (i % 2) * 8}
          e={i === 2 ? 1.25 : 0.95}
        />
      ))}
      <path
        d="M358 24 v28 a9 9 0 1 1 -6 -8 v-26 l14 4Z"
        fill="#fff"
        stroke={C}
        strokeWidth={3}
      />
    </svg>
    <div
      style={{
        marginTop: 10,
        fontFamily: "Arial Black, Arial",
        fontWeight: 900,
        fontSize: 28,
      }}
    >
      Dançando: 23h10 às 23h45
    </div>
  </Moldura>
);

// Story ampliado; com `comparar` mostra cortina x azulejo
export const CartaoStory: React.FC<{
  largura?: number;
  comparar?: boolean;
}> = ({ largura = 440, comparar = false }) => (
  <Moldura
    largura={comparar ? largura + 140 : largura}
    titulo={comparar ? "Cortina x azulejo" : "Story da Larissa · 23h22"}
  >
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <svg width={200} height={260} viewBox="0 0 200 260">
        <rect
          width={200}
          height={260}
          rx={18}
          fill="#b91c1c"
          stroke={C}
          strokeWidth={6}
        />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1={14 + i * 28}
            y1={8}
            x2={14 + i * 28}
            y2={252}
            stroke="#7f1d1d"
            strokeWidth={6}
          />
        ))}
        <rect
          x={10}
          y={10}
          width={180}
          height={10}
          rx={5}
          fill="#fff"
          opacity={0.6}
        />
        <text
          x={16}
          y={46}
          fontSize={15}
          fontWeight={900}
          fontFamily="Arial Black, Arial"
          fill="#fff"
        >
          larissa.prado
        </text>
        <circle
          cx={100}
          cy={150}
          r={32}
          fill="#f2c9a0"
          stroke={C}
          strokeWidth={5}
        />
        <path
          d="M66 130 Q70 100 100 100 Q130 100 134 130 Q120 116 100 116 Q80 116 66 130Z"
          fill="#7c4a2a"
          stroke={C}
          strokeWidth={4}
        />
        <rect
          x={64}
          y={182}
          width={72}
          height={70}
          rx={20}
          fill="#f9a8d4"
          stroke={C}
          strokeWidth={5}
        />
        <rect
          x={20}
          y={226}
          width={160}
          height={26}
          rx={8}
          fill="rgba(5,8,16,0.7)"
        />
        <text
          x={100}
          y={244}
          textAnchor="middle"
          fontSize={13}
          fontWeight={900}
          fontFamily="Arial"
          fill="#fff"
        >
          no banheiro, arrumando
        </text>
      </svg>
      {comparar && (
        <>
          <div
            style={{
              fontFamily: "Arial Black, Arial",
              fontSize: 48,
              fontWeight: 900,
              color: "#ef4444",
            }}
          >
            ≠
          </div>
          <svg width={200} height={260} viewBox="0 0 200 260">
            <rect
              width={200}
              height={260}
              rx={18}
              fill="#1d4ed8"
              stroke={C}
              strokeWidth={6}
            />
            {[0, 1, 2, 3, 4].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}${c}`}
                  x={12 + c * 44}
                  y={12 + r * 44}
                  width={40}
                  height={40}
                  fill="#3b82f6"
                  stroke="#bfdbfe"
                  strokeWidth={2}
                />
              )),
            )}
            <rect
              x={14}
              y={214}
              width={172}
              height={30}
              rx={8}
              fill="rgba(5,8,16,0.75)"
            />
            <text
              x={100}
              y={235}
              textAnchor="middle"
              fontSize={14}
              fontWeight={900}
              fontFamily="Arial"
              fill="#fff"
            >
              azulejo azul (banheiro)
            </text>
          </svg>
        </>
      )}
    </div>
    <div
      style={{
        marginTop: 10,
        fontFamily: "Arial Black, Arial",
        fontWeight: 900,
        fontSize: 24,
        color: "#facc15",
      }}
    >
      {comparar ? "A cortina vermelha é a do camarim" : "Postado às 23h22"}
    </div>
  </Moldura>
);

const Mao: React.FC<{ quebrada?: boolean }> = ({ quebrada = true }) => (
  <svg width={190} height={240} viewBox="0 0 190 240">
    <path
      d="M40 240 V150 Q30 110 44 100 Q56 92 62 110 V60 Q62 44 76 44 Q90 44 90 60 V88 V40 Q90 24 104 24 Q118 24 118 40 V88 V50 Q118 34 132 34 Q146 34 146 50 V110 Q164 100 164 130 V240Z"
      fill="#f2c9a0"
      stroke={C}
      strokeWidth={6}
      strokeLinejoin="round"
    />
    <rect
      x={122}
      y={36}
      width={24}
      height={26}
      rx={8}
      fill="#cbd5e1"
      stroke={C}
      strokeWidth={4}
    />
    {quebrada && (
      <path
        d="M122 36 h24 v-4 l-6 -8 l-5 8 l-5 -7 l-8 11Z"
        fill="#cbd5e1"
        stroke={C}
        strokeWidth={3}
      />
    )}
    {quebrada && <path d="M132 24 l4 8 l-9 2Z" fill="#10224a" />}
    <path d="M150 18 l3 -9 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3Z" fill="#fff" />
    {[68, 96].map((x, i) => (
      <rect
        key={x}
        x={x - 9}
        y={i ? 28 : 48}
        width={18}
        height={20}
        rx={7}
        fill="#f2c9a0"
        stroke={C}
        strokeWidth={3}
      />
    ))}
  </svg>
);

export const CartaoMaoUnha: React.FC<{
  largura?: number;
  comparar?: boolean;
}> = ({ largura = 440, comparar = false }) => (
  <Moldura
    largura={comparar ? largura + 200 : largura}
    titulo={comparar ? "A falha bate com a lasca" : "Mão da Larissa"}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        justifyContent: "center",
      }}
    >
      <Mao />
      {comparar && (
        <>
          <div
            style={{
              fontFamily: "Arial Black, Arial",
              fontSize: 54,
              fontWeight: 900,
              color: "#22c55e",
            }}
          >
            =
          </div>
          <svg width={190} height={190} viewBox="0 0 190 190">
            <ellipse
              cx={95}
              cy={120}
              rx={78}
              ry={28}
              fill="#334155"
              stroke={C}
              strokeWidth={7}
            />
            <ellipse
              cx={95}
              cy={110}
              rx={72}
              ry={22}
              fill="#475569"
              stroke={C}
              strokeWidth={5}
            />
            <path
              d="M112 96 l22 -8 l-6 20 l-14 4Z"
              fill="#cbd5e1"
              stroke={C}
              strokeWidth={3}
            />
            <path
              d="M150 50 l3 -9 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3Z"
              fill="#fff"
            />
            <text
              x={95}
              y={170}
              textAnchor="middle"
              fontSize={20}
              fontWeight={900}
              fontFamily="Arial Black, Arial"
              fill="#fff"
            >
              tampa
            </text>
          </svg>
        </>
      )}
    </div>
    <div
      style={{
        marginTop: 8,
        fontFamily: "Arial Black, Arial",
        fontWeight: 900,
        fontSize: 24,
        color: "#facc15",
      }}
    >
      Dedo anelar · esmalte glitter prata
    </div>
  </Moldura>
);

export const CartaoPlanilha: React.FC<{ largura?: number }> = ({
  largura = 560,
}) => (
  <Moldura largura={largura} titulo="Comissão de formatura">
    <div style={{ display: "flex", gap: 14 }}>
      {[
        { t: "PLANILHA", v: "R$ 20.000", c: "#16a34a" },
        { t: "EXTRATO DO BANCO", v: "R$ 7.200", c: "#dc2626" },
      ].map((p) => (
        <div
          key={p.t}
          style={{
            flex: 1,
            background: "#e8eefc",
            border: "5px solid #050810",
            borderRadius: 12,
            padding: 12,
            color: "#050810",
          }}
        >
          <div
            style={{
              fontFamily: "Arial Black, Arial",
              fontWeight: 900,
              fontSize: 18,
            }}
          >
            {p.t}
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                height: 10,
                background: "#94a3b8",
                borderRadius: 4,
                marginTop: 8,
                width: `${90 - i * 14}%`,
              }}
            />
          ))}
          <div
            style={{
              marginTop: 14,
              fontFamily: "Arial Black, Arial",
              fontWeight: 900,
              fontSize: 32,
              color: p.c,
            }}
          >
            {p.v}
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: 12,
        textAlign: "center",
        fontFamily: "Arial Black, Arial",
        fontWeight: 900,
        fontSize: 34,
        color: "#facc15",
      }}
    >
      Faltam R$ 12.800
    </div>
  </Moldura>
);

export const CartaoLaboratorio: React.FC<{ largura?: number }> = ({
  largura = 440,
}) => (
  <Moldura largura={largura} titulo="Laboratório · Laudo">
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <svg width={150} height={230} viewBox="0 0 150 230">
        <path
          d="M50 20 h50 v70 l36 100 a14 14 0 0 1 -13 20 h-96 a14 14 0 0 1 -13 -20 l36 -100Z"
          fill="rgba(186,230,253,0.35)"
          stroke={C}
          strokeWidth={7}
          strokeLinejoin="round"
        />
        <path
          d="M30 150 h90 l18 52 a14 14 0 0 1 -13 14 h-100 a14 14 0 0 1 -13 -14Z"
          fill="#22c55e"
          stroke={C}
          strokeWidth={5}
        />
        <circle cx={60} cy={176} r={6} fill="#bbf7d0" />
        <circle cx={90} cy={190} r={8} fill="#bbf7d0" />
        <rect
          x={42}
          y={12}
          width={66}
          height={14}
          rx={5}
          fill="#334155"
          stroke={C}
          strokeWidth={5}
        />
      </svg>
      <div>
        <div
          style={{
            fontFamily: "Arial Black, Arial",
            fontWeight: 900,
            fontSize: 30,
            lineHeight: 1.15,
          }}
        >
          Resto da garrafinha
        </div>
        <div
          style={{
            marginTop: 10,
            display: "inline-block",
            background: "#dc2626",
            border: "5px solid #050810",
            borderRadius: 10,
            padding: "6px 14px",
            fontFamily: "Arial Black, Arial",
            fontWeight: 900,
            fontSize: 28,
          }}
        >
          SUBSTÂNCIA TÓXICA
        </div>
      </div>
    </div>
  </Moldura>
);
