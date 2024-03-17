// Ejercicio 2: Oculta un elemento específico al cargar la página y muéstralo
// cuando se haga clic en un botón.


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

    //Oculta el parrafo
    $('#parrafo').hide();

    //Al hacer click en el boton, muestra el parrafo oculto
    $('#boton').click(function() {
        $('#parrafo').show();

    })
})