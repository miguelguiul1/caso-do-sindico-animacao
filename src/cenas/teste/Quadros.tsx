import { AbsoluteFill } from "remotion";
import { Academia } from "../../cenarios/Academia";
import { Portaria } from "../../cenarios/Portaria";
import { CartaoCelular } from "../../componentes/CartaoCelular";
import { RegistroAcesso } from "../../componentes/RegistroAcesso";
import { CartaoPistas } from "../../componentes/CartaoPistas";

const Centro: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: "#0b1530", alignItems: "center", justifyContent: "center", gap: 30 }}>
    {children}
  </AbsoluteFill>
);

export const QuadroAcademia = () => <Academia />;
export const QuadroPortaria = () => <Portaria />;
export const QuadroCelular = () => <Centro><CartaoCelular /></Centro>;
export const QuadroRegistro = () => <Centro><RegistroAcesso /></Centro>;
export const QuadroPistas = () => (
  <Centro>
    <CartaoPistas numero={1} largura={300} />
    <CartaoPistas numero={2} largura={300} />
    <CartaoPistas numero={3} largura={300} />
    <CartaoPistas numero={4} largura={300} />
  </Centro>
);
