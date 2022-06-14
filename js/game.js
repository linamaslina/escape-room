var hintsLoaded = false;
var hintsCount = 0;
var hints;
// зареждане
$(window).on("load", function() {
    $("#loading-screen").fadeOut(750);
    console.log("Заредена страница.");
    fetch("hints.php", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    .then (responce => 
        responce.json().then(data => {
        hints = data.map(a => a[1]);
        hintsLoaded = true;
      }))
  });

  // добавяне към инвентар/добавяне към стаята от инвентара
  function toggleBackpack(){ // функционира само с картинки
    var backpack = document.getElementById('backpack');
    var item = event.target.id;
    if(event.target.parentNode.id != "backpack")
    {
      document.getElementById(item).style.position = "static";
      backpack.appendChild(document.getElementById(item));
    } else 
    {
      // разпознаване на стая
      if(document.getElementById('room1').style.display == "block")
      {
        var roomName = "room1";
      }
      else if(document.getElementById('room2').style.display == "block")
      {
        var roomName = "room2";
      }
      else if(document.getElementById('room3').style.display == "block")
      {
        var roomName = "room3";
      }
      else if(document.getElementById('room4').style.display == "block")
      {
        var roomName = "room4";
      }
      else
      {
        console.log("Грешка");
      }
      // използване на предмет
      console.log("Ти си предметът в раницата.")
      if(item == "item-fire1"){
        if(document.getElementById('item-fire2').parentNode.id == roomName)
        {
          document.getElementById(item).style.position = "absolute";
          document.getElementById("room3").appendChild(document.getElementById(item));
          document.getElementById('item-fire1').style.animation = "item-fire1 1s linear";
          setTimeout(function(){
            document.getElementById('item-fire1').remove();
            document.getElementById('item-fire2').remove();
          }, 1000);
        }
      }
      else if(item == "item-pocketligher1")
      {
        if(document.getElementById('item-candle1').parentNode.id == roomName)
        {
          document.getElementById('item-candle1').src = "graphics/rooms/bedroom/candle2.png";
          document.getElementById('item-pocketligher1').remove();
        }
      }
      else if(item == "item-key1")
      {
        if(roomName == "room4"){
          document.getElementById('item-key1').remove(); 
          document.getElementById('item-door1').src = "graphics/rooms/exit/door.jpg";
          document.getElementById('item-door1').addEventListener("click", function() {
            createNewWindow('Кодът за излизане от стаята', 'keypad', 'graphics/rooms/exit/keypad.svg');
          });
        }
      }
      else if(item == "item-lightbulb1")
      {
        if(roomName == "room2"){
          document.getElementById('room2').style.filter = "brightness(100%)";
          document.getElementById('item-lightbulb1').remove();
        }
      }
      else if(item == "item-teddy1"){
        if(document.getElementById('item-bed1').parentNode.id == roomName)
        {
          document.getElementById('item-bed1').src = "graphics/rooms/bedroom/bed-teddy.png";
          document.getElementById('item-teddy1').remove();
          document.getElementById('item-bed1').addEventListener("click", function(){
            createNewWindow('Легло', 'image', 'graphics/rooms/bedroom/bed-teddy-zoom.png');
          });
        }
      }
      else if(item == "item-wateringcan1")
      {
        if(document.getElementById('item-flower1').parentNode.id == roomName)
        {
          document.getElementById('item-flower1').src = "graphics/rooms/office/flower2.png";
          document.getElementById('item-wateringcan1').remove();
        }
      }
      else if(item == "item-apple1")
      {
        if(roomName == "room3")
        {
          document.getElementById('item-apple1').remove();
          // взима правилната купа с плодове
          if(sessionStorage.getItem('fruitbowlNumber') == "1")
          {
            createNewWindow('Интересни букви върху купата', 'image', 'graphics/rooms/kitchen/fruitbowl1.png');
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "2")
          {
            createNewWindow('Интересни букви върху купата', 'image', 'graphics/rooms/kitchen/fruitbowl2.png');
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "3")
          {
            createNewWindow('Интересни букви върху купата', 'image', 'graphics/rooms/kitchen/fruitbowl3.png');
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "4")
          {
            createNewWindow('Интересни букви върху купата', 'image', 'graphics/rooms/kitchen/fruitbowl4.png');
          }
        }
      }
    }
    console.log(item + " добавен към " + event.target.parentNode.id);
  }

  // смяна на стая
  function nextRoom(){ // отиване на следвашата стая
    var numberOfRooms = 4;
    if(document.getElementById('room1').style.display == "block")
    {
      var room = 1;
    }
    else if(document.getElementById('room2').style.display == "block")
    {
      var room = 2;
    }
    else if(document.getElementById('room3').style.display == "block")
    {
      var room = 3;
    }
    else if(document.getElementById('room4').style.display == "block")
    {
      var room = 4;
    }
    else{
      console.log("Грешка");
    }

    if(room == numberOfRooms)
    {
      var room = 1;
    }
    else
    {
      room++
    }
    var roomName = "room" + room;
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
    document.getElementById("room4").style.display = "none";
    document.getElementById(roomName).style.display = "block";
    console.log(roomName + " отворена.");
    document.getElementById('puzzleWindowContainer').innerHTML = '';
  }

  function lastRoom() { // отиване до последната стая
    var numberOfRooms = 4;
    if(document.getElementById('room1').style.display == "block")
    {
      var room = 1;
    }
    else if(document.getElementById('room2').style.display == "block")
    {
      var room = 2;
    }
    else if(document.getElementById('room3').style.display == "block")
    {
      var room = 3;
    }
    else if(document.getElementById('room4').style.display == "block")
    {
      var room = 4;
    }
    else{
      console.log("Грешка");
    }

    if(room == 1)
    {
      var room = numberOfRooms;
    }
    else
    {
      room--
    }
    var roomName = "room" + room;
    document.getElementById("room1").style.display = "none";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
    document.getElementById("room4").style.display = "none";
    document.getElementById(roomName).style.display = "block";
    console.log(roomName + " отворена.");
    document.getElementById('puzzleWindowContainer').innerHTML = '';
  }


  function createNewWindow(title, windowtype, content) {
    if(document.getElementsByClassName('closeWindowBtn')[0] == null)
    {
      var newWindow = document.createElement('div');
      newWindow.className = "puzzleWindow";
      var newtitle = document.createElement('h1');
      newtitle.textContent = title;
      var newCloseBtn = document.createElement('i');
      newCloseBtn.className = "fas fa-times-circle closeWindowBtn";
      newWindow.appendChild(newtitle);
      newWindow.appendChild(newCloseBtn);
      if(windowtype == "image")
      {
        if(event.target.id == "item-pan1")
        {
          var newImage = document.createElement('img');
          newImage.src = content;
          newImage.draggable = false;
          newWindow.appendChild(newImage);
        }
        else
        {
          var newImage = document.createElement('img');
          newImage.src = content;
          newImage.draggable = false;
          newWindow.appendChild(newImage);
        }
      }
      else if(windowtype == "zoom")
      {
        var clickedItem = document.getElementById(event.target.id);
        var newImage = document.createElement('img');
        newImage.src = clickedItem.src;
        newImage.draggable = false;
        newWindow.appendChild(newImage);
      }
      else if(windowtype == "hint")
      {
        var newText = document.createElement('p');
        newText.textContent = content;
        newText.style.fontSize = "24px";
        newWindow.appendChild(newText);
      }
      else if(windowtype == "calendarquiz")
      {
        var newImage = document.createElement('img');
        var newInput = document.createElement('input');
        var newButton = document.createElement('button');
        if(sessionStorage.getItem('calendar1') == 1)
        {
          newImage.src = "graphics/rooms/kitchen/calendar-correct.png";
        }
        else
        {
          newImage.src = content;
        }
        newImage.draggable = false;
        newImage.style.height = "40vw";
        newInput.type = "text";
        newInput.id = "calendarInput";
        newInput.addEventListener("keyup", function() {
          $(newInput).on("keyup", function(e){
            if(e.keyCode == 13)
            {
              if(newInput.value.toUpperCase().includes('СТОКХОЛМ'))
              {
                console.log('Отговорът ' + newInput.value + ' е верен!')
                newInput.value = "";
                newImage.src = "graphics/rooms/kitchen/calendar-correct.png";
                sessionStorage.setItem('calendar1', 1);
              }
              else
              {
                console.log('Отговорът ' + newInput.value + ' е неверен!')
                newInput.value = "";
              }
            }
          });
        });
        newButton.textContent = "✔️";
        newButton.addEventListener("click", function() {
          if(newInput.value.toUpperCase().includes('СТОКХОЛМ'))
          {
            console.log('Отговорът ' + newInput.value + ' е верен!')
            newInput.value = "";
            newImage.src = "graphics/rooms/kitchen/calendar-correct.png";
            sessionStorage.setItem('calendar1', 1);
          }
          else
          {
            console.log('Отговорът ' + newInput.value + ' е неверен!')
            newInput.value = "";
          }
        });
        newWindow.appendChild(newImage);
        newWindow.appendChild(newInput);
        newWindow.appendChild(newButton);
      }
      else if(windowtype == "keypad")
      {
        var newImage = document.createElement('img');
        newImage.src = content;
        newImage.style.height = "40vw";
        var newInput1 = document.createElement('input');
        newInput1.type = "numbers";
        newInput1.required = true;
        newInput1.maxLength = "1";
        newInput1.placeholder = "0";
        newInput1.id = "newInput1";
        newInput1.value = sessionStorage.getItem('yourInput1');
        newInput1.addEventListener("keyup", function() {
          if(newInput1.value.length == '1')
          {
            newInput2.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput2 = document.createElement('input');
        newInput2.type = "numbers";
        newInput2.required = true;
        newInput2.maxLength = "1";
        newInput2.placeholder = "0";
        newInput2.id = "newInput2";
        newInput2.value = sessionStorage.getItem('yourInput2');
        newInput2.addEventListener("keyup", function() {
          if(newInput2.value.length == '1')
          {
            newInput3.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput3 = document.createElement('input');
        newInput3.type = "numbers";
        newInput3.required = true;
        newInput3.maxLength = "1";
        newInput3.placeholder = "0";
        newInput3.id = "newInput3";
        newInput3.value = sessionStorage.getItem('yourInput3');
        newInput3.addEventListener("keyup", function() {
          if(newInput3.value.length == '1')
          {
            newInput4.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput4 = document.createElement('input');
        newInput4.type = "numbers";
        newInput4.required = true;
        newInput4.maxLength = "1";
        newInput4.placeholder = "0";
        newInput4.id = "newInput4";
        newInput4.value = sessionStorage.getItem('yourInput4');
        newInput4.addEventListener("keyup", function() {
          if(newInput4.value.length == '1')
          {
            newInput5.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput5 = document.createElement('input');
        newInput5.type = "numbers";
        newInput5.required = true;
        newInput5.maxLength = "1";
        newInput5.placeholder = "0";
        newInput5.id = "newInput5";
        newInput5.value = sessionStorage.getItem('yourInput5');
        newInput5.addEventListener("keyup", function() {
          if(newInput5.value.length == '1')
          {
            newInput6.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput6 = document.createElement('input');
        newInput6.type = "numbers";
        newInput6.required = true;
        newInput6.maxLength = "1";
        newInput6.placeholder = "0";
        newInput6.id = "newInput6";
        newInput6.value = sessionStorage.getItem('yourInput6');
        newInput6.addEventListener("keyup", function() {
          if(newInput6.value.length == '1')
          {
            newInput7.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newInput7 = document.createElement('input');
        newInput7.type = "numbers";
        newInput7.required = true;
        newInput7.maxLength = "1";
        newInput7.placeholder = "0";
        newInput7.id = "newInput7";
        newInput7.value = sessionStorage.getItem('yourInput7');
        newInput7.addEventListener("keyup", function() {
          if(newInput7.value.length == '1')
          {
            newButton.focus();
          }
          console.log("Отиди на следващото поле за попълване.");
        });
        var newButton = document.createElement('button');
        newButton.textContent = "✔️";
        newButton.addEventListener("click", function() {
          // get correct code
          if(sessionStorage.getItem('fruitbowlNumber') == "1")
          {
            var code1 = "2915746";
            var code2 = "9215764";
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "2")
          {
            var code1 = "6475129";
            var code2 = "6475192";
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "3")
          {
            var code1 = "7529164";
            var code2 = "7592164";
          }
          else if(sessionStorage.getItem('fruitbowlNumber') == "4")
          {
            var code1 = "5764291";
            var code2 = "5764921";
          }
          // проверка на кода
          var yourCode = newInput1.value.toString() + newInput2.value.toString() + newInput3.value.toString() + newInput4.value.toString() + newInput5.value.toString() + newInput6.value.toString() + newInput7.value.toString();
          if(yourCode.toUpperCase().includes(code1) || yourCode.toUpperCase().includes(code2))
          {
            console.log('Отговорът ' + newInput1.value + ' е верен!')
            newInput1.value = "";
            newInput2.value = "";
            newInput3.value = "";
            newInput4.value = "";
            newInput5.value = "";
            newInput6.value = "";
            newInput7.value = "";
            // получаване на резултат
            sessionStorage.setItem('yourTime', sessionStorage.getItem('time'));
            if(localStorage.getItem('highscore') == null)
            {
              localStorage.setItem('highscore', sessionStorage.getItem('yourTime'));
              console.log('Запазен нов рекорд')
            }
            if(localStorage.getItem('highscore') >= sessionStorage.getItem('yourTime'))
            {
              localStorage.setItem('highscore', sessionStorage.getItem('yourTime'));
              console.log('Нов рекорд ' + localStorage.getItem('highscore'));
            }
            else
            {
              console.log('Не постигна нов рекорд.')
            }
            // показване на време
            var showTime1 = sessionStorage.getItem('yourTime') / 60;
            var showTimeMin = Math.floor(showTime1);
            var showTimeSec1 = showTime1.toFixed(2) - showTimeMin;
            var showTimeSec = showTimeSec1 * 60;
            // показване на рекорд
            var showHighscore1 = localStorage.getItem('highscore') / 60;
            var showHighscoreMin = Math.floor(showHighscore1);
            var showHighscoreSec1 = showHighscore1.toFixed(2) - showHighscoreMin;
            var showHighscoreSec = showHighscoreSec1 * 60;
            document.getElementById('yourtime').textContent = 'Време: ' + showTimeMin + ':' + showTimeSec.toFixed(0) + ' мин';
            document.getElementById('highscore').textContent = 'Рекорд: ' + showHighscoreMin + ':' + showHighscoreSec.toFixed(0) + ' мин';
            document.getElementById('hintcounter').textContent = 'Използвани подсказки: ' + sessionStorage.getItem('hints');
            // край на играта
            document.getElementById('room4').style.display = "none";
            document.getElementById('backpack').style.display = "none";
            document.getElementById('controlButtons').style.display = "none";
            document.getElementsByClassName('puzzleWindow')[0].remove();
            document.getElementById('congrats').style.display = "block";

            //добавяне на времето и потребителското име на играча към класацията
            let data = {
              username: localStorage.getItem("username"),
              alltime: showTimeMin + ':' + showTimeSec.toFixed(0)
            }
            fetch("saveRanking.php", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then((response) => {
              localStorage.removeItem('username')
            })
            .catch(err => console.error(err))
            //край
          }
          else
          {
            console.log('Отговорът ' + yourCode + ' е неверен!')
            newInput1.value = "";
            newInput2.value = "";
            newInput3.value = "";
            newInput4.value = "";
            newInput5.value = "";
            newInput6.value = "";
            newInput7.value = "";
          }
        });
        var newTextarea = document.createElement('textarea');
        newTextarea.placeholder = "Тук можете да си записвате бележки...";
        newTextarea.textContent = sessionStorage.getItem('yourTextarea');
        newTextarea.id = "yourTextarea";
        newWindow.appendChild(newInput1);
        newWindow.appendChild(newInput2);
        newWindow.appendChild(newInput3);
        newWindow.appendChild(newInput4);
        newWindow.appendChild(newInput5);
        newWindow.appendChild(newInput6);
        newWindow.appendChild(newInput7);
        newWindow.appendChild(newButton);
        newWindow.appendChild(newTextarea);
      }
      else if(windowtype == "cabinet")
      {
        var newImage = document.createElement('img');
        newImage.src = "graphics/rooms/bedroom/cabinet-open.png";
        newWindow.appendChild(newImage);
        if(sessionStorage.getItem('wateringcan') == 0)
        {
          var newItem = document.createElement('img');
          newItem.src = "graphics/rooms/bedroom/wateringcan.png";
          newItem.id = "item-wateringcan1";
          newItem.draggable = false;
          newItem.style.position = "absolute";
          newItem.style.top = "55%";
          newItem.style.left = "32%";
          newItem.style.width = "17%";
          newItem.addEventListener("click", function() {
            toggleBackpack();
            sessionStorage.setItem('wateringcan', 1);
          });
          newWindow.appendChild(newItem);
        }
      }
      else if(windowtype == "tutorial")
      {
        var newText = document.createElement('p');
        newText.textContent = "Трябва да излезете от стаята възможно най-бързо. Можете да използвате стрелките долу  наляво и надясно, за да превключвате между стаи. Като щракнете върху някои елементи, можете да взаимодействате с тях или да ги събирате. Трябва да откриете седемцифрения таен код и да го въведете на вратата в края. Цифрите са скрити, така че дръжте очите си отворени. В края можете да видите за колко време сте успяли да избягате и да опитате отново, за да подобрите времето си.";
        newWindow.appendChild(newText);
        newWindow.style.background = "#4c2993";
        newWindow.style.color = "#fff";
        newWindow.style.border = "8px solid #fff";
        newWindow.style.textAlign = "left";
        newWindow.style.paddingLeft = "5px";
      }
      document.getElementById("puzzleWindowContainer").appendChild(newWindow);
      
      if(windowtype == "keypad")
      {
        newCloseBtn.addEventListener("click", function(){
          sessionStorage.setItem('yourInput1', document.getElementById('newInput1').value);
          sessionStorage.setItem('yourInput2', document.getElementById('newInput2').value);
          sessionStorage.setItem('yourInput3', document.getElementById('newInput3').value);
          sessionStorage.setItem('yourInput4', document.getElementById('newInput4').value);
          sessionStorage.setItem('yourInput5', document.getElementById('newInput5').value);
          sessionStorage.setItem('yourInput6', document.getElementById('newInput6').value);
          sessionStorage.setItem('yourInput7', document.getElementById('newInput7').value);
          sessionStorage.setItem('yourTextarea', document.getElementById('yourTextarea').value);
          document.getElementsByClassName('puzzleWindow')[0].style.display = "none";
          document.getElementsByClassName('puzzleWindow')[0].remove();
          console.log("Прозорец премахнат");
        });
      }
      else
      {
        newCloseBtn.addEventListener("click", function(){
          document.getElementsByClassName('puzzleWindow')[0].style.display = "none";
          document.getElementsByClassName('puzzleWindow')[0].remove();
          console.log("Прозорец премахнат");
        });
      }
      console.log("Нов прозорец със заглавие " + title + " създаден.");
    }
    console.log("Затвори отворения прозорец, преди да отвориш друг.")
  }

  function removeItem() {
    var item = event.target.id;
    document.getElementById(item).remove();
    console.log(item + " премахнат.");
  }

  function useItemfromBackpack(backpackitem1){
    var backpackitem2 = document.getElementById(backpackitem1);
    var item = event.target.id;
    if(backpackitem2.parentNode.id == "backpack")
    {
      console.log("Предметът, който ти трябва, е в раницата.")
      if(item == "item-fire2"){
        document.getElementById('item-fire1').remove();
        document.getElementById('item-fire2').remove();
      }
      else if(item == "item-candle1")
      {
        document.getElementById('item-candle1').src = "graphics/rooms/bedroom/candle2.png";
        document.getElementById('item-pocketligher1').remove();
      }
      else if(item == "item-door1")
      {
        document.getElementById('item-key1').remove();
        document.getElementById('item-door1').src = "graphics/rooms/exit/door.jpg";
        document.getElementById('item-door1').addEventListener("click", function(){
          createNewWindow('Кодът за излизане от стаята:', 'keypad', 'graphics/rooms/exit/keypad.svg');
        });
      }
      else if(item == "item-lamp1")
      {
        document.getElementById("room2").style.filter = "brightness(100%)";
        document.getElementById('item-lightbulb1').remove();
      }
      else if(item == "item-bed1")
      {
        document.getElementById('item-bed1').src = "graphics/rooms/bedroom/bed-teddy.png";
        document.getElementById('item-teddy1').remove();
        document.getElementById('item-bed1').addEventListener("click", function(){
          createNewWindow('Леглото', 'image', 'graphics/rooms/bedroom/bed-teddy-zoom.png')
        });
      }
      else if(item == "item-flower1")
      {
        document.getElementById('item-flower1').src = "graphics/rooms/office/flower2.png";
        document.getElementById('item-wateringcan1').remove();
      }
    }
    else
    {
      console.log('Трябва да имаш ' + backpackitem1 + ' в раницата си, за да използваш ' + item + '.');
    }
  }

  function playgame() {
    if(localStorage.getItem("username") == null)
      return;
    document.getElementById("room1").style.display = "block";
    document.getElementById("room2").style.display = "none";
    document.getElementById("room3").style.display = "none";
    document.getElementById("room4").style.display = "none";
    document.getElementById("startscreen").style.display = "none";
    document.getElementById("congrats").style.display = "none";
    document.getElementById("backpack").style.display = "block";
    document.getElementById('controlButtons').style.display = "block";
    document.getElementById('help-btn').style.display = "block";
    sessionStorage.setItem('time', 0);
    sessionStorage.setItem('hints', 0);
    sessionStorage.setItem('wateringcan', 0);
    sessionStorage.setItem('calendar1', 0);
    sessionStorage.removeItem('yourInput1');
    sessionStorage.removeItem('yourInput2');
    sessionStorage.removeItem('yourInput3');
    sessionStorage.removeItem('yourInput4');
    sessionStorage.removeItem('yourInput5');
    sessionStorage.removeItem('yourInput6');
    sessionStorage.removeItem('yourInput7');
    sessionStorage.removeItem('yourTextarea');
    var fruitbowl = document.getElementById('item-fruitbowl1');
    var fruitbowlNumber = Math.round(Math.random() * (4 - 1)) + 1;
    sessionStorage.setItem('fruitbowlNumber', fruitbowlNumber);
    fruitbowl.src = "graphics/rooms/kitchen/fruitbowl" + fruitbowlNumber + ".png";
  }

  function timecounter() {
    var time = sessionStorage.getItem('time');
    time++;
    sessionStorage.setItem('time', time);
  }

  function getHint(){
    if(hintsCount > hints.length)
      return;
    createNewWindow(hintsCount, 'hint', hints[hintsCount++]);
  }
