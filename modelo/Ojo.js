class Ojo {

    constructor(posX, posY) {

        
        this.ojo1 = loadImage("./data/OjosCafe.png");
        this.ojo2 = loadImage("./data/OjosAzules.png");
        this.ojo3 = loadImage("./data/OjosVerdes.png");
     
        this.ojo1E = true;
        this.ojo2E = true;
        this.ojo3E = true;
      
        this.posX = posX;
        this.posY = posY;

        this.arrastrarOjo1=false;
        this.ojoCompleto=false;


        this.posXO=390;
		this.posYO=240;

    }

    dibujarOjoCafe() {
        if (this.ojo1E == true) {
            imageMode(CENTER);
            image(this.ojo1, 392, 240 , 58, 12);
        }



    }
    dibujarOjoAzul() {
        if (this.ojo2E == true) {
            imageMode(CENTER);
            image(this.ojo2,392, 291, 58, 12);
        }

    }
    dibujarOjoVerde() {
        if (this.ojo3E == true) {
            imageMode(CENTER);
            image(this.ojo3,392, 340,  58, 12);
        }

    }
}