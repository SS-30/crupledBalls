var ball,rect1,rect2,rect3,ball1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	ball=createSprite(width/2, 80, 10,10);
	ball.scale=0.2


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //create and run engine
	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);

	rect1=new Ground(400,660,150,15)
	rect2=new Ground(320,620,15,100)
	rect3=new Ground(480,620,15,100)
	ball1=new Ball(50,620,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("red")
  rect1.display()
  rect2.display()
  rect3.display()
  fill("yellow")
  ball1.display()
  drawSprites();
}

//function keypressed
function keyPressed() {
 if (keyCode === UP_ARROW){
	Body.applyForce(ball1.body,ball1.body.position,{x:40,y:-45});
 }
}

