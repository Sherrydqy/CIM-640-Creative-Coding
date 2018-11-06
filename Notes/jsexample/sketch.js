function setup() {
  // put setup code here
  //如果你不createcanvas的话，p5js是会自己给你create a canvas的 就像default 构造函数一样
  select("body").style("background-color","pink");
  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>Your project title goes here!</h1>"); // inject html content into div #container0
  select("#container0").style("width","400px");
  select("#container0").style("margin","0 auto"); // margin: 0 atuo -- 0是top,bottom  auto是left, right margin
  select("#container0").style("text-align", "center");
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");
  //select("mycanvas").center();//这是absolute不会自适应的。
  cnv.parent(container0); // 这里的container0指代的是 var container0 这个对象（createDiv 返回的是一个
                          // canvas对象）。这里因为你的container0在上面已经自适应了，所以你只要attach 你的myconvas to the container0
                          //就可以了

}

function draw() {
  // put drawing code here
  background(0);
}
