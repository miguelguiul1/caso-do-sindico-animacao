import { AbsoluteFill } from "remotion";
import { SalaoDeFestas } from "../cenarios/SalaoDeFestas";
import { Personagem } from "../personagens/Personagem";
import { Legenda } from "../componentes/Legenda";

export const Cena1Abertura: React.FC = () => (
  <AbsoluteFill>
    <SalaoDeFestas />
    <div style={{ position: "absolute", left: 260, top: 560 }}>
      <Personagem pose="parado" escala={1.5} cor="#3b82f6" />
    </div>
    <Legenda texto="Era noite de festa no prédio..." destaque={2} />
  </AbsoluteFill>
);
