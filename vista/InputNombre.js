class InputNombre{
   constructor(posX,posY){
       this.posX=posX;
       this.posY=posY;
       this.activar=false;
       this.texto="";

 

   }

   pintarInput(){
   if (this.activar){

    stroke(127,3,98);
   } else {

    stroke(0);
   }
   fill(255);
   rectMode(CORNER);
   rect(this.posX,this.posY,310,33)

   }

   mostrarTextoInput(){

    fill(0);
    noStroke();
    textSize(19);
    text(this.texto,this.posX+10,this.posY+20);
   }


   getPosX() {
    return this.posX;
}

setPosX(posX) {
    this.posX=posX;
}

      getPosY() {
          return this.posY;
      }

      setPosY(posY) {
          this.posY=posY;
      }

      getActivar() {
          return this.activar;
      }

      setActivar(activar) {
          this.activar=activar;
      }

      getTexto(){
          return this.texto;
      }

      setTexto(texto) {
          this.texto= texto;
      }






}