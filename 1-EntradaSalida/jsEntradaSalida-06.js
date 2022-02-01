/*
San Sebastian, Julian Div E
E/S ej 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
    let primerNumero = document.getElementById("txtIdNumeroUno").value;
    let segundoNumero = document.getElementById("txtIdNumeroDos").value;

    primerNumero = parseInt(primerNumero);
    segundoNumero = parseInt(segundoNumero);

    let suma = (primerNumero + segundoNumero);
    alert("La suma es " + suma);
}