var sun, moon;
var curImage;
var selection;
var textInput;
var submitButton;
var numberOfImage = 0;
var posX = [];
var posY = [];

function preload(){
  sun = loadImage("../assets/sun.png");
  moon = loadImage("../assets/moon.png");
  curImage = sun;
}

function setup() {
  // put setup code here

  createCanvas(windowWidth,windowHeight);
  selection = createSelect();
  textInput = createInput("# of Input");
  submitButton = createButton("submit");
  submitButton.position(400,400);

  submitButton.mousePressed(function(){
    console.log(textInput.value());
  })
  textInput.position(70,70);
  numberOfImage = textInput.value();
  selection.position(10,10);
  selection.option("sun");
  selection.option("moon");
  selection.changed(function(){
    if(selection.value() == "sun"){
      curImage = sun;
    }
    else {
      curImage = moon;
    }
  });

}

function draw() {
  // put drawing code here
  background(255);

  for(var i = 0; i<numberOfImage;i++){
    posX[i]=random(width);
    posY[i]=random(height);
    image(curImage,posX[i],posY[i],curImage.width/4,curImage.height/4);
  }

}
