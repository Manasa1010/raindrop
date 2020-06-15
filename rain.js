class Rain{
  constructor(x,y){
      var options={
        'restitution':0.8,
        'friction':1,
        'density':1.0,
        
      }
      this.body=Bodies.rectangle(x,y,5,30,options)
      this.width=5;
      this.height=30;
     

      World.add(world,this.body)
  }
  display(){
      var pos=this.body.position;
      var angle=this.body.angle;

     /* if(this.body.velocity.x<10 && this.body.position.x>200){
        var pos1 = [this.body.position.x,this.body.position.y]
        this.t.push(pos);
        for(var i=0;i=this.t.length;i=i+1){
          rect(this.t[i][0],this.t[i][1],this.width,this.height);
          speed=random(50,90);
          rect.velocityY=speed;
        }
      }*/

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(225);
    //rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
  }
}