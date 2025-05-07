const botoes = document.querySelectorAll (".botao");

const paginas = document.querySelectorAll (".pagina");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerSelecaoBotao();
        selecionarBotao(botao);

        removerSelecaoPagina();
        selecionarPagina(indice);
    });
});

function removerSelecaoBotao() {
    const botaoSelecionado = document.querySelector (".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}


function selecionarBotao(botao) {
    botao.classList.add("selecionado");
}

function removerSelecaoPagina() {
    const paginaSelecionado = document.querySelector(".pagina.selecionado");
    if (paginaSelecionado) {
        paginaSelecionado.classList.remove("selecionado");
    }
}

function selecionarPagina (indice) {
    paginas[indice].classList.add("selecionado");
}

