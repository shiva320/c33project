const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1, snow2, snow3;
var backgroundImg;
var snow4webp, snow5webp;

function preload(){
  getBackgroundImg();
  
  groundImage = loadImage("snow1","snow2","snow3","snow4.webp","snow5.webp")

}


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
      background(backgroundImg);

      noStroke();
      textSize(35);
      fill("white")

      Engine.update(engine);
      //strokeWwight(4);

      ground.display(); 
    

  drawSprites();
}