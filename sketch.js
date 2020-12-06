const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}
function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
platform = new Ground(200,200,20,60);



  drawSprites();
  ground.display();
}