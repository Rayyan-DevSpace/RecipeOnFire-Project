<?php
// ============================================================
// toggle_favourite.php — Add or remove a recipe from favourites
// Returns JSON response
// ============================================================
session_start();
header("Content-Type: application/json");
require_once "db.php";

// Must be logged in
if (empty($_SESSION["user_id"])) {
    echo json_encode(["success" => false, "message" => "Not logged in"]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
    exit;
}

$user_id   = (int) $_SESSION["user_id"];
$recipe_id = (int) ($_POST["recipe_id"] ?? 0);

if ($recipe_id <= 0) {
    echo json_encode(["success" => false, "message" => "Invalid recipe ID"]);
    exit;
}

// Check if already favourited
$stmt = $pdo->prepare("SELECT id FROM favourites WHERE user_id = ? AND recipe_id = ?");
$stmt->execute([$user_id, $recipe_id]);
$existing = $stmt->fetch();

if ($existing) {
    // Remove from favourites
    $stmt = $pdo->prepare("DELETE FROM favourites WHERE user_id = ? AND recipe_id = ?");
    $stmt->execute([$user_id, $recipe_id]);
    echo json_encode(["success" => true, "action" => "removed", "message" => "Removed from favourites"]);
} else {
    // Add to favourites
    $stmt = $pdo->prepare("INSERT INTO favourites (user_id, recipe_id) VALUES (?, ?)");
    $stmt->execute([$user_id, $recipe_id]);
    echo json_encode(["success" => true, "action" => "added", "message" => "Added to favourites"]);
}
exit;
?>
