class Target{
    constructor(){
        this.x = random(200, 700);
        this.y = random(100, 400);
        this.width = 30;
        this.height = 42;
        this.ImageNum = 1;
        this.changingImage;
    };

    changeImage(){
        this.changingImage = Math.round(random(1, 4));
        this.ImageNum = this.changingImage;
    };

    rePos(){
        this.x = random(200, 700);
        this.y = random(100, 400);
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