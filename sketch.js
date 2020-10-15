const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //creating the engines
  engine = Engine.create();
  world = engine.world;

  //options for ground
  var ground_options = {
    //making ball stop
    isStatic: true
  }
  //options for ball
  var ball_options={
    //bounce effect for ball
    restitution: 1
  }
  //ground shape and position
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  //adding it to world ground
  World.add(world,ground);
 // console.log(ground.position.x);
 //ball shape and position
  ball = Bodies.circle(200,100,20,ball_options);
  //adding ball to world ball
  World.add(world,ball);

}

function draw() {
  //changing the background to black
  background("black");  
  //updating the engine
  Engine.update(engine);
  //making rectangle in center
  rectMode(CENTER);
  //calling ground position and shape in draw
  rect(ground.position.x,ground.position.y,400,20);
  //function for ball psoition
  ellipseMode(RADIUS);
  //calling ball shape and position in draw
  ellipse(ball.position.x,ball.position.y,20);
  //drawing the sprites
  drawSprites();
}