
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var cube;
var g,g2,g3,g4,g5,g6,g7,g8;
var s,spike;
var w1,w1;
var edges;
var stone1,stone2,stone3,stone4;
var sImg,s2Img;
var o1,o2,o3,o4;
function preload(){
  sImg=loadImage("rock.png");
  s2Img=loadImage("rock3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  edges=createEdgeSprites();
  cube = Bodies.rectangle(90, 50, 45,45,{restitution:0.3,density:1.2,stiffness:1});
	World.add(world, cube);
  
  g=new Ground(80,100,130,30);
  g2=new Ground(230,180,130,30);
  g3=new Ground(380,280,130,30);
  g4=new Ground(580,380,130,30);
  g5=new Ground(980,380,1000,30);
  g6=new Ground(680,350,150,30);
  g7=new Ground(980,350,150,30);
  g8=new Ground(1280,350,150,30);
  
  w1=new Ground(1800,50,500,30);
  w2=new Ground(1800,380,500,30);
  
  //s=new Spike(680,100,50,50);

  spike=Bodies.circle(680,100,50,{isStatic:true});
  World.add(world,spike);
  //stone1=createSprite()
  
  Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background("#fdb9c8");
  ellipse(cube.position.x, cube.position.y, 45);
  ellipse(spike.position.x,spike.position.y,50);
  g.show();
  g2.show();
  g3.show();
  g4.show();
  g5.show();
  g6.show();
  fill("#D30000");
  g7.show();
  fill("#D30000");
  g8.show();
  fill("#D30000");

  //s.show();

  w1.show();
  w2.show();

  if(cube.position.x>=90 || cube.position.y<=690){
    Matter.Body.setStatic(spike,false);
  }

  console.log(cube.position.x);
  console.log(spike.position.x);

  Engine.update(engine);
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:0,y:5});
    }
    if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:-6,y:-0});
    }
    if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(cube,{x:0,y:0},{x:6,y:0});
    }
}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
               return true;
            }
            else{
              return false;
            }
         }
}
