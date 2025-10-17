function calcularMelhorPreco() {
  //validar vampos
  let precoAlcool = document.getElementById("alcool").value;
  let precoGasolina = document.getElementById("gasolina").value;

  if (precoAlcool != "") {

    if (precoGasolina != "") {

      /*Calcular se é melhor usar álcool ou gasolina
            se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
            senão é melhor utilizar álcool 
            */
      let resultado = precoAlcool / precoGasolina;
      if (resultado >= 0.7) {
        //alert("Melhor utilizar a Gasolina: " + resultado.toFixed(2))
        document.getElementById("resultado").innerHTML =
          "Melhor utilizar a Gasolina: " + resultado.toFixed(2);
      } else {
        //alert("Melhor utilizar o Álcool: " + resultado.toFixed(2))
        document.getElementById("resultado").innerHTML =
          "Melhor utilizar o Álcool: " + resultado.toFixed(2);
      }
    } else {
      alert("Preencha o preço da Gasolina");
    }
  } else {
    alert("Preencha o preço do Álcool");
  }
}
