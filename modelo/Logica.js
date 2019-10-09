class Logica {

  
    constructor() {
        //CREAR PANTALLAS
        this.pantallaInicio = new PantallaIncial();
        this.pantallaInstru = new PantallaInstrucciones();
        this.pantallaCrea = new PantallaCrear();
        this.basePersonaje= new CuerpoBase();
        this.outfit1= new Ropa();
        this.outfit2= new Ropa();
        this.look1= new Cabello();
        this.look2= new Cabello();
        this.labios1= new Boca();
        this.labios2= new Boca();

      
      
        this.pantalla = 0;

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

                this.flecha=mouseX >= 598 && mouseX <= 680 && mouseY >= 553 && mouseY <= 579;

                if (this.flecha){
                    cursor(HAND)
                }else {

                    cursor(ARROW);
                }
                break;



            case 2:
                //PANTALLAJUEGO
                this.pantallaCrea.dibujarPantallaCrear();
                cursor(ARROW);
                if (mouseX >= 440 && mouseX <= 588 && mouseY >= 507 && mouseY <= 547) {
                    this.pantallaCrea.activarBotonB==false;
                    cursor(HAND);
                    
                   }
                    if (this.basePersonaje.activarBase==true){
                        this.basePersonaje.dibujarBase();
                    }
                   
                    if (this.outfit1.ropa1E==true){

                        this.outfit1.dibujarRopa1();
                        this.outfit2.ropa2E=false;

                    }
                    if (this.outfit2.ropa2E==true){

                        this.outfit2.dibujarRopa2();
                        this.outfit1.ropa1E=false;

                    }

                    if (this.look1.cabello1E==true){

                        this.look1.dibujarCabello1();
                        this.look2.cabello2E=false;

                    }

                    if (this.look2.cabello2E==true){

                        this.look2.dibujarCabello2();
                        this.look1.cabello1E=false;

                    }

                    if (this.labios1.boca1E==true){

                        this.labios1.dibujarBoca1();
                        this.labios2.boca2E=false;

                    }

                    if (this.labios2.boca2E==true){

                        this.labios2.dibujarBoca2();
                        this.labios1.boca1E=false;

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
                
                if (mouseX >= 598 && mouseX <= 680 && mouseY >= 553 && mouseY <= 579) {
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


                   if (mouseX >= 460 && mouseX <= 549 && mouseY >= 406 && mouseY <= 492) {
                    this.outfit1.ropa1E=true;
                    this.outfit2.ropa2E=false;
                   }
                   if (mouseX >= 569 && mouseX <= 658 && mouseY >= 405 && mouseY <= 493) {
                    this.outfit2.ropa2E=true;
                    this.outfit1.ropa1E=false;
                   }

                   if (mouseX >= 602 && mouseX <= 670 && mouseY >= 219 && mouseY <= 277) {
                    this.look1.cabello1E=true;
                    this.look2.cabello2E=false;
                   }
                   if (mouseX >= 600 && mouseX <= 669 && mouseY >= 307 && mouseY <= 365) {
                    this.look2.cabello2E=true;
                    this.look1.cabello1E=false;
                   }

                   if (mouseX >= 474 && mouseX <= 541 && mouseY >= 218 && mouseY <= 256) {
                    this.labios1.boca1E=true;
                    this.labios2.boca2E=false;
                   }

                   if (mouseX >= 472 && mouseX <= 541 && mouseY >= 269 && mouseY <= 310) {
                    this.labios2.boca2E=true;
                    this.labios1.boca1E=false;
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