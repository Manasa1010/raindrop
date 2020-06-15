const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
t = []

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  speed=random(50,90)
 for(k=0;k<=width ; k=k+80){
 t.push(new Rain(20,speed=random(50,90)));
 }

  
 // drop = new Rain(200,0);
 // drop.velocityY=speed;
}

function draw() {
  background(0);  
  Engine.update(engine) 
  for(k=0 ; k<=width; k++){
    t[k].display();
  }
 //drop.display();
  drawSprites();
}