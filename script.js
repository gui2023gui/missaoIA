const caixaPrincipal = document.querySelector(".caixa-Princial");
const caixaPerguntas = document.querySelector(".caixa-Perguntas");
const caixaAlternativa = document.querySelector(".caixa-Alternativa");
const caixaResultado = document.querySelector(".caixa-Resultado");
const textoResultado = document.querySelector(".texto-Resultado");

const perguntas = [
    {
        enunciado: "Qual banda britânica, famosa por sucessos como 'Bohemian Rhapsody' e 'We Will Rock You', tinha Freddie Mercury como vocalista?",
        alternativas: [
            "Queen",
            "The Beatles"]
    },
    {
        enunciado: "Conhecido como o 'Rei do Rock and Roll', qual artista americano popularizou o gênero nos anos 50 com músicas como 'Jailhouse Rock'?",
        alternativas: [
            "Chuck Berry",
            "Elvis Presley"
        ]
    },
    {
        enunciado: "Qual banda de Seattle, considerada uma das pioneiras do movimento grunge, lançou o icônico álbum 'Nevermind' em 1991?",
        alternativas: [
            "Pearl Jam",
            "Nirvana"]
    },
    {
        enunciado: "Qual banda de rock and roll australiana é conhecida pela música 'Highway to Hell'?",
        alternativas: [
            "Led Zeppelin",
            "AC/DC"]
    },
    {
        enunciado: "Quem é a vocalista da banda de rock 'Blondie', conhecida por hits como 'Heart of Glass'?",
        alternativas: [
            "Debbie Harry",
            "Joan Jett"]
    },
];

Let atual = 0;
Let perguntaAtual;
Let HistóriaFinal="";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixasPerguntas.textContent = perguntaAtual.enunciado;
mostraResultado();
return;
}


perguntaAtual = perguntas [atual]
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativa.textContent = "";
mostraAlternativas();


mostraPergunta();

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoselecionada) {
    const afirmacoes = opcaoselecionada.afirmacao
    hitoriaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    TextoResultado.textContent =hitoriaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();