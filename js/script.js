import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoStart = document.querySelector(".start-btn");
const telaTitulo = document.querySelector(".tela-titulo");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoStart.addEventListener('click', iniciaDescricao);
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaDescricao() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'block';
    telaTitulo.style.display = 'none';
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if (opcaoSelecionada.proxima != undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

/*function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        if(opçaoSelecionada.proxima != undefined){
            atual = opcaoSelecionada.proxima;
        }else {
            mostraResultado();
            return;
        }
        mostraPergunta();
} */

function mostraResultado(){
    caixaPerguntas.textContent = `No momento do seu despertar completo, ${nome}...`
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/Você/gi, nome);
    }
   /*     // Agora, precisamos acessar as alternativas da pergunta atual
    for (const alternativa of pergunta.alternativas) {
        // Aqui, usamos o mesmo replace para o texto da alternativa
        alternativa.texto = alternativa.texto.replace(/você/gi, nome);
    }*/
}

substituiNome();
