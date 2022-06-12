<?php
     include_once 'includes/dbh.inc.php';
 
     $sql = "SELECT * FROM ranking WHERE alltime > 0 ORDER BY alltime LIMIT 10";
     $result = mysqli_query($conn, $sql);
?>
<div class="container" style="display: flex;
align-items: center;
justify-content: center;">
<div id="scoredboard" style="background:#4c2993; width:58%;justify-content:center;display:block; border: 4px solid; border-radius:8px; margin-bottom:3vw;">
     <h1 id="heading" style="margin-bottom:0;">Класация</h1>
          <div id="order">
               <ol>
                    <?php foreach($result as $user) :?>
                         <li><?php echo $user['username'], "   ", $user['alltime'] ?></li>
                    <?php endforeach;?>
               </ol>
          </div>
</div>
</div>
<style>
     ol
     {
          display: inline-block;
          text-align: left;
          list-style-position: inside;
     }
</style>
    