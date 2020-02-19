console.log("Brian Loveless");

/// random color in top

function randoColorSpot() {
  var color = ["red", "blue", "yellow", "orange", "hotpink", "green"];
  var rand = color[Math.floor(Math.random() * color.length)];
  document.getElementById("clickBait").style.backgroundColor = rand;
}

/// just the tip

/// set bill amount from input field

// function for 15% of input
// function for 20% of input
// function for 25% of input
console.log("bill");
/// no - have 1 button that sets bill
// and returns all 3 amounts
/// input bill
/// on click - bill as html and all 3 tip amounts
document.getElementById("billSet").addEventListener("click", function(event) {
  event.preventDefault();
});

function setBill() {
  let fif = document.getElementById("tip15");
  let twen = document.getElementById("tip20");
  let twfv = document.getElementById("tip25");
  let check = document.getElementById("amount").value;

  if (check <= 0) {
    alert("please enter a whole positive bill amount");
  } else {
    // return check times %'s...

    var totalFif = check * 0.15;
    tFif = Math.round(totalFif * 100) / 100;
    fif.textContent = tFif;

    var totalTwen = check * 0.2;
    tTwen = Math.round(totalTwen * 100) / 100;
    twen.textContent = tTwen;

    var totalTwenFv = check * 0.25;
    tTwFv = Math.round(totalTwenFv * 100) / 100;
    twfv.textContent = tTwFv;
  }
}

/// bulb switch is just the picture changing - js on html file

// same for the get date / clear the date hah ha dad joke / sad joke under the bulb

// red square down
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

// red rectangle scratch
function mDown(obj) {
  obj.style.backgroundColor = "rgb(245, 170, 65)";
  obj.innerHTML = "AHHH THATS SO GOOOD!!!";
}
// after scratch
function mUp(obj) {
  obj.style.backgroundColor = "rgb(23, 145, 48)";
  obj.innerHTML = "Thank You very much for that scratch";
}


console.log("RM TESTING");

function getRM() {
  let rand = Math.floor(Math.random() * 490);
  const urlRM = `https://rickandmortyapi.com/api/character/`;
  console.log(`${urlRM}${rand}`);
  fetch(`${urlRM}${rand}`)
    .then(results => {
      return results.json();
    })
    .then(displayResults);
}

function displayResults(results) {
  console.log(results);
  let name = document.getElementById("rmName");
  name.innerText = `NAME: ${results.name}`;
  let type = document.getElementById("rmSpecies");
  type.innerText = `type: ${results.species}`;
  let pic = document.getElementById("rmPic");
  pic.src = `${results.image}`;
  pic.style.display = "block";
  let gender = document.getElementById("rmGender");
  gender.innerText = `gender = ${results.gender}`;
}

/// works to console log
function getDatePoke() {
  const randPm = Math.floor(Math.random() * 360);
  const urlPm = `https://pokeapi.co/api/v2/pokemon/${randPm}`;

  console.log(urlPm);
  fetch(urlPm)
    .then(res => {
      return res.json();
    })
    .then(showPokemon)
    .catch(err => {
      console.log("something went wrong...", err);
    });
}

function showPokemon(res) {
  console.log(res);
  let name = document.getElementById("pkName");
  name.innerText = `Catch yourself a  ${res.name}`;
  let experience = document.getElementById("pkExp");
  experience.innerText = ` With ${res.base_experience} as base experience`;
  let weight = document.getElementById("pkWeight");
  weight.innerText = `Weighing in at ${res.weight} pounds`;
  let photo = document.getElementById("pkPic");
  photo.src = `${res.sprites.front_default}`;
  photo.style.display = "block";
  photo.style.width = '300px'
  
}
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

/// the end ...... or is it?

var i = 0;
var txt =
  "This is the end of my fun with JavaScript site.  I hope You have enjoyed it. There will be more. ...  ";
var speed = 120;
// higher speed = slower typing
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("theEnd").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
