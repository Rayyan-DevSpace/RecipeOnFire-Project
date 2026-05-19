<?php
// ============================================================
// signup.php — Handle new user registration
// ============================================================
session_start();
require_once "db.php";

// Only accept POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: ../signup.html");
    exit;
}

// Get and sanitize inputs
$username         = trim($_POST["username"]         ?? "");
$email            = trim($_POST["email"]            ?? "");
$password         = trim($_POST["password"]         ?? "");
$confirm_password = trim($_POST["confirm_password"] ?? "");

// ---- Server-side validation ----
if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
    header("Location: ../signup.html?error=" . urlencode("Please fill in all fields."));
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: ../signup.html?error=" . urlencode("Invalid email address."));
    exit;
}

if (strlen($password) < 6) {
    header("Location: ../signup.html?error=" . urlencode("Password must be at least 6 characters."));
    exit;
}

if ($password !== $confirm_password) {
    header("Location: ../signup.html?error=" . urlencode("Passwords do not match."));
    exit;
}

// Check if email already exists
$stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    header("Location: ../signup.html?error=" . urlencode("This email is already registered. Please log in."));
    exit;
}

// Check if username already exists
$stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
$stmt->execute([$username]);
if ($stmt->fetch()) {
    header("Location: ../signup.html?error=" . urlencode("This username is already taken. Please choose another."));
    exit;
}

// Hash password and insert user
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->execute([$username, $email, $hashedPassword]);

$userId = $pdo->lastInsertId();

// Log user in automatically after signup
$_SESSION["user_id"]   = $userId;
$_SESSION["username"]  = $username;
$_SESSION["email"]     = $email;

// Redirect with success — JS will set localStorage
header("Location: ../login.html?success=" . urlencode("Account created! Please log in."));
exit;
?>
