var soundFile;
var fft;
var fftBands = 1024;
var waveform = [];

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('../addons/Tempo_EXO');
}

function setup() {
  createCanvas(fftBands, 256);
  noFill();
  soundFile.loop();
  fft = new p5.FFT(.99, fftBands);
  p = createP('press any key to pause / play');
}

function draw() {
  background(250);
  waveform = fft.waveform();
  beginShape();
  for (var i = 0; i< waveform.length; i++){
    stroke(5);
    strokeWeight(5);
    vertex(i*2, map(waveform[i], -1, 1, height, 0) );
  }
  endShape();
}

function keyPressed() {
  if (soundFile.isPlaying() ) {
    soundFile.pause();
  } else {
    soundFile.play();
  }
}
