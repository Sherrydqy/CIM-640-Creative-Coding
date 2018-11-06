var btnWidth = 80;
var btnHeight = 50;
var playColor = "green";
var stopColor = "red";
var pauseColor = "yellow";
var nextColor = "blue";

function preload(){
  sound = loadSound('../addons/Tempo-EXO.mp3');
}

function setup(){
  var cnv = createCanvas(windowWidth,windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.1);
}

function draw(){
  background(0);
  var spectrum = fft.analyze();

  //stroke(0,255,0); // spectrum is green
  noFill();
  stroke("green");
  strokeWeight(1);

  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 140,240);
    var y = -map( spectrum[i],  -1, 1, 0, height);
    vertex(x,y);
    i+=59;
  }
  endShape();
  /*for (var i = 0; i < spectrum.length;i++){
    var x = map(i, 0, spectrum.length, width/3, width-width/3);
    var h = -map(spectrum[i], 0, 255, 0, height/2);
    noFill();
    rect(x, height/2, width / spectrum.length, h);
    i+=20;
  }*/

  var waveform = fft.waveform();
  noFill();
  //console.log("spectrum.length"+ waveform.length);
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
