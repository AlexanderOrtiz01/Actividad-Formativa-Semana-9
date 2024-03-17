// Ejercicio 5: Crea un botón que, al hacer clic, haga que un elemento se deslice
// hacia abajo para revelar más contenido.

$(document).ready(function() {
    //Estilo del boton
    $('#boton').css({
        "display": "block",
        "margin": "0 auto",
        "font-size": "500%"
    })
    //Estilo del parrafo
    $('#parrafo').css({
        "font-size": "200%",
        "font-family": "Arial"
    })

    //Cuando se hace click el elemendo se desliza hacia abajo
    $('#boton').click(function() {
        $('#divContenido').slideDown();
    })

})