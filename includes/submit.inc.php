<?php
    include_once 'dbh.inc.php';

    $first = $_POST['username'];

    $sql = "INSERT INTO ranking (username)  VALUES ('$first');";
    mysqli_query($conn, $sql);
    header("Location: ../main.php");



