// Ejercicio 6: Haciendo uso de AJAX recrea el siguiente formulario que al dar
// click en Solicitar información vaya haciendo una lista con los datos que se van
// ingresando en la misma página

$(document).ready(function() {
    $('#formulario').submit(function(event) {
        event.preventDefault(); 

        var datos = $(this).serialize(); 

        $.ajax({
            type: 'POST',
            url: 'logica ejercicio 6.php',
            data: datos,
            success: function(response) {
                $('#listaEnDondeVanLosDatos').append('<li>' + response + '</li>');
                $('#listaEnDondeVanLosDatos').css({
                    "font-family": "Arial", "color": "#2f2f2f"
                })
                $("#listaEnDondeVanLosDatos").append("<br>");
                $('#divListaDatos').css({
                    "background-color": "#ececec",
                    "height": "auto",
                    "width": "40%",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "padding-top": "1%",
                    "padding-bottom": "5%"
                })
            }
        });
    });
});
