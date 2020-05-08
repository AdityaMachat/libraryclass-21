var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1=createSprite(400,400,50,50);
  obj1.velocityX=5;
  obj2=createSprite(800,400,50,50);
  obj2.velocityX=-5;

  player=createSprite(400,100,30,30);
  player2=createSprite(40,200,30,30);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  player.x=World.mouseX;
  player.y=World.mouseY
 bounceOff(movingRect,fixedRect);
 bounceOff(obj1,obj2);
if(isTouching(player,player2)){

  player.shapeColor = "green";
  
  player2.shapeColor = "green";
}else{
  player.shapeColor = "white";
  player2.shapeColor = "white";
  

}
  drawSprites();
}
