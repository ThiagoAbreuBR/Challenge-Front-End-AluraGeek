import { produtosServicos } from "../model/produtos-services.js";

const parametrosURL = new URLSearchParams(window.location.search);
const id = parametrosURL.get('id');


const preencherCampos = (produto) => {
    if (produto) {
        document.querySelector("[data-url]").value = produto.url;
        document.querySelector("[data-categoria]").value = produto.categoria;
        document.querySelector("[data-titulo]").value = produto.titulo;
        document.querySelector("[data-preco]").value = produto.preco;
        document.querySelector("[data-descricao]").value = produto.descricao;
    } else {
        console.log('Produto não encontrado.');
    }
};

if (id) {
    const buscarProduto = async () => {
        try {
            const produto = await produtosServicos.getProdutoPorId(id);
            preencherCampos(produto);
        } catch (erro) {
            console.log('Erro ao buscar o produto:', erro);
        }
    };
    buscarProduto();
} else {
    console.log('O ID não foi encontrado na URL.');
}

const formulario = document.querySelector("[data-form]");

const atualizarProduto = async (evento) => {
    evento.preventDefault();

    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const preco = document.querySelector("[data-preco]").value;
    const descricao = document.querySelector("[data-descricao]").value;

    if (!url || !categoria || !titulo || !preco || !descricao) {
        console.error("Preencha todos os campos obrigatórios.");
        return;
    }
    try {
        await produtosServicos.atualizaProduto(id, url, categoria, titulo, preco, descricao);
        console.log("Produto atualizado com sucesso!");
        window.location.href = "./produtos.html";
    } catch (error) {
        console.error("Erro ao atualizar o produto:", error);
    }
};

formulario.addEventListener("submit", evento => atualizarProduto(evento));

export default atualizarProduto;