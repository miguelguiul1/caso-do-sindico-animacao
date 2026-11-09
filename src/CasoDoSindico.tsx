import { AbsoluteFill, Series } from "remotion";
import { CenaFalas, Fala, duracaoCena } from "./cenas/CenaFalas";
import { Votacao } from "./cenas/Votacao";
import { SalaoDeFestas } from "./cenarios/SalaoDeFestas";
import { Academia } from "./cenarios/Academia";
import { Portaria } from "./cenarios/Portaria";
import { CartaoCelular } from "./componentes/CartaoCelular";
import { RegistroAcesso } from "./componentes/RegistroAcesso";
import { CartaoPistas } from "./componentes/CartaoPistas";

const S = 30; // fps

// Cena 1: Otávio caído no salão, com fita amarela
const cena1: Fala[] = [
  {
    texto:
      "Sexta-feira, 17h05. Condomínio Terrara. O síndico Otávio Mendes é encontrado morto no salão de festas.",
    frames: 5 * S,
    pose: "caido",
  },
  {
    texto:
      "Veneno no suco. Três pessoas tinham motivo. Uma delas está mentindo.",
    pose: "caido",
  },
];
const Fita = () => (
  <AbsoluteFill>
    <svg width={720} height={1280} viewBox="0 0 720 1280">
      <g transform="rotate(-8 360 760)">
        <rect
          x={-40}
          y={720}
          width={800}
          height={46}
          fill="#facc15"
          stroke="#050810"
          strokeWidth={6}
        />
        <text
          x={360}
          y={754}
          textAnchor="middle"
          fontSize={26}
          fontWeight={900}
          fontFamily="Arial Black, Arial"
          fill="#050810"
          letterSpacing={6}
        >
          ISOLADO · ISOLADO · ISOLADO · ISOLADO
        </text>
      </g>
    </svg>
  </AbsoluteFill>
);

const cena2: Fala[] = [
  {
    texto:
      "Eu preciso falar das contas agora. Traz os comprovantes, eu espero.",
  },
];

const cena3: Fala[] = [
  {
    texto:
      "Sou o Ananias. Ele me multou três vezes e a gente brigou semana passada. Mas eu não matei ninguém.",
    frames: 5 * S,
  },
  {
    texto:
      "Entrei na academia às 15h50 e fiquei até 16h55. Não tinha mais ninguém lá.",
    cartao: <RegistroAcesso />,
    cartaoInicio: 15,
    cartaoFrames: 3 * S,
  },
  {
    texto:
      "Na saída vi a porta do salão aberta e o Otávio no chão. Liguei pra portaria.",
    pose: "assustado",
  },
];

const cena4: Fala[] = [
  {
    texto: "Sou o Marcos, porteiro. Não saí da portaria em nenhum momento.",
    pose: "nervoso",
  },
  {
    texto:
      "A câmera travou uns 30 minutos, isso acontece sempre. E a chave do salão fica no gancho, qualquer um pega.",
    frames: 5 * S,
    pose: "nervoso",
  },
  {
    texto: "Ele ia me demitir na segunda, mas eu nunca faria isso.",
    pose: "nervoso",
  },
];

const cena5: Fala[] = [
  { texto: "Sou o Toni, tesoureiro. O Otávio era meu amigo." },
  {
    texto: "Eu estava na academia, treinei das 15h30 às 17h. Tenho até foto.",
    cartao: <CartaoCelular />,
    cartaoInicio: 20,
    cartaoFrames: 3 * S,
  },
  {
    texto:
      "A gente falou das contas semana passada, mas estava tudo certo. Não tenho motivo nenhum.",
    frames: 5 * S,
  },
];
const Pasta = () => (
  <AbsoluteFill>
    <svg width={720} height={1280} viewBox="0 0 720 1280">
      <rect
        x={90}
        y={930}
        width={150}
        height={110}
        rx={10}
        fill="#78350f"
        stroke="#050810"
        strokeWidth={8}
      />
      <rect
        x={140}
        y={915}
        width={50}
        height={22}
        rx={6}
        fill="none"
        stroke="#050810"
        strokeWidth={8}
      />
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${130 + i * 60} 880)`}>
          <rect
            width={46}
            height={60}
            rx={4}
            fill="#f8fafc"
            stroke="#050810"
            strokeWidth={5}
          />
          <text
            x={23}
            y={30}
            textAnchor="middle"
            fontSize={9}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill="#22c55e"
          >
            Doce
          </text>
          <text
            x={23}
            y={44}
            textAnchor="middle"
            fontSize={9}
            fontWeight={900}
            fontFamily="Arial Black, Arial"
            fill="#22c55e"
          >
            Leve
          </text>
        </g>
      ))}
    </svg>
  </AbsoluteFill>
);

const cena6: Fala[] = [
  {
    texto:
      "A perícia encontrou: horário da morte, entre 16h15 e 16h45. Causa: envenenamento.",
    frames: 8 * S,
    cartao: <PistasSequencia />,
    cartaoInicio: 0,
    cartaoFrames: 8 * S,
  },
  {
    texto:
      "Três suspeitos, três histórias. Quem matou Otávio Mendes? Comente A, B ou C.",
  },
];

// pistas 1 a 4, 2s cada
import { Sequence } from "remotion";
function PistasSequencia() {
  return (
    <>
      {([1, 2, 3, 4] as const).map((n, i) => (
        <Sequence
          key={n}
          from={i * 2 * S}
          durationInFrames={2 * S}
          layout="none"
        >
          <CartaoPistas numero={n} />
        </Sequence>
      ))}
    </>
  );
}

const VOTACAO = 5 * S;

export const DURACAO_TOTAL =
  duracaoCena(cena1) +
  duracaoCena(cena2) +
  duracaoCena(cena3) +
  duracaoCena(cena4) +
  duracaoCena(cena5) +
  duracaoCena(cena6) +
  VOTACAO;

export const CasoDoSindico: React.FC = () => (
  <AbsoluteFill>
    <Series>
      <Series.Sequence durationInFrames={duracaoCena(cena1)}>
        <CenaFalas
          cenario={<SalaoDeFestas />}
          falas={cena1}
          personagem={{ cor: "#7c3aed", x: 60, escala: 1.2 }}
          extra={<Fita />}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={duracaoCena(cena2)}>
        <CenaFalas
          cenario={<SalaoDeFestas />}
          falas={cena2}
          personagem={{ cor: "#7c3aed" }}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={duracaoCena(cena3)}>
        <CenaFalas
          cenario={<Academia />}
          falas={cena3}
          personagem={{ cor: "#ef4444" }}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={duracaoCena(cena4)}>
        <CenaFalas
          cenario={<Portaria />}
          falas={cena4}
          personagem={{ cor: "#16a34a" }}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={duracaoCena(cena5)}>
        <CenaFalas
          cenario={<SalaoDeFestas />}
          falas={cena5}
          personagem={{ cor: "#f59e0b", x: 330 }}
          extra={<Pasta />}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={duracaoCena(cena6)}>
        <CenaFalas
          cenario={<SalaoDeFestas />}
          falas={cena6}
          personagem={null}
        />
      </Series.Sequence>
      <Series.Sequence durationInFrames={VOTACAO}>
        <Votacao />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
