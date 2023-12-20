<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $expression = $_POST["expression"];
    $result = null;

    try {
        // Use eval() cautiously or consider using a proper expression parsing library.
        $result = eval("return $expression;");
    } catch (Exception $e) {
        $result = "Syntax error";
    }

    echo json_encode(['result' => $result]);
    exit;
}
?>
