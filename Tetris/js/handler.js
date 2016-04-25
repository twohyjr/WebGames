var timerDuration = 50;
var currentTime = 0;

var x = 1;
var y = 0;

var countD=1;

function hCheckCollision(){


}

function hTick(){
     currentTime++;
     if(currentTime == timerDuration){
          currentTime = 0;
          moveBlocksDown();
          countD++;
     }

}

function hRender(){
     ctx.fillStyle = "blue";
     ctx.fillRect(0,0,40,40);
}
