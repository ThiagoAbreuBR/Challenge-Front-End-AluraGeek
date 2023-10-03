import { produtosServicos } from "../model/produtos-services.js";
import mostrarProdutosSimilares from "./produto-similares-controller.js";

const sectionProdutosDetalhes = document.querySelector("[data-detalhes]");
const sectionProdutosSimilares = document.querySelector("[data-produtos]");

const mostrarDetalheProdutoNaPagina = async () => {
    try {
        if (!sectionProdutosDetalhes || !sectionProdutosSimilares) return;

        sectionProdutosDetalhes.innerHTML = "";
        sectionProdutosSimilares.innerHTML = "";

        const params = new URLSearchParams(window.location.search);
        const productId = params.get("id");

        if (productId) {
            const listaDeProdutosDetalhes = await produtosServicos.todosProdutos();

            const produtoDetalhes = listaDeProdutosDetalhes.find(produto => produto.id === parseInt(productId));
            if (produtoDetalhes) {
                const { categoria: categoriaDoProdutoDetalhes } = produtoDetalhes;
                const produtosSimilares = listaDeProdutosDetalhes.filter(produto => produto.categoria === categoriaDoProdutoDetalhes && produto.id !== produtoDetalhes.id);

                sectionProdutosDetalhes.innerHTML = `
                    <div class="produto__detalhes-imagem">
                        <img class="teste" src="${produtoDetalhes.url}" alt="">
                    </div>
                    <div class="produto__detalhes-texto">
                        <h2 class="produto__detalhes-texto-titulo">${produtoDetalhes.titulo}</h2>
                        <span class="produto__detalhes-texto-preco">${produtoDetalhes.preco}</span>
                        <p class="produto__detalhes-texto-descricao">${produtoDetalhes.descricao}</p>
                    </div>`;

                mostrarProdutosSimilares(produtosSimilares, sectionProdutosSimilares);
            } else {
                sectionProdutosDetalhes.innerHTML = "<p>Produto não encontrado.</p>";
            }
        } else {
            sectionProdutosDetalhes.innerHTML = "<p>ID do produto não fornecido.</p>";
        }
    } catch (error) {
        console.error(error);
    }
}

export default mostrarDetalheProdutoNaPagina;
