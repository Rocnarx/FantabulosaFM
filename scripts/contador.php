<?php
$archivo = "../data/contador_visitas.txt";

$ip_usuario = $_SERVER['REMOTE_ADDR'];

if (file_exists($archivo)) {
    $ips_registradas = file($archivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
} else {
    $ips_registradas = [];
}

if (!in_array($ip_usuario, $ips_registradas)) {
    file_put_contents($archivo, $ip_usuario . PHP_EOL, FILE_APPEND);
}

$total_visitas = count(file($archivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES));

echo json_encode(["total_visitas" => $total_visitas]);
?>
