class Rider{
  constructor(width,height,x,y,xSpeed,ySpeed ){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.oldXSpeed = 0;
    this.oldYSpeed = 0;
    this.acc = 0;
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height)
  }
  reset(){
    gamePaused = false;
    gameStart = false;
    this.x = 200;
    this.y = 300;
    }

  Stop(){
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
  Start(){
    this.xSpeed = 1;
    this.ySpeed = 2;
  }
  update(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}
