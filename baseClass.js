class Base{
    constructor(x,y){
        var options={
        'restitution':0,
        'friction':1,
        'density':1.0,
        
        }
        this.body=Bodies.rectangle(x,y,5,30);
        this.width=5;
        this.height=30;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        
       // fill("blue");
       
        rect(pos.x,pos.y,this.width,this.height);
        pop();
}
}