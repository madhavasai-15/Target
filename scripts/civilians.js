class Civilian{
    constructor(){
        this.x = random(200, 700);
        this.y = random(100, 400);
        this.width = 30;
        this.height = 30;
        this.ImageNum = 2;
        this.changingImage;
    };

    colorImage(num1, num2, num3, num4){
        this.changingImage = Math.round(random(1, 4));
        if(this.changingImage === 1){
            this.ImageNum = num1;
        }else if(this.changingImage === 2){
            this.ImageNum = num2;
        }else if(this.changingImage === 3){
            this.ImageNum = num3;
        }else if(this.changingImage === 4){
            this.ImageNum = num4;
        }
    };

    touched(){
        if(mouseX > this.x-this.width/2 && mouseX < this.x+this.width/2 && mouseY > this.y-this.height/2 && mouseY < this.y+this.height/2){
            if(time > 0)
            time -= 5;
            wrong.play();
        }else {
            if(time > 0)
            time -= 5;
            wrong.play();
        }
    };

    show(){
        switch(this.ImageNum){
            case 1: image(redImg, this.x, this.y);
                break;
            case 2: image(greenImg, this.x, this.y);
                break;
            case 3: image(blueImg, this.x, this.y);
                break;
            case 4: image(yellowImg, this.x, this.y);
                break;
            default:
                break;    
        }
    };
}