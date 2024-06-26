const gamesContainer = document.querySelector('.gamecontainer');

// Fetch the games data from a JSON file
fetch('/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if(localStorage.getItem(game.name) == "pinned") {
        const gasmeEl = document.createElement('li');
        gasmeEl.innerHTML = `
        <div class="gamecard" data-category="${game.categories}">
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
            <img title='${game.name}' src="${game.img}" class="gameimage"/>
            </a>
            <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
                <div class="gameinfo">
                    <b>
                        <p class="gamename">${game.name}</p>
                    </b>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasmeEl);
      }
      
      const gameE = document.createElement('li');
      gameE.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
          <img title='${game.name}' src="${game.img}" class="gameimage"/>
          </a>
          <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${game.name}</p>
                  </b>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameE);
    });
  })
  .catch(error => {
    // Fetch the games data from a JSON file
fetch('/js/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    games.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    // Loop through each game and create a new game element for it
    games.forEach((game) => {
      if(localStorage.getItem(game.name) == "pinned") {
        const gasme = document.createElement('li');
        gasme.innerHTML = `
        <div class="gamecard" data-category="${game.categories}">
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
            <img title='${game.name}' src="${game.img}" class="gameimage"/>
            </a>
            <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
            <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
                <div class="gameinfo">
                    <b>
                        <p class="gamename">${game.name}</p>
                    </b>
                </div>
            </a>
        </div>
        `;
        document.querySelector('.pinned').appendChild(gasme);
      }
      
      const gameEll = document.createElement('li');
      gameEll.innerHTML = `
      <div class="gamecard" data-category="${game.categories}">
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
          <img title='${game.name}' src="${game.img}" class="gameimage"/>
          </a>
          <i title="pin!" onclick="pin('${game.name}');" style="color:white;" class="fa fa-map-pin" aria-hidden="true"></i>
          <a onclick="localStorage.setItem('currentgamedesc', '${game.desc}'); localStorage.setItem('currentgame', '${game.url}'); localStorage.setItem('currentgamename', '${game.name}'); localStorage.setItem('currentgamecheat', '${game.cheat}'); location.href='play.html';">
              <div class="gameinfo">
                  <b>
                      <p class="gamename">${game.name}</p>
                  </b>
              </div>
          </a>
      </div>
      `;
      document.querySelector('.gamecontainer').appendChild(gameEll);
    });
  })
  })
 
function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("gamecard");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");
    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function pin(name)  {
  if (localStorage.getItem(name) == "pinned") {
    localStorage.setItem(name, "");
  } else {
    localStorage.setItem(name, "pinned");
  }
}
