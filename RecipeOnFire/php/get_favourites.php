<?php
// ============================================================
// get_favourites.php — Return user's favourite recipe IDs as JSON
// ============================================================
session_start();
header("Content-Type: application/json");
require_once "db.php";

if (empty($_SESSION["user_id"])) {
    echo json_encode(["success" => false, "favourites" => []]);
    exit;
}

$stmt = $pdo->prepare("SELECT recipe_id FROM favourites WHERE user_id = ? ORDER BY created_at DESC");
$stmt->execute([(int) $_SESSION["user_id"]]);
$rows = $stmt->fetchAll();

$ids = array_map(function($row) { return (int) $row["recipe_id"]; }, $rows);

echo json_encode(["success" => true, "favourites" => $ids]);
exit;
?>
