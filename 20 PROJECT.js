
function preload() {
garden.loadImage("background",garden.png);
cat.loadImage("catSitting",cat1.png);
cat.loadAnimation("catRunning",cat2.png);
mouse.loadImage("mouseStanding",mouse1.png);

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200.200,10,10);
    mouse = createSprite(100,200,10,10;)

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.addAnimation("catLastImage",cat3.png);
    cat,changeAnimation("atLastImage");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat2.png);
      cat.changeAnimation("catRunning");
  }


}
