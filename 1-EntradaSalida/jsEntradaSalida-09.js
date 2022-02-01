/*
San Sebatian, Julian Div E
E/S ej9 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

    let sueldo = document.getElementById("txtIdSueldo").value;
    let resultado;
    let aumento;

    sueldo = parseFloat(sueldo);

    aumento = sueldo * 0.1;
    resultado = sueldo + aumento;

    document.getElementById("txtIdResultado").value = resultado
}