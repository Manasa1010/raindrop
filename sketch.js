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

  for(k=0 ; k<t.length; k++){
    t[k].display();
  }

  drawSprites();
}

async function rain(){
  await t.push(new Rain(random(10,width-50),20));
}