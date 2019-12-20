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


getRMDate = async (e) => {
    e.preventDefault();
    const rand = Math.floor(Math.random()*490)
}

/// https://rickandmortyapi.com/documentation/#javascript