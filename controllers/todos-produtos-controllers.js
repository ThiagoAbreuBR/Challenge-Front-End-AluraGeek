import { produtosServicos } from "../model/produtos-services.js";
import adicionarEventoExcluirProduto from "./excluir-produto-controller.js";

const sectionProdutos = document.querySelector("[data-produto]");

const mostrarProdutosNaPagina = async () => {
    try {
        const todosProdutos = await produtosServicos.todosProdutos();

        todosProdutos.forEach(produto => {
            sectionProdutos.innerHTML += `
                <div class="produto__card">
                    <img class="produto__card-imagem" src="${produto.url}" alt="">
                    <h2 class="produtos__card-nome">${produto.titulo}</h2>
                    <h3 class="produtos__card-preco">${produto.preco}</h3>
                    <a href="./produtos-detalhes.html?id=${produto.id}"><span class="produtos__card-detalhes">Ver produto</span></a>
                    <div class="small-images">
                    <img src="../img/Vector.png" alt="Icone de excluir" class="testeimg" id="btn-excluir" data-id="${produto.id}">
                    <a href="editar-produto.html?id=${produto.id}"><img src="../img/Vector (1).png" alt="Ícone de editar"></a>
                    </div>
                </div>`;
            adicionarEventoExcluirProduto(todosProdutos)
        });
    } catch (error) {
        console.log(error);
    }
}

export default mostrarProdutosNaPagina;
