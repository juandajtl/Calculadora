var cantidad = "";
var sumatoria = false;
var sumar = false;
var restar = false;
var multiplicar = false;
var porcentajes = false;
var potencia = false;
var contadormulti = false;
var senon = false;


function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}



function suma() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
    contadormulti++;
}



function resta() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
    contadormulti++;
    console.log(contador);
}



function multiplicacion() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
    contadormulti++;
}



function division() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
    contadormulti++;
}



function porcentaje() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentajes = true;
    contadormulti++;
}

function exponenciacion() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    potencia = true;
    contadormulti++;
}

function seno() {
    if (contadormulti == 0) {
        sumatoria = sumatoria + parseFloat(cantidad);
    } else { sumatoria = document.getElementById("display").value; }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    senon = true;
    contadormulti++;
}



function igual() {
    if (sumar == true) {
        document.getElementById("display").value = sumatoria + parseFloat(cantidad);
    }
    if (restar == true) {
        document.getElementById("display").value = sumatoria - parseFloat(cantidad);
    }
    if (multiplicar == true) {
        document.getElementById("display").value = sumatoria * parseFloat(cantidad);
    }
    if (dividir == true) {
        document.getElementById("display").value = sumatoria / parseFloat(cantidad);
    }
    if (porcentajes == true) {
        document.getElementById("display").value = (sumatoria * parseFloat(cantidad)) / 100;
    }
    if (potencia == true) {
        document.getElementById("display").value = sumatoria ** parseFloat(cantidad);
    }
    if (senon == true) {
        document.getElementById("display").value = Math.sin(cantidad * Math.PI / 180);

    }
}

function reset() {
    document.getElementById("display");
    location.reload();

}