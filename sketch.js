const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
t = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(0);  
  Engine.update(engine);

  rain();
  rain1();
  rain2();
  for(k=0 ; k<t.length; k++){
    t[k].display();
  }

  drawSprites();
}

 function rain(){
   t.push(new Rain(random(10,width-50),20));
  
}
function rain1(){
  t.push(new Rain1(random(10,width-50),20));
 
}
function rain2(){
  t.push(new Rain2(random(10,width-50),20))
}