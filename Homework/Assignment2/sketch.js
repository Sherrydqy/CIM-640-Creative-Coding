
var hairColorDark = ("purple");
var bgColor = ("white");
var eyeOrbitWidth = 22;
var eyeOrbitHeight = 16;
var eyeBallSize = 10;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  background(bgColor);
  noStroke();
  //hair
  ellipseMode(CENTER);
  strokeJoin(ROUND);
  beginShape();
  vertex(773,100);
  vertex(770,55);
  vertex(805,48);
  fill(hairColorDark);
  endShape(CLOSE);
  arc(855,55,115,60,PI,TWO_PI,OPEN);
  beginShape();
  vertex(890,50);
  vertex(900,50);
  bezierVertex(1020,80,830,150,930,200);
  vertex(930,200);
  vertex(890,230);
  vertex(900,60);
  vertex(792,90);
  vertex(800,48);
  endShape();
  //face
  stroke("black");
  strokeWeight(1.7);
  noFill();
  bezier(800,48,780,268,810,200,900,155);
  //eyebrows
  fill("black");
  triangle(790,100,815,103,792,89);
  triangle(865,103,890,100,887,92);
  //eye
  noFill();
  ellipse(802,118,eyeOrbitWidth,eyeOrbitHeight);
  ellipse(874,118,eyeOrbitWidth,eyeOrbitHeight);
  ellipseMode(CORNER);
  fill("black");
  ellipse(798,113,eyeBallSize,eyeBallSize);
  ellipse(869,113,eyeBallSize,eyeBallSize);
  //nose
  noFill();
  strokeJoin(ROUND);
  beginShape();
  vertex(830,122);
  vertex(824,138);
  vertex(826,143);
  endShape();
  //sunglasses
  //mouth
  noFill();
  strokeJoin(MITER);
  beginShape();
  vertex(815,162);
  vertex(836,164);
  vertex(826,186);
  vertex(819,188);
  vertex(818,175);
  endShape();
  //neck
  beginShape();
  vertex(820,200);
  vertex(845,190);
  vertex(842,222);
  vertex(823,227);
  endShape(CLOSE);
  //body
  fill("orange");
  beginShape();
  vertex(780,229);
  vertex(877,218);
  vertex(902,242);
  vertex(955,402);
  vertex(775,425);
  endShape(CLOSE);
}
