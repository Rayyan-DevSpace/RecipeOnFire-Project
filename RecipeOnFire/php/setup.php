<?php
// ============================================================
// setup.php — Run this ONCE to create the database & tables
// Open in browser: http://localhost/RecipeOnFire/php/setup.php
// ============================================================

$host     = "localhost";
$username = "root";
$password = "";

try {
    // First connect without selecting a database
    $pdo = new PDO("mysql:host=$host;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Create database
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `recipeonfire` CHARACTER SET utf8 COLLATE utf8_general_ci");
    echo "<p style='color:green;'>✅ Database <strong>recipeonfire</strong> created (or already exists).</p>";

    // Select the database
    $pdo->exec("USE `recipeonfire`");

    // Create users table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `users` (
            `id`         INT          AUTO_INCREMENT PRIMARY KEY,
            `username`   VARCHAR(100) NOT NULL UNIQUE,
            `email`      VARCHAR(200) NOT NULL UNIQUE,
            `password`   VARCHAR(255) NOT NULL,
            `created_at` TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    ");
    echo "<p style='color:green;'>✅ Table <strong>users</strong> created (or already exists).</p>";

    // Create favourites table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `favourites` (
            `id`         INT AUTO_INCREMENT PRIMARY KEY,
            `user_id`    INT NOT NULL,
            `recipe_id`  INT NOT NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY `unique_fav` (`user_id`, `recipe_id`),
            FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    ");
    echo "<p style='color:green;'>✅ Table <strong>favourites</strong> created (or already exists).</p>";

    echo "<hr>";
    echo "<p style='font-size:1.1rem;'><strong>✅ Setup Complete!</strong> You can now use the website.</p>";
    echo "<p><a href='../index.html' style='color:#ff5722;'>→ Go to RecipesOnFire Homepage</a></p>";

} catch (PDOException $e) {
    echo "<p style='color:red;'>❌ Setup failed: " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p>Make sure XAMPP MySQL is running and your credentials in this file are correct.</p>";
}
?>
