import { produtosServicos } from "../model/produtos-services.js";
import cardPesquisa from "./produtos-pesquisa-controller.js";

export function iniciarPesquisaMobile() {

    async function buscarProduto(evento) {

        evento.preventDefault();
        const dadosDePesquisa = document.querySelector("[data-pesquisa-mobile]").value;
        const busca = await produtosServicos.buscarProduto(dadosDePesquisa);

        console.log(busca);

        const sectionProduto = document.querySelector("[data-produto]");

        while (sectionProduto.firstChild) {
            sectionProduto.removeChild(sectionProduto.firstChild);
        }

        busca.forEach((element) => {
            const novoCard = cardPesquisa(
                element.url,
                element.titulo,
                element.preco,
                element.id
            );
            sectionProduto.appendChild(novoCard);
        });
    }

    const btnDePesquisa = document.querySelector("[data-btn-pesquisa-mobile]");

    btnDePesquisa.addEventListener("click", async (evento) => {
        const scrollTopBeforeSearch = window.scrollY;
        await buscarProduto(evento);
        const novoCard = document.querySelector(".produto__card:first-child")
        if (novoCard) {
            const cardTopPosition = novoCard.getBoundingClientRect().top + scrollTopBeforeSearch - 120;
            window.scrollTo({ top: cardTopPosition, behavior: "smooth" });
        }
    });
}