const formulario = document.getElementById("enviarForm");

const urlInput = document.getElementById("url");
const categoriaInput = document.getElementById("categoria");
const nomeInput = document.getElementById("nome");
const precoInput = document.getElementById("preco");
const descricaoInput = document.getElementById("descricao");

const urlError = document.getElementById("url-error");
const categoriaError = document.getElementById("categoria-error");
const nomeError = document.getElementById("nome-error");
const precoError = document.getElementById("preco-error");
const descricaoError = document.getElementById("descricao-error");


formulario.addEventListener("submit", function (event) {

    const url = urlInput.value.trim();
    const categoria = categoriaInput.value.trim();
    const nome = nomeInput.value.trim();
    const preco = precoInput.value.trim();
    const descricao = descricaoInput.value.trim();

    if (!/^(https?:\/\/[^\s/$.?#].[^\s]*)\.(jpg|jpeg|png|gif|bmp|svg)(\?[^\s]*)?$/.test(url)) {
        urlError.textContent = "Verique a extensão da URL da imagem ";
        event.preventDefault();
    } else {
        urlError.textContent = "";
    };

    if (categoria === "null") {
        categoriaError.textContent = "Selecione uma categoria";
        event.preventDefault();
    } else {
        categoriaError.textContent = "";
    };

    if (nome.length <= 2) {
        nomeError.textContent = "Mínimo de 3 caracteres";
        event.preventDefault();
    } else {
        nomeError.textContent = "";
    };

    if (!/^R?\$\s?\d{1,3}(?:\.\d{3})*(?:,\d{2})?$/.test(preco)) {
        precoError.textContent = "Formato esperado (R$ 200,00)";
        event.preventDefault();
    } else {
        precoError.textContent = "";
    };

    if (descricao.length <= 29) {
        descricaoError.textContent = "Mínimo de 30 caracteres";
        event.preventDefault();
    } else {
        descricaoError.textContent = "";
    }
});