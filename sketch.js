const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobObject6;
var bobDiameter;
var roofObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	Engine.run(engine);
  	
	bobObject1 = new Bob(100,120,25);	
	bobObject2 = new Bob(100,120,25);
	bobObject3 = new Bob(130,120,25);
	bobObject4 = new Bob(150,120,25);
	bobObject5 = new Bob(170,120,25);
	bobObject6 = new Bob(190,120,25);

	bobDiameter = 50;

	
    roofObject = new Roof(200, 120, 105, 55);

    rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display(); 	
  bobObject2.display(); 
  bobObject3.display(); 
  bobObject4.display(); 
  bobObject5.display();  
  bobObject6.display();
  
  roofObject.display();

   rope1.display();

  drawSprites();
 
}

