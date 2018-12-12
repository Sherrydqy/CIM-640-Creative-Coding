var dotXPos, dotYPos;
var dotRadius = 6;
var Chaos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0; i<40; i++){
    Chaos.push(new myBit(i+random(0,width),i+random(0,height),50));
  }
}

function draw() {
  dotXPos = width/2;
  dotYPos = height/2;
  background("black");
  fill("red");
  ellipseMode(CENTER);
  ellipse(dotXPos, dotYPos, dotRadius);
  fill("white");
  for(i=0;i<Chaos.length;i++){
   Chaos[i].show();
  }
}

function keyPressed(){
  if(keyCode == 38){
    for(i=0;i<Chaos.length;i++){
      Chaos[i].setter(Chaos[i].getterX()+(dotXPos-Chaos[i].getterX())/20, Chaos[i].getterY()+(dotYPos-Chaos[i].getterY())/20);
    }
  }

  else if(keyCode == 40){
    for(i=0;i<Chaos.length;i++){
      Chaos[i].setter(Chaos[i].getterX()-(dotXPos-Chaos[i].getterX())/20, Chaos[i].getterY()-(dotYPos-Chaos[i].getterY())/20);
    }
  }
}
