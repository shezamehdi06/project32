function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,height,800,20);
  ground2 = new Ground (150, 305, 300, 170);

var score
score.display();
text("SCORE: "+score,750.40);

var bg="sprites/bg.png";
var bg="sprites/bg.png";
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
    }
  background(255,255,255);
  block1 = new block(330,235,30,40);
  block2 = new block(330,235,30,40);
  block3 = new block(330,235,30,40);
  block4 = new block(330,235,30,40);

  block5 = new block (360,195,30,40);
  block6 = new block (360,195,30,40);
  block7 = new block (360,195,30,40);

  block8 = new block (390,155,30,40);
  drawSprites();
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime= responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour<=06 && hour>=19){
      bg="sprites/bg.png";
  }
  else{
      bg="sprites/bg.jpg";
  }
  backgroundImg = loadImage(bg);
}