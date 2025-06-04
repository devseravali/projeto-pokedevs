const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');

listaSelecaoPokedevs.forEach(pokedev => {
  pokedev.addEventListener("click", () => { 
    esconderCartaoPokedev();

    const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

    desativarPokedevnaListagem();
    ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
  });
});

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
  const pokedevParaAtivar = document.getElementById(idPokedevSelecionado);
  pokedevParaAtivar.classList.add("ativo");
}

function desativarPokedevnaListagem() {
  const pokedevAtivoNaListagem = document.querySelector(".ativo");
  if (pokedevAtivoNaListagem) {
    pokedevAtivoNaListagem.classList.remove("ativo");
  }
}

function mostrarCartaoPokedevSelecionado(pokedev) {
  const idPokedevSelecionado = pokedev.getAttribute("id");
  const idCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
  const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir);
  if (cartaoPokedevParaAbrir) {
    cartaoPokedevParaAbrir.classList.add("aberto");
  }
  return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
  const cartaoPokedevAberto = document.querySelector(".aberto");
  if (cartaoPokedevAberto) {
    cartaoPokedevAberto.classList.remove("aberto");
  }
}
