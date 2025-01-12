<?php
$host = 'localhost';
$dbname = 'rondas';  // Nombre de tu base de datos
$username = 'root';       // Tu usuario de MySQL
$password = '';           // Tu contraseña de MySQL (por defecto en Laragon es vacío)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error en la conexión: " . $e->getMessage());
}
?>
