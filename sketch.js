var box1;
var box2;
var box3;
var edges;
function setup() {
  createCanvas(800,500);
  edges=createEdgeSprites()
   box1=createSprite(200,200,10,10)
   box1.shapeColor="blue"
   box2=createSprite(400,400,10,10)
   box2.shapeColor="red"
   box3=createSprite(300,400,10,10)
   box3.shapeColor="black"
   
}

function draw() 
{
  background("green");
 createEdgeSprites() 

 box2.velocityY=4
 box3.velocityX=7

   box1.bounceOff(edges)
   box2.bounceOff(edges)
   box3.bounceOff(edges)
   if (keyDown("down")){
    box1.y=box1.y+4
   }
   if (keyDown("up")){
    box1.y=box1.y-4
   }
   if (keyDown("right")){
    box1.x=box1.x+4
   }
   if (keyDown("left")){
    box1.x=box1.x-4
   }
   drawSprites()
}


