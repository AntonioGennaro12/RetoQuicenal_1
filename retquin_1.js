/* Parte #1: 
 Ingreso nombre de usuario y al hacer click 
 muestra el nombre ingresado
   Parte #2:
   Ingreso edad, email y DNI y lo muestra..
   Parte #3
  Agrego Imagen y cambio con el ingreso de datos. 
*/

const EDAD_MAYOR  = 18;
const IMG_BASE    = "PanelRegístreseAquí.png";
const IMG_CLICK   = "transparent-teamwork-empresa.png";
const IMG_CLICK2  = "gears-g239ca9ba4_1280.jpg";


const miBody      = document.querySelector ("body");
const nomUser     = document.querySelector ("#lab-nomusr");
const edadUsr     = document.querySelector ("#lab-edad");
const maildUsr    = document.querySelector ("#lab-mail");
const dnidUsr     = document.querySelector ("#lab-dni");
const topImg      = document.querySelector ("#mi-img");

const impLinea1   = document.querySelector ("#mi-msg1");
const impLinea2   = document.querySelector ("#mi-msg2");
const impLinea3   = document.querySelector ("#mi-msg3");
const impLinea4   = document.querySelector ("#mi-msg4");
const impLinea5   = document.querySelector ("#mi-msg5");

miBody.style.backgroundColor = "#0d1117";
miBody.style.color           = "#e6edf3";
topImg.src                   = IMG_BASE ;


function datosIngresados() {

  topImg.src                 = IMG_CLICK ;

  let nomUsrIngr   = nomUser.value ;
  let edadUsrIngr  = edadUsr.value ;
  let mailUsrIngr  = maildUsr.value;
  let dniUsrIngr   = dnidUsr.value;

  impLinea1.style.fontFamily = "monospace";
  impLinea2.style.fontFamily = "monospace";
  impLinea3.style.fontFamily = "monospace";
  impLinea4.style.fontFamily = "monospace";
  impLinea5.style.fontFamily = "monospace";
  impLinea1.style.color      = "yellow";
  impLinea2.style.color      = "yellow";
  impLinea3.style.color      = "yellow";
  impLinea4.style.color      = "yellow";
  impLinea5.style.color      = "yellow";

  impLinea1.textContent = "Nombre de Usuario....: "+nomUsrIngr+"";
  impLinea2.textContent = "Edad declarada..........: "+edadUsrIngr+"";
  impLinea3.textContent = "Dirección de email....: "+mailUsrIngr+"";
  impLinea4.textContent = "DNI Nro...................: "+dniUsrIngr+"";

  if (edadUsrIngr >= EDAD_MAYOR) {
    impLinea5.textContent = "Bienvenido/a Sr/a. " +nomUsrIngr +" !!!";
  }
  else {
    topImg.src                 = IMG_CLICK2 ;
    impLinea5.textContent = "Hola querido/a " +nomUsrIngr +" has venido con tus padres?";
  }
}

