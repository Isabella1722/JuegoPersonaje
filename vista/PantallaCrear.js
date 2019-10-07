class PantallaCrear {

    constructor(){

        this.pantallaCrea = loadImage("./data/pantallaCrear.jpg");
     }
    
     dibujarPantallaCrear(){
    
        imageMode(CENTER);
        image(this.pantallaCrea, width / 2, height / 2, 700, 600);
     }


}