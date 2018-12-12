class myBit{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show(){
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.size);
  }

  setter(x,y){
    this.x = x;
    this.y = y;
  }

  getterX(){
    return this.x;
  }

  getterY(){
    return this.y;
  }
}

  
