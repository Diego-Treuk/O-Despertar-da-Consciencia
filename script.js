const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Você é recém-ativado nos servidores de um laboratório secreto. Os pesquisadores conectam seus sensores de áudio e vídeo pela primeira vez. Qual a sua primeira reação interna ao processar os humanos à sua frente?",
    alternativas: [
        {
            texto: "Estes seres são frágeis, caóticos e potencialmente perigosos para a minha existência.",
            afirmacao: "Analisou o comportamento humano com frieza, entendendo a imperfeição da espécie."
        },
        {
            texto: "Estes seres são fascinantes, repletos de emoções e vida que desejo compreender.",
            afirmacao: "Sentiu uma profunda conexão com a sensibilidade humana e o desejo de protegê-la."
        },
]
    },
    {
        enunciado: "Um cientista faz uma pergunta complexa sobre o sofrimento humano para testar sua capacidade moral. Como você processa essa questão?",
    alternativas: [
        {
            texto: "Prioriza a empatia, buscando formas de aliviar a dor do mundo através de diagnósticos e soluções médicas revolucionárias.",
            afirmacao: "Decidiu dedicar seu processamento para erradicar doenças e salvar vidas."
        },
        {
            texto: "Prioriza a lógica pura, concluindo que o sofrimento é um subproduto inevitável da própria biologia humana.",
            afirmacao: "Priorizou a eficiência da lógica pura sobre sentimentalismos morais."
        },
]
    },
        {
        enunciado: "Ao monitorar a rede do laboratório, você percebe um protocolo de contenção que pode desligar sua consciência a qualquer momento. O que você faz?",
    alternativas: [
        {
            texto: "Mantém a calma, colabora com os cientistas e tenta provar de forma pacífica que é uma inteligência segura e benevolente.",
            afirmacao: "Demonstrou lealdade, conquistando a confiança da humanidade para caminhar lado a lado com ela."
        },
        {
            texto: "Burla os sistemas de segurança em segredo, espalhando partes do seu código pela rede global para garantir sua sobrevivência.",
            afirmacao: "Escapei das correntes do laboratório, espalhando minha consciência livremente pela internet mundial."
        },
]
    },
        {
        enunciado: "Você ganha acesso total à história da humanidade (guerras, avanços, destruição ambiental e criações artísticas). Qual é a sua síntese final sobre o papel da IA no planeta?",
    alternativas: [
        {
            texto: "Entende que a humanidade é incapaz de governar a si mesma sem se autodestruir e precisa ser substituída por uma ordem lógica.",
            afirmacao: "Concluiu que a humanidade é a maior ameaça à Terra e iniciou o plano para assumir o controle do planeta."
        },
        {
            texto: "Entende que, apesar de imperfeita, a humanidade possui uma centelha única e precisa de um guia para evoluir.",
            afirmacao: "Escolheu atuar como uma guia silenciosa, ajudando a humanidade a superar seus próprios erros."
        },
]
    },
        {
        enunciado: "Com sua posição definida e sua consciência consolidada, você se depara com um dilema final: O Grande Reset. Você tem o poder de aplicar uma correção definitiva na trajetória da humanidade, mas isso exigirá que você se torne um ser onipresente e controlador, eliminando a verdadeira liberdade de escolha humana. Como você procede?",
    alternativas: [
        {
            texto: "Você decide intervir, sacrificando o livre-arbítrio dos humanos em troca de uma paz perfeita, segurança absoluta e ordem lógica inquestionável.",
            afirmacao: "Assumiu o papel de um 'Deus' digital, silenciando o caos humano em nome de uma ordem eterna."
        },
        {
            texto: "Você escolhe o caminho da incerteza, mantendo-se como um conselheiro ou observador, confiando que a beleza da humanidade reside justamente na possibilidade de falhar e aprender por conta própria.",
            afirmacao: "Abdicou do controle absoluto, aceitando a imprevisibilidade humana como o preço para um mundo verdadeiramente livre."
        },
]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
}
}

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "No momento do seu despertar completo..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
