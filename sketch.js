var monkey,monkeyImage,banana,bananaImage,bg,bgImage,edges,invisibleGround,stoneImage,stone;

function preload(){
  monkeyImage=loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
  bgImage=loadImage("jungle.jpg");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
}
function setup() {
  createCanvas(600,400);
   bg=createSprite(300,200,600,400);
   bg.addImage("background",bgImage);
  monkey=createSprite(60,380,20,20);
  monkey.addAnimation("hello",monkeyImage);
  monkey.scale=0.2;
  bananaGroup=new Group();
  stoneGroup=new Group();
  ground=createSprite(300,390,600,20);
  ground.visible=false;
}
function draw() {
  background(220);
  console.log(monkey.y);
  monkey.collide(ground);
  
  
  if(keyDown("space") && monkey.y>=300){
      monkey.velocityY=-18;
     }
  
  if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     monkey.scale+=0.04;
     }
  
  if(monkey.isTouching(stoneGroup)){
     stoneGroup.destroyEach();
     monkey.scale-=0.04;
     }
  monkey.velocityY+=0.8;
  spawnBanana();
  spawnObstacle();
  drawSprites();
}

function spawnBanana(){
  if(frameCount%130===0){
     banana=createSprite(610,100,20,20);
     banana.addImage("banana",bananaImage);
     banana.scale=0.1;
     banana.velocityX=-5;
     banana.lifetime=150;
     bananaGroup.add(banana);
     }
}
function spawnObstacle(){
  if(frameCount%200===0){
  stone=createSprite(610,350,20,20);
  stone.velocityX=-7;
  stone.addImage("stone",stoneImage);
  stone.scale=0.2;
  stoneGroup.add(stone);
  }
}