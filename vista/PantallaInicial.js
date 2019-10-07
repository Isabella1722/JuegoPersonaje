 class PantallaIncial{

 constructor(){

    this.pantallaInicio = loadImage("./data/pantallaincial.jpg");
 }

 dibujarPantallaInicio(){

    imageMode(CENTER);
    image(this.pantallaInicio, width / 2, height / 2, 700, 600);
 }









}