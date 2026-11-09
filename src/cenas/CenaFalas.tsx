import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Pose } from "../personagens/Personagem";
import { Ator, AtorId } from "../personagens/Elenco";
import { Legenda } from "../componentes/Legenda";

export type CartaoNaFala = {
  no: React.ReactNode;
  inicio?: number; // frame dentro da fala (padrão 20)
  frames?: number; // duração (padrão: até o fim da fala)
  pos?: "direita" | "centro";
};

export type Fala = {
  texto: string;
  quem?: string; // rótulo de quem fala
  frames?: number; // padrão: calculado pelo tamanho do texto
  poses?: Partial<Record<AtorId, Pose>>;
  cartoes?: CartaoNaFala[];
};

export type AtorNaCena = {
  id: AtorId;
  x: number; // centro, em px
  escala?: number;
  pose?: Pose; // pose padrão na cena
  sangue?: boolean;
};

type Props = {
  cenario: React.ReactNode;
  falas: Fala[];
  elenco?: AtorNaCena[];
  extra?: React.ReactNode; // adereços fixos
};

export const FPS_FALA = 30;
// Duração provisória: cresce com o tamanho do texto (até o áudio real chegar).
export const duracaoPorTexto = (texto: string) =>
  Math.round(FPS_FALA * Math.max(4.5, Math.min(11, 2.4 + texto.length / 15)));
export const duracaoFala = (f: Fala) => f.frames ?? duracaoPorTexto(f.texto);
export const duracaoCena = (falas: Fala[]) =>
  falas.reduce((s, f) => s + duracaoFala(f), 0);

const CHAO = 585; // pés dos personagens (acima da faixa da legenda)
const CHAO_CAIDO = 560;

export const CenaFalas: React.FC<Props> = ({
  cenario,
  falas,
  elenco = [],
  extra,
}) => {
  let inicio = 0;
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  // zoom lento no cenário e fade curto de entrada/saída
  const zoom = interpolate(frame, [0, durationInFrames], [1, 1.05], {
    extrapolateRight: "clamp",
  });
  const F = 8;
  const opacidade = interpolate(
    frame,
    [0, F, durationInFrames - F, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
  return (
    <AbsoluteFill style={{ background: "#050810" }}>
      <AbsoluteFill style={{ opacity: opacidade, willChange: "opacity" }}>
        <AbsoluteFill
          style={{ transform: `scale(${zoom})`, willChange: "transform" }}
        >
          {cenario}
        </AbsoluteFill>
        {extra}
        {falas.map((f, i) => {
          const dur = duracaoFala(f);
          const de = inicio;
          inicio += dur;
          return (
            <Sequence key={i} from={de} durationInFrames={dur} layout="none">
              {elenco.map((a) => {
                const pose = f.poses?.[a.id] ?? a.pose ?? "parado";
                const e = a.escala ?? 1;
                const chao = pose === "caido" ? CHAO_CAIDO : CHAO;
                return (
                  <div
                    key={a.id}
                    style={{
                      position: "absolute",
                      left: a.x - 100 * e,
                      top: chao - 370 * e,
                    }}
                  >
                    <Ator
                      quem={a.id}
                      pose={pose}
                      escala={e}
                      sangue={a.sangue}
                    />
                  </div>
                );
              })}
              {(f.cartoes ?? []).map((c, k) => {
                const ini = c.inicio ?? 20;
                return (
                  <Sequence
                    key={k}
                    from={ini}
                    durationInFrames={c.frames ?? Math.max(1, dur - ini - 6)}
                    layout="none"
                  >
                    <AbsoluteFill
                      style={{
                        alignItems: "center",
                        justifyContent:
                          c.pos === "centro" ? "center" : "flex-end",
                        paddingRight: c.pos === "centro" ? 0 : 60,
                        paddingBottom: 100,
                      }}
                    >
                      {c.no}
                    </AbsoluteFill>
                  </Sequence>
                );
              })}
              <Legenda texto={f.texto} quem={f.quem} />
            </Sequence>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
