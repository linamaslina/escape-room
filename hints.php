<?php
     include_once 'includes/dbh.inc.php';
     
     $sql = "SELECT * FROM hints ORDER BY id LIMIT 12";
     $result = mysqli_query($conn, $sql)->fetch_all();
     $id = 1;

     echo json_encode($result);
     ?>
    