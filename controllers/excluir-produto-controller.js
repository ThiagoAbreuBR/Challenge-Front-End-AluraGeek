import { produtosServicos } from "../model/produtos-services.js";

const adicionarEventoExcluirProduto = () => {
  const btnExcluir = document.querySelectorAll("#btn-excluir");

  btnExcluir.forEach((excluindoProduto) => {
    excluindoProduto.addEventListener("click", async (evento) => {
      const id = evento.target.getAttribute("data-id");

      try {
        await produtosServicos.deletarProduto(id);
      } catch (error) {
        console.log("Erro ao excluir o produto:", error);
      }
    });
  });
};

export default adicionarEventoExcluirProduto;
