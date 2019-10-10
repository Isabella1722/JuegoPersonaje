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

        this.arrastrarOjo1=false;
        this.ojoCompleto=false;


       // this.posXO=390;
        //this.posYO=240;
        
        this.posXO=posXO;
		this.posYO=posYO;

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
            image(this.ojo3,390, 341,  50, 10);
        }

    }

    movimiento(){

        this.posX = mouseX;
        this.posY = mouseY;

    }
}