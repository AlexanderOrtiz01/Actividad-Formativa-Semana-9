// Ejercicio 4: Crea una lista desordenada con varios elementos de lista. Al pasar
// el mouse sobre cada elemento, cambia su color de fondo.

$(document).ready(function() {

    //Estilo del parrafo
    $('#linea li').css({
        "font-size": "200%",
        "font-family": "Arial"
    })

    $('#linea li').hover(function() {
      // Cambia el color de fondo 
      $(this).css("background-color", "#e0e0e0"); 
    }, function() {
      // Restaura el color de fondo
      $(this).css("background-color", ""); 
    });
  });
  
