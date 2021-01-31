
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbin1,dustbin2,dustbin3,keyPressed;

function preload()
{
	
}

function setup() {
var canvas	= createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(400,height,800,50);

	 paper = new Paper(200,350,25);

	dustbin1 = new Dustbin(420,650,15,50);
	dustbin2 = new Dustbin(500,670,150,15);
	dustbin3 = new Dustbin(580,650,15,50);

	Engine.run(engine);
  
}


function draw() {
background("White");

	ground.display();
    paper.display();
	dustbin1.display();
	dustbin2.display();
    dustbin3.display();

  console.log(paper.x,paper.y)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

