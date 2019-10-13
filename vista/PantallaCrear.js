class PantallaCrear {

    constructor() {

        this.pantallaCrea = loadImage("./data/pantallaCreacion.jpg");
        this.botonBase = loadImage("./data/base_1.png");
        this.activarBotonB = true;
        this.botonFlecha= loadImage("./data/Flecha.png");
        this.activarFlecha=false;
      
    }

    dibujarPantallaCrear() {

        imageMode(CENTER);
        image(this.pantallaCrea, width / 2, height / 2, 700, 600);
        imageMode(CENTER);
        if (this.activarBotonB == true) {
            image(this.botonBase, 515, 531, 150, 50);
        } else {
            this.activarBotonB = false
        }


    }

    dibujarBotonFlecha(){
        if (this.activarFlecha==true){
            imageMode(CENTER);
            image(this.botonFlecha, 635,566 , 100, 50);
            textSize(15);
            textAlign(CENTER);

            text("Coloca el personaje en la posición inicial para poder",504,515);
            text("tomarle una foto",385,530);

        }



    }
    





}