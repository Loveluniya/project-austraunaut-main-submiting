var ast,astimg;
var bg,bgimg;
var sleep,sleepimg;
var brush,brushimg;
var gym,gymimg;
var eat,eatimg;
var drink,drinkimg;
var move,moveimg;
var bath,bathimg;
var invi1,invi2,invi3,invi4;

function preload(){

  bgimg = loadImage("iss.png");
  sleepimg = loadAnimation("sleep.png");
  eatimg = loadAnimation("eat2.png","eat2.png","eat2.png","eat1.png","eat1.png","eat1.png","eat1.png");
  gymimg = loadAnimation("gym1.png","gym2.png");
  brushimg = loadImage("brush.png"); 
  bathimg = loadAnimation("bath1.png","bath2.png");
  moveimg = loadAnimation("move.png","move.png","move1.png","move1.png")
  

}

function setup(){
createCanvas(600,400);

  
  bg = createSprite(300,200);
  bg.addImage("image",bgimg);
  bg.scale = 0.12
  
  invi1 = createSprite(300,40,600,10);
  invi1.visible = false;
  invi2 = createSprite(500,10,10,900);
  invi2.visible = false;
  invi3 = createSprite(400,370,900,10);
  invi3.visible = false;
  invi4 = createSprite(100,200,10,900);
  invi4.visible = false;
  
  


  
  ast = createSprite(300,200);
  ast.addAnimation("sleep",sleepimg);
  ast.scale = 0.1;
  ast.setCollider("rectangle",0,0,1500,2000);
}

function draw(){
background("black");

  

  if (keyDown(LEFT_ARROW)){
    
    ast.addAnimation("eating",eatimg);
    ast.changeAnimation("eating");
    ast.x = 200;
    ast.y = 250;
    ast.velocityX = 0.5;
    ast.velocityY = -0.5;
  }
  
  if (keyDown(DOWN_ARROW)){
    
    ast.addAnimation("gyming",gymimg);
    ast.changeAnimation("gyming");
    ast.x = 300;
    ast.y = 250;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }
  
  if (keyDown(UP_ARROW)){
    
    ast.addAnimation("brushing",brushimg);
    ast.changeAnimation("brushing");
    ast.x = 300;
    ast.y = 230;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }

  if (keyDown(RIGHT_ARROW)){
    
    ast.addAnimation("bathing",bathimg);
    ast.changeAnimation("bathing");
   ast.x = 300;
    ast.y = 230;
    ast.velocityX = 0;
    ast.velocityY = 0;
  }
  
  if (keyDown("m")){
    
    ast.addAnimation("moving",moveimg);
    ast.changeAnimation("moving");
    ast.velocityX = 0.5;
    ast.velocityY = -0.5;
    
  }
   
  ast.bounceOff(invi1);
ast.collide(invi1);
  ast.bounceOff(invi2);
ast.collide(invi2);
  ast.bounceOff(invi3);
ast.collide(invi3);
  ast.bounceOff(invi4);
ast.collide(invi4);
  drawSprites();
}
 
