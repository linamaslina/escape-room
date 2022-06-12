<?php
     include_once 'includes/dbh.inc.php';
 

     $request = json_decode(file_get_contents('php://input'), true);
     $username = $request['username'];
     $alltime = $request['alltime']; 

     $sql = "INSERT INTO ranking (username, alltime)  VALUES ('$username', '$alltime');";
     $result = mysqli_query($conn, $sql);
?>
