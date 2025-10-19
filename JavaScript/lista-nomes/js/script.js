let nomes = [
  "danillo",
  "jamilton",
  "josé",
  "letícia",
  "maria",
  "carlos",
  "pedro",
  "marcela",
  "carla",
  "carlos",
];

function pesquisarNome() {
  let nomePesquisa = document.getElementById("campoNome").value;
  let itensLista = "";
  //alert(nomePesquisa)
  for (indice in nomes) {
    let nome = nomes[indice];
    if (nomePesquisa == nome) {
      itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`;
    }
  }

  document.getElementById("lista").innerHTML = itensLista;
}
function carregarNomes() {
  //alert("Teste")
  let itensLista = "";
  for (indice in nomes) {
    let nome = nomes[indice];
    itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`;
    //alert(itensLista)
  }

  document.getElementById("lista").innerHTML = itensLista;
}
