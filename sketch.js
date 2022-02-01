var player, player_Img;
var obstacle, obstacle_Img
var bg_Image;

function preload() {
  player_Img = loadAnimation("./images/running_1.png", "./images/running_2.png", "./images/running_3.png", "./images/running_4.png", "./images/running_5.png", "./images/running_6.png");
  obstacle_Img = loadImage("./images/obstacle_1.jpg");
  bg_Image = loadImage("./images/bg_Img.gif");
}

function setup() {
  createCanvas(650, 650);
  
  player = createSprite(100, 450, 40, 40);
  player.addAnimation("running", player_Img);
  player.scale = 0.7;
}

function draw() {
  background(bg_Image);
  spawnObstacles();
  test();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
   obstacle = createSprite(0, 300, 40, 10);
   obstacle.addImage(obstacle_Img);
   //obstacle.y = Math.round(random(10,600));
   obstacle.scale = 0.1;
   obstacle.velocityY = 3;


    
   obstacle.lifetime = 300;
  }
}

function test() {
  var obs = createSprite(200, 200, 50, 50);
  obs.velocityX = -2;
}
