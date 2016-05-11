function Cell(x,y,rowCount,color) {
	var cellXPoint = x;
	var cellYPoint = y;

	var cellXPos;
	var cellYPos;

	var row = rowCount;

	var currentValue = "x";

	// var display = "point";
	// var display = "row";
	var display = "none";

    this.tick = function () {
			cellXPos = (cellXPoint - 1) * CELL_SIZE;
			cellYPos = (cellYPoint - 1) * CELL_SIZE;
			updateGridValue(cellXPoint,cellYPoint,currentValue);
    };

		this.render = function(ctx){

			ctx.fillStyle = color;
			ctx.fillRect(cellXPos,cellYPos,CELL_SIZE,CELL_SIZE);
			ctx.fillStyle = "white";
			ctx.font = "12px serif";
			switch (display) {
				case "point":
					ctx.fillText("(" + cellXPoint+ "," + cellYPoint +")", cellXPos + 10, cellYPos + 20);
					break;
				case "row":
					ctx.fillText("Row " + row , cellXPos + 1, cellYPos + 20);
					break;
				case "row":

					break;
			}
		};

		this.shift = function(direction){
			switch (direction) {
				case "up":
					cellYPoint--;
					row--;
					break;
				case "down":
					cellYPoint++;
					row++;
					break;
				case "left":
					cellXPoint--;
					break;
				case "right":
					cellXPoint++;
					break;
				case "rotate":
					//TODO rotate the cells
					break;
			}
		};

		this.checkShift = function(direction){
			var positionLetter;
			switch (direction) {
				case "up":
					positionLetter = getGridValue(cellXPoint,cellYPoint - 1);
					break;
				case "left":
					positionLetter = getGridValue(cellXPoint - 1,cellYPoint);
					break;

				case "right":
					positionLetter = getGridValue(cellXPoint + 1,cellYPoint);
					break;

				case "down":
					positionLetter = getGridValue(cellXPoint,cellYPoint + 1);
					break;
			}
			if(positionLetter == '#' | positionLetter == 's' | positionLetter == 'f'){
				return false;
			}else{
				return true;
			}
		};

		this.getRowCount = function(){
			return row;
		}

		this.setValue = function(value){
			currentValue = value;
			updateGridValue(cellXPoint,cellYPoint,currentValue);
		};

		this.checkStickDown = function() {
			var underLetter = getGridValue(cellXPoint,cellYPoint + 1);
			if(underLetter == "f" | underLetter == "s"){
				return true;

			}else{
				return false;
			}
		};

		this.checkMoveCell = function(leftCount,downCount,rightCount,upCount){
				var xCheck = (rightCount - leftCount) + cellXPoint;
				var yCheck = (downCount - upCount) + cellYPoint;
				var gridValue = getGridValue(xCheck,yCheck);
				if(gridValue == "#" | gridValue == "s"){
					return false;
				}else{
					return true;
				}
		};

		this.moveCell = function(leftCount,downCount,rightCount,upCount){
			for(var i = 0; i < leftCount; i++){
				this.shift("left");
			}

			for(var i = 0; i < downCount; i++){
				this.shift("down");
			}

			for(var i = 0; i < rightCount; i++){
				this.shift("right");
			}

			for(var i = 0; i < upCount; i++){
				this.shift("up");
			}

		};
}
