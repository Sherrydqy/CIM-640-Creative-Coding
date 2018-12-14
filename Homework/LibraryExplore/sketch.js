var soundFile;
var fft;
var fftBands = 1024;
var waveform = [];
var r=125;
var g=230;
var b=70;
var mic;
var text1, text2, textT;
var flag = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  strokeWeight(5);
  textT = "Click your mouse to wake him up!\n And talk to him!";
}

function draw() {
  var micLevel = mic.getLevel();
  background(0);
  fill(r,g,b);
  if(micLevel >0.005){
    r = random(255);
    g = random(255);
    b = random(255)
  }
  ellipse(650,450,50+micLevel * 2000);
  ellipse(550,350,50 + micLevel * 2000);
  ellipse(750,350,100 +micLevel * 2000);
  rect(400, 700,100, -100 -micLevel * 5000);
  rect(800, 700,100, -100 -micLevel * 5000);
  rect(500, 700,100, -100 -micLevel * 3000);
  rect(700, 700,100, -100 -micLevel * 3000);
  rect(600, 700,100, -100 -micLevel * 1000);
  fill(255);
  ellipse(550,350,20 + micLevel * 1000);
  ellipse(745,350,30 + micLevel * 1000);

  text(textT, width/10,height/5);
}

//yaode
/*function mousePressed(){
  r = random(256);
  g = random(256);
  b = random(256);
  if(flag == 2){
    flag = 1;
  }
}*/
function touchStarted() {
  getAudioContext().resume()
}
