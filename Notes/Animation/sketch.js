var sun;

function preload(){
  sun = loadImage('../assets/sun.png');
}

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  image(sun,100,100);
}
