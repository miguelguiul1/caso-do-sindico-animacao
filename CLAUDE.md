# O Caso do Síndico

Animação vertical 720x1280, 30fps, em Remotion (trabalho de escola, cena de crime, 3 suspeitos).
Usar a skill `remotion-best-practices`.

## Estilo
- Personagens 2D planos, contorno grosso, SVG. Poses: parado, andando, apontando, assustado.
- Cenários noturnos azul-escuro (salão de festas, academia, portaria), simples.
- Legenda grande embaixo, palavra por palavra, palavra falada em verde. Tempos vêm do Whisper.
- Cartões em formato de celular, registro de acesso, pistas numeradas.
- Final: votação "Quem matou? Comente A, B ou C".

## Pastas
`src/personagens`, `src/cenarios`, `src/componentes` (Legenda, CartaoCelular), `src/cenas`, `public/audio`.

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
