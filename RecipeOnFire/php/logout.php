<?php
// ============================================================
// logout.php — Destroy session and redirect
// ============================================================
session_start();
session_unset();
session_destroy();

// Redirect to a page that clears localStorage, then goes home
header("Location: ../logout_success.html");
exit;
?>
