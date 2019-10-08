class Logica {

  
    constructor() {
        //CREAR PANTALLAS
        this.pantallaInicio = new PantallaIncial();
        this.pantallaInstru = new PantallaInstrucciones();
        this.pantallaCrea = new PantallaCrear();
        this.basePersonaje= new CuerpoBase();
        this.pantalla = 0;
      //  let botonJugar;
    }

    pintarPantallas() {
        switch (this.pantalla) {
            case 0:
                //PANTALLA INCIAL DEL JUEGO
                this.pantallaInicio.dibujarPantallaInicio();
                this.botonJugar= mouseX >= 242 && mouseX <= 459 && mouseY >= 443 && mouseY <= 507; 
                

               
                if (this.botonJugar){
                    cursor(HAND)
                }else {

                    cursor(ARROW);
                }
                
               
                  
                break;

            case 1:
                //PANTALLA INSTRUCCIONES
                this.pantallaInstru.dibujarPantallaInstrucciones();

                this.botonBase=mouseX >= 428 && mouseX <= 572 && mouseY >= 516 && mouseY <= 556;

                if (this.botonBase){
                    cursor(HAND)
                }else {

                    cursor(ARROW);
                }
                break;



            case 2:
                //PANTALLAJUEGO
                this.pantallaCrea.dibujarPantallaCrear();
                if (mouseX >= 440 && mouseX <= 588 && mouseY >= 507 && mouseY <= 547) {
                    this.pantallaCrea.activarBotonB==false;
                    
                   }
                    if (this.basePersonaje.activarBase==true){
                        this.basePersonaje.dibujarBase();
                    }
                   

                

            

            //    fill(127,3,98);
               // noStroke();
               // rectMode(CENTER);
             //   rect(515,531,150,60);
               // fill(255);
               // Text("Base");
               



                break;



            case 3:
                //PANTALLA NOMBRAR PERSONAJE


                break;


            case 3:
                //PANTALLA HISTORIAL PERSONAJES


                break;


            default:

                break;




        }


        

    }
    evaluacionPantallas(){

        switch (this.pantalla) {
            case 0:
                //PANTALLA INCIAL DEL JUEGO
                if (mouseX >= 242 && mouseX <= 459 && mouseY >= 443 && mouseY <= 507) {
                   this.pantalla = 1;
                 }
                break;

            case 1:
                //PANTALLA INSTRUCCIONES
                
                if (mouseX >= 428 && mouseX <= 572 && mouseY >= 516 && mouseY <= 556) {
                    this.pantalla = 2;
                  }


                break;



            case 2:
                //PANTALLAJUEGO
                if (mouseX >= 440 && mouseX <= 588 && mouseY >= 507 && mouseY <= 547) {
                   this.pantallaCrea.activarBotonB=false;

                  this.basePersonaje.activarBase=true;
                  // this.basePersonaje.dibujarBase();
                  }

                  if (mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {
                    this.basePersonaje.moverBase();
                   }



                break;



            case 3:
                //PANTALLA NOMBRAR PERSONAJE


                break;


            case 3:
                //PANTALLA HISTORIAL PERSONAJES


                break;


            default:

                break;





        }


            
    }







}