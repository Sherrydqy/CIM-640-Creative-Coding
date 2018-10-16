var frameAmount = 4;
var frameArray = [];
var currentFrame = 0;
var interval = 1000;
var prevMillis = 0;
var counter = 0;
var interval2 = 500;
var prevMillis2 = 0;
var state = "stop";
var playorstop = state;
//var action = "none";

var controls = {"play" : [500,300,50,"green"],
                "stop" : [600,300,50,"red"],
                "fwd": [500,500,50,"orange"],
                "back": [600,500,50,"blue"]};// play is a button   controls["play"][3]
function preload(){
  // var frameString = "../assests/Thatwasclose0.jpg";
  // frameArray[0] = loadImage(frameString);

  for(var frames = 0;frames < frameAmount;frames++){
    var frameString = "../assests/Thatwasclose"+frames+".jpg";
    frameArray[frames] = loadImage(frameString);
  }
}
function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  for (var keys in controls)
  {
    console.log(keys);
  }
}

function draw() {
  // put drawing code here
  //console.log(millis());
  background("white");
  image(frameArray[currentFrame],100,100);
  //image(frameArray[currentFrame],100,100);

  /*if(millis() > interval){
    currentFrame++;
    //millis()=0;这样行不通，你不能给一个方法赋值！方法是返回一个值啊笨蛋！
    console.log(currentFrame);
  }
*/

/*  if(millis()-prevMillis > interval){
    currentFrame++;
    prevMillis = millis();
  }

  //currentFrame++;
  if(currentFrame > frameAmount-1){
    currentFrame = 0;
  }

  if(millis()-prevMillis2>interval2){
    counter++;
    prevMillis2 = millis();
  }*/
/*  if(millis()-prevMillis2>interval2){
    counter++;
    prevMillis2 = millis();
}*/
  if(millis()-prevMillis > interval && state == "play"){
    currentFrame++;
    prevMillis = millis();
  }
  if(millis()-prevMillis > interval &&state == "forward"){
    currentFrame++;
    prevMillis = millis();
  }
  if(millis()-prevMillis > interval &&state == "backward"){
    currentFrame--;
    prevMillis = millis();
  }
  if(currentFrame > frameArray.length-1){
    currentFrame = 0;
  }
  if(currentFrame < 0){
    currentFrame = frameArray.length-1;
  }

  /*ellipse(counter, height/2,20,20);
  ellipse(mouseX, mouseY,10,10);*/

  for(var keys in controls){
    fill(controls[keys][3]);
    rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);
    text(keys, controls[keys][0], controls[keys][1]);

    if(mouseX > controls[keys][0] && mouseX <controls[keys][0] + controls[keys][2] && mouseY > controls[keys][1] &&
     mouseY < controls[keys][1] + controls[keys][2]){
       fill(127,200);//fill(gray, [alpha]);

      // state=keys;
       console.log("here");
       rect(controls[keys][0],controls[keys][1],controls[keys][2],controls[keys][2]);
     }
  }
}

function mousePressed(){
  for(var keys in controls){
    if(mouseX > controls[keys][0] && mouseX <controls[keys][0] + controls[keys][2] && mouseY > controls[keys][1] &&
     mouseY < controls[keys][1] + controls[keys][2]){
       state = keys;
       if(state == "fwd"){
         currentFrame++;
         if(currentFrame > frameArray.length-1){
           currentFrame = 0;
         }
       }
       else if(state == "back"){
         currentFrame--;
         if(currentFrame < 0){
           currentFrame = frameArray.length-1;
         }
       }
     }

}
}
