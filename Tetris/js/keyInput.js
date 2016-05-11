var startButton = document.getElementById("start-button");

//Button press on the screen
function StartPressed() {
     if(running == false){
          running = true;
          startButton.innerHTML = "PAUSE";
          doGameLoop();

     }else{
          currentTime = 0;
          running = false;
          startButton.innerHTML = "START";
     }
}

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {

  if (e.keyCode == 38) { //pressed up (key: arrow Up)
      hMoveShape("rotate");
  }

  if (e.keyCode == 40) { // P2 pressed down (key: arrow down)
    hMoveShape("down");
  }

  if (e.keyCode == 37) { // pressed left (key: arrow Left)
    hMoveShape("left");
  }

  if (e.keyCode == 39) { // pressed right (key: arrow Right)
    hMoveShape("right");
  }

  // if (e.keyCode == 39) { // pressed space (key: arrow space)
  //   //TODO quickly move the shape down
  // }

  keysDown[e.keyCode] = true;

}, false);

addEventListener("keyup", function (e) {

  delete keysDown[e.keyCode];

}, false);
