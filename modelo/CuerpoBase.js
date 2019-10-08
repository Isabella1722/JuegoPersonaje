class CuerpoBase{

    constructor(posX,posY){

        this.basePersonaje = loadImage("./data/base.png");
        this.posX=posX;
        this.posY=posY;
        this.activarBase=false;
     }
    
     dibujarBase(){
    if (this.activarBase==true){
      imageMode(CENTER);
      image(this.basePersonaje, 146, 350, 170, 440);
    }
       

     
     }




}