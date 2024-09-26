const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [

    {
        enunciado: "A agricultura moderna refere-se ao uso de tecnologias avançadas e práticas inovadoras para melhorar a produtividade agrícola e a eficiência dos recursos. De que forma a adoção de novas tecnologias agrícolas pode equilibrar o aumento da produção e a preservação ambiental, considerando as limitações de financiamento e treinamento de pequenos agricultores em países de desenvolvimento?",
        alternativas: [
            {
                texto: "O uso de tecnologias pode aumentar a produtividade e reduzir o impacto ambiental, desde que os agricultores possam ter acesso a recursos de suporte adequado",
                afirmacao: ""
            },
            {
                texto: "Sem financiamento e treinamento, a adoção de tecnologias pode favorecer grandes produtores e prejudicar pequenos agricultores e o meio ambiente",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado:"Quais são os principais obstáculos para a implementação de práticas agrícolas sustentáveis em regiões de clima extremo, e como politicas públicas eficazes podem mitigar esses desafios?",
        alternativas: [
            {
                texto: "A falta de recursos e infraestrutura adequados são os maiores desafios, mas o apoio governamental poderia facilitar o acesso a tecnologias apropriadas.",
                afirmacao: ""
            },
            {
                texto: "Incentivos governamentais direcionados podem motivar agricultores a adotar praticas sustentáveis, apesar do desafio climático.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado:"Como a agricultura de precisão pode contribuir para um uso mais eficiente e sustentável dos recursos naturais, especialmente em áreas agrícolas vulneráveis, levando em conta a necessidade de reduzir custos operacionais e a dificuldade de pequenos produtores em adotar tecnologias avançadas?",
        alternativas: [ 
             {
                texto: "A agricultura de precisão pode melhorar o uso da água e fertilizantes, reduzindo desperdícios e custos, enquanto aumenta a produtividade e promove uma gestão mais sustentável.",
                afirmacao: ""
            },
            {
                texto: "Os custos para implementar a agricultura de precisão podem ser altos e inacessíveis para pequenos agricultores, aumentando a desigualdade e o uso inadequado de recursos.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "De que maneira o uso de biotecnologias na agricultura pode não apenas aumentar a produtividade de forma significativa em áreas com solos pobres ou degradados, mas também garantir que esse avanço não comprometendo a biodiversidade e integridade dos ecossistemas locais a prazo?",
        alternativas: [
            {
                texto: "Pode ajudar a restaurar e melhorar a eficiência produtiva, minimizando a necessidade de insumos químicos e promovendo práticas mais sustentáveis para proteger a biodiversidade.",
                afirmacao:""
                },
            {
                texto: "O uso indiscriminado da biotecnologia pode colocar em risco a biodiversidade local, com potenciais impactos negativos inversíveis sobre o equilíbrio dos ecossistemas.",
                afirmacao:""
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado()
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
    caixaPerguntas.textContent = "O uso de tecnologias na agricultura oferece tanto oportunidades quanto riscos. Inovações como a agricultura de precisão e a biotecnologia podem melhorar a produtividade e promover a sustentabilidade, mas seu sucesso depende de como essas soluções são implementadas. Para que os pequenos agricultores não sejam prejudicados e o meio ambiente não seja comprometido, políticas públicas eficazes e estratégias inclusivas precisam ser priorizadas. Assim, o futuro da agricultura sustentável dependerá do equilíbrio entre inovação e responsabilidade ecológica",
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
