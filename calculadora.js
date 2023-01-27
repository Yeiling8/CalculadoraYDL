
let resultado = "";

function calculadora(digito) {
    resultado = resultado + digito;
    document.getElementById("calculadora-pantalla").innerHTML = resultado;
}

function operacion () {
    document.getElementById("calculadora-pantalla").innerHTML = eval(resultado);    
}

function borrar () {
    document.getElementById("calculadora-pantalla").innerHTML = 0;
}