var CELL_SIZE = 40;
var CELLS_WIDE = 10;
var CELLS_HEIGH = 20;

var CANVAS_WIDTH = CELL_SIZE * CELLS_WIDE;
var CANVAS_HEIGHT = CELL_SIZE * CELLS_HEIGH;

var canvas;
var ctx,gridCtx;
var isVisible = true;

function createCanvas(){
     //main game board creation
     canvas = document.createElement("canvas");
     ctx = canvas.getContext("2d");
     canvas.width = CANVAS_WIDTH;
     canvas.height = CANVAS_HEIGHT;
     canvas.style.background = "#121212";
     document.body.appendChild(canvas);

     //Grid that overlays the game board
     var grid = document.createElement("canvas");
     gridCtx = grid.getContext("2d");
     grid.width = CANVAS_WIDTH + 1;
     grid.height = CANVAS_HEIGHT + 1;
     document.body.appendChild(grid);
}

function drawGrid(){
  if(isVisible == true){
    for (var x = 0; x <= CANVAS_WIDTH; x += CELL_SIZE) {
        gridCtx.moveTo(0.5 + x, 0);
        gridCtx.lineTo(0.5 + x, CANVAS_HEIGHT);
    }
    for (var x = 0; x <= CANVAS_HEIGHT; x += CELL_SIZE) {
        gridCtx.moveTo(0, 0.5 + x);
        gridCtx.lineTo(CANVAS_WIDTH, 0.5 + x);
    }
    gridCtx.strokeStyle = "white";
    gridCtx.stroke();
  }

}
