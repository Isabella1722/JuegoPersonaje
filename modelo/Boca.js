class Boca {

    constructor(posXO, posYO) {
        
        this.boca1 = loadImage("./data/Boca1.png");
        this.boca2 = loadImage("./data/Boca2.png");
        this.boca3 = loadImage("./data/boca3.png");
     
        this.boca1E = false;
        this.boca2E = false;
        this.boca3E = false;
      
        this.posXO = posXO;
        this.posYO = posYO;

    }

    dibujarBoca1() {
        
        if (this.boca1E == true) {
            imageMode(CENTER);
            image(this.boca1, this.posXO,this.posYO, 18, 10);
            //148  200
        }



    }
    dibujarBoca2() {
        if (this.boca2E == true) {
            imageMode(CENTER);
            image(this.boca2,this.posXO,this.posYO, 22, 15);
            //148   200
        }

    }

    dibujarBoca3() {
        if (this.boca3E == true) {
            imageMode(CENTER);
            image(this.boca3,this.posXO,this.posYO, 22, 15);
            //148   200
        }

    }


    getPosXO() {
        return this.posXO;
     }
  
     setPosXO(posXO) {
        this.posXO = posXO;
     }
  
     getPosYO() {
        return this.posYO;
     }
  
     setPosYO (posYO) {
     this.posYO = posYO;
  }
}