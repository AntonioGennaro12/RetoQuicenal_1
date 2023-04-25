/* Parte #1: 
 Ingreso nombre de usuario y al hacer click 
 muestra el nombre ingresado
   Parte #2:
   Ingreso edad, email y DNI y lo muestra

*/

const nomUser   = document.querySelector ("#lab-nomusr");
const edadUsr   = document.querySelector ("#lab-edad");
const maildUsr  = document.querySelector ("#lab-mail");
const dnidUsr   = document.querySelector ("#lab-dni");

const impLinea1   = document.querySelector ("#mi-msg1");
const impLinea2   = document.querySelector ("#mi-msg2");
const impLinea3   = document.querySelector ("#mi-msg3");
const impLinea4   = document.querySelector ("#mi-msg4");
const impLinea5   = document.querySelector ("#mi-msg5");


function datosIngresados() {
  let nomUsrIngr   = nomUser.value ;
  let edadUsrIngr  = edadUsr.value ;
  let mailUsrIngr  = maildUsr.value;
  let dniUsrIngr   = dnidUsr.value;

  impLinea1.textContent = "Nombre de Usuario....: "+nomUsrIngr+"";
  impLinea2.textContent = "Edad declarada..........: "+edadUsrIngr+"";
  impLinea3.textContent = "Dirección de email....: "+mailUsrIngr+"";
  impLinea4.textContent = "DNI Nro...................: "+dniUsrIngr+"";
  impLinea5.textContent = "Bienvenido/a Sr/a. " +nomUsrIngr +" !!!";
}

