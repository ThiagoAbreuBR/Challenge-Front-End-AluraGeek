const cardPesquisa = (url, titulo, preco, id) => {
  const novoCard = document.createElement('div');
  novoCard.classList.add('produto__card');

  novoCard.innerHTML = `
    <span class="produto__card-mensagem">É isso que você procura ?</span>
    <img class="produto__card-imagem" src="${url}" alt="">
    <h2 class="produtos__card-nome">${titulo}</h2>
    <h3 class="produtos__card-preco">${preco}</h3>
    <a href="produtos-detalhes.html?id=${id}">
      <span class="produtos__card-detalhes">Ver produto</span>
    </a>
  `;

  return novoCard;
};

export default cardPesquisa;
