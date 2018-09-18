var sun;
var moon;
var r,g,b;
var bgColor = "white";
function preload(){
  sun = loadImage('../assets/sun.png');
  moon = loadImage('../assets/moon.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  // put drawing code here
  frameRate(3);
  r=random(256);
  g=random(256);
  b=random(256);
  //background(random(256)); //random(256) 里面值是0-255, 但是你这么做的话，就相当于在rgb的那条正方体斜对角线上随机跳了，所以这样的
                           // 你的背景色就一直在灰色值域那里跳，想要彩色，别忘了r,g,b数值不一样。
  //background(r,g,b);
  background=(bgColor);
  text("Move over each area to reveal a suprise!",20,20);
  textSize(24);

  //image(moon,width/6,height/6);

  text("Day",width/4,height*6/7);
  text("Night",width*3/4,height*6/7);
  line(width/2,0,width/2,height);
  //console.log('mouse'+mouseX);
  if(0 <= mouseX && mouseX < width/2){
    //console.log("day");
    stroke("black");
    //bgColor = random(256); //
    image(sun,width/6,height/6);

  }
  else if(mouseX > width/2){
    //console.log("night");
    stroke("white");
    image(moon,width*2/3, height/6);
    //bgColor = random(256);
  }
  else{
    bgColor="pink";
  }
}
