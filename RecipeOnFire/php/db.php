<?php
// ============================================================
// db.php — Database Connection for RecipesOnFire
// XAMPP MySQL settings — change if your setup is different
// ============================================================

$host     = "localhost";
$dbname   = "recipeonfire";
$username = "root";     // default XAMPP username
$password = "";          // default XAMPP password (empty)

// Create PDO connection
try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    // Return JSON error for AJAX calls, or die for regular calls
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH'])) {
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    } else {
        die("Database connection failed: " . $e->getMessage());
    }
    exit;
}
