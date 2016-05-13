var canvas,nextCanvas,scoreCanvas;
var ctx,gridCtx,nextCtx,scoreCtx;
var isVisible = true;

function createCanvas(){
     //main game board creation
     canvas = document.createElement("canvas");
     ctx = canvas.getContext("2d");
     canvas.id = "game-canvas";
     canvas.width = CANVAS_WIDTH;
     canvas.height = CANVAS_HEIGHT;
     canvas.style.background = "#121212";
     document.body.appendChild(canvas);

     //Grid that overlays the game board
     var grid = document.createElement("canvas");
     grid.id = "grid";
     gridCtx = grid.getContext("2d");
     grid.width = CANVAS_WIDTH + 1;
     grid.height = CANVAS_HEIGHT + 1;
     document.body.appendChild(grid);

     //Next display for showing next peice
     nextCanvas = document.getElementById("next-canvas");
     nextCtx = nextCanvas.getContext("2d");


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
    gridCtx.strokeStyle = "grey";
    gridCtx.stroke();
  }

}
