<?php
$servername = "freniz.cmhh9tkn7vpo.eu-west-1.rds.amazonaws.com";
$username = "freniz";
$password = "Ajith786";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
