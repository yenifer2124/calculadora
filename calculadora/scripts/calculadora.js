jQuery(document).ready(function() {
  jQuery("#boton_calcular").click(function(){
    var primer_numero = document.getElementById("primer_numero").value;
    var segundo_numero = document.getElementById("segundo_numero").value;
    var operador = document.getElementById("operador").value;
    var cuadro_resultado =document.getElementById("resultado");

    if(operador=="suma"){
    var resultado = parseFloat(primer_numero)+ parseFloat(segundo_numero);
    cuadro_resultado.innerHTML=resultado;
    } else if (operador=="resta") {
      var resultado = parseFloat(primer_numero)- parseFloat(segundo_numero);
      cuadro_resultado.innerHTML=resultado;
    } else if (operador=="multiplicacion") {
      var resultado = parseFloat(primer_numero)* parseFloat(segundo_numero);
      cuadro_resultado.innerHTML=resultado;

    } else if(operador=="division"){
      if (segundo_numero != 0) {
      var resultado = parseFloat(primer_numero)/ parseFloat(segundo_numero);
      cuadro_resultado.innerHTML=resultado;
    }else{
      alert("la division por cero no existe, por favor ingrese nuevos valores");
      document.getElementById('primer_numero').value = "";
        document.getElementById('segundo_numero').value = "";
    }
    }
})

});

function calcular(){

}
function limpiar(){
  document.getElementById('primer_numero').value = "";
    document.getElementById('segundo_numero').value = "";
  }
