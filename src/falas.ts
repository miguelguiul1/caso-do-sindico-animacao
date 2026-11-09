export type Quem =
  | "Narrador"
  | "Delegado"
  | "Perito"
  | "Bruno"
  | "Gui"
  | "Rafa"
  | "Duda"
  | "Seu Jorge"
  | "Larissa";

export type FalaRoteiro = { n: number; quem: Quem; texto: string };

// Gerado a partir do roteiro.md (66 falas).
export const FALAS: FalaRoteiro[] = [
  {
    n: 1,
    quem: "Narrador",
    texto:
      "Colégio Horizonte. Noite da formatura do terceiro ano. Duzentos alunos, uma pista de dança e um grito que parou a música.",
  },
  {
    n: 2,
    quem: "Narrador",
    texto:
      "Bruno Tavares, dezessete anos, organizador da festa e dono da maior conta de stories da escola, está caído atrás do palco.",
  },
  {
    n: 3,
    quem: "Narrador",
    texto:
      "Um cabo desencapado ao lado dele, uma poça d’água no chão. Todo mundo acha que foi choque. Será?",
  },
  {
    n: 4,
    quem: "Delegado",
    texto:
      "Peritos, eu sou o delegado Paulo. A festa acabou mais cedo e todos os suspeitos ainda estão no colégio.",
  },
  {
    n: 5,
    quem: "Delegado",
    texto:
      "Vocês precisam descobrir três coisas: a causa da morte, quem fez isso e por quê. A equipe que acertar tudo leva o troféu de melhor perícia.",
  },
  {
    n: 6,
    quem: "Delegado",
    texto: "Dica de ouro: nem tudo que parece acidente é acidente. Bora.",
  },
  {
    n: 7,
    quem: "Narrador",
    texto:
      "Duas horas antes. A festa estava no auge e o Bruno era o dono da noite.",
  },
  {
    n: 8,
    quem: "Bruno",
    texto: "Galera, quem aí está pronto para a melhor formatura da história?",
  },
  {
    n: 9,
    quem: "Bruno",
    texto:
      "À meia-noite eu tenho uma surpresa, e todo mundo vai ficar de queixo caído.",
  },
  {
    n: 10,
    quem: "Narrador",
    texto:
      "Uma revelação à meia-noite. Alguma pessoa ali não gostou nada disso.",
  },
  { n: 11, quem: "Delegado", texto: "Doutor Matos, o que o corpo diz?" },
  {
    n: 12,
    quem: "Perito",
    texto:
      "O cabo está desencapado e tem água em volta. Parece choque elétrico. Mas olhem as mãos dele.",
  },
  {
    n: 13,
    quem: "Perito",
    texto:
      "Não tem nenhuma queimadura. Choque deixa marca na pele. Aqui não tem nada.",
  },
  {
    n: 14,
    quem: "Perito",
    texto:
      "E tem mais: os lábios estão arroxeados e há espuma no canto da boca. Isso é sinal de que ele ingeriu alguma coisa.",
  },
  { n: 15, quem: "Delegado", texto: "Entendi. E o horário da morte?" },
  {
    n: 16,
    quem: "Perito",
    texto:
      "Pela temperatura do corpo e pela rigidez, ele morreu entre 23h15 e 23h35.",
  },
  { n: 17, quem: "Delegado", texto: "Vamos às pistas. São seis." },
  {
    n: 18,
    quem: "Narrador",
    texto: "Pista 1: o cabo desencapado. Ele está desligado da tomada.",
  },
  {
    n: 19,
    quem: "Narrador",
    texto:
      "Pista 2: a poça d’água. Ela está só no chão. A roupa do Bruno está seca.",
  },
  {
    n: 20,
    quem: "Narrador",
    texto:
      "Pista 3: a garrafinha térmica dele, com o nome Bruninho. A tampa está solta e ainda tem líquido dentro.",
  },
  {
    n: 21,
    quem: "Narrador",
    texto: "Pista 4: perto da tampa, uma lasca de esmalte com glitter prata.",
  },
  {
    n: 22,
    quem: "Narrador",
    texto:
      "Pista 5: o celular do Bruno, com um rascunho: À meia-noite eu mostro tudo no discurso. Planilha da formatura: faltam doze mil e oitocentos reais.",
  },
  {
    n: 23,
    quem: "Narrador",
    texto: "Pista 6: atrás do amplificador, um boné preto da equipe de som.",
  },
  {
    n: 24,
    quem: "Perito",
    texto:
      "Reparem: quem desligou o cabo e jogou água queria que parecesse acidente. Mas o corpo conta outra história.",
  },
  {
    n: 25,
    quem: "Delegado",
    texto:
      "Cinco suspeitos. Vamos ouvir cada um. Prestem atenção em quem treme.",
  },
  {
    n: 26,
    quem: "Delegado",
    texto: "Primeiro: Gui, melhor amigo do Bruno e vice da comissão.",
  },
  {
    n: 27,
    quem: "Gui",
    texto:
      "Ele era meu irmão, cara! Fui eu que achei. Eu ia levar água pra ele e... aí eu vi.",
  },
  {
    n: 28,
    quem: "Gui",
    texto:
      "Eu estava com o Bruno até as onze. Depois fui buscar a bolsa do cerimonial e voltei às onze e quarenta. Foi aí que eu achei.",
  },
  {
    n: 29,
    quem: "Gui",
    texto:
      "Eu até mandei um áudio pra ele às onze e meia perguntando onde estava. Ele não respondeu.",
  },
  {
    n: 30,
    quem: "Narrador",
    texto:
      "A câmera do corredor confirma: Gui ficou na secretaria das 23h05 às 23h38.",
  },
  {
    n: 31,
    quem: "Delegado",
    texto:
      "Segundo: Rafa, o DJ que perdeu o lugar no palco principal para o Bruno.",
  },
  {
    n: 32,
    quem: "Rafa",
    texto:
      "Eu? Matar o Bruno? Eu sou o melhor DJ da zona sul, não preciso disso.",
  },
  {
    n: 33,
    quem: "Rafa",
    texto:
      "Tá, ele me tirou do palco e me mandou tocar no corredor. Fiquei com raiva. Mas eu estava tocando o tempo todo.",
  },
  {
    n: 34,
    quem: "Rafa",
    texto:
      "Tem live! Fiz uma live no Instagram das onze às onze e quarenta. É só ver.",
  },
  {
    n: 35,
    quem: "Narrador",
    texto:
      "A live do Rafa confirma: ele aparece tocando sem parar das 23h às 23h40, com trezentas pessoas assistindo.",
  },
  { n: 36, quem: "Delegado", texto: "Terceira: Duda, ex-namorada do Bruno." },
  {
    n: 37,
    quem: "Duda",
    texto:
      "Só quero dizer que eu NÃO odiava ele. Tá, ele postou um story me expondo, mas isso foi semana passada.",
  },
  {
    n: 38,
    quem: "Duda",
    texto:
      "Eu estava dançando na pista com a minha turma. Tem vídeo no TikTok, é só olhar.",
  },
  {
    n: 39,
    quem: "Duda",
    texto: "E eu nem uso esmalte com glitter. Só unha de gel nude. Pode olhar.",
  },
  {
    n: 40,
    quem: "Narrador",
    texto:
      "O TikTok da Duda mostra ela dançando das 23h10 às 23h45, com a turma toda ao fundo.",
  },
  {
    n: 41,
    quem: "Delegado",
    texto: "Quarto: seu Jorge, o técnico de som da festa.",
  },
  {
    n: 42,
    quem: "Seu Jorge",
    texto:
      "Juro por Deus e pela minha mãe que eu não fiz nada! Esse boné é meu, sim, mas eu perdi ele hoje cedo.",
  },
  {
    n: 43,
    quem: "Seu Jorge",
    texto:
      "Aquele cabo nem era meu. Eu nunca deixaria um cabo daquele jeito, sou profissional!",
  },
  {
    n: 44,
    quem: "Seu Jorge",
    texto:
      "Das onze e dez às onze e cinquenta eu estava aqui fora, carregando caixa de som. Pergunta pro porteiro.",
  },
  {
    n: 45,
    quem: "Narrador",
    texto:
      "A câmera do estacionamento mostra seu Jorge carregando caixas de som das 23h10 às 23h50.",
  },
  {
    n: 46,
    quem: "Delegado",
    texto: "Quinta: Larissa, tesoureira da comissão de formatura.",
  },
  {
    n: 47,
    quem: "Larissa",
    texto: "Meu Deus, que horror. O Bruno era tão querido. Eu estou em choque.",
  },
  {
    n: 48,
    quem: "Larissa",
    texto:
      "Eu estava no banheiro com a Camila, retocando a maquiagem, das onze e dez até ouvir o grito.",
  },
  {
    n: 49,
    quem: "Larissa",
    texto:
      "Sobre a planilha: está tudo certo. Eu cuido do dinheiro com o maior carinho. O Bruno só estava confuso.",
  },
  {
    n: 50,
    quem: "Larissa",
    texto:
      "Quer ver? Eu até postei um story para provar que eu estava na festa.",
  },
  {
    n: 51,
    quem: "Delegado",
    texto:
      "Pausa para o voto parcial. Quem vocês acham que foi? Pausem o vídeo e anotem o palpite da equipe.",
  },
  {
    n: 52,
    quem: "Narrador",
    texto:
      "Cinco suspeitos, cinco álibis. Alguma pessoa aqui está mentindo muito bem.",
  },
  {
    n: 53,
    quem: "Delegado",
    texto:
      "Se já anotaram, vamos em frente. Chegaram novas evidências da central.",
  },
  {
    n: 54,
    quem: "Narrador",
    texto:
      "Evidência A: o story da Larissa, ampliado. Postado às 23h22. Ela diz que estava no banheiro.",
  },
  {
    n: 55,
    quem: "Perito",
    texto:
      "Mas atrás dela tem uma cortina vermelha. O banheiro da festa tem azulejo azul. Essa cortina é a do camarim.",
  },
  {
    n: 56,
    quem: "Narrador",
    texto:
      "Evidência B: a mão da Larissa, no depoimento. A unha do dedo anelar está quebrada, com esmalte glitter prata.",
  },
  {
    n: 57,
    quem: "Perito",
    texto:
      "A lasca na tampa da garrafinha bate com a falha na unha dela. E ninguém mais tem esmalte glitter prata.",
  },
  {
    n: 58,
    quem: "Narrador",
    texto:
      "Evidência C: a planilha da comissão. O saldo oficial é de vinte mil reais, mas o extrato do banco mostra sete mil e duzentos.",
  },
  {
    n: 59,
    quem: "Perito",
    texto:
      "Faltam doze mil e oitocentos. É o mesmo valor do rascunho do Bruno.",
  },
  {
    n: 60,
    quem: "Narrador",
    texto:
      "Evidência D: o laboratório analisou o resto da garrafinha. Havia uma substância tóxica.",
  },
  {
    n: 61,
    quem: "Perito",
    texto:
      "O cabo estava desligado e o Bruno estava seco. O acidente foi encenado depois da morte. Quem encenou queria esconder o veneno.",
  },
  {
    n: 62,
    quem: "Delegado",
    texto: "Peritos, chegou a hora. Quinze minutos no relógio.",
  },
  {
    n: 63,
    quem: "Delegado",
    texto:
      "Qual foi a causa da morte? Quem fez? Por quê? E quais são as provas?",
  },
  {
    n: 64,
    quem: "Delegado",
    texto:
      "A equipe que acertar as três respostas e explicar as provas leva o troféu de melhor perícia.",
  },
  {
    n: 65,
    quem: "Narrador",
    texto:
      "Colégio Horizonte. Cinco suspeitos, seis pistas, quatro evidências. Um culpado, e ele ainda está no colégio.",
  },
  {
    n: 66,
    quem: "Delegado",
    texto: "Boa sorte, peritos. O tempo começa agora.",
  },
];
