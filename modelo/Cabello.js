class Cabello {

    constructor(posX, posY) {

        
        this.cabello1 = loadImage("./data/Cabello1.png");
        this.cabello2 = loadImage("./data/Cabello2.png");
     
        this.cabello1E = false;
        this.cabello2E = false;
      
        this.posX = posX;
        this.posY = posY;

    }

    dibujarCabello1() {
        if (this.cabello1E == true) {
            imageMode(CENTER);
            image(this.cabello1, 148, 173, 100, 100);
        }



    }
    dibujarCabello2() {
        if (this.cabello2E == true) {
            imageMode(CENTER);
            image(this.cabello2,  148, 165, 90, 95);
        }

    }
}