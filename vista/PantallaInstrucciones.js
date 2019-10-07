class PantallaInstrucciones{

    constructor(){

        this.pantallaInstru = loadImage("./data/intrucciones.jpg");
     }
    
     dibujarPantallaInstrucciones(){
    
        imageMode(CENTER);
        image(this.pantallaInstru, width / 2, height / 2, 700, 600);
     }






}