/*
San Sebastian, Julian Div E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
    let importe = document.getElementById("txtIdImporte").value;
    importe = parseInt(importe);
    let descuento = importe * 0.25;
    let resultado = importe - descuento;

    document.getElementById("txtIdResultado").value = resultado

}