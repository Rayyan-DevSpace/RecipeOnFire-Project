<?php
// ============================================================
// login.php — Handle user login
// ============================================================
session_start();
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../login.html");
    exit;
}

$email    = trim($_POST["email"]    ?? "");
$password = trim($_POST["password"] ?? "");

// Basic validation
if (empty($email) || empty($password)) {
    header("Location: ../login.html?error=" . urlencode("Please enter your email and password."));
    exit;
}

// Look up user by email
$stmt = $pdo->prepare("SELECT id, username, email, password FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user["password"])) {
    header("Location: ../login.html?error=" . urlencode("Incorrect email or password. Please try again."));
    exit;
}

// Save session
$_SESSION["user_id"]  = $user["id"];
$_SESSION["username"] = $user["username"];
$_SESSION["email"]    = $user["email"];

// Redirect to a success page that sets localStorage, then redirects to home
// We pass username & email as query params so JS can store them
header("Location: ../login_success.html?user=" . urlencode($user["username"]) . "&email=" . urlencode($user["email"]));
exit;
?>
