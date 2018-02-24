var rider;
var allLines = []
var x = 0;
var z = 0;
var gameStart = false;
var gamePaused = false;
var img;
function setup() {
  createCanvas(600,600);
  rider = new Rider(30,20,200,300,1,2);
  img = loadImage("assets/pause.png")

}
function drawLines(allLines){
  push();
  stroke(255);
  // If there is only one line, draw it
  // Otherwise draw all of the lines currently stored
  if(allLines.length == 1){
    for(let x = 0; x < allLines[0].length-1; x++){
      line(allLines[0][x][0],allLines[0][x][1],allLines[0][x+1][0],allLines[0][x+1][1]);
    }
  }else if(allLines.length > 1){
    for(let i = 0; i < allLines.length;i++){
      for(let x = 0; x < allLines[i].length-1; x++){
        line(allLines[i][x][0],allLines[i][x][1],allLines[i][x+1][0],allLines[i][x+1][1]);
      }
    }
  }
  pop();
}
function draw() {
  background(52);
  drawLines(allLines);
  // Draw and update the rider on the screen
  if(gamePaused && gameStart){
    imageMode(CENTER);
    image(img,300,300,138.929088278,100)
    rider.Stop();
  }else if(gameStart && gamePaused == false){
    rider.Start();
    rider.update();
  }
  else rider.reset();
  rider.show();
}
var mouseArr = [];
function mouseDragged(){
  mouseArr.push([mouseX,mouseY]);
}
function mouseReleased(){
  allLines[z] = mouseArr;
  mouseArr = [];
  z++
}
function keyPressed(){
  if(keyCode === 27){
    allLines = []
    z = 0;
  }
  if(keyCode === 13){
    if(gameStart == true){
      rider.reset()
    } else gameStart = true;
  }
  if(keyCode === 32){
    // If game already paused, unpause
    if(gamePaused == true){
      rider.Start();
      gamePaused = false;
    // Otherwise pause game
    }else{
      rider.Stop();
      gamePaused = true;
    }
  }
}
