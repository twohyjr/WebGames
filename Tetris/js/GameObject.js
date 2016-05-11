function GameObject() {
	var cells = [];
	var rotateCount = 0;
	var shape;
	determineShape();

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

		this.checkStickDown = function() {
			var stick;
			for (var i = 0; i < cells.length; i++) {
				if(cells[i].checkStickDown() == true){
					stick = true;
				}
			}
			if(stick == true){
				setShapeValue("s");
				return true;
			}else{
				return false;
			}
		};

		function setShapeValue(value){
			for (var i = 0; i < cells.length; i++) {
				cells[i].setValue(value);
			}
		};

		this.shift = function(direction){
			var canMove = true;
			for (var i = 0; i < cells.length; i++) {
				if(cells[i].checkShift(direction) == false){
					canMove = false;
				}
			}
			if(canMove == true){
				for (var i = 0; i < cells.length; i++) {
					cells[i].shift(direction);
				}
			}
			canMove = true;
		};

		this.shiftAllDown = function(row,shiftTimes){
			// alert("row: " + row + " , " + "ShiftTimes: " + shiftTimes);
					if(cells.length > 0){
						for(var i = 0; i < cells.length; i++){
							if(cells[i].getRowCount() < row + 1){
								for(var j = 0; j < shiftTimes; j++){
									cells[i].shift("down");
								}
							}
						}
					}
		};


		function determineShape(){
			var numberOfShapes = 7;
			var whichShape = Math.ceil(getRandomArbitrary(0,numberOfShapes));
			// var whichShape = 5;
			switch (whichShape) {
				case 1:
					createZShape();
					shape = "z";
					break;
				case 2:
					createSquareShape();
					shape = "square";
					break;
				case 3:
					createSShape();
					shape = "s";
					break;
				case 4:
					createLineShape();
					shape = "line";
					break;
				case 5:
					createJShape();
					shape = "J";
					break;
				case 6:
					createLShape();
					shape = "L";
					break;
				case 7:
					createTShape();
					shape = "T";
					break;
			}
		}

		this.rotate = function(){
			switch (shape) {
				case "z":
					rotateZShape();
					break;
				case "s":
					rotateSShape();
					break;
				case "line":
					rotateLineShape();
					break;
				case "J":
					rotateJShape();
					break;
				case "L":
					rotateLShape();
					break;
				case "T":
					rotateTShape();
					break;
			}
		};

		this.removeCellsAtRow = function(row){
			for(var i = cells.length - 1; i >= 0; i--){
				if(cells[i].getRowCount() == row + 1){
					cells.splice(i, 1);
				}
			}
		};

		function createJShape(){
			var cell1 = new Cell(7,2,2,"blue");
			var cell2 = new Cell(6,2,2,"red");
			var cell3 = new Cell(5,2,2,"green");
			var cell4 = new Cell(5,1,1,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateJShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:
			 var canMove1 = cell1.checkMoveCell(1,0,0,1);
			 var canMove2 = cell2.checkMoveCell(0,0,0,0);
			 var canMove3 = cell3.checkMoveCell(0,1,1,0);
			 var canMove4 = cell4.checkMoveCell(0,2,0,0);

			 if(canMove1 == true &
				 canMove2 == true &
				 canMove3 == true &
				 canMove4 == true){
					 cell1.moveCell(1,0,0,1);
					 cell2.moveCell(0,0,0,0);
					 cell3.moveCell(0,1,1,0);
					 cell4.moveCell(0,2,0,0);

					 rotateCount++;
				 }


				 break;
			case 1:
			//left down right up
			var canMove1 = cell1.checkMoveCell(1,1,0,0);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(0,0,1,1);
			var canMove4 = cell4.checkMoveCell(0,0,2,0);

			if(canMove1 == true &
				 canMove2 == true &
				 canMove3 == true &
				 canMove4 == true){
					 cell1.moveCell(1,1,0,0);
					 cell2.moveCell(0,0,0,0);
					 cell3.moveCell(0,0,1,1);
					 cell4.moveCell(0,0,2,0);

					 rotateCount++;
				 }

				break;
			case 2:
			var canMove1 = cell1.checkMoveCell(0,1,1,0);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(1,0,0,1);
			var canMove4 = cell4.checkMoveCell(0,0,0,2);

			if(canMove1 == true &
				canMove2 == true &
				canMove3 == true &
				canMove4 == true){
					cell1.moveCell(0,1,1,0);
					cell2.moveCell(0,0,0,0);
					cell3.moveCell(1,0,0,1);
					cell4.moveCell(0,0,0,2);

					rotateCount++;
				}

				break;
			case 3:
			var canMove1 = cell1.checkMoveCell(0,0,1,1);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(1,1,0,0);
			var canMove4 = cell4.checkMoveCell(2,0,0,0);

			if(canMove1 == true &
				canMove2 == true &
				canMove3 == true &
				canMove4 == true){
					cell1.moveCell(0,0,1,1);
					cell2.moveCell(0,0,0,0);
					cell3.moveCell(1,1,0,0);
					cell4.moveCell(2,0,0,0);

					rotateCount=0;
				}

				break;
			}
		}

		function createLShape(){
			var cell1 = new Cell(4,2,2,"blue");
			var cell2 = new Cell(5,2,2,"red");
			var cell3 = new Cell(6,2,2,"green");
			var cell4 = new Cell(6,1,1,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateLShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:
				 var canMove1 = cell1.checkMoveCell(0,1,1,0);
				 var canMove2 = cell2.checkMoveCell(0,0,0,0);
				 var canMove3 = cell3.checkMoveCell(1,0,0,1);
				 var canMove4 = cell4.checkMoveCell(2,0,0,0);

				 if(canMove1 == true &
					 canMove2 == true &
					 canMove3 == true &
					 canMove4 == true){
						 cell1.moveCell(0,1,1,0);
						 cell2.moveCell(0,0,0,0);
						 cell3.moveCell(1,0,0,1);
						 cell4.moveCell(2,0,0,0);

						 rotateCount++;
					 }

				 break;
			case 1:
			var canMove1 = cell1.checkMoveCell(0,0,1,1);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(1,1,0,0);
			var canMove4 = cell4.checkMoveCell(0,2,0,0);

			if(canMove1 == true &
				canMove2 == true &
				canMove3 == true &
				canMove4 == true){
					cell1.moveCell(0,0,1,1);
					cell2.moveCell(0,0,0,0);
					cell3.moveCell(1,1,0,0);
					cell4.moveCell(0,2,0,0);

					rotateCount++;
				}
				break;
			case 2:
			var canMove1 = cell1.checkMoveCell(1,0,0,1);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(0,1,1,0);
			var canMove4 = cell4.checkMoveCell(0,0,2,0);

			if(canMove1 == true &
				canMove2 == true &
				canMove3 == true &
				canMove4 == true){
					cell1.moveCell(1,0,0,1);
					cell2.moveCell(0,0,0,0);
					cell3.moveCell(0,1,1,0);
					cell4.moveCell(0,0,2,0);

					rotateCount++;
				}

				break;
			case 3:
			//left down right up
			var canMove1 = cell1.checkMoveCell(1,1,0,0);
			var canMove2 = cell2.checkMoveCell(0,0,0,0);
			var canMove3 = cell3.checkMoveCell(0,0,1,1);
			var canMove4 = cell4.checkMoveCell(0,0,0,2);

			if(canMove1 == true &
				 canMove2 == true &
				 canMove3 == true &
				 canMove4 == true){
					 cell1.moveCell(1,1,0,0);
					 cell2.moveCell(0,0,0,0);
					 cell3.moveCell(0,0,1,1);
					 cell4.moveCell(0,0,0,2);

					 rotateCount=0;
				 }

				break;
			}
		}

		function createTShape(){
			var cell1 = new Cell(6,1,1,"blue");
			var cell2 = new Cell(7,2,2,"red");
			var cell3 = new Cell(6,2,2,"green");
			var cell4 = new Cell(5,2,2,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateTShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:
			 //left down right up
			 var canMove1 = cell1.checkMoveCell(1,1,0,0);
			 var canMove2 = cell2.checkMoveCell(1,0,0,1);
			 var canMove3 = cell3.checkMoveCell(0,0,0,0);
			 var canMove4 = cell4.checkMoveCell(0,1,1,0);

			 if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(1,1,0,0);
						cell2.moveCell(1,0,0,1);
						cell3.moveCell(0,0,0,0);
						cell4.moveCell(0,1,1,0);

						rotateCount++;
					}

				 break;
			case 1:

				var canMove1 = cell1.checkMoveCell(0,1,1,0);
				var canMove2 = cell2.checkMoveCell(1,1,0,0);
				var canMove3 = cell3.checkMoveCell(0,0,0,0);
				var canMove4 = cell4.checkMoveCell(0,0,1,1);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,1,1,0);
						cell2.moveCell(1,1,0,0);
						cell3.moveCell(0,0,0,0);
						cell4.moveCell(0,0,1,1);

						rotateCount++;
					}
				break;
			case 2:

				var canMove1 = cell1.checkMoveCell(0,0,1,1);
				var canMove2 = cell2.checkMoveCell(0,1,1,0);
				var canMove3 = cell3.checkMoveCell(0,0,0,0);
				var canMove4 = cell4.checkMoveCell(1,0,0,1);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,0,1,1);
						cell2.moveCell(0,1,1,0);
						cell3.moveCell(0,0,0,0);
						cell4.moveCell(1,0,0,1);

						rotateCount++;
					}
				break;
			case 3:

				var canMove1 = cell1.checkMoveCell(1,0,0,1);
				var canMove2 = cell2.checkMoveCell(0,0,1,1);
				var canMove3 = cell3.checkMoveCell(0,0,0,0);
				var canMove4 = cell4.checkMoveCell(1,1,0,0);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(1,0,0,1);
						cell2.moveCell(0,0,1,1);
						cell3.moveCell(0,0,0,0);
						cell4.moveCell(1,1,0,0);

						rotateCount=0;
					}
				break;
			}
		}

		function createLineShape(){
			var cell1 = new Cell(4,1,1,"blue");
			var cell2 = new Cell(5,1,1,"red");
			var cell3 = new Cell(6,1,1,"green");
			var cell4 = new Cell(7,1,1,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateLineShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:
			 //left down right up
			 var canMove1 = cell1.checkMoveCell(0,0,1,1);
			 var canMove2 = cell2.checkMoveCell(0,0,0,0);
			 var canMove3 = cell3.checkMoveCell(1,1,0,0);
			 var canMove4 = cell4.checkMoveCell(2,2,0,0);

			 if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,0,1,1);
						cell2.moveCell(0,0,0,0);
						cell3.moveCell(1,1,0,0);
						cell4.moveCell(2,2,0,0);

						rotateCount++;
					}

				 break;
			case 1:

				var canMove1 = cell1.checkMoveCell(1,1,0,0);
				var canMove2 = cell2.checkMoveCell(0,0,0,0);
				var canMove3 = cell3.checkMoveCell(0,0,1,1);
				var canMove4 = cell4.checkMoveCell(0,0,2,2);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(1,1,0,0);
						cell2.moveCell(0,0,0,0);
						cell3.moveCell(0,0,1,1);
						cell4.moveCell(0,0,2,2);

						rotateCount=0;
					}
					 break;
			}


		}

		function createSquareShape(){
			var cell1 = new Cell(5,1,1,"blue");
			var cell2 = new Cell(6,1,1,"red");
			var cell3 = new Cell(5,2,2,"green");
			var cell4 = new Cell(6,2,2,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function createSShape(){
			var cell1 = new Cell(6,1,1,"blue");
			var cell2 = new Cell(7,1,1,"red");
			var cell3 = new Cell(5,2,2,"green");
			var cell4 = new Cell(6,2,2,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateSShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:

			 var canMove1 = cell1.checkMoveCell(0,0,0,0);
			 var canMove2 = cell2.checkMoveCell(1,0,0,1);
			 var canMove3 = cell3.checkMoveCell(0,0,2,0);
			 var canMove4 = cell4.checkMoveCell(0,0,1,1);

			 if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,0,0,0);
						cell2.moveCell(1,0,0,1);
						cell3.moveCell(0,0,2,0);
						cell4.moveCell(0,0,1,1);

						rotateCount++;
					}

				 break;
			case 1:

				var canMove1 = cell1.checkMoveCell(0,0,0,0);
				var canMove2 = cell2.checkMoveCell(0,1,1,0);
				var canMove3 = cell3.checkMoveCell(2,0,0,0);
				var canMove4 = cell4.checkMoveCell(1,1,0,0);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,0,0,0);
						cell2.moveCell(0,1,1,0);
						cell3.moveCell(2,0,0,0);
						cell4.moveCell(1,1,0,0);

						rotateCount=0;
					}
					 break;
			}


		}

		function createZShape(){
			var cell1 = new Cell(5,1,1,"blue");
			var cell2 = new Cell(6,1,1,"red");
			var cell3 = new Cell(6,2,2,"green");
			var cell4 = new Cell(7,2,2,"orange");

			cells.push(cell1);
			cells.push(cell2);
			cells.push(cell3);
			cells.push(cell4);
		}

		function rotateZShape(){
			var cell1 = cells[0];
			var cell2 = cells[1];
			var cell3 = cells[2];
			var cell4 = cells[3];

			switch (rotateCount) {
			 case 0:

			 var canMove1 = cell1.checkMoveCell(0,0,1,1);
			 var canMove2 = cell2.checkMoveCell(0,0,0,0);
			 var canMove3 = cell3.checkMoveCell(1,0,0,1);
			 var canMove4 = cell4.checkMoveCell(2,0,0,0);

			 if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(0,0,1,1);
						cell2.moveCell(0,0,0,0);
						cell3.moveCell(1,0,0,1);
						cell4.moveCell(2,0,0,0);

						rotateCount++;
					}

				 break;
			case 1:

				var canMove1 = cell1.checkMoveCell(1,1,0,0);
				var canMove2 = cell2.checkMoveCell(0,0,0,0);
			  var canMove3 = cell3.checkMoveCell(0,1,1,0);
				var canMove4 = cell4.checkMoveCell(0,0,2,0);

				if(canMove1 == true &
					canMove2 == true &
					canMove3 == true &
					canMove4 == true){
						cell1.moveCell(1,1,0,0);
						cell2.moveCell(0,0,0,0);
						cell3.moveCell(0,1,1,0);
						cell4.moveCell(0,0,2,0);

						rotateCount=0;
					}
					 break;
			}


		}
}



function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
