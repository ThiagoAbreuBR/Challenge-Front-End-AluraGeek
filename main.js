import mostrarProdutosConsoles from "./controllers/produtos-consoles-controller.js";
import mostrarProdutosJogos from "./controllers/produtos-jogos-controller.js";
import mostrarProdutosActionFigures from "./controllers/produtos-actionFigure-controller.js";
import mostrarProdutosNaPagina from "./controllers/todos-produtos-controllers.js";
import mostrarDetalheProdutoNaPagina from "./controllers/detalhes-produto-controller.js";
import enviarProdutoAdicionado from "./controllers/adicionar-produto-controller.js";
import { iniciarPesquisa } from "./controllers/buscar-produto.js";
import animationInput from "./js/animation-input.js";
import { iniciarPesquisaMobile } from "./controllers/buscar-produto-mobile-controller.js";
import barraPesquisaMobile from "./js/barra-pesquisa-mobile.js";


document.addEventListener('DOMContentLoaded', () => {
    const carregarControllers = window.location.pathname;

    if (carregarControllers.endsWith('index.html')) {
        mostrarProdutosConsoles();
        mostrarProdutosJogos();
        mostrarProdutosActionFigures();
        iniciarPesquisa()
        iniciarPesquisaMobile()
        barraPesquisaMobile()
        animationInput()
        console.log("Controllers do Index")
    }

    if (carregarControllers.endsWith('adicionar-produto.html')) {
        enviarProdutoAdicionado();
        animationInput()
        console.log("Controllers do Formulário")
    }

    if (carregarControllers.endsWith('produtos.html')) {
        mostrarProdutosNaPagina();
        iniciarPesquisa()
        iniciarPesquisaMobile()
        barraPesquisaMobile()
        animationInput()
        console.log("Controllers dos Produtos")
    }

    if (carregarControllers.endsWith('produtos-detalhes.html')) {
        mostrarDetalheProdutoNaPagina();
        iniciarPesquisa()
        iniciarPesquisaMobile()
        barraPesquisaMobile()
        animationInput()
        console.log("Controllers dos Detalhes dos Produtos")
    }
});