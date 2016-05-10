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
}
