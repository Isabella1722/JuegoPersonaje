class PantallaNombrarPersonaje{

    constructor(){
   
       this.pantallaNombrarP = loadImage("./data/pantallaResumen.jpg");
       this.input = new InputNombre(89, 169);
    }
   
    dibujarPantallaNombrar(){
   
       imageMode(CENTER);
       image(this.pantallaNombrarP, width / 2, height / 2, 700, 600);
       this.input.pintarInput();
       this.input.mostrarTextoInput();
    }



    activarInput(mX, mY) {
      if (mX > 90 && mX < 397 && mY > 169 && mY < 192) {
          this.input.setActivar(true);
      } else {

          this.input.setActivar(false);
      }


  }

  escribirTextoInput(k) {
//console.log("entro text");
      if (this.input.getActivar() && this.input.getTexto().length < 20) {
          this.input.setTexto(this.input.getTexto() + k);
         


      }

  }

  eliminarTextoInput(){
   //console.log("elimino text");

      if (this.input.getActivar() && this.input.getTexto().length  -1 >=0) {
          let indice=this.input.getTexto().length-1;
          this.input.setTexto(this.input.getTexto().substring(0,indice));


      }
  }
   
   
   
   
   
   
   
   
   
   }