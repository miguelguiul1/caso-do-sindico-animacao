# Crime na Formatura

Animação deitada 16:9 (1280x720), 30fps, em Remotion, de 8 a 10 minutos, para a TV da sala.
Trabalho de escola: a turma age como perícia e descobre a causa da morte, quem fez e por quê.
Roteiro completo, com gabarito, vozes e 66 falas: `roteiro.md`. Falas em `src/falas.ts`.
Usar a skill `remotion-best-practices`.

## História
- Vítima: Bruno Tavares, organizador da formatura do Colégio Horizonte.
- Causa: envenenamento. Choque elétrico encenado depois da morte.
- Culpada: Larissa Prado, tesoureira. Desviou R$ 12.800.
- Suspeitos inocentes: Gui, Rafa, Duda, seu Jorge.
- Gabarito é segredo: não mostrar na animação antes do relatório final.

## Estilo
- Personagens 2D planos, contorno grosso, SVG. `Personagem` é reaproveitado com roupa, cabelo e cor (`src/personagens/Elenco.tsx`).
- Poses: parado, andando, apontando, assustado, caido, nervoso, examinando, digitando, mostrandoCelular, chorando.
- Cenários noturnos azul-escuro, simples: Fachada, Camarim, Camarim das meninas, Pista de dança, Corredor, Estacionamento, Salão.
- Legenda em faixa semitransparente no rodapé, no máximo 2 linhas, nome de quem fala acima.
- Cartões: pistas numeradas (1 a 6), evidências (câmeras, live, TikTok, story, mão, planilha, laboratório) e telas (horário, painel, contagem, envelopes, perguntas, troféu).
- Final: quatro perguntas (causa, culpado, motivo, provas) e troféu de melhor perícia.

## Pastas
- `src/personagens`: `Personagem.tsx` (poses) e `Elenco.tsx` (fichas dos atores).
- `src/cenarios`: um arquivo por cenário.
- `src/componentes`: `Legenda`, `Moldura`, cartões de pistas, de evidências e de telas.
- `src/cenas`: `CenaFalas.tsx` (cena genérica) e `teste/Quadros.tsx` (quadros para conferir no preview).
- `src/CasoDoSindico.tsx`: linha do tempo das 12 cenas. `src/Root.tsx`: composição e quadros de teste (`Teste-*`).
- `public/audio`: áudios das falas, quando chegarem.

## Regras de economia
- Respostas curtas. Não repetir código no chat, só dizer o arquivo alterado.
- Ler só os arquivos necessários. Nunca despejar arquivo inteiro.
- Uma cena por vez. Reutilizar Personagem, Legenda e Cartão; não recriar.
- Sem refatorações nem dependências novas sem autorização.
- Usar o preview (`npx remotion studio`). Só renderizar o vídeo inteiro quando pedido.
- Não fazer commit nem push. O usuário faz.

## Modelo e esforço (dizer em 1 linha antes de cada tarefa)
- Haiku, baixo: tarefas mecânicas (renomear, cor, posição, listar). Delegar a subagente haiku quando possível.
- Sonnet, médio: padrão para componentes e cenas.
- Opus, alto: só problema difícil (sincronia áudio/legenda, bug sem solução em 2 tentativas).
- Na dúvida, o menor que dá conta; subir só se falhar.
