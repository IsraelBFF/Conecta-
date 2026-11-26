// Esta função mostra uma mensagem quando alguém clica em um botão.
function mostrarMensagem(texto) {
    document.getElementById("mensagem").textContent = texto;
}

// Controlar tamanho do texto 
const html = document.documentElement;
const btnAumentar = document.getElementById("aumentar-fonte");
const btnDiminuir = document.getElementById("diminuir-fonte");
const btnResetar = document.getElementById("resetar-fonte");

const TAMANHO_PADRAO = 16;
const TAMANHO_MIN = 12;
const TAMANHO_MAX = 28;
const PASSO = 2;

let tamanhoAtual = Number(localStorage.getItem("tamanhoFonte")) || TAMANHO_PADRAO;

function aplicarTamanho(tamanho) {
    tamanhoAtual = Math.min(TAMANHO_MAX, Math.max(TAMANHO_MIN, tamanho));
    html.style.fontSize = `${tamanhoAtual}px`;
    localStorage.setItem("tamanhoFonte", tamanhoAtual);
}

btnAumentar.addEventListener("click", () => aplicarTamanho(tamanhoAtual + PASSO));
btnDiminuir.addEventListener("click", () => aplicarTamanho(tamanhoAtual - PASSO));
btnResetar.addEventListener("click", () => aplicarTamanho(TAMANHO_PADRAO));

aplicarTamanho(tamanhoAtual);
