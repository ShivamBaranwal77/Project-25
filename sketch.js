const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, dustbinImage;
var Ground;
var paperobj;

function preload() {
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	Ground=new ground(width/2,670,width,20);
	dustbin1 = new dustbin (1090,640,200,20)
	paperobj = new paper (100,100,75);

	Engine.run(engine);
  
}

function draw() {

  background(230);

  Ground.display();
  dustbin1.display();
  imageMode(CENTER);
  image(dustbinImage,1090,585,220,150);  
  paperobj.display();
	
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:160,y:-115})
	}
}