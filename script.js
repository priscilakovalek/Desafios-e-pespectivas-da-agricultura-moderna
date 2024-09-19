const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A agricultura moderna refere-se ao usode tecnologias avançadas e práticas inovadoras para melhorar a produtividade agrícola e a eficiência dos recursos. De que forma a adoção de novas tecnologias agrícolas pode equilibrar o aumento da produção e a preservação ambiental, considerando as limitações de financiamento e treinamento de pequenos agricultores em países de desenvolvimento?",
        alternativas: [
            {
                texto: "O uso de tecnologias pode aumentar a produtividade e reduzir o impacto ambiental, desde que os agricultores possam ter acesso a recursos de suporte adquado",
            },
            {
                texto: "Sem financiamento e treinamento, a adoção de tecnologias pode favorecer grandes produtores e prejudicar pequenos agricultores e o meio ambiente",
            }
        ]
    },
    {
        enunciado: "Quais são os primcipais obstáculos para a implementação de práticas agricolas sustentáveis em regiões de clima extremo, e como politicas públicas eficazes podem mitigar esses desafios?",
        alternativas: [
            {
                texto: "A falta de recursos e infraestrutura adquados são os maiores desafios, mas o apoio governamental poderia facilitar o acesso a tecnologias apropriadas.",
            },
            {
                texto: "Incentivos governamentais direcionados podem motivar agricultores a adotar praticas sustentaveis, apesar do desafio climatico.",
            }
        ]
    },
    {
        enunciado: "Como a agricultura de precisão pode contribuir para um uso mais eficiente e sustentável dos recursos naturais, especialmente em áreas agricolas vulneráveis, levando em conta a necessidade de reduzir custos operacionais e a dificuldade de pequenos produtores em adotar tecnologias avançadas?",
        alternativas: [
            {
                texto: "A agricultura de precisão pode melhorar o uso da água e fertilizantes, reduzindo desperdicios e custos, enquanto aumenta a produtividade e promove uma gestão mais sustentável.",
            },
            {
                texto: "Os custos iniciais para implementar a agricultura de precisão podem ser altos e inacessíveis para pequenos agricultores, aumentando a desigualdade e o uso inadequado de recursos.",
            }
        ]
    },
    {
        enunciado: "De que maneira o uso de biotecnologias na agricultura pode não apenas aumentar a produtividade de forma significativa em áreas com solos pobres ou degrados, mas também garantir que esse avanço não compromet a biodiversidade e integridade dos ecossistemas locais a prazo?",
        alternativas: [
            {
                texto: "Pode ajudar a restraurar e melhorar a eficiencia produtiva, mimizando a necessidade de insumos quimicos e promovendo práticas mais sustentaveis para proteger a biodiversidade.",
            },
            {
                texto: "O uso indiscriminado da biotecnologia pode colocar em risco a biodiversidade local, com potenciais impactos negativos inversiveis sobre o equilibrio dos ecossistemas.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();