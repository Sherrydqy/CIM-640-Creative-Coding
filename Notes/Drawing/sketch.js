var a = 1;
var b = "mapper";
var trueFalse = true; // trueFalse follow camel case
var chartColor = "blue";
var eyeSize = 40;
var facePosX = 200;
var facePosY = 200;
var eyeSize = 50;

function setup() {
  // put setup code here
  createCanvas(1400,800);// (width,height)
  background(0);
  background(123,123,123);
  background("orange");
  console.log(a*2);//num * character = NaN
}

function draw() {// the draw function is an endless loop, it keeps drawing on the canvas over and over again.
                 //
  // put drawing code here
  background(0);
  facePosX = mouseX; //mouseX, mouseY 是当前鼠标所处坐标, draw 函数是个自动无限的loop，所以会不断地stamp在你的canvas上~
  facePosY = mouseY;
  ellipse(facePosX, facePosY, eyeSize, eyeSize);
  ellipse(facePosX+60, facePosY, eyeSize, eyeSize);//(x-position of the center, y-position of the center,width,height)
  rect(facePosX,facePosY+130,eyeSize+40, eyeSize+20);   //(x-position of the upper-left corner, y-position of the upper-left corner, width, height)

  strokeWeight(1);// if you don't have this line and only have the stokeWeight
  stroke(255);
  //line(120,280,300,280);
  strokeWeight(5);//If you set the strokeWeight before, then this line will only affects the shape following this line.
                  // And it goes back to the top lines of the block and affects them until it comes across another strokeWeight
                  // So you can see, the strokeWeight with the value of 1 only affects the shape of the line.
                  // Because the draw() function keeps repeating itself!!!
                  // Highlight! This is very interesting.!!!!!

  stroke(255);// the color of stoke of all the shapes on the canvas
              // Why it affects all the shapes? - stroke is more of a switch?没弄懂
  stroke('green');
  point(width/2, height/2);// (x-position,y-position)  the width and height are those of the canvas. Try to put your parameters
                            //this way so your point can better adjust to the canvas

  line(facePosX,facePosY,facePosX+30,facePosY+200);//(x-position of the starting point, y-position of the starting point,
                        //x-position of the ending point, y-position of the ending point)

  fill(chartColor);  // the color fill your shape

  arc(50,10,100,100, QUARTER_PI, PI);
  arc(100,200,100,100, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

}

function mousePressed(){ //鼠标按下函数
  chartColor = "pink";
}
