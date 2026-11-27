// Função para mostrar uma mensagem quando alguém clicka em um botão.
function mostrarMensagem(texto) {
    document.getElementById("mensagem").textContent = texto;
}

// Controlar tamanho do texto 
const html = document.documentElement;
const btnAumentar = document.getElementById("aumentar-fonte");
const btnDiminuir = document.getElementById("diminuir-fonte");
const btnResetar = document.getElementById("resetar-fonte");

const TAMANHO_PADRAO = 18;
const TAMANHO_PADRAO_ANTERIOR = 16;
const TAMANHO_MIN = 12;
const TAMANHO_MAX = 28;
const PASSO = 2;

// Adotar o novo padrão e preservar preferências diferentes do padrão anterior.
const tamanhoSalvo = Number(localStorage.getItem("tamanhoFonte"));
let tamanhoAtual = tamanhoSalvo && tamanhoSalvo !== TAMANHO_PADRAO_ANTERIOR
    ? tamanhoSalvo
    : TAMANHO_PADRAO;

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

// Aplicar e salvar a preferência de modo claro ou escuro.
const botaoTema = document.getElementById("alternar-tema");
if (botaoTema) {
    const temaEscuroAtivo = localStorage.getItem("temaEscuro") === "true";
    document.body.classList.toggle("tema-escuro", temaEscuroAtivo);

    function atualizarBotaoTema(temaEscuro) {
        botaoTema.textContent = temaEscuro ? "Modo claro" : "Modo escuro";
        botaoTema.setAttribute("aria-label", temaEscuro ? "Ativar modo claro" : "Ativar modo escuro");
        botaoTema.setAttribute("aria-pressed", String(temaEscuro));
    }

    atualizarBotaoTema(temaEscuroAtivo);

    botaoTema.addEventListener("click", () => {
        const temaEscuro = document.body.classList.toggle("tema-escuro");
        localStorage.setItem("temaEscuro", String(temaEscuro));
        atualizarBotaoTema(temaEscuro);
    });
}

// Mostrar a confirmação e retornar à página inicial após dois segundos.
function confirmarEVoltarAoInicio(formulario, idConfirmacao, mensagem) {
    document.getElementById(idConfirmacao).textContent = mensagem;
    formulario.querySelector('button[type="submit"]').disabled = true;

    window.setTimeout(() => {
        window.location.href = "../index.html";
    }, 2000);
}

// Exibir confirmação de candidatura
const formularioVoluntario = document.getElementById("formulario-voluntario");
if (formularioVoluntario) {
    formularioVoluntario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        confirmarEVoltarAoInicio(
            formularioVoluntario,
            "confirmacao",
            "Obrigado pelo interesse!"
        );
    });
}

// Confirmar o interesse em doar equipamento
const formularioEquipamento = document.getElementById("formulario-equipamento");
if (formularioEquipamento) {
    formularioEquipamento.addEventListener("submit", (evento) => {
        evento.preventDefault();
        confirmarEVoltarAoInicio(
            formularioEquipamento,
            "confirmacao-doacao",
            "Obrigado pela oferta!"
        );
    });
}

// Exibir confirmação de contribuição
const formularioContribuicao = document.getElementById("formulario-contribuicao");
if (formularioContribuicao) {
    formularioContribuicao.addEventListener("submit", (evento) => {
        evento.preventDefault();
        confirmarEVoltarAoInicio(
            formularioContribuicao,
            "confirmacao-contribuicao",
            "Obrigado pela intenção de contribuir!"
        );
    });
}
