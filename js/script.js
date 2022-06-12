// зареждане
window.addEventListener('load', () => {
    $("#loading-screen").fadeOut(800);
    if(window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('darkmode') == "true")
    {
      document.body.style.setProperty('--color', '#f2f2f2');
      document.body.style.setProperty('--background', '#181818');
      document.body.style.setProperty('--theme', '#4c2993');
      console.log('Черен режим активиран.');
    }
    if('serviceWorker' in navigator) 
    {
      navigator.serviceWorker.register('/service-worker.js');
    }
    console.log("Страницата заредена.");
});

  document.getElementById('fullscreen-area').addEventListener('fullscreenchange', (event) => {
    if(document.fullscreenElement)
    {
      console.log('Fullscreen opened');
    }
    else
    {
      closeFullscreen();
    }
  });

  function fullscreen() {
    var game = document.getElementById("fullscreen-area");
    var gameFrame = document.getElementById("game-frame");
    var fullScreenBtn = document.getElementById('fullscreen-btn');
    var fullScreenBtnIcon = document.getElementById('fullscreen-icon');
    if($(window).height() <= 600) 
    {
      gameFrame.style.maxWidth = "calc(100vw * 0.8)";
      gameFrame.style.maxHeight = "calc(100vw * 0.6)";
    }
    else
    {
      gameFrame.style.maxWidth = "calc(100vw * 0.75)";
      gameFrame.style.maxHeight = "calc(100vw * 0.5625)";
    }
    gameFrame.style.width = "100vw";
    gameFrame.style.height = "100vh";
    fullScreenBtn.style.position = "absolute";
    fullScreenBtn.style.bottom = "15px";
    fullScreenBtn.style.right = "15px";
    fullScreenBtnIcon.className = "fas fa-compress";
    if(game.requestFullscreen)
    {
      game.requestFullscreen();
    }
    else if(game.webkitRequestFullscreen)
    {
      game.webkitRequestFullscreen();
    }
  }

  function closeFullscreen() {
    var game = document.getElementById("fullscreen-area");
    var gameFrame = document.getElementById("game-frame");
    var fullScreenBtn = document.getElementById('fullscreen-btn');
    var fullScreenBtnIcon = document.getElementById('fullscreen-icon');
    gameFrame.style.maxWidth = "calc(1100px * 0.8)";
    gameFrame.style.maxHeight = "calc(1100px * 0.6)";
    gameFrame.style.width = "80%";
    gameFrame.style.height = "60vw";
    fullScreenBtn.style.position = "static";
    fullScreenBtnIcon.className = "fas fa-expand";
    if(document.exitFullscreen)
    {
      document.exitFullscreen();
    }
    else if(document.webkitExitFullscreen)
    {
      document.webkitExitFullscreen();
    }
  }

  function toggleFullscreen() {
    if(document.fullscreen == false)
    {
      fullscreen();
      console.log('Цял екран отворен')
    }
    else
    {
      closeFullscreen();
      console.log('Цял екран затворен')
    }
  }

  function reloadGame() {
    var gameFrame = document.getElementById("game-frame");
    gameFrame.src = gameFrame.src;
  }

  function showDesc() {
    var description = document.getElementById('description');
    var descriptionFull = document.getElementById('desc-full');
    var descriptionSmall = document.getElementById('desc-small');
    if(descriptionFull.style.display == "none")
    {
      descriptionFull.style.display = "block";
      descriptionSmall.style.display = "none";
    }
    else
    {
      descriptionFull.style.display = "none";
      descriptionSmall.style.display = "block";
    }
  }