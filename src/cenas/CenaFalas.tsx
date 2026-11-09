import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Personagem, Pose } from "../personagens/Personagem";
import { Legenda } from "../componentes/Legenda";

export type Fala = {
  texto: string;
  frames?: number; // padrão: 4s
  pose?: Pose;
  cartao?: React.ReactNode; // aparece sobre a cena
  cartaoInicio?: number; // frame (dentro da fala) em que o cartão entra
  cartaoFrames?: number;
};

type Props = {
  cenario: React.ReactNode;
  falas: Fala[];
  personagem?: {
    cor?: string;
    pele?: string;
    x?: number;
    escala?: number;
  } | null;
  extra?: React.ReactNode; // adereços fixos da cena
};

export const FPS_FALA = 30;
export const duracaoFala = (f: Fala) => f.frames ?? 4 * FPS_FALA;
export const duracaoCena = (falas: Fala[]) =>
  falas.reduce((s, f) => s + duracaoFala(f), 0);

export const CenaFalas: React.FC<Props> = ({
  cenario,
  falas,
  personagem,
  extra,
}) => {
  let inicio = 0;
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // zoom lento no cenário (1.00 -> 1.06) e fade curto de entrada/saída
  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.06], {
    extrapolateRight: "clamp",
  });
  const F = 8;
  const opacidade = interpolate(
    frame,
    [0, F, durationInFrames - F, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <AbsoluteFill style={{ background: "#050810" }}>
      <AbsoluteFill style={{ opacity: opacidade }}>
        <AbsoluteFill style={{ transform: `scale(${zoom})` }}>
          {cenario}
        </AbsoluteFill>
        {extra}
        {falas.map((f, i) => {
          const dur = duracaoFala(f);
          const de = inicio;
          inicio += dur;
          return (
            <Sequence key={i} from={de} durationInFrames={dur}>
              {personagem && (
                <div
                  style={{
                    position: "absolute",
                    left: personagem.x ?? 260,
                    top: 560,
                  }}
                >
                  <Personagem
                    pose={f.pose ?? "parado"}
                    escala={personagem.escala ?? 1.5}
                    cor={personagem.cor}
                    pele={personagem.pele}
                  />
                </div>
              )}
              {f.cartao && (
                <Sequence
                  from={f.cartaoInicio ?? 30}
                  durationInFrames={f.cartaoFrames ?? 90}
                >
                  <AbsoluteFill
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      paddingBottom: 260,
                    }}
                  >
                    {f.cartao}
                  </AbsoluteFill>
                </Sequence>
              )}
              <Legenda texto={f.texto} />
            </Sequence>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
