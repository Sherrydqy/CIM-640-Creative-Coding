import org.gicentre.handy.*;
class myBit {
  float x,y,initX,initY,targetX,targetY,floating,floatingRadius,initFloating, initFloatingRadius,r,g,b,Ir,Ig,Ib;
  int size;
  HandyRenderer h3;
  myBit(float x,float y, int size, float targetX, float targetY, HandyRenderer h3,float r, float g, float b){
    this.x = x;
    this.y = y;
    this.size = size;
    this.initX = x;
    this.initY = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.floating = random(40,60);
    this.floatingRadius = random(1,12);
    this.initFloating = this.floating;
    this.initFloatingRadius = this.floatingRadius;
    this.h3 = h3;
    this.r = r;
    this.g = g;
    this.b=b;
    this.Ir = r;
    this.Ig = g;
    this.Ib = b;
  }
    
  void show(int j){
    fill(r,g,b,160);
      ellipseMode(CENTER);
      h3.ellipse(this.x + this.floatingRadius*cos(PI*j/this.floating),this.y + this.floatingRadius*sin(PI*j/this.floating),this.size,this.size);
    }
    

  
  void setter(float x,float y){
      this.x = x;
      this.y = y;
    }
    
   void setterTarget(float targetX, float targetY){
     
   }  
  void setterFloating(float x){
    this.floating = map(x, Math.abs(this.targetX-this.initX), 0,this.initFloating,60);
    //console.log("this.floating: "+ Math.abs(this.targetX-this.initX));
    this.floatingRadius = map(x,Math.abs(this.targetX-this.initX),0, this.initFloatingRadius,1);
     println("floating: "+x);
    //console.log("this.floatingRadius: "+ this.floatingRadius);
  }
  void setterColor(float r,float g,float b){
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  float getterIr(){
    return this.Ir;
  }
  
  float getterIb(){
    return this.Ib;
  }
  float getterIg(){
    return this.Ig;
  }
  float getterX(){
      return this.x;
    }
  
  float getterY(){
      return this.y;
    }
    
  float getterInitX(){
    return this.initX;
  }
  
  float getterInitY(){
    return this.initY;
  }
  
  float getterTargetX(){
    return this.targetX;
  }
  
  float getterTargetY(){
    return this.targetY;
  }
  

}
