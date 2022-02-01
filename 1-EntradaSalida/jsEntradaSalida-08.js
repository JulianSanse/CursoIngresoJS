/*
San Sebastian, Julian Div E
E/S ej8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
    let numUno = document.getElementById("txtIdNumeroDividendo").value;
    let numDos = document.getElementById("txtIdNumeroDivisor").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);

    let resultado = numUno % numDos

    alert("El resto es " + resultado)
}