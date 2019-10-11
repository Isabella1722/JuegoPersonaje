class Logica {



    constructor() {
        //CREAR PANTALLAS
        this.pantallaInicio = new PantallaIncial();
        this.pantallaInstru = new PantallaInstrucciones();
        this.pantallaNomP = new PantallaNombrarPersonaje();
        this.pantallaCrea = new PantallaCrear();
        this.basePersonaje = new CuerpoBase(146, 350);
        this.outfit1 = new Ropa( 148 , 307);
        this.outfit2 = new Ropa();
        this.look1 = new Cabello(/*148,  307*/);
        this.look2 = new Cabello(/*164,  369*/);
        this.labios1 = new Boca();
        this.labios2 = new Boca();
        this.labios3 = new Boca();
        this.ojo1 = new Ojo(390, 240);
        this.ojo2 = new Ojo(390, 289);
        this.ojo3 = new Ojo();
        this.screenshot = this.screenshot;
        this.screenshot2 = this.screenshot2;
        this.pantallaHist = new PantallaHistorial();
        if (JSON.parse(localStorage.getItem("users")) !== null) {
            this.users = JSON.parse(localStorage.getItem("users"));
        } else {
            this.users = [];
        }

        //  this.input = new InputNombre();



        this.pantalla = 2;

    }
    //es todo lo que se manda al DRAW DE EJECUTABLE
    pintarPantallas() {
        switch (this.pantalla) {
            case 0:
                //PANTALLA INCIAL DEL JUEGO
                this.pantallaInicio.dibujarPantallaInicio();
                this.botonJugar = mouseX >= 242 && mouseX <= 459 && mouseY >= 443 && mouseY <= 507;



                if (this.botonJugar) {
                    cursor(HAND)
                } else {

                    cursor(ARROW);
                }



                break;

            case 1:
                //PANTALLA INSTRUCCIONES
                this.pantallaInstru.dibujarPantallaInstrucciones();

                this.flecha = mouseX >= 598 && mouseX <= 680 && mouseY >= 553 && mouseY <= 579;

                if (this.flecha) {
                    cursor(HAND)
                } else {

                    cursor(ARROW);
                }
                break;



            case 2:
                //PANTALLAJUEGO
                this.pantallaCrea.dibujarPantallaCrear();
                cursor(ARROW);
                if (mouseX >= 440 && mouseX <= 588 && mouseY >= 507 && mouseY <= 547) {
                    this.pantallaCrea.activarBotonB == false;
                    cursor(HAND);

                }
                if (this.basePersonaje.activarBase == true) {
                    this.basePersonaje.dibujarBase();
                }




                if (mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {

                    //this.basePersonaje.moverBase();
                    this.basePersonaje.moverCuerpo = true;

                    if (this.ojo1.ojoCompleto1 == true) {
                        this.ojo1.setPosXO(this.basePersonaje.getPosX() + 3);
                        this.ojo1.setPosYO(this.basePersonaje.getPosY() - 175);

                    }



                }


                if (mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {

                    //this.basePersonaje.moverBase();
                    this.basePersonaje.moverCuerpo = true;

                    if (this.ojo2.ojoCompleto2 == true) {
                        this.ojo2.setPosXO(this.basePersonaje.getPosX() + 3);
                        this.ojo2.setPosYO(this.basePersonaje.getPosY() - 175);

                    }







                }



                // if (this.ojoCompleto1 == true && this.moverCuerpo == true) {

                //this.basePersonaje.moverBase();
                // this.basePersonaje.moverCuerpo=true;

                //    this.ojo1.setPosXO(mouseX + 3);
                //    this.ojo1.setPosYO(mouseY - 175);
                //  }





                if (this.outfit1.ropa1E == true && this.basePersonaje.activarBase == true) {

                    this.outfit1.dibujarRopa1();
                    this.outfit2.ropa2E = false;
                    this.outfit1.setPosXO(this.basePersonaje.getPosX());
                    this.outfit1.setPosYO(this.basePersonaje.getPosY() );

                }
                if (this.outfit2.ropa2E == true && this.basePersonaje.activarBase == true) {

                    this.outfit2.dibujarRopa2();
                    this.outfit1.ropa1E = false;
                   this.outfit2.setPosXO(this.basePersonaje.getPosX() + 3);
                    this.outfit2.setPosYO(this.basePersonaje.getPosY() - 5);

                }

                if (this.look1.cabello1E == true && this.basePersonaje.activarBase == true) {

                    this.look1.dibujarCabello1();
                    this.look2.cabello2E = false;
                    this.look1.setPosXO(this.basePersonaje.getPosX() + 2);
                    this.look1.setPosYO(this.basePersonaje.getPosY() - 175);

                }

                if (this.look2.cabello2E == true && this.basePersonaje.activarBase == true) {

                    this.look2.dibujarCabello2();
                    this.look1.cabello1E = false;
                   this.look2.setPosXO(this.basePersonaje.getPosX()+ 2);
                   this.look2.setPosYO(this.basePersonaje.getPosY()  - 190);

                }

                if (this.labios1.boca1E == true && this.basePersonaje.activarBase == true) {

                    this.labios1.dibujarBoca1();
                    this.labios2.boca2E = false;
                    this.labios3.boca3E = false;
                    /////////////////////
                    this.labios1.setPosXO(this.basePersonaje.getPosX() + 3);
                    this.labios1.setPosYO(this.basePersonaje.getPosY() - 150);

                }

                if (this.labios2.boca2E == true && this.basePersonaje.activarBase == true) {

                    this.labios2.dibujarBoca2();
                    this.labios1.boca1E = false;
                    this.labios3.boca3E = false;
                    this.labios2.setPosXO(this.basePersonaje.getPosX() + 3);
                    this.labios2.setPosYO(this.basePersonaje.getPosY() - 150);

                }



                if (this.labios3.boca3E == true && this.basePersonaje.activarBase == true) {

                    //console.log("dibuja");
                    this.labios3.dibujarBoca3();
                 
                    this.labios1.boca1E = false;
                    this.labios2.boca2E = false;
                    this.labios3.setPosXO(this.basePersonaje.getPosX() + 3);
                    this.labios3.setPosYO(this.basePersonaje.getPosY() - 150);

                }

                if (this.ojo1.ojo1E == true && this.basePersonaje.activarBase == true) {

                    this.ojo1.dibujarOjoCafe();


                }

                if (this.ojo2.ojo2E == true && this.basePersonaje.activarBase == true) {

                    this.ojo2.dibujarOjoAzul();


                }
                if (this.ojo3.ojo3E == true && this.basePersonaje.activarBase == true) {

                    this.ojo3.dibujarOjoVerde();


                }

                //VALIDACIÓN PANTALLAS

                  if ((this.basePersonaje.activarBase == true) && (this.outfit1.ropa1E == true || this.outfit2.ropa2E == true)
                      && (this.look1.cabello1E == true || this.look2.cabello2E == true) && (this.labios1.boca1E == true || this.labios2.boca2E == true || this.labios3.boca3E == true) &&
                      (this.ojo1.ojo1E == true || this.ojo2.ojo2E == true )) {
                      this.pantalla = 3;
  
  
                  }
  

                this.screenshot = get(40, 123, 247, 464);
                this.screenshot2 = get(40, 123, 247, 464);








                //    fill(127,3,98);
                // noStroke();
                // rectMode(CENTER);
                //   rect(515,531,150,60);
                // fill(255);
                // Text("Base");




                break;



            case 3:
                //PANTALLA NOMBRAR PERSONAJE
                ///background (0);
                // this.input.paint();
                this.pantallaNomP.dibujarPantallaNombrar();






                break;


            case 4:
                //PANTALLA HISTORIAL PERSONAJES
                this.pantallaHist.dibujarPantallaHistorial();
                let users2 = new Array();
                let element = 0;
                //La variable users2 la iguala a lo que tiene localStorage en su key users 
                //En este caso, tendrá un arreglo en formato JSON de usuarios.
                // JSON.parse se utiliza para convertir el formato JSON a un objeto tipo Array()
                // Por lo tanto, ya puede dar tratamiento a users2 como si fuera un Array
                //Si localStorage no tiene nada, la siguiente línea dará error :v 

                users2 = this.users;

                for (element in users2) {
                    text(users2[element].name, 50, 200 + (element * 50));
                    text(users2[element].id, 150, 200 + (element * 50));
                    text(users2[element].date, 350, 200 + (element * 50));
                }

                break;


            default:

                break;




        }




    }




    ordenarId() {

        this.users.sort(function (a, b) {
            if (a.id > b.id) {
                return 1;
            }
            if (a.id < b.id) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    }

    ordenarName() {

        this.users.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    }

    ordenarDate() {

        this.users.sort(function (a, b) {
            if (a.date > b.date) {
                return 1;
            }
            if (a.date < b.date) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

    }

    //es todo lo que se manda al mousePressed DE EJECUTABLE
    evaluacionPantallas() {

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
                    this.pantallaCrea.activarBotonB = false;

                    this.basePersonaje.activarBase = true;

                }
                //BASE PERSONAJE



                //OUTFIT 1
                if (mouseX >= 460 && mouseX <= 549 && mouseY >= 406 && mouseY <= 492) {
                    this.outfit1.ropa1E = true;
                    this.outfit2.ropa2E = false;
                }

                //OUTFIT 1
                if (mouseX >= 569 && mouseX <= 658 && mouseY >= 405 && mouseY <= 493) {
                    this.outfit2.ropa2E = true;
                    this.outfit1.ropa1E = false;
                }

                //LOOK 1
                if (mouseX >= 602 && mouseX <= 670 && mouseY >= 219 && mouseY <= 277) {
                    this.look1.cabello1E = true;
                    this.look2.cabello2E = false;
                }


                //LOOK 2
                if (mouseX >= 600 && mouseX <= 669 && mouseY >= 307 && mouseY <= 365) {
                    this.look2.cabello2E = true;
                    this.look1.cabello1E = false;
                }


                //LABIOS 1
                if (mouseX >= 474 && mouseX <= 541 && mouseY >= 218 && mouseY <= 256) {
                    this.labios1.boca1E = true;
                    this.labios2.boca2E = false;
                    this.labios3.boca3E = false;
                }

                //LABIOS 2

                if (mouseX >= 472 && mouseX <= 541 && mouseY >= 269 && mouseY <= 310) {
                    this.labios2.boca2E = true;
                    this.labios1.boca1E = false;
                    this.labios3.boca3E = false;

                }

                //LABIOS 3

                if (mouseX >= 472 && mouseX <= 540 && mouseY >= 322 && mouseY <= 361) {
                    this.labios3.boca3E = true;
                    this.labios1.boca1E = false;
                    this.labios2.boca2E = false;
                }





                break;



            case 3:
                //PANTALLA NOMBRAR PERSONAJE
                this.pantallaNomP.activarInput(mouseX, mouseY);
                //BOTÓN GUARDAR
                if (mouseX >= 421 && mouseX <= 542 && mouseY >= 165 && mouseY <= 195) {

                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var id = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '' + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds();


                    let user = new Object();
                    user.name = this.pantallaNomP.input.getTexto();
                    user.id = id;
                    user.date = date;
                    if (JSON.parse(localStorage.getItem("users")) !== null) {
                        this.users = JSON.parse(localStorage.getItem("users"));
                    }
                    this.users.push(user);
                    localStorage.clear();
                    localStorage.setItem("users", JSON.stringify(this.users));
                    console.log(localStorage);

                }

                //BOTÓN PNG


                if (mouseX >= 234 && mouseX <= 341 && mouseY >= 285 && mouseY <= 316) {
                    this.screenshot2.save("personaje.png");


                }

                //BOTÓN JPG

                if (mouseX >= 90 && mouseX <= 193 && mouseY >= 284 && mouseY <= 315) {

                    this.screenshot.save("personaje.jpg");



                }



                //BOTÓN HISTORIAL
                if (mouseX >= 90 && mouseX <= 285 && mouseY >= 398 && mouseY <= 445) {
                    this.pantalla = 4;





                }






                break;


            case 4:
                //PANTALLA HISTORIAL PERSONAJES


                break;


            default:

                break;





        }



    }

    arrastreOjosUno() {
        //OJOS UNO


        if (!this.ojo1.arrastrarOjo1 && mouseX >= 364 && mouseX <= 419 && mouseY >= 235 && mouseY <= 242) {
            this.ojo1.arrastrarOjo1 = true;
            //System.out.println("entro clicked");
            console.log("entro click ojo 1");


        }


    }
    arrastreOjosDos() {

        //OJOS DOS

        if (!this.ojo2.arrastrarOjo2 && mouseX >= 365 && mouseX <= 410 && mouseY >= 285 && mouseY <= 293) {
            this.ojo2.arrastrarOjo2 = true;
            //System.out.println("entro clicked");
            console.log("entro click ojo 2");
            this.ojo1.ojoCompleto1 == false;


        }



    }

    movimientoOjosUno() {
        // MOVIMIENTO DE LOS OJOS A LA CARA OJOS 1
        if (this.basePersonaje.moverCuerpo == true) {
            this.basePersonaje.moverBase();

        }

        //  if ( this.ojoCompleto1 == true) {

        //    this.ojo1.setPosXO(this.basePersonaje.getPosX() + 3);
        //    this.ojo1.setPosYO(this.basePersonaje.getPosY() - 175);
        // }




        if (this.ojo1.arrastrarOjo1 == true) {

            this.ojo1.posXO = mouseX;
            this.ojo1.posYO = mouseY;
            console.log("entro movimiento ojos1");



        }

        // MOVIMIENTO DE LOS OJOS A LA CARA OJOS 2

        if (this.ojo2.arrastrarOjo2 == true) {

            this.ojo2.posXO = mouseX;
            this.ojo2.posYO = mouseY;
            console.log("entro movimiento ojos2");


        }

    }



    movimientoOjosDos() {

        console.log(this.ojo2.arrastrarOjo2)


        // MOVIMIENTO DE LOS OJOS A LA CARA OJOS 2

        if (this.ojo2.arrastrarOjo2 == true) {

            this.ojo2.posXO = mouseX;
            this.ojo2.posYO = mouseY;
            this.ojo1.ojoCompleto1 = false;
            this.ojo1.arrastrarOjo1 = false;
            console.log("entro movimiento ojos2");


        }

        //  if (mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {
        //    this.basePersonaje.moverBase();
        //}

        //mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {
        // this.basePersonaje.moverBase();
        // }

    }

    relacionOjosCaraUno() {
        //OJOS UNO
        if (!this.ojo1.ojoCompleto1 && this.ojo1.arrastrarOjo1 && mouseX >= 123 && mouseX <= 173 && mouseY >= 168 && mouseY <= 179) {
            this.ojo1.posXO = 147;
            this.ojo1.posYO = 174;

            this.ojo1.ojoCompleto1 = true;
            this.ojo1.arrastrarOjo1 = false;
            //System.out.println("liberó");
        } else if (this.ojo1.arrastrarOjo1 && !this.ojo1.ojoCompleto1) {

            this.ojo1.posXO = this.basePersonaje.getPosX() - 200;
            this.ojo1.posYO = this.basePersonaje.getPosY();
        }

        this.ojo1.arrastrarOjo1 = false;
        console.log("entro relación ojo 1");









    }
    soltarBase() {

        this.basePersonaje.moverCuerpo = false;




    }






    relacionOjosCaraDos() {


        //OJOS DOS 

        if (!this.ojo2.ojoCompleto2 && this.ojo2.arrastrarOjo2 && mouseX >= 123 && mouseX <= 173 && mouseY >= 168 && mouseY <= 179) {
            this.ojo2.posXO = 147;
            this.ojo2.posYO = 174;

            this.ojo2.ojoCompleto2 = true;
            this.ojo1.ojo1E = false;
            //System.out.println("liberó");
        } else if (this.ojo1.arrastrarOjo1 && !this.ojo1.ojoCompleto1) {

            this.ojo1.posXO = this.basePersonaje.getPosX() - 200;
            this.ojo1.posYO = this.basePersonaje.getPosY();
        }


        this.ojo2.arrastrarOjo2 = false;
        console.log("entro relación ojo2");
    }


}











