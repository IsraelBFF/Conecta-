// Esta função mostra uma mensagem quando alguém clicka em um botão.
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

// Aplicar o limite do tamanho da fonte e salvar a preferência.
function aplicarTamanho(tamanho) {
    tamanhoAtual = Math.min(TAMANHO_MAX, Math.max(TAMANHO_MIN, tamanho));
    html.style.fontSize = `${tamanhoAtual}px`;
    localStorage.setItem("tamanhoFonte", tamanhoAtual);
}

if (btnAumentar) {
    btnAumentar.addEventListener("click", () => aplicarTamanho(tamanhoAtual + PASSO));
}
if (btnDiminuir) {
    btnDiminuir.addEventListener("click", () => aplicarTamanho(tamanhoAtual - PASSO));
}
if (btnResetar) {
    btnResetar.addEventListener("click", () => aplicarTamanho(TAMANHO_PADRAO));
}

aplicarTamanho(tamanhoAtual);

// Exibir confirmação de candidatura
const formularioVoluntario = document.getElementById("formulario-voluntario");
if (formularioVoluntario) {
    formularioVoluntario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        document.getElementById("confirmacao").textContent =
            "Obrigado pelo interesse!";
    });
}

// Confirmar o interesse em doar equipamento
const formularioEquipamento = document.getElementById("formulario-equipamento");
if (formularioEquipamento) {
    formularioEquipamento.addEventListener("submit", (evento) => {
        evento.preventDefault();
        document.getElementById("confirmacao-doacao").textContent =
            "Obrigado pela oferta!";
    });
}

// Exibir confirmação de contribuição
const formularioContribuicao = document.getElementById("formulario-contribuicao");
if (formularioContribuicao) {
    formularioContribuicao.addEventListener("submit", (evento) => {
        evento.preventDefault();
        document.getElementById("confirmacao-contribuicao").textContent =
            "Obrigado pela intenção de contribuir! Nenhum pagamento foi processado.";
    });
}
