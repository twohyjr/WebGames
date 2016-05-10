var timerDuration = 50;
var currentTime = 0;

var count=1;

var gameObjects = [];

function hInit(){
	var x = new GameObject(5,0);
	gameObjects.push(x);

}

function hCheckCollision(){


}

function hTick(){
	resetTextGrid();
		var moveDown = false;
     currentTime++;
     if(currentTime == timerDuration){
          currentTime = 0;
					moveDown = true;
          count++;
     }

		 //Ticks all of the game objects in the game
		 for (var i = 0; i < gameObjects.length; i++) {
			 if(moveDown == true){
				 gameObjects[i].shiftDown();
			 }
			 gameObjects[i].tick();
		 }

		 moveDown = false;
	printGrid();
}

function hRender(){
	for (var i = 0; i < gameObjects.length; i++) {
		gameObjects[i].render(ctx);
	}
}
