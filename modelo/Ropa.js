class Ropa {

    constructor(posXO, posYO) {

        
        this.ropa1 = loadImage("./data/Ropa1.png");
        this.ropa2 = loadImage("./data/Ropa2.png");
      
        this.ropa2E = false;
        this.ropa1E = false;
       // this.ropa3E = false;
        this.posXO = posXO;
        this.posYO = posYO;

    }

    dibujarRopa1() {
        if (this.ropa1E == true) {
            imageMode(CENTER);
            image(this.ropa1, this.posXO, this.posXO, 100, 160);
            //148  307
        }



    }
    dibujarRopa2() {
        if (this.ropa2E == true) {
            imageMode(CENTER);
            image(this.ropa2, this.posXO, this.posXO, 118,295);

            //164  369
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