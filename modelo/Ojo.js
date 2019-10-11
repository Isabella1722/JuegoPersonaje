class Ojo {

    constructor(posXO, posYO) {


        


        
        this.ojo1 = loadImage("./data/OjosCafe.png");
        this.ojo2 = loadImage("./data/OjosAzules.png");
        this.ojo3 = loadImage("./data/OjosVerdes.png");
     
        this.ojo1E = true;
        this.ojo2E = true;
        this.ojo3E = true;
      
       // this.posX = mouseX;
        //this.posY = mouseY;
        this.posXO=posXO;
		this.posYO=posYO;
        //OJO UNO
        this.arrastrarOjo1=false;
        this.ojoCompleto1=false;

        //OJO DOS 

        this.arrastrarOjo2=false;
        this.ojoCompleto2=false;


        //OJO TRES
        this.arrastrarOjo3=false;
        this.ojoCompleto3=false;
        
       

    }

    dibujarOjoCafe() {
        if (this.ojo1E == true) {
            imageMode(CENTER);
            image(this.ojo1, this.posXO, this.posYO , 50, 10);
        }



    }
    dibujarOjoAzul() {
        if (this.ojo2E == true) {
            imageMode(CENTER);
            image(this.ojo2,this.posXO, this.posYO , 50, 10);
        }

    }
    dibujarOjoVerde() {
        if (this.ojo3E == true) {
            imageMode(CENTER);
            image(this.ojo3,this.posXO, this.posYO ,  50, 10);
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