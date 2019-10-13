class PantallaHistorial{

    constructor(){
   
       this.pantallaHis = loadImage("./data/historial.jpg");
       this.limpiarH=loadImage("./data/limpiar.png");
       this.actvarLimpiar=false;
    }
   
    dibujarPantallaHistorial(){
   
       imageMode(CENTER);
       image(this.pantallaHis, width / 2, height / 2, 700, 600);
       image(this.limpiarH, 530, 135, 105, 30);

    }

}