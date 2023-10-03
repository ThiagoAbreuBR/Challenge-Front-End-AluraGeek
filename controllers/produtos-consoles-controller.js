import { produtosServicos } from "../model/produtos-services.js";
const sectionProdutosConsoles = document.querySelector("[data-consoles]");

const mostrarProdutosConsoles = async () => {
    try {
        const todosProdutos = await produtosServicos.todosProdutos();

        todosProdutos
            .filter(produto => produto.categoria === "Consoles")
            .forEach(produto => {
                sectionProdutosConsoles.innerHTML += `
                <div class="produto__card">
                    <img class="produto__card-imagem" src="${produto.url}" alt="">
                    <h2 class="produtos__card-nome">${produto.titulo}</h2>
                    <h3 class="produtos__card-preco">${produto.preco}</h3>
                    <a href="produtos-detalhes.html?id=${produto.id}"><span class="produtos__card-detalhes">Ver produto</span></a>
                </div>`;
            });
    } catch (error) {
        console.error("Não foi possível carregar a sessão de Consoles");
    }
}

export default mostrarProdutosConsoles;