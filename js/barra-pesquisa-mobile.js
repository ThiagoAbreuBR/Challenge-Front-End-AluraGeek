const barraPesquisaMobile = () => {

  const btnMobile = document.getElementById("btnMobile");
  const btnPesquisa = document.getElementById("btnPesquisa");
  const barraPesquisa = document.getElementById("pesquisaMobile");
  const btnLogin = document.getElementById("btnLogin")

  btnPesquisa.addEventListener("click", function () {
    barraPesquisa.style.display = "flex";
    btnPesquisa.style.display = "none";
    btnLogin.style.display = "none";

    btnMobile.addEventListener('click', function () {
      barraPesquisa.style.display = "none";
      btnPesquisa.style.display = "flex"
      btnLogin.style.display = "flex";
    })
  });
}

export default barraPesquisaMobile