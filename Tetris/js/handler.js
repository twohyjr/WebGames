var timerDuration = 50;
var currentTime = 0;

var count=1;

var gameObjects = [];

var currentShape;

function hInit(){
	currentShape = new GameObject();
	gameObjects.push(currentShape);

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

function hRotateShape(){
	currentShape.rotateShape();
}

function hMoveShape(direction){
	switch(direction) {
		case "left":
			currentShape.shiftLeft();
			break;
		case "right":
			currentShape.shiftRight();
			break;
		case "down":
				currentShape.shiftDown();
				break;
	}
}
