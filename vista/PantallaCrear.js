class PantallaCrear {

    constructor(){

        this.pantallaCrea = loadImage("./data/pantallaCreacion.jpg");
        this.botonBase = loadImage("./data/base_1.png");
        this.activarBotonB=true;
     }
    
     dibujarPantallaCrear(){
    
        imageMode(CENTER);
        image(this.pantallaCrea, width / 2, height / 2, 700, 600);
        imageMode(CENTER);
        if (this.activarBotonB==true){
            image(this.botonBase, 515,531,150,50);
        }else {
            this.activarBotonB=false
        }
        



     }


}