var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload()
{
ansImg=loadImage("questin.png");
quesImg=loadImage("2.png");
bg2Img=loadImage("bg.jpg");
congImg=loadImage("cong.png");
winImg=loadImage("win.png");
bgImg=loadImage("download.jpg");
sparImg=loadAnimation("sparkle/j-0.png","sparkle/j-1.png","sparkle/j-2.png","sparkle/j-3.png","sparkle/j-4.png","sparkle/j-5.png","sparkle/j-6.png","sparkle/j-7.png","sparkle/j-8.png","sparkle/j-9.png","sparkle/j-10.png","sparkle/j-11.png","sparkle/j-12.png","sparkle/j-13.png","sparkle/j-14.png","sparkle/j-15.png","sparkle/j-16.png","sparkle/j-17.png","sparkle/j-18.png","sparkle/j-19.png","sparkle/j-20.png","sparkle/j-21.png","sparkle/j-22.png","sparkle/j-23.png","sparkle/j-24.png","sparkle/j-25.png","sparkle/j-26.png","sparkle/j-27.png","sparkle/j-28.png","sparkle/j-29.png","sparkle/j-30.png");
} 

function setup(){
  canvas = createCanvas(950,700);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  question3=createSprite(475, 250, 70,70);
	question3.addImage(quesImg)
	question3.scale=0.75

  ans=createSprite(475, 400, 70,70);
	ans.addImage(ansImg)
	ans.scale=0.75
  
  //cong=createSprite(475, 230, 70,70);
	///cong.addImage(congImg)
	//cong.scale=0.65

  //win=createSprite(475, 280, 70,70);
	//win.addImage(winImg)
	//win.scale=0.7

  sparkle=createSprite(225, 240, 70,70);
	sparkle.addAnimation("fall",sparImg)
	sparkle.scale=2
  sparkle2=createSprite(475, 240, 70,70);
	sparkle2.addAnimation("fall",sparImg)
	sparkle2.scale=2
  sparkle3=createSprite(755, 240, 70,70);
	sparkle3.addAnimation("fall",sparImg)
	sparkle3.scale=2
  sparkle.visible=false
  sparkle2.visible=false
  sparkle3.visible=false
}


function draw(){
  background(bg2Img);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  drawSprites();
}
