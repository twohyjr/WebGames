var timerDuration = 50;
var currentTime = 0;

var gameObjects = [];

var currentObject;

var nextPieceObject;

var nextPieceName;

var gameStarted = false;

function hInit(){
	nextPieceObject = new GameObject();
	hAddObject();

}

function hCheckCollision(){

}

function hSetGameStarted(isStarted){
	gameStarted = true;
	drawNext();
}

function hAddObject(){
	currentObject = nextPieceObject;
	gameObjects.push(currentObject);
	currentObject.tick();

	nextPieceObject = new GameObject();
	nextPieceName = nextPieceObject.getShapeTitle();
	drawNext();
}

//Draws all of the next pieces on the screen
function drawNext(){

if(gameStarted == true){
		nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);
	switch (nextPieceName) {
		case "O":
			nextCtx.fillStyle = OCOLOR;
			nextCtx.fillRect(110,30,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(110 + (CELL_SIZE + 2),30,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(110 ,30 + (CELL_SIZE + 2),CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(110 + (CELL_SIZE + 2),30 + (CELL_SIZE + 2),CELL_SIZE,CELL_SIZE);
		break;
		case "I":
			nextCtx.fillStyle = ICOLOR;
			nextCtx.fillRect(70,50,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(70 + (CELL_SIZE * 1) + 2,50,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(70 + (CELL_SIZE * 2) + 4,50,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(70 + (CELL_SIZE * 3) + 6,50,CELL_SIZE,CELL_SIZE);
			break;
		case "J":
			nextCtx.fillStyle = JCOLOR;
			nextCtx.fillRect(80,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80 + (CELL_SIZE * 1) + 2,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80 + (CELL_SIZE * 2) + 4,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80,70 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			break;

		case "L":
			nextCtx.fillStyle = LCOLOR;
			nextCtx.fillRect(80,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80 + (CELL_SIZE * 1) + 2,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80 + (CELL_SIZE * 2) + 4,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(80 + (CELL_SIZE * 2) + 4,70 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			break;
		case "T":
			nextCtx.fillStyle = TCOLOR;
			nextCtx.fillRect(90,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 1) + 2,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 2) + 4,70,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + CELL_SIZE + 2,70 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			break;
		case "S":
			nextCtx.fillStyle = SCOLOR;
			nextCtx.fillRect(90,75,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 1) + 2,75,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 2) + 4,75 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + CELL_SIZE + 2,75 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			break;
		case "Z":
			nextCtx.fillStyle = ZCOLOR;
			nextCtx.fillRect(90,75 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 1) + 2,75,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + (CELL_SIZE * 2) + 4,75,CELL_SIZE,CELL_SIZE);
			nextCtx.fillRect(90 + CELL_SIZE + 2,75 - CELL_SIZE - 2,CELL_SIZE,CELL_SIZE);
			break;
	}
}

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
