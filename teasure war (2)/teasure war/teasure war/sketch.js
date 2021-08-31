var PLAY=1;
var END=0;
var gameState=1;

var trasure
var enemy
var hero
var field
var Pirate1
var score

function preload(){
field = loadImage("field.jpeg")
trasure = loadImage("png.png")
hero = loadImage("boy.png")
enemy = loadImage("pirate.4.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
Trasure = createSprite(700,325,20,20)
Trasure.addImage(trasure)
Trasure.scale=0.25

boy=createSprite(700,350,20,20)
boy.addImage(hero)
boy.scale=0.17
PirateGroup=createGroup()
}
function draw(){
background(field)


   if(gameState===PLAY){
    
        Pirate();
     
       
if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-4
    }
    
    if(keyDown(RIGHT_ARROW)){
        boy.x=boy.x+4
    }
    if(keyDown(UP_ARROW)){
        boy.y=boy.y-4
    }
    
    if(keyDown(DOWN_ARROW)){
        boy.y=boy.y+4
        }

       
        if(PirateGroup.isTouching(boy)){
          PirateGroup.destroyEach();
          score=score+2;
        }
        if(PirateGroup.isTouching(Trasure)){
          gameState=END
        }
       
        }
      else{
        
      }
      
      drawSprites();
      
      //Display score
      text("Score : "+ score,300,30);
    }



function Pirate(){
    if(World.frameCount%80===0){
      position=Math.round(random(1,2))
     Pirate1=createSprite(400,200,20,20);
     Pirate1.addImage(enemy)
     Pirate1.scale=0.50;
    // Pirate1.addImage(pirate)

    }
    Pirate1.y=Math.round(random(50,340));
   
    Pirate1.velocityX=-7;
    Pirate1.setLifetime=100;
    
    PirateGroup.add(Pirate1);
    
    if(position==1)
      {
        Pirate1.x=400
        Pirate1.velocityX=-(7+(score/4))
      }
    else
      {
      if(position==2){
        Pirate1.x=0
        
        Pirate1.velocityX=(7+(score/4))
      }
      }
  }
  


