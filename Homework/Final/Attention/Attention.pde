import neurosky.*;
import org.json.*;
import org.gicentre.handy.*;

import processing.sound.*;
SoundFile fileBg, fileCracking;


int particleCount = 20000;
int xrand = 300;
int yrand = 300;
int py = 0;
int px = 0;
int x;
int y;
float r=128;
float g = 203;
float b = 221;
int lineInterval = 2000;
float pv1, pv2, pv3, pv4;
randomLine[] lines = new randomLine[6];
int numberLines=0;
//Particle[] particles = new Particle[particleCount];
boolean[] field;
boolean onGoing = false;
boolean done = false;
PFont font;
int k;
float dotXPos, dotYPos;
int dotRadius = 10;
int bitRadius = 20;
myBit[] Chaos = new myBit[60];
myBit aChao;
int attention=0;
int prevAttention=0;
int curAttention=0;
int meditation;
float currentMove = 0;
int difference = 0;
float easingIn=0.007;
float easingOut=0.05;
float easing;
int slider;
float distToDestination;
float shouldMoveXTo=0;
float shouldMoveYTo=0;
float shouldMoveXDist, shouldMoveYDist;
int j=0;
float prevMillis = 0;
int floatJ;
float startFocusedTime = 0.0;
int attentionMax = 35;
int attentionMin = 15;
int interval = 0;
int breakStarting = 0;
int lineLastStop = 0;
int index = 0;
float breakSpeed = 0.3;
ThinkGearSocket neuroSocket;
String a1="";
String a2="";

HandyRenderer h3, h4;

void setup() {
  fullScreen();

  smooth();
  fileBg= new SoundFile(this, "./bg.mp3");
  fileCracking = new SoundFile(this, "./ice-cracking.mp3");
  fileBg.play();
  h3 = HandyPresets.createWaterAndInk(this);
  h4 = HandyPresets.createPencil(this);
  ThinkGearSocket neuroSocket = new ThinkGearSocket(this);
  try {
    neuroSocket.start();
  }
  catch (Exception e) {
    //println("Is ThinkGear running??");
  }
  smooth();
  //noFill();
  dotXPos = width/2;
  dotYPos = height/2;

  for(int i=0; i<Chaos.length; i++){
    k=i;
    if(i>-1 && i<16){
      Chaos[i]=new myBit(random(width/2, width),random(height/2,height),bitRadius,width/2+dotRadius*13*cos(PI*i/30), height/2+dotRadius*13*sin(PI*i/30),h3,128+random(-70,140), 203+random(-40,40), 221+random(-140,140) );
    }
    else if(i>15 && i<31){
      Chaos[i]=new myBit(random(0, width),random(height/2,height),bitRadius, width/2+dotRadius*13*cos(PI*i/30), height/2+dotRadius*13*sin(PI*i/30), h3,128+random(-40,40), 203+random(-10,40), 221+random(-40,40));
    }
    else if(i>30 && i<46){
      Chaos[i]=new myBit(random(0, width),random(0,height/2),bitRadius,width/2+dotRadius*13*cos(PI*i/30), height/2+dotRadius*13*sin(PI*i/30),h3,128+random(-120,40), 203+random(-40,90), 221+random(-40,100));
    }
    else {
      Chaos[i]=new myBit(random(width/2, width),random(0, height/2),bitRadius, width/2+dotRadius*13*cos(PI*i/30), height/2+dotRadius*13*sin(PI*i/30),h3,128+random(-30,140), 203+random(-40,40), 221+random(-40,40));
    }
  }


}

void draw() {
  background(0);
  fill(255);
  a1 = "'ATTENTION'";
  a2 = "Try to focus on the red spot. \n See what's gonna happen!";
  strokeWeight(3);
  textSize(30);
  text(a1,2/width,90);
  text(a2,2/width,250);
  noFill();
  strokeWeight(1);
  if(attention >= attentionMax){
    attention = attentionMax;
  }
  else if(attention <=attentionMin){
    attention = attentionMin;
  }

  else {
    startFocusedTime = 0.0;
  }

  if(attention!=curAttention){
     prevAttention = curAttention;
    curAttention = attention;
   difference = curAttention - prevAttention;
  }
  println("attention "+attention);
  println("getterX: "+Chaos[40].getterX() + "getterTargetX(): "+Chaos[40].getterTargetX());
  // if  attention >= attentionMax, start to draw lines
  if (done == false && Math.abs(Chaos[40].getterX()- Chaos[40].getterTargetX())<10){

   // println("line. length :"+ lines.length);
   fileCracking.stop();
  if(index != 0){
     fileCracking.play();
     fileCracking.amp(0.6);
    for(int i=0; i<index; i++){
      h4.line(lines[i].getterPx(), lines[i].getterPy(), lines[i].getterX(), lines[i].getterY());

    }

  }
    println("yes!!!!!!!1");
    x = xrand;
    y = yrand;

      if (millis()- prevMillis>=lineInterval){
        if(index<6){
        lines[index++] = new randomLine(px,py,x,y);

        prevMillis = millis();
        xrand = (int) random(0, width);
        yrand = (int) random(0, height);
        px = x;
        py = y;
        }
        else{
          done = true;
          fileCracking.stop();
        }
    }
  }

    else {
      fileCracking.stop();
    }
  for(int i=0;i<Chaos.length;i++){
        currentMove = 0;
        shouldMoveXTo = map(curAttention, 0, attentionMax, Chaos[i].getterInitX(), Chaos[i].getterTargetX());
        shouldMoveYTo = map(curAttention, 0, attentionMax, Chaos[i].getterInitY(), Chaos[i].getterTargetY());
        shouldMoveXDist = shouldMoveXTo - Chaos[i].getterX();
        shouldMoveYDist = shouldMoveYTo - Chaos[i].getterY();
        fileBg.amp(map(curAttention,0, attentionMax, 0.1, 1));

      if(difference > 0){
        easing = easingIn;

      }
      else if(difference < 0){
        easing = easingOut;
      }
      Chaos[i].setterColor(map(curAttention, 0,attentionMax,Chaos[i].getterIr(),128),map(curAttention, 0,attentionMax,Chaos[i].getterIg(),203),map(curAttention, 0,attentionMax,Chaos[i].getterIb(),211));
        Chaos[i].setter(Chaos[i].getterX()+shouldMoveXDist*easing, Chaos[i].getterY()+shouldMoveYDist*easing);
        distToDestination = Math.abs(Chaos[i].getterTargetX()-Chaos[i].getterX());
        currentMove = Math.abs(shouldMoveXTo - Chaos[i].getterTargetX());
         if(difference!=0){
          Chaos[i].setterFloating(distToDestination);
          println("changed");
    }
        fill(255);
        Chaos[i].show(j);
      }

      if(breakStarting>= height*sin(PI/3)/2){
        attention = 0;
        breakStarting = 0;
      }
      if(difference==0){
        j++;
      }
      if(j>9999999){
         j=0;
        }
      difference = 0;
      fill(255,0,0);
  ellipseMode(CENTER);
  ellipse(dotXPos, dotYPos, dotRadius, dotRadius);
  if(done == true){
    attention = 0;
    index = 0;
    lines = null;
    fileCracking.stop();

  }
}
void poorSignalEvent(int sig) {
  println("SignalEvent "+sig);
}

public void attentionEvent(int attentionLevel) {
  println("Attention Level: " + attentionLevel);
  attention = attentionLevel;
}


void meditationEvent(int meditationLevel) {
  println("Meditation Level: " + meditationLevel);
  meditation = meditationLevel;
}

void blinkEvent(int blinkStrength) {

  println("blinkStrength: " + blinkStrength);
}

/*public void eegEvent(int delta, int theta, int low_alpha, int high_alpha, int low_beta, int high_beta, int low_gamma, int mid_gamma) {
  println("delta Level: " + delta);
  println("theta Level: " + theta);
  println("low_alpha Level: " + low_alpha);
  println("high_alpha Level: " + high_alpha);
  println("low_beta Level: " + low_beta);
  println("high_beta Level: " + high_beta);
  println("low_gamma Level: " + low_gamma);
  println("mid_gamma Level: " + mid_gamma);
}*/

void rawEvent(int[] raw) {
  //println("rawEvent Level: " + raw);
}

void stop() {
  neuroSocket.stop();
  super.stop();
}
