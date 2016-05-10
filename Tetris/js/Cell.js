function Cell(x,y) {
	var cellXPoint = x;
	var cellYPoint = y;

	var cellXPos = cellXPoint * CELL_SIZE;
	var cellYPos = cellYPoint * CELL_SIZE;

    this.tick = function () {
			cellXPos = cellXPoint * CELL_SIZE;
			cellYPos = cellYPoint * CELL_SIZE;
			updateGridValue(cellXPoint,cellYPoint,"x");
    };

		this.render = function(ctx){
			ctx.fillStyle = "blue";
			ctx.fillRect(cellXPos,cellYPos,CELL_SIZE,CELL_SIZE);
		};

		this.cellUp = function(){
			cellYPoint--;
		};

		this.cellDown = function(){
			cellYPoint++;
		};

		this.cellLeft = function(){
			cellXPoint--;
		};

		this.cellRight = function(){
			cellXPoint++;
		};


		this.checkMoveCell = function(leftCount,downCount,rightCount,upCount){
			var xCheck = (rightCount - leftCount) + cellXPoint + 1;
			var yCheck = (downCount - upCount) + cellYPoint + 1;
			var gridValue = getGridValue(xCheck,yCheck);
			if(gridValue == "#"){
				return false;
			}else{
				return true;
			}
		}
}
