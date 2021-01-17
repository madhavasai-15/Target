function GameWall(){
    image(wallImg, 95, 250);
    image(wanted_boardImg, 80, 150);

    fill(255);
    rect(45, 300, 60, 100);
    fill(0);
    textSize(32);
    text("time", 20, 280);
    textSize(48);
    if(time < 10){
        text(time, 35, 330);
    }else {
        text(time, 25, 330);
    }
    
    fill(255);
    rect(115, 300, 60, 100);
    fill(0);
    textSize(32);
    text("kill", 100, 280);
    textSize(48);
    if(kill < 1){
        text(kill, 105, 330);
    }else {
        text(kill, 110, 330);
    }
}