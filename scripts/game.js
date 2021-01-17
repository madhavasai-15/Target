function Game(){
    if(time > 0){
        if(shake === true){
            translate(random(-5, 5), random(-5, 5));
            if(frameCount % 4 === 0){
                shake = false;
            }
        }
    }
      
    //Background
    fill(255);
    rect(400, 250, 790, 490);
    
    GameWall();
    
    if(target.ImageNum === 1){
        image(redImg, 80, 145);
    }else if(target.ImageNum === 2){
        image(greenImg, 80, 145);
    }else if(target.ImageNum === 3){
        image(blueImg, 80, 145);
    }else if(target.ImageNum === 4){
        image(yellowImg, 80, 145);
    }
    
    spawningCivilians();
    for(var i = 0; i < population; i++){
        civilian[i].show();
    }
    
    if(mouseX > target.x-target.width/2 && mouseX < target.x+target.width/2 && mouseY > target.y-target.height/2 && mouseY < target.y+target.width/2){
        cursorImgTurn = true;
    }else {
        cursorImgTurn = false;
    }
      
    
    target.show();
}