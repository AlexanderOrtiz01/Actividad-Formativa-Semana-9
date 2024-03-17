<?php
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$sede = $_POST['sede'];
$modalidad = $_POST['modalidad'];
$carrera = $_POST['carrera'];
$contacto = $_POST['contacto'];

$response = "
<strong>Nombres:</strong> $nombre <br>
<strong>Apellidos:</strong> $apellidos <br>
<strong>Correo:</strong> $correo <br>
<strong>Teléfono:</strong> $telefono <br>
<strong>Sede:</strong> $sede <br>
<strong>Modalidad:</strong> $modalidad <br>
<strong>Carrera:</strong> $carrera <br>
<strong>Método de Contacto:</strong> $contacto";
echo $response;
?>
