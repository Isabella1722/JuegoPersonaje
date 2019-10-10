class Boca {

    constructor(posX, posY) {
        
        this.boca1 = loadImage("./data/Boca1.png");
        this.boca2 = loadImage("./data/Boca2.png");
     
        this.boca1E = false;
        this.boca2E = false;
      
        this.posX = posX;
        this.posY = posY;

    }

    dibujarBoca1() {
        
        if (this.boca1E == true) {
            imageMode(CENTER);
            image(this.boca1, 148, 200, 18, 10);
        }



    }
    dibujarBoca2() {
        if (this.boca2E == true) {
            imageMode(CENTER);
            image(this.boca2,148, 200, 22, 15);
        }

    }
}