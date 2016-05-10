function GameObject() {
	var xPoint;
	var yPoint;

	var cells = [];

	var rotateZCount = 0;

    this.tick = function () {
			for (var i = 0; i < cells.length; i++) {
				cells[i].tick();
			}
    };

		this.render = function(ctx){
			for (var i = 0; i < cells.length; i++) {
				cells[i].render(ctx);
			}
		};

		function checkCellSides(){
			for (var i = 0; i < cells.length; i++) {
				cells[i].render(ctx);
			}
		}

		this.shiftDown = function(){
			if(cells[0].checkMoveCell(0,1,0,0) == true &
				 cells[1].checkMoveCell(0,1,0,0) == true &
				 cells[2].checkMoveCell(0,1,0,0) == true &
				 cells[3].checkMoveCell(0,1,0,0) == true){
					 for (var i = 0; i < cells.length; i++) {
						 cells[i].cellDown();
					 }
			}
		};

		this.shiftLeft = function(){
			if(cells[0].checkMoveCell(1,0,0,0) == true &
				 cells[1].checkMoveCell(1,0,0,0) == true &
				 cells[2].checkMoveCell(1,0,0,0) == true &
				 cells[3].checkMoveCell(1,0,0,0) == true){
					 for (var i = 0; i < cells.length; i++) {
		 				cells[i].cellLeft();
		 			}
			}
		};

		this.shiftRight = function(){
			if(cells[0].checkMoveCell(0,0,1,0) == true &
				 cells[1].checkMoveCell(0,0,1,0) == true &
				 cells[2].checkMoveCell(0,0,1,0) == true &
				 cells[3].checkMoveCell(0,0,1,0) == true){
					 for (var i = 0; i < cells.length; i++) {
		 				cells[i].cellRight();
		 			}
			}
		};

		this.rotateShape = function(){
			rotateZShape();
		};

		function createZShape(){
			xPoint = 4;
			yPoint = 0;

			var cell1 = new Cell(xPoint,yPoint);
			var cell2 = new Cell(xPoint + 1,yPoint);
			var cell3 = new Cell(xPoint + 1,yPoint + 1);
			var cell4 = new Cell(xPoint + 2,yPoint + 1);

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		//cell1.moveCell(0,0,0,0) & cell2.moveCell(0,0,0,0) & cell3.moveCell(0,0,0,0) & cell4.moveCell(0,0,0,0)
		function rotateZShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			var canRotate = true;
			switch(rotateZCount) {
    		case 0:
					if(cell1.checkMoveCell(0,0,1,1) == true &
						 cell2.checkMoveCell(0,0,0,0) == true &
						 cell3.checkMoveCell(1,0,0,1) == true &
						 cell4.checkMoveCell(2,0,0,0) == true){

							cell1.cellUp();
	 						cell1.cellRight();

	 						cell3.cellUp();
	 						cell3.cellLeft();

	 						cell4.cellLeft();
	 						cell4.cellLeft();

							rotateZCount++;
					}
        	break;
    		case 1:
				if(cell1.checkMoveCell(1,1,0,0) &
					 cell2.checkMoveCell(0,0,0,0) &
					 cell3.checkMoveCell(0,1,1,0)  &
					 cell4.checkMoveCell(0,0,2,0) ){

						cell1.cellDown();
	 					cell1.cellLeft();

	 					cell3.cellDown();
	 					cell3.cellRight();

	 					cell4.cellRight();
	 					cell4.cellRight();
	 					rotateZCount=0;
					 }
        	break;
				}

		}

		createZShape();
}
