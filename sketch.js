const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var Nworld , Nengine;
var ground , ball;

function setup() {
  createCanvas(400,400);
  Nengine = Engine.create();
  Nworld = Nengine.world;

  var ground_options={
    isStatic:true
  }
  ground =Bodies.rectangle(200,390,400,20,ground_options)
  World.add(Nworld,ground);

  var ball_options={
    restitution:1.0
  }
  ball =Bodies.circle(200,100,20,ball_options)
  World.add(Nworld,ball)
}

function draw() {
  background(0);  
  Engine.update(Nengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
}