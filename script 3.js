//Ejercicio 3: Haz que un botón cambie el texto de un elemento de párrafo
//cuando se haga clic en él.

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

    //Cuando se hace click sobre el boton el texto cambia su contenido
    $('#boton').click(function() {
        $('#parrafo').text("Si que cambió el texto");
    })
})