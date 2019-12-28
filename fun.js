console.log("Brian Loveless");

function randoColorSpot() {
  var color = ["red", "blue", "yellow", "orange", "hotpink", "green"];
  var rand = color[Math.floor(Math.random() * color.length)];
  document.getElementById("clickBait").style.backgroundColor = rand;
}

function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

function mDown(obj) {
  obj.style.backgroundColor = "rgb(40, 170, 46)";
  obj.innerHTML = "AHHH THATS SO GOOOD!!!";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You very much for that scratch";
}

console.log("RM TESTING");
/// https://rickandmortyapi.com/documentation/#javascript

getRMDate = async => {
  const rand = Math.floor(Math.random() * 490);
  const urlRM = `https://rickandmortyapi.com/api/character/${rand}`;
  let name = document.getElementById("rmName");
  let type = document.getElementById("rmSpecies");
  let pic = document.getElementById("rmPic");
  console.log(urlRM);
  fetch(urlRM)
    .then(res => res.json())
    .then(data => {
      return res.json();
      console.log(data.name)
    })

    .then(res => console.log("success!", res))
    // .then(res => {
    //   return res.json;
    // })

    // data = res.json;

    // .then(res => {
    //   console.log(res.json);
    //   data = res.json;
    // })
    // .then(console.log(res.name))
    // .then(res => console.log(data.name))
    // .then((document.getElementById("rmName").innerHTML = "res.name"))
    .catch(err => console.log("something went wrong...", err));
};

function getPokeDate() {
  const randPm = Math.floor(Math.random() * 360);
  const urlPm = `https://pokeapi.co/api/v2/pokemon/${randPm}`;
  let reqwest = new XMLHttpRequest();
  reqwest.open("GET", urlPm);
  reqwest.responseType = "json";
  reqwest.send();

  reqwest.onload = function() {
    const pokeInfo = reqwest.response;
    const pokeDates = JSON.parse(pokeInfo);
    console.log(pokeDates);
    //showPoke(PokeDates);
  };
}

const pokeName = document.getElementById("pkName");
function showPoke(jsonPoke) {
  pokeName.textContent = jsonPoke["name"];
}

getDatePoke = async => {
  const randPm = Math.floor(Math.random() * 360);
  const urlPm = `https://pokeapi.co/api/v2/pokemon/${randPm}`;

  console.log(urlPm);
  fetch(urlPm)
    .then(res => res.json())
    .then(res => {
      console.log("success!", res);
    })
    .catch(err => {
      console.log("something went wrong...", err);
    });
};

/// mozilla json heroes
function needAHero() {
  let requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "text";
  request.send();

  request.onload = function() {
    const superHeroesText = request.response;
    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes);
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  };
}

const foot = document.querySelector("footer");
const section = document.querySelector("section");

function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  foot.appendChild(myH1);
  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  foot.appendChild(myPara);
}

function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];
  for (let i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");
    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";
    const superPowers = heroes[i].powers;
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
  }
}
