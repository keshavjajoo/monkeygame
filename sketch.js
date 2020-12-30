
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime
var bananaGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(100,300,20,20)
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  var survivaltime=0
  bananaGroup=new Group()
  obstaclegroup=new Group()
  
  
}



function draw() {
background("white")
  stroke("white")
  textSize(20)
  fill("white")
text("Score:"+score,500,50)
  if(keyDown("space")&& monkey.y>100){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  ground.x=ground.width/2
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivaltime,100,50)
  spawnbanana()
  spawnobstacle()
  monkey.collide(ground)
  if(monkey.isTouching(obstaclegroup)){
ground.velocityX=0
monkey.velocityY=0
  obstaclegroup.setVelocityXEach(0)
  bananaGroup.setVelocityXEach(0)
  obstaclegroup.setLifetimeEach(-1)
  bananaGroup.setLifetimeEach(-1)
  }

 drawSprites() 
}
function spawnbanana(){
if(frameCount%80===0){
  var banana=createSprite(500,200,20,20)
  banana.velocityX=-(6+survivaltime/100)
    banana.y=Math.round(random(120,200))
   banana.addImage(bananaImage)
  banana.scale=0.1
  banana.lifetime=300
  bananaGroup.add(banana)
}
  }
function spawnobstacle(){
  if(frameCount%150===0){
  var obstacle=createSprite(500,320,20,20)
  obstacle.velocityX=-5
  var rand=Math.round(random(120,300))
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.2
  obstacle.lifetime=300
    obstaclegroup.add(obstacle)
    
  }
  
  
}






