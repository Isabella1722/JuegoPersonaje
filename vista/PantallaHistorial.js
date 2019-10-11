class PantallaHistorial{

    constructor(){
   
       this.pantallaHis = loadImage("./data/historial.jpg");
       
    }
   
    dibujarPantallaHistorial(){
   
       imageMode(CENTER);
       image(this.pantallaHis, width / 2, height / 2, 700, 600);

    }

}