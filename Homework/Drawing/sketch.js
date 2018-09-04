var a = 1;
var b = "mapper";
var trueFalse = true; // trueFalse follow camel case



function setup() {
  // put setup code here
  createCanvas(400,400);// (width,height)
  background(0);
  background(123,123,123);
  background("orange");
  console.log(a*2);//num * character = NaN
}

function draw() {// the draw function is an endless loop, it keeps drawing on the canvas over and over again.
                 //
  // put drawing code here
  ellipse(150,150,100,100);
  ellipse(180,120,50,150);//(x-position of the center, y-position of the center,width,height)
  rect(165,320,100,20);   //(x-position of the upper-left corner, y-position of the upper-left corner, width, height)

  strokeWeight(1);// if you don't have this line and only have the stokeWeight
  stroke(255);
  line(120,280,300,280);
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

  line(120,330,300,330);//(x-position of the starting point, y-position of the starting point,
                        //x-position of the ending point, y-position of the ending point)

  arc(50,10,100,100, QUARTER_PI, PI);
  arc(100,200,100,100, QUARTER_PI, PI+HALF_PI+QUARTER_PI);

}
