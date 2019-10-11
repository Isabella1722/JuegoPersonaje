class Cabello {

    constructor(posXO, posYO) {

        
        this.cabello1 = loadImage("./data/Cabello1.png");
        this.cabello2 = loadImage("./data/Cabello2.png");
     
        this.cabello1E = false;
        this.cabello2E = false;
      
        this.posXO = posXO;
        this.posYO = posYO;

    }

    dibujarCabello1() {
        if (this.cabello1E == true) {
            imageMode(CENTER);
            image(this.cabello1,this.posXO,this.posYO, 100, 100);
            //148   173
        }



    }
    dibujarCabello2() {
        if (this.cabello2E == true) {
            imageMode(CENTER);
            image(this.cabello2, this.posXO,this.posYO, 90, 95);
            //148   165
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