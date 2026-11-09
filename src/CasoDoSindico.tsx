import React from "react";
import { AbsoluteFill, Series } from "remotion";
import {
  CenaFalas,
  AtorNaCena,
  CartaoNaFala,
  Fala,
  duracaoCena,
} from "./cenas/CenaFalas";
import { FALAS, Quem } from "./falas";
import { Pose } from "./personagens/Personagem";
import { AtorId } from "./personagens/Elenco";
import { SalaoDeFestas } from "./cenarios/SalaoDeFestas";
import { Camarim } from "./cenarios/Camarim";
import { CamarimDasMeninas } from "./cenarios/CamarimDasMeninas";
import { PistaDeDanca } from "./cenarios/PistaDeDanca";
import { Corredor } from "./cenarios/Corredor";
import { Estacionamento } from "./cenarios/Estacionamento";
import { Fachada } from "./cenarios/Fachada";
import { Fita } from "./cenarios/Fita";
import { CartaoPistas, Plaquinhas } from "./componentes/CartaoPistas";
import {
  CartaoCamera,
  CartaoLaboratorio,
  CartaoLive,
  CartaoMaoUnha,
  CartaoPlanilha,
  CartaoStory,
  CartaoTikTok,
} from "./componentes/CartoesEvidencias";
import {
  CartaoContagem,
  CartaoEnvelopes,
  CartaoHorario,
  CartaoPainel,
  CartaoPerguntas,
  CartaoRelogio,
  CartaoTrofeu,
} from "./componentes/CartoesTela";

const S = 30;

const ROTULO: Record<Quem, string> = {
  Narrador: "Narrador",
  Delegado: "Delegado Paulo",
  Perito: "Dr. Matos",
  Bruno: "Bruno",
  Gui: "Gui",
  Rafa: "Rafa",
  Duda: "Duda",
  "Seu Jorge": "Seu Jorge",
  Larissa: "Larissa",
};

// Poses por fala (o resto fica "parado")
const POSES: Record<number, Partial<Record<AtorId, Pose>>> = {
  5: { paulo: "apontando" },
  8: { bruno: "apontando" },
  12: { matos: "examinando" },
  14: { matos: "examinando" },
  24: { matos: "examinando" },
  27: { gui: "chorando" },
  28: { gui: "chorando" },
  29: { gui: "chorando" },
  33: { rafa: "nervoso" },
  34: { rafa: "mostrandoCelular" },
  42: { jorge: "assustado" },
  43: { jorge: "nervoso" },
  44: { jorge: "apontando" },
  50: { larissa: "mostrandoCelular" },
  58: { matos: "digitando" },
  59: { matos: "digitando" },
  60: { matos: "digitando" },
  63: { paulo: "apontando" },
};

const pista = (numero: 1 | 2 | 3 | 4 | 5 | 6): CartaoNaFala => ({
  no: <CartaoPistas numero={numero} />,
});
const centro = (no: React.ReactNode): CartaoNaFala => ({ no, pos: "centro" });

// Cartões por fala
const CARTOES: Record<number, CartaoNaFala[]> = {
  3: [pista(1)],
  10: [centro(<CartaoPainel />)],
  16: [{ no: <CartaoHorario /> }],
  17: [centro(<Plaquinhas />)],
  18: [pista(1)],
  19: [pista(2)],
  20: [pista(3)],
  21: [pista(4)],
  22: [pista(5)],
  23: [pista(6)],
  25: [centro(<CartaoPainel />)],
  30: [
    {
      no: (
        <CartaoCamera
          titulo="Câmera do corredor"
          nome="Gui"
          inicio="23h05"
          fim="23h38"
        />
      ),
    },
  ],
  35: [{ no: <CartaoLive /> }],
  40: [{ no: <CartaoTikTok /> }],
  45: [
    {
      no: (
        <CartaoCamera
          titulo="Câmera do estacionamento"
          nome="Seu Jorge"
          inicio="23h10"
          fim="23h50"
          caixas
        />
      ),
    },
  ],
  50: [{ no: <CartaoStory /> }],
  51: [centro(<CartaoContagem />)],
  52: [centro(<CartaoPainel />)],
  53: [centro(<CartaoEnvelopes />)],
  54: [{ no: <CartaoStory /> }],
  55: [{ no: <CartaoStory comparar /> }],
  56: [{ no: <CartaoMaoUnha /> }],
  57: [{ no: <CartaoMaoUnha comparar /> }],
  58: [{ no: <CartaoPlanilha /> }],
  59: [{ no: <CartaoPlanilha /> }],
  60: [{ no: <CartaoLaboratorio /> }],
  61: [
    { ...pista(1), inicio: 20, frames: 130 },
    { ...pista(4), inicio: 160 },
  ],
  62: [{ no: <CartaoRelogio /> }],
  63: [centro(<CartaoPerguntas />)],
  64: [{ no: <CartaoTrofeu /> }],
  65: [centro(<CartaoPainel modo="resumo" />)],
};

const falasDe = (de: number, ate: number): Fala[] =>
  FALAS.filter((f) => f.n >= de && f.n <= ate).map((f) => ({
    texto: f.texto,
    quem: ROTULO[f.quem],
    poses: POSES[f.n],
    cartoes: CARTOES[f.n],
  }));

type Bloco = {
  cenario: React.ReactNode;
  extra?: React.ReactNode;
  elenco?: AtorNaCena[];
  de: number;
  ate: number;
};

const BRUNO_CAIDO = (x: number): AtorNaCena => ({
  id: "bruno",
  x,
  pose: "caido",
  sangue: true,
});

const BLOCOS: Bloco[] = [
  // Cena 1: abertura
  { cenario: <Fachada />, de: 1, ate: 1 },
  { cenario: <Camarim cabo />, elenco: [BRUNO_CAIDO(380)], de: 2, ate: 3 },
  {
    cenario: <Camarim />,
    extra: <Fita />,
    elenco: [{ id: "paulo", x: 500 }],
    de: 4,
    ate: 6,
  },
  // Cena 2: flashback
  {
    cenario: <PistaDeDanca claro relogio="22:30" />,
    elenco: [{ id: "bruno", x: 640 }],
    de: 7,
    ate: 10,
  },
  // Cena 3: o corpo
  {
    cenario: <Camarim cabo />,
    elenco: [
      { id: "paulo", x: 200 },
      { id: "matos", x: 350 },
      BRUNO_CAIDO(500),
    ],
    de: 11,
    ate: 16,
  },
  // Cena 4: as pistas
  {
    cenario: <Camarim cabo />,
    elenco: [
      { id: "paulo", x: 200 },
      { id: "matos", x: 350 },
      BRUNO_CAIDO(520),
    ],
    de: 17,
    ate: 25,
  },
  // Cena 5: Gui
  {
    cenario: <Corredor />,
    elenco: [
      { id: "paulo", x: 300 },
      { id: "gui", x: 560 },
    ],
    de: 26,
    ate: 30,
  },
  // Cena 6: Rafa
  {
    cenario: <PistaDeDanca />,
    elenco: [
      { id: "paulo", x: 300 },
      { id: "rafa", x: 560 },
    ],
    de: 31,
    ate: 35,
  },
  // Cena 7: Duda
  {
    cenario: <CamarimDasMeninas />,
    elenco: [
      { id: "paulo", x: 300 },
      { id: "duda", x: 560 },
    ],
    de: 36,
    ate: 40,
  },
  // Cena 8: seu Jorge
  {
    cenario: <Estacionamento />,
    elenco: [
      { id: "paulo", x: 300 },
      { id: "jorge", x: 560 },
    ],
    de: 41,
    ate: 45,
  },
  // Cena 9: Larissa
  {
    cenario: <SalaoDeFestas />,
    elenco: [
      { id: "paulo", x: 300 },
      { id: "larissa", x: 560 },
    ],
    de: 46,
    ate: 50,
  },
  // Cena 10: voto parcial
  { cenario: <SalaoDeFestas />, de: 51, ate: 53 },
  // Cena 11: novas evidências
  {
    cenario: <Camarim cabo />,
    elenco: [{ id: "matos", x: 330 }],
    de: 54,
    ate: 61,
  },
  // Cena 12: desafio final
  {
    cenario: <SalaoDeFestas />,
    elenco: [{ id: "paulo", x: 380 }],
    de: 62,
    ate: 64,
  },
  { cenario: <Fachada />, de: 65, ate: 65 },
  {
    cenario: <SalaoDeFestas />,
    elenco: [{ id: "paulo", x: 380 }],
    de: 66,
    ate: 66,
  },
];

const CENAS = BLOCOS.map((b) => ({ ...b, falas: falasDe(b.de, b.ate) }));

export const DURACAO_TOTAL = CENAS.reduce(
  (s, c) => s + duracaoCena(c.falas),
  0,
);
export const SEGUNDOS_TOTAL = DURACAO_TOTAL / S;

export const CasoDoSindico: React.FC = () => (
  <AbsoluteFill>
    <Series>
      {CENAS.map((c) => (
        <Series.Sequence key={c.de} durationInFrames={duracaoCena(c.falas)}>
          <CenaFalas
            cenario={c.cenario}
            extra={c.extra}
            elenco={c.elenco}
            falas={c.falas}
          />
        </Series.Sequence>
      ))}
    </Series>
  </AbsoluteFill>
);
