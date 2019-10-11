class CuerpoBase {

   constructor(posX, posY) {

      this.basePersonaje = loadImage("./data/base.png");
      this.posX = posX;
      this.posY = posY;


      this.activarBase = false;
      this.moverCuerpo=false;
   }

   dibujarBase() {
      if (this.activarBase == true) {
         imageMode(CENTER);
         image(this.basePersonaje, this.posX, this.posY, 170, 440);
      }


   }
   moverBase() {

      if (dist(this.posX, this.posY, mouseX, mouseY) <= 100 && this.moverCuerpo==true) {
         this.posX = mouseX;
         this.posY = mouseY;
        // this.moverCuerpo=true;



      }





   }



   getPosX() {
      return this.posX;
   }

   setPosX(posX) {
      this.posX = posX;
   }

   getPosY() {
      return this.posY;
   }

   setPosY (posY) {
   this.posY = posY;
}




}