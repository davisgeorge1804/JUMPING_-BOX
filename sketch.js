var canvas,ball,edge1,edge2,edge3,edge4,surface1,surface2,surface3,surface4;
var music;

function prel1oad(){
    
}


function setup(){
    music=loadSound("music.mp3");
    
    
    canvas = createCanvas(400,400);
    

    ball=createSprite(200,20,23,20) ;  
    ball.x=(random(20,320))
    ball.shapeColor=("black")
    ball.velocityY=8;
    ball.velocityX=3;

    edge1=createSprite(400,400,3,800) ; 
    edge2=createSprite(1,400,1,800) ; 
    edge3=createSprite(0,0,800,3) ; 
    edge4=createSprite(0,400,800,3) ; 

    surface1=createSprite(40,390,80,15)
    surface1.shapeColor=("blue") 
    surface2=createSprite(145,390,80,15)
    surface2.shapeColor=("orange") 
    surface3=createSprite(250,390,80,15)
    surface3.shapeColor=("purple") 
    surface4=createSprite(360,390,80,15)
    surface4.shapeColor=("green") 

  


}

function draw() {

if(ball.isTouching(surface1))    
 {

    music.loop();
    
 } 
 if(ball.isTouching(surface3))    
 {

music.loop();
    
 }  

 if(ball.isTouching(surface2))
 {
ball.velocity=0
music.stop();

 } 
 
 if(ball.isTouching(surface4))
 {
ball.velocity=0
music.stop();

 }

 ball.bounceOff(edge1)   
 ball.bounceOff(edge2)    
 ball.bounceOff(edge3)     
 ball.bounceOff(edge4)  

 ball.bounceOff(surface1)   
 ball.bounceOff(surface2)    
 ball.bounceOff(surface3)     
 ball.bounceOff(surface4) 



   background("white")
    drawSprites()
}
