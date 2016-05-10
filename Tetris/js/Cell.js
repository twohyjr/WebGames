function Cell(x,y) {
	var xPoint = x;
	var yPoint = y;

	var xPos = xPoint * CELL_SIZE;
	var yPos = yPoint * CELL_SIZE;

    this.tick = function () {
			updateGridValue(xPoint,yPoint,"x");
			printGrid();
    };

		this.render = function(ctx){
			ctx.fillStyle = "blue";
			ctx.fillRect(xPos,yPos,CELL_SIZE,CELL_SIZE);
		}
}
