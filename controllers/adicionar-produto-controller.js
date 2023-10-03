import { produtosServicos } from "../model/produtos-services.js";

const adicionarProdutos = async (evento) => {
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
        await produtosServicos.criaProduto(url, categoria, titulo, preco, descricao);
        console.log("Produto adicionado com sucesso!");
        window.location.href = "./produtos.html";
    } catch (error) {
        console.error("Erro ao adicionar o produto:", error);
    }
};


const enviarProdutoAdicionado = () => {
    const formAdicionarProduto = document.querySelector("[data-form]");
    formAdicionarProduto.addEventListener("submit",adicionarProdutos);
};

export default enviarProdutoAdicionado