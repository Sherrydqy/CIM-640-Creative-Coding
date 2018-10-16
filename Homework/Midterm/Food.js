var xDirectInit, yDirectInit;

class Food{

  constructor(img,x,y,size,width,height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = size;
    this.yMove = [1,-1];
    this.xMove = [1,-1];
    this.xDirectInit = random(this.xMove);
    this.yDirectInit = random(this.yMove);
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.triggerX = false;
    this.triggerY = false;
  }

  move(){
    if(this.x<0 || this.x>this.canvasWidth){
      this.xDirectInit*=-1;
    }
      this.x+=this.xDirectInit;

    if(this.y<0 || this.y>this.canvasHeight){
      this.yDirectInit*=-1;
    }
      this.y+=this.yDirectInit;
  }

  show(){
    imageMode(CENTER);
    image(this.img,this.x, this.y, this.size,this.size);
    //ellipse(x,y,size);
  }
}
