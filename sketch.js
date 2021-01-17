var target;

const civilian = [];
var population = 0;
var populationOver200 = false;
var kill = 0;
var time = 5;
var round = 1;

var shake = false;

var redImg, blueImg, greenImg, yellowImg;
var wanted_boardImg;
var wallImg;

var wrong, correct;
var gameFont;
var gameState = 0;

function preload(){
  redImg = loadImage('images/red.png');
  blueImg = loadImage('images/green.png');
  greenImg = loadImage('images/blue.png');
  yellowImg = loadImage('images/yellow.png');

  wanted_boardImg = loadImage('images/wanted_board.png');
  wallImg = loadImage('images/wall.png');

  wrong = loadSound('sound_effects/wrong.mp3');
  correct = loadSound('sound_effects/correct.mp3');

  gameFont = loadFont('GameFont.ttf');
};

function setup() {
  createCanvas(800, 500);

  target = new Target();


};

function draw() {
  background(0);  
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(gameFont);
  noStroke();
  
  if(gameState === 0){
    fill(255);
    rect(400, 250, 790, 490);

    fill(0);
    textSize(100);
    text("TARGET", 260, 200);

    fill(0);
    textSize(60);
    text("PLAY", 340, 300);
    
    
  }else if(gameState === 1){
    Game();
    if(frameCount % 30 === 0 && time > 0){
      time--;
    }
    GameOver();
  }

  
};

function mouseReleased(){
  if(gameState === 0){
    if(mouseX > 340 && mouseX < 340+100 && mouseY > 300-40 && mouseY < 300){
      gameState = 1;
    }
  }else if(gameState === 1){
    if(time > 0){
      if(mouseX > target.x-target.width/2 && mouseX < target.x+target.width/2 && mouseY > target.y-target.height/2 && mouseY < target.y+target.height/2){
        correct.play(); 
        round++;
        if(time < 100){
          time += 7;
        }
        kill++;
        target.changeImage();
        target.rePos();
        civilian.splice(0, population);
  
        if(populationOver200 === false){
          if(population < 201){
            population += 10;
          }else if(population > 190){
            populationOver200 = true;
          }
        }else {
          population = random(100, 200);
        }
        
    
        for(var i = 0; i < population; i++){
          if(target.ImageNum === 1){
            civilian[i].colorImage(2, 2, 3, 4);
          }else if(target.ImageNum === 2){
            civilian[i].colorImage(1, 3, 3, 4);
          }else if(target.ImageNum === 3){
            civilian[i].colorImage(1, 2, 4, 4);
          }else if(target.ImageNum === 4){
            civilian[i].colorImage(1, 2, 3, 1);
          }
        }
      }else {
        for(var i = 0; i < population; i++){
          civilian[i].touched();
        }
      }
    }else if(time <= 0){
      if(mouseX > 340-10 && mouseX < 340+50 && mouseY > 300-20 && mouseY < 300){
        time = 5;
        kill = 0;
        population = 1;
        populationOver200 = false;
      }
      if(mouseX > 450-10 && mouseX < 450+50 && mouseY > 300-20 && mouseY < 300){
        gameState = 0;
        time = 5;
        kill = 0;
        population = 1;
        populationOver200 = false;
      }
    }
  }
 
  shake = true;
};

function spawningCivilians(){
  for(var i = 0; i < population; i++){
    civilian.push(new Civilian());
  }
}

