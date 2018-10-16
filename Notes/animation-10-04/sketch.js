var xPos = 0 ;
var yPos = 0;
var ballSize = 20;
var trigger1 = false;
var trigger2 = false;
var speed = 5;
function setup() {
  createCanvas(windowWidth,windowHeight);
  xPos = width/2;
}
function draw() {
  // put drawing code here
  background(255);
  ellipse(xPos, yPos, ballSize,ballSize);
  if(trigger1 == false){
    yPos += speed;
  }else{
    yPos -= speed;
  }

  if(yPos > height){
    trigger1 = true;
  }
  if(yPos < 0){
    trigger1 = false;
  }
  if(trigger2 == false){
    xPos += speed;
  }else{
    xPos -= speed;
  }

  if(xPos > width){
    trigger2 = true;
  }
  if(xPos < 0){
    trigger2 = false;
  }
}
