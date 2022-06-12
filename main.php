<!DOCTYPE html>
<html lang="en">
<head>
         <title>Избягай от стаята</title>
         <script>
          function update (url) {
            document.getElementById("scoreBoard").innerHTML='<object type="text/html" data="ranking.php" ></object>';
          }
          console.log("check123: ", localStorage.getItem("username"));
          //setInterval(update, 1000);
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
            <div id="header">
              <h1>Избягай от стаята</h1>
              <div id="description">
                <p id="desc-small">Трябва да излезете от стаята възможно най-бързо. Можете да използвате стрелките долу  наляво и надясно, за да превключвате между стаи..<a onclick="showDesc();">Покажи повече.</a></p>
                <p id="desc-full">Трябва да излезете от стаята възможно най-бързо. Можете да използвате стрелките долу  наляво и надясно, за да превключвате между стаи. Като щракнете върху някои елементи, можете да взаимодействате с тях или да ги събирате. Трябва да откриете седемцифрения таен код и да го въведете на вратата в края. Цифрите са скрити, така че дръжте очите си отворени. В края можете да видите за колко време сте успяли да избягате и да опитате отново, за да подобрите времето си. <a onclick="showDesc();">Покажи по-малко!</a></p>
              </div>

            </div>
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

        <!-- <div id="stats">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fescape.michivonah.ch&count_bg=%23E67E22&title_bg=%233498DB&icon=&icon_color=%23E7E7E7&title=Michi%27s+Escape+Room&edge_flat=false">
        </div>

        <div id="screensize-error">
          <i class="fas fa-times-circle"></i>
          <h1>Моля, завъртете устройството, за да играете играта. Играта поддържа само пейзажен режим.</h1>
        </div> -->

</body>
</html>
