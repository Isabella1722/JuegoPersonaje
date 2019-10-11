class Logica {



    constructor() {
        //CREAR PANTALLAS
        this.pantallaInicio = new PantallaIncial();
        this.pantallaInstru = new PantallaInstrucciones();
        this.pantallaNomP = new PantallaNombrarPersonaje();
        this.pantallaCrea = new PantallaCrear();
        this.basePersonaje = new CuerpoBase();
        this.outfit1 = new Ropa();
        this.outfit2 = new Ropa();
        this.look1 = new Cabello();
        this.look2 = new Cabello();
        this.labios1 = new Boca();
        this.labios2 = new Boca();
        this.ojo1 = new Ojo(390, 240);
        this.ojo2 = new Ojo(390, 290);
        this.ojo3 = new Ojo();
        this.pantallaHist = new PantallaHistorial();
        if (JSON.parse(localStorage.getItem("users")) !== null) {
            this.users = JSON.parse(localStorage.getItem("users"));
        }else{
            this.users = [];
        }

        //  this.input = new InputNombre();



        this.pantalla = 0;

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

                if (this.outfit1.ropa1E == true && this.basePersonaje.activarBase == true) {

                    this.outfit1.dibujarRopa1();
                    this.outfit2.ropa2E = false;

                }
                if (this.outfit2.ropa2E == true && this.basePersonaje.activarBase == true) {

                    this.outfit2.dibujarRopa2();
                    this.outfit1.ropa1E = false;

                }

                if (this.look1.cabello1E == true && this.basePersonaje.activarBase == true) {

                    this.look1.dibujarCabello1();
                    this.look2.cabello2E = false;

                }

                if (this.look2.cabello2E == true && this.basePersonaje.activarBase == true) {

                    this.look2.dibujarCabello2();
                    this.look1.cabello1E = false;

                }

                if (this.labios1.boca1E == true && this.basePersonaje.activarBase == true) {

                    this.labios1.dibujarBoca1();
                    this.labios2.boca2E = false;

                }

                if (this.labios2.boca2E == true && this.basePersonaje.activarBase == true) {

                    this.labios2.dibujarBoca2();
                    this.labios1.boca1E = false;

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

                if ((this.basePersonaje.activarBase == true) && (this.outfit1.ropa1E == true || this.outfit2.ropa2E == true)
                    && (this.look1.cabello1E == true || this.look2.cabello2E == true) && (this.labios1.boca1E == true || this.labios2.boca3E == true) &&
                    (this.ojo1.ojo1E == true || this.ojo2.ojo2E == true || this.ojo3.ojo3E == true)) {
                    this.pantalla = 3;


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

                if (mouseX >= 114 && mouseX <= 227 && mouseY >= 136 && mouseY <= 567) {
                    this.basePersonaje.moverBase();
                }

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
                }

                //LABIOS 2

                if (mouseX >= 472 && mouseX <= 541 && mouseY >= 269 && mouseY <= 310) {
                    this.labios2.boca2E = true;
                    this.labios1.boca1E = false;
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



                }

                //BOTÓN JPG

                if (mouseX >= 90 && mouseX <= 193 && mouseY >= 284 && mouseY <= 315) {



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

    arrastreOjos() {


        if (!this.ojo1.arrastrarOjo1 && mouseX >= 364 && mouseX <= 419 && mouseY >= 235 && mouseY <= 242) {
            this.ojo1.arrastrarOjo1 = true;
            //System.out.println("entro clicked");
            console.log("entro click");


        }

    }

    movimientoOjos() {
        // MOVIMIENTO DE LOS OJOS A LA CARA

        if (this.ojo1.arrastrarOjo1 == true) {
            // libroEvalua1=false;
            this.ojo1.posXO = mouseX;
            this.ojo1.posYO = mouseY;
            console.log("entro movimiento");


        }

    }

    relacionOjosCara() {

        if (!this.ojo1.ojoCompleto && this.ojo1.arrastrarOjo1 && mouseX >= 123 && mouseX <= 173 && mouseY >= 168 && mouseY <= 179) {
            this.ojo1.posXO = 147;
            this.ojo1.posYO = 174;

            this.ojo1.ojoCompleto = true;
            //System.out.println("liberó");
        } else if (this.ojo1.arrastrarOjo1 && !this.ojo1.ojoCompleto) {

            this.ojo1.posXO = 390;
            this.ojo1.posYO = 240;
        }

        this.ojo1.arrastrarOjo1 = false;
        console.log("entro relación");
    }




}





