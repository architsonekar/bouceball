
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  var ground_options={
    isStatic: true
  }
 ground = Bodies.rectangle(200, 350, 400,30, ground_options);
 World.add(world, ground);

 var ball_options={
  restitution: 1
}
ball = Bodies.circle(200, 10, 20, ball_options);
World.add(world, ball);


}

function draw() {
  background("black"); 
  Engine.update(engine);
  fill("green"); 
  rectMode(CENTER);
  fill("green");
  rect(ground.position.x,ground.position.y, 400,30);

  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20 );
}