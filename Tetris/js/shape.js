var shape = function(x,y){
     var xPos = x;
     var yPos = y;

     var xCanvas = 0, yCanvas = 0;

     tick = function(){
          xCanvas = xPos * CELL_SIZE;
          yCanvas = yPos * CELL_SIZE;

     };

     render = function(){
          ctx.fillStyle = "blue";
          ctx.fillRect(xCanvas,yCanvas,CELL_SIZE,CELL_SIZE);
     };

     checkBounds = function(){
          console.log("Checking");
     };
}
