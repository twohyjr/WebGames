var running = false;

function doGameLoop(){
	hInit();

     var loop = function() {

          if(running){

               collisionDetection();

               tick();

               render();

               window.requestAnimationFrame(loop, canvas);
          }
      };
      window.requestAnimationFrame(loop, canvas);
}

//Checks each object for collision
function collisionDetection(){
     hCheckCollision();
}

//Updates the maths of each object in the game
function tick() {
     hTick();
}

//Draws the objects to the screen
function render(){
     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
     ctx.save();

     hRender();

     ctx.restore();
}
