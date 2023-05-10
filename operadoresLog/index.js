// OR te devolvera el primer valor veradero
//EJEMPLO 1
/*if (1 || 0) { //Funciona como if ( true || false )
    alert("valor verdadero¡");
}   else {
    alert('Falso');
}*/

//EJEMPLO 2

/*let hour = 9;
if (hour < 10 || hour > 18) { //Podemos incluir mas cosas
    alert('La oficina esta cerrada.'); //Es fin de semana
}*/

//ejemplo 3

/*Let firsName = "";
Let lastName = "";
Let mickName = "SuperCorder";

alert(firsName || lastName || mickName || "Anonymus");*/

//&& (AND) te dara el primer valor falso
/*alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false*/

//Ejemplo 3

//alert( alert(1) || 2 || alert(3) ); los alert no son considerados como datos
//Ejeplo 4

//alert( alert(1) && alert(2) );

//Ejercicio 5

//alert( null || 2 && 3 || 4 );

//Ejercicio 6

age = prompt("introduce tu edad");
if (!(age >= 14) && !(age <= 90))
 alert ("tu edad esta en el rango");
 else {
  alert ("tu edad no esta en el rango")
 }


 