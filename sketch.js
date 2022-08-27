const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 


let engine;
let world;

var button1,button2;
var ground;
var left;
var right;
var top_wall;

var ball; 

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
button1=createImg('right.png');
button1.position(200,30);
button1.size(50,50);
button1.mouseClicked(hForce);

button2=createImg('up.png');
button2.size(50,50);
button2.position(150,30);
button2.mouseClicked(vForce); 




  ground =new Ground(width/2,670,width,20);
  right = new Ground(1375,575,20,200);
  left = new Ground(1100,575,20,200);
 
 


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  var ball_option={
    restitution:0.95
    
  } 

  ball= Bodies.circle(200,200,20,ball_option); 

  World.add(world,ball); 
}

function draw() 
{



  background(51);
  ground.show();
  
  left.show();
  right.show();
ellipse(ball.position.x, ball.position.y,20,20);
  Engine.update(engine);
}

 function hForce(){
   Body.applyForce(ball,{x: 0, y:0}, {x: 0.02, y : 0})
   

 }

 function vForce(){
   Body.applyForce(ball,{x:0 ,y:0}, {x:0, y:0.02})
 }