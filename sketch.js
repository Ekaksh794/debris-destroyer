

var alien  , bullet, bg, debris,bulletGroup,debrisGroup ;
var alienImage,debrisImage,bgImg;


function preload(){
alienImage = loadImage("alien.png");
debrisImage = loadImage("meteor.png");
bgImg = loadImage("universe.jpg");
}



function setup() {
  createCanvas(1000,700);


  // creating bow to shoot arrow
  alien = createSprite(880,220,20,50);
 alien.addImage(alienImage);
  alien.scale = 0.1;

  
 debrisGroup = new Group();
 bulletGroup = new Group();
   score = 0  
  
}

function draw() {
background(bgImg);
/*
  // moving ground
    bg.velocityX = -3 

    if (bg.x < 0){
      bg.x = bg.width/2;
    }
   */
   
    
   
  //moving bow
 alien.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createBullet ();
  
    
  }
  
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 10 == 0) {
    if (select_balloon == 1) {
      debri();
    } 
  }
   destroy();
  drawSprites();
           text("Score: "+ score, 500,50);
}


function debri() {
  var debris = createSprite(0,Math.round(random(20, 370)), 10, 10);
  debris.addImage(debrisImage);
  debris.velocityX = 5;
  debris.lifetime = 300;
  debris.scale = 0.1;
  
 debrisGroup.add(debris);
  
}




  



// Creating  arrows for bow
 

 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
 
  bullet.x = 880;
  bullet.y=alien.y;
  bullet.velocityX = -4;
  bullet.lifetime = 250;
  bullet.scale = 0.3;
  
  bulletGroup.add(bullet)
}

function destroy(){
  if (bulletGroup.isTouching(debrisGroup)){
    debrisGroup.setVelocityXEach(0);
    debrisGroup.setLifetimeEach(0);
    debrisGroup.destroyEach();
    
  

     score= score+2;
     
   }
}




















