var posx=0;
var posy=0;
var tsize=100;
var colors="green";

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(0);
  display();
}

function display(){

  fill(colors);
  ellipse(posx,posy,tsize,tsize);
}
