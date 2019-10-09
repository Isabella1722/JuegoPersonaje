
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