<?php
$mensaje_exito = "";
$mensaje_error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $message = htmlspecialchars($_POST['message']);

    // Validar los datos
    if (empty($message)) {
        $mensaje_error = "Todos los campos son obligatorios.";
    } else {
        // Configuración del correo
        $to = "halo688@gmail.com";  // Cambia esto por tu dirección de correo
        $subject = "Nuevo mensaje de contacto de $name";
        $body .= "Mensaje: \n$message\n";

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        // Enviar el correo
        if (mail($to, $subject, $body, $headers)) {
            $mensaje_exito = "Mensaje enviado correctamente.";
        } else {
            $mensaje_error = "No existe conexión mail()";
        }
    }
}
?>

<!-- Parte HTML para mostrar los mensajes -->
<?php if (!empty($mensaje_exito)): ?>
    <p style="color: green;"><?php echo $mensaje_exito; ?></p>
<?php endif; ?>

<?php if (!empty($mensaje_error)): ?>
    <p style="color: red;"><?php echo $mensaje_error; ?></p>
<?php endif; ?>
