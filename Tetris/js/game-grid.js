var newParagraph;
var grid;

function createDisplay(){
     newParagraph = document.createElement('p');
     document.getElementById("test").appendChild(newParagraph);
}

function resetTextGrid(){
     grid = new Array(CELLS_HEIGH);
     for (var i = 0; i < CELLS_HEIGH + 2; i++) {
          grid[i] = new Array(CELLS_WIDE + 2);
     }

     for(var i = 0; i < CELLS_HEIGH + 2; i++){
          for(var j = 0; j < CELLS_WIDE + 2; j++){
               if(j == 0 || j == CELLS_WIDE + 1){
                    grid[i][j] = "#";
               }else if (i == 21 | i == 0) {
                    grid[i][j] = "#";
               }else{
                    grid[i][j] = 0;
               }
          }
     }
}

//x = rows   y = columns
function updateGridValue(x,y,value){
     grid[y+1][x + 1] = value;
}

function getGridValue(x,y){
  return grid[y][x];
}

//Prints out the updated grid
function printGrid(){

     var gridText = "";
     for(var i = 0; i < CELLS_HEIGH + 2; i++){
          for(var j = 0; j < CELLS_WIDE + 2; j++){
               gridText += " " + grid[i][j];
          }
          gridText += "<br>";
     }

     newParagraph.innerHTML = gridText;
}

createDisplay();
resetTextGrid();
printGrid();
