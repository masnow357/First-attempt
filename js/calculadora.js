/* inicio calculadora1 */
var acumulado = 0
var cifra ="";
var operacion = 0;

document.getElementById("display1").value=0;

function mostrar1(a){
    document.getElementById("display1").value=cifra+a;
    cifra=document.getElementById("display1").value;
}

function suma1(){
    switch(operacion){
        case 0:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 1:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 2:
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 3:
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 4:
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
    }



    operacion = 1;
    /* acumulado=acumulado + parseInt(cifra);
    document.getElementById("display1").value=acumulado;
    cifra=""; */
}

function resta1(){
    switch(operacion){
        case 0:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 1:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 2:
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 3:
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 4:
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
    }



    operacion = 2;
}


function multiplicacion(){
    switch(operacion){
        case 0:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 1:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 2:
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 3:
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 4:
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
    }



    operacion = 3;
}


function division(){
    switch(operacion){
        case 0:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 1:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 2:
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 3:
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 4:
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
    }



    operacion = 4;
}

function igual(){
    switch(operacion){
        case 0:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 1:
            acumulado = acumulado + parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 2:
            acumulado = acumulado - parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 3:
            acumulado = acumulado * parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
        case 4:
            acumulado = acumulado / parseFloat(cifra)
            document.getElementById("display1").value= acumulado;
            cifra="";
            break;
    }



    operacion = 0;
    cifra=0;
}

function clean(){
    acumulado=0;
    cifra="";
    document.getElementById("display1").value= acumulado;
}

/* final calculadora 1 */