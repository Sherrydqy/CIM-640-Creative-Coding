var r,g,b;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  /*if(mouseIsPressed){
    fill(0);
  }else{
    fill(255);
  }
  ellipse(mouseX,mouseY,30,30);*/
  background(0);
  stroke("white");
  r=random(0,256);
  g=0;
  b=random(0,255);
  fill(r,g,b);
  for(var i = 0;i<mouseX;i+=25){
    for(var j = 0; j<height; j+=25){
      ellipse(i,j,13,13);
    }
  }

}
