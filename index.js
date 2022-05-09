function AdicionarFilme() {
  var filmeFav = document.getElementById("filme").value;
  /*SE TERMINAR .... */
  if (filmeFav.endsWith(".jpg") || filmeFav.endsWith(".png")) {
    listarFilmesnaTela(filmeFav);
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesnaTela(filme) {
  var nomeFilme = document.getElementById("nomeFilme").value;

  var elementoFilmeFav = "<img src=" + filme + ">" + "<p>" + nomeFilme + "</p>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFav;
}
