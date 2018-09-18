

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
  fill("pink");
  arc(50,50,100,100,radians(20),radians(40));

}
