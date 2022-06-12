<?php
     include_once 'includes/dbh.inc.php';
 
     $sql = "SELECT * FROM ranking LIMIT 10";
     $result = mysqli_query($conn, $sql);
?>
     <ul>
     <?php foreach($result as $user) :?>
        <li><?php echo $user['username'], "   ", $user['alltime'] ?></li>  
        

        <?php endforeach;?>
     </ul>
