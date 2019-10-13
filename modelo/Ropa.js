class Ropa {

    constructor(posXR, posYR) {

        
        this.ropa1 = loadImage("./data/Ropa1.png");
        this.ropa2 = loadImage("./data/Ropa2.png");
      
        this.ropa2E = false;
        this.ropa1E = false;
       // this.ropa3E = false;
        this.posXR = posXR;
        this.posYR = posYR;

    }

    dibujarRopa1() {
        if (this.ropa1E == true) {
            imageMode(CENTER);
            image(this.ropa1, this.posXR, this.posYR, 100, 160);
            //148  307
           // console.log(this.posYO,this.posYO);
        }



    }
    dibujarRopa2() {
        if (this.ropa2E == true) {
            imageMode(CENTER);
            image(this.ropa2, this.posXR, this.posYR, 118,295);

            //164  369
        }

    }
   
    getPosXR() {
        return this.posXR;
     }
  
     setPosXR(posXR) {
        this.posXR = posXR;
     }
  
     getPosYR() {
        return this.posYR;
     }
  
     setPosYR (posYR) {
     this.posYR = posYR;
  }






}