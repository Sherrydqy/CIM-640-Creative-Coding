var curImage, sun, moon;

function preload(){
  sun = loadImage("../assets/sun.png")
}

function setup() {
  // put setup code here
  createCanvas(windowsWidth,windowsHeight);
}

function draw() {
  // put drawing code here
  image(sun, 100,100);

}
