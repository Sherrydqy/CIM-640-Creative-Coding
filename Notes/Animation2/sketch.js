var sun;
var moon;
var r = 255;
var g = 255;
var b = 255;
var cX = 700;
var cY = 700;
var rectX = 400;
var rectY = 400;
var rectSize = 200;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function preload(){
  sun = loadImage('../assets/sun.png');
  moon = loadImage('../assets/moon.png');
}
function draw() {
  // put drawing code here
  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
  imageMode(CENTER);// start to draw your image from teh center of it
  image(sun,cX,cY,sun.width/4,sun.height/4); // image的cx，cy is the coordinate of the upper left corner
}

function mousePressed(){
  if(mouseX > rectX && mouseX < rectX+rectSize && mouseY > rectY && mouseY < rectY+rectSize){
    r = random(0,256);
    g = random(0,256);
    b = random(0,256);
  }

}
