var sun;
var moon;
var r = 255;
var g = 255;
var b = 255;
var cX = 100;
var cY = 100;
var rectX = 400;
var rectY = 400;
var rectSize = 200;
var sunShow = 1;
var sunDist;
var sunButton;
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  sunButton = createButton("Press to show/hide sun");
  /*sunButton.position(700,700);
  sunButton.mousePressed(function(){
    //if statement
    if(mouseX > rectX && mouseX < rectX+rectSize && mouseY > rectY && mouseY < rectY+rectSize){
      r = random(0,256);
      g = random(0,256);
      b = random(0,256);
    }
    sunDist = dist(cX,cY,mouseX,mouseY);

      background(255);
      if(sunShow == 1){
        image(sun,300,300);
        console.log("here");
      }
      else{
        image(moon,300,300);
        console.log("sssere");
      }
      sunShow = sunShow * (-1);
      console.log("sunShow: " + sunShow);

  })*/
  //sunButton.mousePressed(showSun);//注意这里， 函数作为参数不加括号，因为加括号了就在这里运行了？加括号就是意味着运行？忘了
}


function preload(){
  sun = loadImage('../assets/sun.png');
  moon = loadImage('../assets/moon.png');
}
function draw() {
  // put drawing code here
  background(255);
  sunButton.position(200,400);
  sunButton.mousePressed(function(){

    if(mouseX > rectX && mouseX < rectX+rectSize && mouseY > rectY && mouseY < rectY+rectSize){
      r = random(0,256);
      g = random(0,256);
      b = random(0,256);
    }
    sunDist = dist(cX,cY,mouseX,mouseY);
    //if(sunDist<20){
      background(255);
      if(sunShow == 1){
        image(sun,300,300);
        console.log("here");
      }
      else{
        image(moon,300,300);
        console.log("sssere");
      }
      sunShow = sunShow * (-1);
      console.log("sunShow: " + sunShow);
  //  }

  });
  frameRate(1);
  fill("black");
  text("Park Chanyeol", 300, 300);
  fill(r,g,b);
  rect(rectX,rectY,rectSize,rectSize);
  imageMode(CENTER);// start to draw your image from teh center of it
  image(sun,cX,cY,sun.width/4,sun.height/4); // image的cx，cy is the coordinate of the upper left corner
}
