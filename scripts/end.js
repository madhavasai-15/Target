
function GameOver(){
    if(time < 1){
        cursor();
        fill(0, 180);
        rect(400, 250, 800, 500);
        
        fill(255);
        textSize(44);
        text("play again?", 320, 250);

        if(mouseX > 340-10 && mouseX < 340+50 && mouseY > 300-20 && mouseY < 300){
            textSize(50);
        }else {
            textSize(40);
        }
        text("yes", 340, 300);

        if(mouseX > 450-10 && mouseX < 450+50 && mouseY > 300-20 && mouseY < 300){
            textSize(50);
        }else {
            textSize(40);
        }
        text("no", 450, 300);
    }
};