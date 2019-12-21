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
  console.log(urlRM);
  fetch(urlRM)
    .then(res => res.json())
    .then(res => console.log("success!", res))
    // .then(res => console.log(res.name))
    // .then(document.getElementById('rmName').innerHTML='res.name')
    .catch(err => console.log("something went wrong...", err));
};

getPokeDate = async => {
  const randPm = Math.floor(Math.random() * 360);
  const urlPm = `https://pokeapi.co/api/v2/pokemon/${randPm}`;
  console.log(urlPm);
  fetch(urlPm)
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("success!", res);
    })
    .catch(err => {
      console.log("something went wrong...", err);
    });
};
