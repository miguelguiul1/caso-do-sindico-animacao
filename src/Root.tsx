import { Composition, Still } from "remotion";
import { CasoDoSindico, DURACAO_TOTAL } from "./CasoDoSindico";
import * as Q from "./cenas/teste/Quadros";

export const LARGURA = 1280;
export const ALTURA = 720;
export const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CasoDoSindico"
        component={CasoDoSindico}
        durationInFrames={DURACAO_TOTAL}
        fps={FPS}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Academia"
        component={Q.QuadroAcademia}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Portaria"
        component={Q.QuadroPortaria}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Camarim"
        component={Q.QuadroCamarim}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-CamarimMeninas"
        component={Q.QuadroCamarimMeninas}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Pista"
        component={Q.QuadroPista}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Corredor"
        component={Q.QuadroCorredor}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Estacionamento"
        component={Q.QuadroEstacionamento}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Fachada"
        component={Q.QuadroFachada}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Pistas"
        component={Q.QuadroPistas}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Evidencias"
        component={Q.QuadroEvidencias}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Telas"
        component={Q.QuadroTelas}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Elenco"
        component={Q.QuadroElenco}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Poses"
        component={Q.QuadroPoses}
        width={LARGURA}
        height={ALTURA}
      />
    </>
  );
};
