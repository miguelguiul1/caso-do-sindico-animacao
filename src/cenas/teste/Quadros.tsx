import { AbsoluteFill } from "remotion";
import { Academia } from "../../cenarios/Academia";
import { Portaria } from "../../cenarios/Portaria";
import { Camarim } from "../../cenarios/Camarim";
import { CamarimDasMeninas } from "../../cenarios/CamarimDasMeninas";
import { PistaDeDanca } from "../../cenarios/PistaDeDanca";
import { Corredor } from "../../cenarios/Corredor";
import { Estacionamento } from "../../cenarios/Estacionamento";
import { Fachada } from "../../cenarios/Fachada";
import { CartaoPistas } from "../../componentes/CartaoPistas";
import {
  CartaoCamera,
  CartaoLaboratorio,
  CartaoLive,
  CartaoMaoUnha,
  CartaoPlanilha,
  CartaoStory,
  CartaoTikTok,
} from "../../componentes/CartoesEvidencias";
import {
  CartaoContagem,
  CartaoEnvelopes,
  CartaoHorario,
  CartaoPainel,
  CartaoPerguntas,
  CartaoRelogio,
  CartaoTrofeu,
} from "../../componentes/CartoesTela";
import { Ator, AtorId } from "../../personagens/Elenco";
import { Pose } from "../../personagens/Personagem";

const Grade: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      background: "#0b1530",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 16,
      padding: 20,
    }}
  >
    {children}
  </AbsoluteFill>
);

export const QuadroAcademia = () => <Academia />;
export const QuadroPortaria = () => <Portaria />;
export const QuadroCamarim = () => <Camarim cabo />;
export const QuadroCamarimMeninas = () => <CamarimDasMeninas />;
export const QuadroPista = () => <PistaDeDanca claro relogio="22:30" />;
export const QuadroCorredor = () => <Corredor />;
export const QuadroEstacionamento = () => <Estacionamento />;
export const QuadroFachada = () => <Fachada />;

export const QuadroPistas = () => (
  <Grade>
    {([1, 2, 3, 4, 5, 6] as const).map((n) => (
      <CartaoPistas key={n} numero={n} largura={380} />
    ))}
  </Grade>
);

export const QuadroEvidencias = () => (
  <Grade>
    <CartaoCamera
      titulo="Câmera do corredor"
      nome="Gui"
      inicio="23h05"
      fim="23h38"
      largura={330}
    />
    <CartaoLive largura={330} />
    <CartaoTikTok largura={330} />
    <CartaoStory largura={330} />
    <CartaoMaoUnha largura={330} />
    <CartaoLaboratorio largura={330} />
  </Grade>
);

export const QuadroTelas = () => (
  <Grade>
    <CartaoPlanilha largura={460} />
    <CartaoHorario largura={300} />
    <CartaoRelogio largura={300} />
    <CartaoTrofeu largura={300} />
    <CartaoPainel largura={700} />
    <CartaoContagem largura={700} />
    <CartaoEnvelopes largura={700} />
    <CartaoPerguntas largura={560} />
  </Grade>
);

const POSES: Pose[] = [
  "parado",
  "apontando",
  "assustado",
  "nervoso",
  "examinando",
  "digitando",
  "mostrandoCelular",
  "chorando",
];
const IDS: AtorId[] = [
  "paulo",
  "matos",
  "bruno",
  "gui",
  "rafa",
  "duda",
  "jorge",
  "larissa",
];

export const QuadroElenco = () => (
  <AbsoluteFill
    style={{
      background: "#10224a",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
      padding: "0 10px 20px",
    }}
  >
    {IDS.map((id, i) => (
      <Ator key={id} quem={id} pose={POSES[i]} escala={0.6} />
    ))}
  </AbsoluteFill>
);

export const QuadroPoses = () => (
  <AbsoluteFill
    style={{
      background: "#10224a",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-end",
      padding: "0 10px 20px",
    }}
  >
    {POSES.map((p) => (
      <Ator key={p} quem="larissa" pose={p} escala={0.6} />
    ))}
    <div style={{ width: 280, height: 200 }}>
      <Ator quem="bruno" pose="caido" escala={0.6} sangue />
    </div>
  </AbsoluteFill>
);
