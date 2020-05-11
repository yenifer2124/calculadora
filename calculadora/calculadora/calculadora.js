jQuery(document).ready(function() {
      jQuery("#boton_calcular").click(function() {
        var operador = jQuery("#operador").val();
        var error_resultado = jQuery("#errores");
        var primer_numero = jQuery("#primer_numero").val();
        var segundo_numero = jQuery("#segundo_numero").val();
        if(primer_numero == ""){
            error_resultado.html("Debes ingresar el primer número<br>")
            return;
        }
        if(segundo_numero == ""){
            error_resultado.innerHTML = "Debes ingresar el segundo número";
            return;
        }
        var info_resultado = jQuery("#resultados");
        if(operador == "suma") {
            var resultado = parseInt(primer_numero) + parseInt(segundo_numero);
            info_resultado.innerHTML = resultado;
        }
        if(operador == "resta") {
            var resultado = parseInt(primer_numero) - parseInt(segundo_numero);
            info_resultado.innerHTML = resultado;
        }
        if(operador == "multiplicacion") {
            var resultado = parseInt(primer_numero) * parseInt(segundo_numero);
            info_resultado.innerHTML = resultado;
        }
        if(operador == "division") {
            if(segundo_numero == 0){
                error_resultado.innerHTML = "El segundo número no puede ser 0";
                return;
            }
            var resultado = parseInt(primer_numero) / parseInt(segundo_numero);
            info_resultado.innerHTML = resultado;
        }
    })
});
