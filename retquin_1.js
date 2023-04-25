/* Parte #1: 
 Ingreso nombre de usuario y al hacer click 
 muestra el nombre ingresado
   Parte #2:

*/

const nombreUser  = document.querySelector ("#lab-nomusr");
const impLinea1   = document.querySelector ("#mi-msg1");
const impLinea2   = document.querySelector ("#mi-msg2");


function datosIngresados() {

  let monUsrIngresado = nombreUser.value ;
  impLinea1.textContent = "Nombre de Usuario = "+monUsrIngresado+"";
  impLinea2.textContent = "Bienvenido!!";

}

