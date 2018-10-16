let oneFood;
var meColor = "#F5ECEC";
var gainedWeight = 0;
var btnWake;
var currentFaceImg;
var currentBgImg;
var currentTime;
var currentInstruction = "Try to wake her up by tapping her.";
var food = [];
var preMillis1 = 0;
var preMillis2 = 0;
var preMillisTickTock = 0;
var preMillisAngry = 0;
var preMillisEaten = -1;
var preHour = -2;
var imgFaceSleep;
var imgFaceAwake;
var imgFaceOpenMouth;
var imgFaceChewing;
var imgFaceAngry;
var imgMoon;
var imgSun;
var imgWaffle;
var nowHour = 4;
var isTimetoWakeup = false;
var interval1 = 800;
var interval2 = 800;
var intervalAngry = 2000;
var intervalTickTock = 4000;
var intervalEaten = 1300;
var isSleep = true;
var isEating = false;
var bgPositionAngle;
var targetX = 0;
var targetY = 0;
var x = 100;
var y = 100;
var easingMouse = 0.1;
var easingBack = 0.02
var shrink = 0.96;
var thisIndex;
var youSize = 150;
let distance;

function preload(){
  imgFaceAwake = loadImage("./assets/WakenRiceBall.png");
  imgFaceSleep = loadImage("./assets/SleepingRiceBall.png");
  imgFaceChewing = loadImage("./assets/ChewingRiceBall.png");
  imgFaceOpenMouth = loadImage("./assets/OpenMouthRiceBall.png");
  imgWaffle = loadImage("./assets/waffle.png");
  imgMoon = loadImage("./assets/moon.png");
  imgSun = loadImage("./assets/sun.png");
  imgFaceAngry = loadImage("./assets/AngryRiceBall1.png");
  currentFaceImg = imgFaceSleep;
}
function setup() {

  // put setup code here
  createCanvas(windowWidth,windowHeight);
  //myCanvas.parent('container');
  x = width/2;
  y = height-youSize-20;
  bgPositionAngle = PI+PI/8;
  btnWake = createButton("  Rise and Shine, sleepyhead!  ");
}

function draw() {

  background(0);
  if(nowHour<6||nowHour > 18){
    currentBgImg = imgMoon;
  }
  else{
    currentBgImg = imgSun;
  }
  push();
  translate(width/2,height);
  image(currentBgImg,width/3*cos(bgPositionAngle),width/3*sin(bgPositionAngle),450,450);
  bgPositionAngle+=PI/360;
  pop();
  if(millis()-preMillisTickTock > intervalTickTock){
    //console.log(millis());
    preMillisTickTock = millis();
    nowHour++;
    if(nowHour > 24){
      nowHour = 0;
    }
    if(nowHour == 6){
      isTimetoWakeup = true;
      currentInstruction = "Now it's time to wake her up!";
      currentBgImg = imgSun;
    }
    if(preHour > -1){
      if(nowHour == preHour+1){
        console.
        currentTime = "";
      }
    }
  }
  textSize(90);
  fill(255);
  text(currentTime,width/2-140,height/5);
  textSize(30);
  text(currentInstruction,width/2-220,height/3)
  if(isSleep){
    wakeUp();

  }
  else if(isEating){
    btnWake.hide();
    eatFood();
  }
  else{
    weighTime();
  }
  //loseWeight();
}
function mousePressed(){
  if(isSleep){

    if(mouseX > width/2-youSize/2 && mouseX < width/2+youSize/2 && mouseY > height-youSize-10-youSize/2 && mouseY < height-youSize-10+youSize/2){
      //could use map() to be more specific
      currentFaceImg = imgFaceAngry;
      currentInstruction = "If I were you, I wouldn't. >_< "
      //console.log("herere");
      preMillisAngry=millis();
    }
  }
}
function wakeUp(){
  currentTime = nowHour+" : 00";
  if(!isTimetoWakeup){
    btnWake.hide();
  }
  else{
    btnWake.show();
    btnWake.position(width/2-80,height/2);
    btnWake.mousePressed(function(){
      isSleep = false;
      isEating = true;
      preHour = nowHour;
      currentFaceImg = imgFaceAwake;
      currentTime ="";
      currentInstruction = "Good morning! Ready for yummy waffle?\n\nBe careful! You are GAINING WEIGHT!\n\nMove your mouse to avoid them!!";
    });
  }

  if(preMillisAngry!=0){
    if(millis()-preMillisAngry>intervalAngry){
      currentFaceImg = imgFaceSleep;
      currentInstruction = "She's so tired. Maybe later."
      preMillisAngry = 0;
    }
  }
  ellipseMode(CENTER);
  imageMode(CENTER);
  fill(meColor);
  ellipse(width/2, height-youSize-20,youSize);
  image(currentFaceImg,width/2, height-youSize-20,youSize+youSize/4,youSize+youSize/4);
}


function eatFood(){
  /* This is ms */
  text()
  imageMode(CENTER);
  ellipseMode(CENTER);
  fill(meColor);
  ellipse(x, y,youSize);
  image(currentFaceImg,x,y,youSize+youSize/4,youSize+youSize/4);
  targetX = mouseX;
  targetY = mouseY;
  x+=(targetX-x)*easingMouse;
  y+=(targetY-y)*easingMouse;

  /* This is ms */
  if(millis() - preMillis1 > interval1){

    oneFood = new Food(imgWaffle,random(0,width), random(0,height),random(50,100),width,height);
    food.push(oneFood);
    if(food.length > 20){
      food.shift();
    }
    preMillis1 = millis();
  }
  //console.log(food.length);
  if(millis()-preMillis2 > interval2){
    for (let thisFood of food){
      thisFood.move();
      thisFood.show();
      distance = dist(thisFood.x, thisFood.y, x,y);
      if(distance <= thisFood.size/2+youSize/2){
        youSize+=3;
        gainedWeight+=thisFood.size/100;
        thisIndex = food.indexOf(thisFood);
        food.splice(thisIndex,1);
        currentFaceImg = imgFaceChewing;
        preMillisEaten = millis();
      }

/*      if(preMillisEaten>-1){
        if(millis()-preMillisEaten>intervalEaten){
          currentFaceImg = imgFaceChewing;
        }
        else {
          preMillisEaten = -1;
        }
      }*/
      else {
        currentFaceImg = imgFaceAwake;
      }
    }
    if(millis)
    /*if(youSize)
    prevMillis2 = millis();*/
  }
}


function loseWeight(){
  targetX = width/2;
  targetY = height-(youSize/2);
  x+=(targetX-x)*easingBack;
  y+=(targetY-y)*easingBack;
  ellipse(x,y,youSize);
  if(keyIsDown(37)){

  }
}
