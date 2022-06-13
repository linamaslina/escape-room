<!DOCTYPE html>
<html lang="en">
<head>
         <title>Избягай от стаята</title>
         <script>
          function update (url) {
            document.getElementById("scoreBoard").innerHTML='<object type="text/html" data="ranking.php" ></object>';
          }
          console.log("check123: ", localStorage.getItem("username"));
          
         </script>
         <link rel="icon" type="image/png" href="graphics/media/1.png">
         <link rel="shortcut icon" type="image/png" href="graphics/media/1.png">
         <link rel="apple-touch-icon" href="graphics/media/1.png">
         <link rel="apple-touch-icon" sizes="152x152" href="graphics/media/1.png">
         <link rel="apple-touch-icon" sizes="180x180" href="graphics/media/1.png">
         <link rel="apple-touch-icon" sizes="167x167" href="graphics/media/1.png">
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         <script src="js/script.js"></script>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
         <link rel="stylesheet" type="text/css" href="css/style.css">
         <meta charset="UTF-8">
         <meta name="description" content="Трябва да намерите седемцифрен код, за да напуснете стаята във възможно най-малко време.">
         <meta name="author" content="Вeси, Вики, Ира">
         <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
         <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</head>
<body>

        <div id="loading-screen">
          <div id="loader">
            <img src="graphics/rooms/kitchen/teddy.png">
          </div>
        </div>

        <div id="content">
          <div class="inner-width">
            <div id="fullscreen-area">
              <div id="game-container">
              <iframe id="game-frame" src="game.html" title="Escape Room" allowfullscreen="true" scrolling="no">Грешка, играта не може да зареди!</iframe>
            </div>
            <div id="gameplay-options">
              <button id="reload-btn" onclick="reloadGame()"><i class="fas fa-redo"></i></button>
              <button id="fullscreen-btn" onclick="toggleFullscreen()"><i class="fas fa-expand" id="fullscreen-icon"></i></button>
            </div>
            </div>
          </div>
        </div>

        <div id ="scoreBoard">
          <?php require('ranking.php'); ?>
        </div>

</body>
</html>
