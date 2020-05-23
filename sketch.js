const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var speed;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  
 // World.add(world,rect1);


  speed=random(50,90)
  drop = new Rain(200,0);
  drop.velocityY=speed;
}

function draw() {
  background(0);  
  Engine.update(engine)
 /drop.display();
  drawSprites();
}