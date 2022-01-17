var player, player_Img;
var bg_Image;

function preload() {
  player_Img = loadAnimation("./images/running_1.png", "./images/running_2.png", "./images/running_3.png", "./images/running_4.png", "./images/running_5.png", "./images/running_6.png");
  bg_Image = loadImage("./images/bg_Img.gif");
}

function setup() {
  createCanvas(600, 600);
  
  player = createSprite(100, 470, 40, 40);
  player.addAnimation("running", player_Img);
  player.scale = 0.7;
}

function draw() {
  //background(bg_Image);
  player.y = player.y + 10
  drawSprites();
}

