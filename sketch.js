
var trex ,trex_running;
var ground;
var groundImage; invisibleGround;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png" );
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
trex.scale = 0.5;
  trex.addAnimation ("runnig", trex_running);

  // crear sprites del suelo 
ground = createSprite(200,180,400,20);
ground.addImage("ground" ,groundImage );
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;

 
}

function draw(){
  background("white")
  ground.velocityX = -2;

  console.log(trex.y);

  if(ground.x<0){
    ground.x = ground.width/2;
  }

  if(keyDown("space") &&trex.y >=100 ){
    trex.velocityY = -10 ;

  }
  trex.velocityY = trex.velocityY + 0.5 ;

   // CHOQUE CON EL SUELO
   trex.collide(invisibleGround);


  drawSprites();

}
