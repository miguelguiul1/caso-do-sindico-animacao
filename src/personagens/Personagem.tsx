import React from "react";
import { useCurrentFrame } from "remotion";

export type Pose =
  | "parado"
  | "andando"
  | "apontando"
  | "assustado"
  | "caido"
  | "nervoso"
  | "examinando"
  | "digitando"
  | "mostrandoCelular"
  | "chorando";

export type EstiloCabelo =
  | "curto"
  | "topete"
  | "longo"
  | "coque"
  | "careca"
  | "quepe";

export type Extra = "oculos" | "jaleco" | "distintivo" | "fone";

type Props = {
  pose?: Pose;
  cor?: string; // roupa
  calca?: string;
  pele?: string;
  cabelo?: { estilo: EstiloCabelo; cor: string };
  extras?: Extra[];
  unhaQuebrada?: boolean;
  sangue?: boolean;
  escala?: number;
};

const CONTORNO = "#0b0f1a";
const LARGURA = 6;

const Membro: React.FC<{
  x: number;
  y: number;
  comprimento: number;
  angulo: number;
  cor: string;
  mao?: string;
  unha?: boolean;
}> = ({ x, y, comprimento, angulo, cor, mao, unha }) => (
  <g transform={`rotate(${angulo} ${x} ${y})`}>
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + comprimento}
      stroke={CONTORNO}
      strokeWidth={22}
      strokeLinecap="round"
    />
    <line
      x1={x}
      y1={y}
      x2={x}
      y2={y + comprimento}
      stroke={cor}
      strokeWidth={22 - LARGURA}
      strokeLinecap="round"
    />
    {mao && (
      <>
        <circle
          cx={x}
          cy={y + comprimento}
          r={13}
          fill={mao}
          stroke={CONTORNO}
          strokeWidth={4}
        />
        {unha && (
          <>
            <rect
              x={x - 6}
              y={y + comprimento + 6}
              width={12}
              height={9}
              rx={2}
              fill="#cbd5e1"
              stroke={CONTORNO}
              strokeWidth={2}
            />
            <path
              d={`M${x - 1} ${y + comprimento + 6} l3 4 l-4 1Z`}
              fill={mao}
            />
            <circle cx={x + 8} cy={y + comprimento + 12} r={2.5} fill="#fff" />
          </>
        )}
      </>
    )}
  </g>
);

// Braço dobrado: ombro -> cotovelo -> mão
const BracoDobrado: React.FC<{
  pontos: [number, number][];
  cor: string;
  mao: string;
}> = ({ pontos, cor, mao }) => {
  const d = pontos.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join(" ");
  const fim = pontos[pontos.length - 1];
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={CONTORNO}
        strokeWidth={22}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={cor}
        strokeWidth={22 - LARGURA}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={fim[0]}
        cy={fim[1]}
        r={12}
        fill={mao}
        stroke={CONTORNO}
        strokeWidth={4}
      />
    </g>
  );
};

const CabeloAtras: React.FC<{ estilo?: EstiloCabelo; cor: string }> = ({
  estilo,
  cor,
}) =>
  estilo === "longo" ? (
    <path
      d="M55 62 Q48 135 70 146 L130 146 Q152 135 145 62Z"
      fill={cor}
      stroke={CONTORNO}
      strokeWidth={LARGURA}
    />
  ) : null;

const CabeloFrente: React.FC<{ estilo?: EstiloCabelo; cor: string }> = ({
  estilo,
  cor,
}) => {
  if (!estilo || estilo === "careca") return null;
  const base =
    "M58 70 Q56 28 100 28 Q144 28 142 70 Q124 50 100 50 Q76 50 58 70Z";
  return (
    <g
      fill={cor}
      stroke={CONTORNO}
      strokeWidth={LARGURA - 2}
      strokeLinejoin="round"
    >
      {estilo === "quepe" ? (
        <>
          <path d="M56 54 Q100 6 144 54Z" />
          <rect x={52} y={50} width={96} height={11} rx={5} />
          <circle cx={100} cy={36} r={6} fill="#facc15" strokeWidth={2} />
        </>
      ) : (
        <path d={base} />
      )}
      {estilo === "topete" && <ellipse cx={116} cy={30} rx={26} ry={15} />}
      {estilo === "coque" && <circle cx={100} cy={20} r={16} />}
      {estilo === "longo" && <path d="M60 66 Q70 46 100 46 Q70 54 66 96Z" />}
    </g>
  );
};

export const Personagem: React.FC<Props> = ({
  pose = "parado",
  cor = "#3b82f6",
  calca = "#1e293b",
  pele = "#f2c9a0",
  cabelo,
  extras = [],
  unhaQuebrada = false,
  sangue = false,
  escala = 1,
}) => {
  const frame = useCurrentFrame();
  const t = pose === "andando" ? Math.sin((frame / 12) * Math.PI) : 0;
  const idle = pose === "parado" ? Math.sin(frame / 18) * 2 : 0;
  const balanco = t * 28 + idle;
  const assustado = pose === "assustado";
  const caido = pose === "caido";
  const nervoso = pose === "nervoso";
  const examinando = pose === "examinando";
  const digitando = pose === "digitando";
  const celular = pose === "mostrandoCelular";
  const chorando = pose === "chorando";
  const tremorX = nervoso
    ? Math.sin(frame * 2.3) * 2.5
    : chorando
      ? Math.sin(frame * 1.4) * 2
      : 0;
  const tremor = assustado ? Math.sin(frame * 1.8) * 3 : 0;
  const dobrados = digitando || chorando;

  const bracoTras = assustado
    ? 150 + tremor
    : pose === "apontando"
      ? 10
      : caido
        ? 25
        : examinando
          ? 22
          : celular
            ? 8
            : nervoso
              ? 25 + Math.sin(frame * 2.9) * 4
              : balanco;
  const bracoFrente = assustado
    ? -150 - tremor
    : pose === "apontando"
      ? -90
      : caido
        ? -30
        : examinando
          ? -38
          : celular
            ? -85
            : nervoso
              ? -25 - Math.sin(frame * 2.9 + 1) * 4
              : -balanco;

  const pernaTras = examinando ? 55 : -balanco;
  const pernaFrente = examinando ? -55 : balanco;
  const descida = examinando ? 62 : 0;
  const olhosFechados = caido || chorando;
  const cabeca = digitando ? 4 : 0;

  const transform = caido
    ? "rotate(90 100 370)"
    : `translate(${tremorX} ${descida})`;

  const tap = Math.sin(frame * 1.6) * 2;
  const lagrima = (frame * 3) % 40;

  return (
    <svg
      width={200 * escala}
      height={400 * escala}
      viewBox="0 0 200 400"
      style={{ overflow: "visible" }}
    >
      <g transform={transform}>
        <CabeloAtras estilo={cabelo?.estilo} cor={cabelo?.cor ?? "#222"} />
        {/* poça de sangue (só caído): fica do lado que encosta no chão */}
        {caido && sangue && (
          <g fill="#b91c1c" stroke={CONTORNO} strokeWidth={3}>
            <ellipse cx={142} cy={92} rx={34} ry={16} />
            <ellipse cx={158} cy={110} rx={12} ry={7} />
          </g>
        )}
        {/* braço de trás */}
        {!dobrados && (
          <Membro
            x={100}
            y={140}
            comprimento={90}
            angulo={bracoTras}
            cor={pele}
            mao={pele}
          />
        )}
        {/* pernas */}
        <Membro
          x={100}
          y={250}
          comprimento={120}
          angulo={pernaTras}
          cor={calca}
        />
        <Membro
          x={100}
          y={250}
          comprimento={120}
          angulo={pernaFrente}
          cor={calca}
        />
        {/* corpo */}
        <rect
          x={65}
          y={120}
          width={70}
          height={140}
          rx={22}
          fill={cor}
          stroke={CONTORNO}
          strokeWidth={LARGURA}
        />
        {extras.includes("jaleco") && (
          <g
            fill="none"
            stroke={CONTORNO}
            strokeWidth={4}
            strokeLinejoin="round"
          >
            <path d="M86 122 L100 172 L114 122" />
            <rect x={108} y={200} width={20} height={24} rx={3} />
          </g>
        )}
        {extras.includes("distintivo") && (
          <path
            d="M82 152 l3 7 7 1 -5 5 2 7 -7 -4 -7 4 2 -7 -5 -5 7 -1Z"
            fill="#facc15"
            stroke={CONTORNO}
            strokeWidth={2}
          />
        )}
        {/* braço da frente */}
        {!dobrados && (
          <Membro
            x={100}
            y={140}
            comprimento={90}
            angulo={bracoFrente}
            cor={pele}
            mao={pele}
            unha={unhaQuebrada}
          />
        )}
        {/* braços dobrados */}
        {digitando && (
          <>
            <BracoDobrado
              pontos={[
                [100, 142],
                [62, 195],
                [90, 214],
              ]}
              cor={pele}
              mao={pele}
            />
            <rect
              x={84}
              y={192 + tap / 2}
              width={32}
              height={46}
              rx={5}
              fill="#0f172a"
              stroke={CONTORNO}
              strokeWidth={4}
            />
            <rect
              x={89}
              y={198 + tap / 2}
              width={22}
              height={30}
              rx={2}
              fill="#60a5fa"
            />
            <BracoDobrado
              pontos={[
                [100, 142],
                [138, 195],
                [110, 214 + tap],
              ]}
              cor={pele}
              mao={pele}
            />
          </>
        )}
        {chorando && (
          <>
            <BracoDobrado
              pontos={[
                [100, 142],
                [66, 158],
                [84, 96],
              ]}
              cor={pele}
              mao={pele}
            />
            <BracoDobrado
              pontos={[
                [100, 142],
                [134, 158],
                [116, 96],
              ]}
              cor={pele}
              mao={pele}
            />
          </>
        )}
        {/* cabeça */}
        <g transform={`rotate(${cabeca} 100 118)`}>
          <circle
            cx={100}
            cy={75}
            r={42}
            fill={pele}
            stroke={CONTORNO}
            strokeWidth={LARGURA}
          />
          <CabeloFrente estilo={cabelo?.estilo} cor={cabelo?.cor ?? "#222"} />
          {extras.includes("fone") && (
            <g
              fill="none"
              stroke={CONTORNO}
              strokeWidth={7}
              strokeLinecap="round"
            >
              <path d="M58 72 Q58 22 100 22 Q142 22 142 72" />
              <rect
                x={50}
                y={62}
                width={14}
                height={28}
                rx={5}
                fill="#334155"
                strokeWidth={4}
              />
              <rect
                x={136}
                y={62}
                width={14}
                height={28}
                rx={5}
                fill="#334155"
                strokeWidth={4}
              />
            </g>
          )}
          {caido ? (
            <>
              {[86, 114].map((x) => (
                <g
                  key={x}
                  stroke={CONTORNO}
                  strokeWidth={4}
                  strokeLinecap="round"
                >
                  <line x1={x - 6} y1={66} x2={x + 6} y2={78} />
                  <line x1={x + 6} y1={66} x2={x - 6} y2={78} />
                </g>
              ))}
              <path
                d="M90 98 Q100 92 110 98"
                fill="none"
                stroke={CONTORNO}
                strokeWidth={4}
                strokeLinecap="round"
              />
              {sangue && (
                <path
                  d="M122 44 Q132 54 126 66 Q122 58 118 56Z"
                  fill="#b91c1c"
                  stroke={CONTORNO}
                  strokeWidth={2}
                />
              )}
            </>
          ) : chorando ? (
            <>
              {[86, 114].map((x) => (
                <path
                  key={x}
                  d={`M${x - 7} 72 Q${x} 79 ${x + 7} 72`}
                  fill="none"
                  stroke={CONTORNO}
                  strokeWidth={4}
                  strokeLinecap="round"
                />
              ))}
              <path
                d="M88 102 Q100 92 112 102"
                fill="none"
                stroke={CONTORNO}
                strokeWidth={4}
                strokeLinecap="round"
              />
              {[80, 120].map((x, i) => (
                <path
                  key={x}
                  d={`M${x} ${80 + ((lagrima + i * 15) % 40)} q5 8 0 12 q-5 -4 0 -12Z`}
                  fill="#7dd3fc"
                  stroke={CONTORNO}
                  strokeWidth={2}
                />
              ))}
            </>
          ) : nervoso ? (
            <>
              <circle
                cx={86}
                cy={72}
                r={8}
                fill="#fff"
                stroke={CONTORNO}
                strokeWidth={3}
              />
              <circle
                cx={114}
                cy={72}
                r={8}
                fill="#fff"
                stroke={CONTORNO}
                strokeWidth={3}
              />
              <circle cx={83} cy={72} r={3} fill={CONTORNO} />
              <circle cx={111} cy={72} r={3} fill={CONTORNO} />
              <path
                d="M88 98 Q94 94 100 98 Q106 102 112 98"
                fill="none"
                stroke={CONTORNO}
                strokeWidth={4}
                strokeLinecap="round"
              />
              <path
                d="M142 48 Q150 62 142 68 Q134 62 142 48Z"
                fill="#7dd3fc"
                stroke={CONTORNO}
                strokeWidth={3}
              />
            </>
          ) : assustado ? (
            <>
              <circle
                cx={86}
                cy={70}
                r={9}
                fill="#fff"
                stroke={CONTORNO}
                strokeWidth={3}
              />
              <circle
                cx={114}
                cy={70}
                r={9}
                fill="#fff"
                stroke={CONTORNO}
                strokeWidth={3}
              />
              <circle cx={86} cy={70} r={3} fill={CONTORNO} />
              <circle cx={114} cy={70} r={3} fill={CONTORNO} />
              <ellipse cx={100} cy={96} rx={9} ry={12} fill={CONTORNO} />
            </>
          ) : (
            <>
              <circle
                cx={86}
                cy={72 + (digitando ? 3 : 0)}
                r={5}
                fill={CONTORNO}
              />
              <circle
                cx={114}
                cy={72 + (digitando ? 3 : 0)}
                r={5}
                fill={CONTORNO}
              />
              {examinando && (
                <path
                  d="M90 98 Q100 94 110 98"
                  fill="none"
                  stroke={CONTORNO}
                  strokeWidth={4}
                  strokeLinecap="round"
                />
              )}
            </>
          )}
          {extras.includes("oculos") && !olhosFechados && (
            <g fill="none" stroke={CONTORNO} strokeWidth={4}>
              <circle cx={86} cy={72} r={12} />
              <circle cx={114} cy={72} r={12} />
              <line x1={98} y1={72} x2={102} y2={72} />
            </g>
          )}
        </g>
        {/* lupa (examinando) */}
        {examinando && (
          <g transform="translate(0 0)">
            <line
              x1={152}
              y1={218}
              x2={170}
              y2={248}
              stroke={CONTORNO}
              strokeWidth={7}
              strokeLinecap="round"
            />
            <circle
              cx={150}
              cy={214}
              r={18}
              fill="rgba(186,230,253,0.55)"
              stroke={CONTORNO}
              strokeWidth={5}
            />
          </g>
        )}
        {/* celular erguido (mostrando) */}
        {celular && (
          <g>
            <rect
              x={176}
              y={100}
              width={36}
              height={62}
              rx={6}
              fill="#0f172a"
              stroke={CONTORNO}
              strokeWidth={4}
            />
            <rect
              x={181}
              y={107}
              width={26}
              height={44}
              rx={2}
              fill="#60a5fa"
            />
          </g>
        )}
      </g>
      {/* destaque da unha quebrada */}
      {unhaQuebrada && !caido && (
        <g transform="translate(150 292)">
          <circle r={34} fill="#10224a" stroke={CONTORNO} strokeWidth={5} />
          <rect
            x={-12}
            y={-8}
            width={24}
            height={42}
            rx={11}
            fill={pele}
            stroke={CONTORNO}
            strokeWidth={3}
          />
          <path
            d="M-10 -8 h20 v-3 l-5 -6 l-4 6 l-3 -5 l-4 7Z"
            fill="#cbd5e1"
            stroke={CONTORNO}
            strokeWidth={2.5}
          />
          <path d="M-2 -17 l3 5 l-6 1Z" fill="#10224a" />
          <path
            d="M-22 -14 l3 -6 l3 6 l-3 6Z M16 -22 l2 -5 l2 5 l-2 5Z"
            fill="#fff"
          />
        </g>
      )}
    </svg>
  );
};
