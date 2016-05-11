var timerDuration = 50;
var currentTime = 0;

var gameObjects = [];

var currentObject;

function hInit(){
	hAddObject();
}

function hCheckCollision(){

}

function hAddObject(){
	var x = new GameObject();
	gameObjects.push(x);
	currentObject = x;
				currentObject.tick();
}

var count = 0;

function hTick(){

  currentTime++;
	//Every time this is executed the movedown function is called
	if(currentTime == timerDuration){
		var stick = currentObject.checkStickDown();
		if(stick == true){
			hAddObject();
			checkRowRemove();
		}else{
			currentObject.shift("down");
		}
		currentTime = 0;
		count++;
	}
	stick = false;
	//resets the text grid to empty
	resetTextGrid();

	//Ticks all of the game objects in the game
	for (var i = 0; i < gameObjects.length; i++) {
		gameObjects[i].tick();
	}
	//prints all of the values on the grid
	printGrid();
}

function hRender(){
	for (var i = 0; i < gameObjects.length; i++) {
		gameObjects[i].render(ctx);
	}
}

function hMoveShape(direction){
	switch(direction) {
		case "left":
			currentObject.shift("left");
			break;
		case "right":
			currentObject.shift("right");
			break;
		case "down":
			currentObject.shift("down");
			break;
		case "rotate":
			currentObject.rotate();
			break;
		case "quick-down":
			//TODO quick-down
			break;
	}
}

function checkRowRemove(){
	var sCount;
	var removeRows = false;
	var rowsToRemove = [];

	for(var i = 1; i < CELLS_HEIGH + 1; i++){
			 for(var j = 1; j < CELLS_WIDE + 1; j++){
							var value = getGridValue(j,i);
							if(value == "s"){
								sCount++;
							}
			 }
			 if(sCount == 10){
				 removeRows = true;
				 var x = i-1;
				 rowsToRemove.push(x);
			 }
			 sCount = 0;
	}

	var rowsRemovedCount;

	var topRow;

if(removeRows == true){
	rowsRemovedCount = rowsToRemove.length;
	topRow = rowsToRemove[0];
	for(var i = 0; i < rowsToRemove.length; i++){
		var row = rowsToRemove[i];
		removeRow(row);
	}


	shiftAllRowsDown(topRow ,rowsRemovedCount);
}

function shiftAllRowsDown(row,shiftTimes){
	for (var i = 0; i < gameObjects.length; i++) {
		gameObjects[i].shiftAllDown(row,shiftTimes);
	}
}

function removeRow(rowToRemove){
		for (var i = 0; i < gameObjects.length; i++) {
			gameObjects[i].removeCellsAtRow(rowToRemove);
		}
}


}
