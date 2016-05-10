function GameObject(x,y) {
	var xPoint = x;
	var yPoint = y;

	var xPos = xPoint * CELL_SIZE;
	var yPos = yPoint * CELL_SIZE;

	var cells = [];

    this.tick = function () {
			for (i = 0; i < cells.length; i++) {
				cells[i].tick();
			}
    };

		this.render = function(ctx){
			for (i = 0; i < cells.length; i++) {
				cells[i].render(ctx);
			}
		};

		this.shiftDown = function(){

		};

		function createShapes(){
			var cell1 = new Cell(xPoint,yPoint);
			var cell2 = new Cell(xPoint,yPoint + 1);
			var cell3 = new Cell(xPoint - 1,yPoint + 1);
			var cell4 = new Cell(xPoint - 1,yPoint + 2);

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		createShapes();
}