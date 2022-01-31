/*
San Sebastian, Julian Div E
E/S ej4 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
    let nombreIngresado = prompt("Ingrese su nombre");
    txtIdNombre.value = nombreIngresado;
    alert("Su nombre es " + nombreIngresado);
}