/*
San Sebastian, Julian Div E
E/S ej7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
    let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let suma = num1 + num2;

    alert("La suma es " + suma)
}

function restar() {

    let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let resta = num1 - num2;

    alert("La resta es " + resta)

}

function multiplicar() {

    let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let multiplicacion = num1 * num2;

    alert("La multiplicacion es " + multiplicacion)
}

function dividir() {
    let num1 = document.getElementById("txtIdNumeroUno").value;
    let num2 = document.getElementById("txtIdNumeroDos").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let division = num1 / num2;

    alert("La division es " + division)
}