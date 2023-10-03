import { produtosServicos } from "../model/produtos-services.js";

const sectionProdutosSimilares = document.querySelector("[data-produtos]");

const mostrarProdutosSimilares = async listaDeProdutosSimilares => {
    try {
        if (!sectionProdutosSimilares) return;
        
        sectionProdutosSimilares.innerHTML = "";

        const todosProdutos = await produtosServicos.todosProdutos();

        listaDeProdutosSimilares.forEach(produto => {
            const produtoDetalhes = todosProdutos.find(p => p.id === produto.id);

            if (produtoDetalhes) {
                sectionProdutosSimilares.innerHTML += `
                <div class="produto__card">
                    <img class="produto__card-imagem" src="${produtoDetalhes.url}" alt="">
                    <h2 class="produtos__card-nome">${produtoDetalhes.titulo}</h2>
                    <h3 class="produtos__card-preco">${produtoDetalhes.preco}</h3>
                    <a href="produtos-detalhes.html?id=${produtoDetalhes.id}"><span class="produtos__card-detalhes">Ver produto</span></a>
                </div>`;
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export default mostrarProdutosSimilares;
