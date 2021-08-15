
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mainwall;
var wall1;
var wall2;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density: 1.2
	}

	mainwall = new walls(width/2,670,width,20);
	wall2 = new walls(1100,600,20,120);
	wall1 = new walls(1100,600,20,120);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(Radius)
}


function draw() {
  rectMode(CENTER);	
  background(0);

  ball = Bodies.circle(100,670,10,ball_options);
  World.add(world, ball)
  
  wall1.display();
  wall2.display();
  mainwall.display();
  Engine.update(engine);


  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0},{x:0.05, y:0});
		Matter.Body.applyForce(ball, {x:0, y:0},{x:0, y:-0.05});
	}
}

