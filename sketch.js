var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database;
var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
  function setup() {
  createCanvas(1500,700);
  database=firebase.database()
  database.ref("balloon/position").on("value",readposition,error)

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);
     if(keyDown(UP_ARROW)){
        writePosition(0,-2);
        balloon.addAnimation("hotAirBalloon",balloonImage2);
        balloon.scale=balloon.scale -0.01;
    }
    drawSprites();
    fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
  }

  


function readposition(data){
  position=data.val()
  balloon.x=position.x;
  balloon.y=position.y;
}

function error(){
  console.log("there is an error")
}

function writePosition(x,y){
  database.ref("balloon/position").set({
      'x':position.x+x,
      'y':position.y+y
  })
}

