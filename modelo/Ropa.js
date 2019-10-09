class Ropa {

    constructor(posX, posY) {

        
        this.ropa1 = loadImage("./data/Ropa1.png");
        this.ropa2 = loadImage("./data/Ropa2.png");
      
        this.ropa2E = false;
        this.ropa1E = false;
       // this.ropa3E = false;
        this.posX = posX;
        this.posY = posY;

    }

    dibujarRopa1() {
        if (this.ropa1E == true) {
            imageMode(CENTER);
            image(this.ropa1, 148, 307, 100, 160);
        }



    }
    dibujarRopa2() {
        if (this.ropa2E == true) {
            imageMode(CENTER);
            image(this.ropa2,  164, 369, 118,295);
        }

    }
   






}