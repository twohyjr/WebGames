var startButton = document.getElementById("start-button");

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
    if (!keysDown[38]) {
     //    moveBlocksUp();
    }
  }

  if (e.keyCode == 40) { // P2 pressed down (key: arrow down)
    if (!keysDown[40]) {
     //  moveBlocksDown();
    }
  }

  if (e.keyCode == 37) { // pressed up (key: arrow Left)
   if (!keysDown[37]) {
     //    moveBlocksLeft();
   }
  }

  if (e.keyCode == 39) { // pressed up (key: arrow Right)
   if (!keysDown[39]) {
     //    moveBlocksRight();
   }
  }

  keysDown[e.keyCode] = true;

}, false);

addEventListener("keyup", function (e) {

  delete keysDown[e.keyCode];

}, false);
