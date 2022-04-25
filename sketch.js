
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(220,10,20,ball_options);
	World.add(world,ball);

	groundObj=new Ground(width/2,680,width,20);
	leftSide=new Ground(1100,800,20,120);
	rightSide=new Ground(1000,800,20,120);



	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  fill("white");
  ellipseMode(CENTER);

 
   groundObj.display();
   leftSide.display();
   rightSide.display();

  drawSprites();
 
}

//pro eu atualizei mas as coisas ainda estão dando erro porque

function keyPressed(){
	if (keyCode === UP_ARROW){

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
  }