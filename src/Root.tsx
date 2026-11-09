import { Composition, Still } from "remotion";
import { CasoDoSindico, DURACAO_TOTAL } from "./CasoDoSindico";
import {
  QuadroAcademia,
  QuadroPortaria,
  QuadroCelular,
  QuadroRegistro,
  QuadroPistas,
} from "./cenas/teste/Quadros";

export const LARGURA = 720;
export const ALTURA = 1280;
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
        component={QuadroAcademia}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Portaria"
        component={QuadroPortaria}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Celular"
        component={QuadroCelular}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Registro"
        component={QuadroRegistro}
        width={LARGURA}
        height={ALTURA}
      />
      <Still
        id="Teste-Pistas"
        component={QuadroPistas}
        width={LARGURA}
        height={ALTURA}
      />
    </>
  );
};
