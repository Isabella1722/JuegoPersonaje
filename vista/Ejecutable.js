
let logica;

function setup() {
    createCanvas(700, 600);
   
   logica =new Logica();

}

function draw() {
    background(255);
    logica.pintarPantallas();

}


function mousePressed(){

    print(mouseX + " " + mouseY + " \n");
    logica.evaluacionPantallas();
    logica.arrastreOjos();
    
}

function mouseDragged(){
    logica.movimientoOjos();
}



 function mouseReleased(){
 
    logica.relacionOjosCara();
}

function keyPressed(){

if (keyCode==BACKSPACE){

    logica.pantallaNomP.eliminarTextoInput();
}
if(key == 'i' || key == 'I'){
    logica.ordenarId();
}
if(key == 'n' || key == 'N'){
    logica.ordenarName();
}
if(key == 'd' || key == 'D'){
    logica.ordenarDate();
}

}

function keyTyped(){
    if (keyCode!= BACKSPACE && keyCode!= ENTER){

        logica.pantallaNomP.escribirTextoInput(key);
    }

}
