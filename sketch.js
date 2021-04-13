var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=10
    ball.velocityY=6

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
ball.velocityX=0
ball.velocityY=0
        //write code to stop music
        music.stop()
    }

    stop1()
    stop2()

    drawSprites();
}

function stop1(){

if(ball.x-block3.x<ball.width/2+block3.width/2 
    && block3.x-ball.x<ball.width/2+block3.width/2
    && ball.y-block3.y<ball.height/2+block3.height/2 
    && block3.y-ball.y<ball.height/2+block3.height/2){

ball.velocityX=0
ball.velocityY=0
ball.shapeColor="red"
music.stop()
    }
}

function stop2(){

    if(ball.x-block4.x<ball.width/2+block4.width/2 
        && block4.x-ball.x<ball.width/2+block4.width/2
        && ball.y-block4.y<ball.height/2+block4.height/2 
        && block4.y-ball.y<ball.height/2+block4.height/2){
    
    ball.velocityX=0
    ball.velocityY=0
    ball.shapeColor="green"
    music.stop()
        }
    }


