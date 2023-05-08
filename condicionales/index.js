/*EJERCICIO 1
IF (" "){
    alert( 'Hello');
}*/

//EJERCICIO 2
/*let respuesta = prompt("Cual es el nombre "oficial" de JavaScrip?")

if (respuesta == "ECMAScript") {
    alert("correcto");
}   else {
    alert("No lo sabes? ¡ECMAScript!")
}*/

//EJERCICIO 3

/*let numero = prompt("ingresa un numero")

if (numero == "0") {
    alert("0")
} else if (numero > "0") {
    alert("-1")
}else {
    alert("No registro numero")
}*/

//EJECICIO 4

/*et result = (a + b < 4) ? 'debajo':
                           'encima';
 alert (result)*/

//ejercicio 5
let login = prompt('Sin sesión')

let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :
  '';
  alert (message);
  