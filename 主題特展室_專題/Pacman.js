class PacMan {
  constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = createVector(0,0)
    this.dir = floor(random(0, 5))
    this.angle = this.dir * HALF_PI
    this.radius = random(40,50)
    this.color = color(random(255),random(255),random(255))
    this.index = floor(random(99999))
    this.isOutOfEdge = false
    this.isInitial = true
    this.isKilled = false
  }
  
  show() {
    if(this.isKilled){
      this.color.setAlpha(80)
    }
    fill(this.color)
    noStroke()
    let a = abs(sin(frameCount*0.2)) * 0.5
    arc(this.pos.x,this.pos.y,this.radius,this.radius,this.angle+a,this.angle+PI*2-a)
  }
  
  update(){
    if((frameCount+this.index)%100==0 || this.isInitial == true){
      this.dir = floor(random(0,5))
      this.angle = this.dir * HALF_PI
      switch(this.dir){
        case 0:
          this.vel.x = random(1,5)
          this.vel.y = 0
          break
        case 1:
          this.vel.x = 0
          this.vel.y = random(1,5)
          break
        case 2:
          this.vel.x = -random(1,5)
          this.vel.y = 0
          break
        case 3:
          this.vel.x = 0
          this.vel.y = -random(1,5)
          break
        case 4:
          this.vel.x = random(1,5)
          this.vel.y = 0
      }
    }
    this.outOfEdge()
    this.pos.add(this.vel)
    if(this.isInitial){
      this.isInitial = false
    }
  }
  
  outOfEdge(){
    if(this.pos.x > windowWidth || this.pos.x < 0){
      this.vel.x *=-1
      this.angle = (this.angle+PI)%(2*PI)
      //this.isOutOfEdge = true
    }

    if(this.pos.y > windowHeight || this.pos.y < 0){
      this.vel.y *=-1
      this.angle = (this.angle+PI)%(2*PI)
      //this.isOutOfEdge = true
    }
  }
  
  checkEat(food){
     if(this.pos.x < food.pos.x + food.size/2 &&
       this.pos.x > food.pos.x - food.size/2){
      if(this.pos.y < food.pos.y + food.size/2 &&
         this.pos.y > food.pos.y - food.size/2){
           food.isEaten = true
        }
     }
  }
  
}