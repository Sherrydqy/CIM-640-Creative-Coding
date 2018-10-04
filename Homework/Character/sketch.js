
var hairColorDark = ("purple");
var bgColor = ("black");
var eyeOrbitWidth = 22;
var eyeOrbitHeight = 16;
var eyeBallSize = 10;
var imgGuitar;
var initI,initJ;
var r,g,b;


function preload(){
  imgGuitar = loadImage('../addons/guitar.png');

}
function setup() {
  // put setup code here
    createCanvas(windowWidth,windowHeight);

}

function draw() {

  background(r,g,b);
  stroke("white");
  fill("white");

  var skinColor = color(250,236,241,255);
  var skinColorDark = color(204,154,161,200);
  var pantsColor = color(59,117,151,255);

  // put drawing code here

  /*fill("white");
  ellipse(150,150,70,70);
*/

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
  fill(skinColor);
  noStroke();
  strokeWeight(1.7);
  //noFill();
  beginShape();
  vertex(792,90);
  bezierVertex(780,268,810,200,900,155);
  vertex(900,60);
  endShape();
  //eyebrows
  stroke("black");
  fill("black");
  triangle(790,100,815,103,792,89);
  triangle(865,103,890,100,887,92);
  //eye
  fill("white");
  ellipse(802,118,eyeOrbitWidth,eyeOrbitHeight);
  ellipse(874,118,eyeOrbitWidth,eyeOrbitHeight);
  ellipseMode(CORNER);
  fill("black");
  ellipse(798,113,eyeBallSize,eyeBallSize);
  ellipse(869,113,eyeBallSize,eyeBallSize);
  //nose
  noFill();
  beginShape();
  vertex(830,122);
  vertex(824,138);
  vertex(826,143);
  endShape();
  //sunglasses
  //mouth
  noFill();
  beginShape();
  vertex(815,162);
  vertex(836,164);
  vertex(826,186);
  vertex(819,188);
  vertex(818,175);
  endShape();
  //neck
  noStroke();
  fill(skinColor);
  beginShape();
  vertex(820,200);
  vertex(845,190);
  vertex(842,222);
  vertex(823,227);
  endShape(CLOSE);

  //body
  noStroke();
  fill("orange");
  beginShape();
  vertex(780,229);
  vertex(877,218);
  vertex(902,242);
  vertex(907,402);
  vertex(775,425);
  endShape(CLOSE);
  //pants
  fill(pantsColor);
  beginShape();
  vertex(898,404);
  vertex(944,692);
  vertex(832,692);
  vertex(835,455);
  vertex(807,692);
  vertex(690,690);
  vertex(760,420);
  endShape();
  //right arm
  fill("orange");
  beginShape();
  vertex(902,242);
  vertex(904,318);
  vertex(953,375);
  vertex(1002,379);
  endShape();
  //guitar
  image(imgGuitar,630,250,500,280);

  //right hand
  push();
  translate(932,360);
  rotate(PI+HALF_PI+PI/3);
  fill(skinColor);
  rect(3,-37,40,45,6);

  translate(70,30);
  rotate(-HALF_PI);
  rect(36,-28,7,14,60);
  pop();
  //resetMatrix();
  //right arm - another half
  fill("orange");
  translate(932,360);
  rotate(PI+HALF_PI+PI/3);
  rect(0,0,50,60,3);
  //left hand
  fill(skinColor);
  resetMatrix();
  translate(725,372);
  rotate(PI+HALF_PI+PI/3);
  rect(0,0,45,57,7);
  rect(48,16,6,17,7);
  strokeWeight("2.5")
  line()
  //left arm
  strokeWeight("1");
  fill("orange");
  resetMatrix();
  beginShape();
  vertex(740,249);
  vertex(780,230);
  vertex(795,252);
  vertex(745,340);
  vertex(800,360);
  vertex(710,377);
  vertex(675,330);
  endShape(CLOSE);

  //shoes

}
