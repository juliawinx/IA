const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua ideia de um encontro perfeito?",
        alternativas: [
            {
                texto: "Uma caminhada romântica pela floresta ao pôr do sol!",
                afirmacao: "Você é atraído (a) pelo calor e pela lealdade inabalável."
            },
            {
                texto: "Um jantar à luz de velas em um restaurante elegante!",
                afirmacao: "Você é atraído(a) pelo mistério e pela elegância."
            }
        ]
    },
    {
        enunciado: "O que te atrai mais em uma pessoa?",
        alternativas: [
            {
                texto: "Um espírito aventureiro e um físico atlético.",
                afirmacao: "Jacob representa aventura, parceria e um amor que é sempre protetor e apaixonado."
            },
            {
                texto: "Um charme misterioso e uma inteligência aguçada.",
                afirmacao: "Edward oferece um amor eterno e uma ligação intelectual profunda."
            }
        ]
    },
    {
        enunciado: "Como você lida com situações difíceis?",
        alternativas: [
            {
                texto: "Com paixão e determinação, nunca desistindo.",
                afirmacao: "Vocês dois compartilham uma conexão profunda com a natureza e uma energia vibrante."
            },
            {
                texto: "Com calma e reflexão, pensando antes de agir.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: o sobrenatural."
            }
        ]
    },
    {
        enunciado: "Qual é a sua estação do ano favorita?",
        alternativas: [
            {
                texto: "Verão, para aproveitar o calor e a vida ao ar livre.",
                afirmacao: "Quer compreender tudo o que faz parte do universo, mas há uma área que costuma intrigá-lo particularmente: a natureza humana."
            },
            {
                texto: "Inverno, para apreciar o frio e o aconchego.",
                afirmacao: ","
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação ao sobrenatural? ",
        alternativas: [
            {
                texto: "Fascinado(a) e curioso(a), sempre aberto(a) a novas possibilidades.",
                afirmacao: "Você vai casar com **Jacob, o Lobo**!  "
            },
            {
                texto: "Cético(a) mas interessado(a), gostando de explorar o desconhecido.",
                afirmacao: "Você vai casar com **Edward, o Vampiro**! "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você…";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
