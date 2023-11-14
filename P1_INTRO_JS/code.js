// alert("Hola");
//var es de alcance global
// let es de alcance dentro del bloque
//prompt("Escribe") esto sirve para que el usuario escriba y se regrese una función con valor
//document.write(variable) escribe en la página el valor de la variable
//res = num1 + num2 aparece la respuesta de una suma de 2 numeros, sin embargo...
//frase = "" + num1 + num2 aparece el valor numérico concatenado, no se suma, se concatena como si fuera una serie de caracteres
//"Hola 'tu'" si se hace de esta manera se imprime el texto con las comillas simples, de lo contrario si se quiere que el texto tenga comillas dobles, se tiene que escribir 'Hola "tu"'
//valor1num == valor2tex compara si es igual el valor, es decir que aunque sea texto o número, si el valor es el mismo marcará verddero
//valor1num === valor2tex compara si es estrictamente igual, es decir que sea mismo valor y mismo tipo de dato (ejemplo si es numero y string, se va a declarar como falso)
//!verdadero este es un not, es decir que si el valor es true, pasará a ser false
// holaComoEstas así es como debe ir tipado, se llama camel case

dineroCofla = prompt("¿Cuánto dinero tienes Cofla?");
dineroRoberto = prompt("¿Cuánto dinero tienes Roberto?");
dineroPedro = prompt("¿Cuánto dinero tienes Pedro?");

if(dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cómprate la nieve");
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cómprate un helado");
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cómprate un mordisko");
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cómprate un mordisko de Oreo");
}else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cómprate un mordisko de Oreo Plus");
}else if (dineroCofla >= 2.9) {
    alert("Cómprate un Helado especial o 1/4kg de helado sencillo");
} else {
    alert("Lo siento, no te alcanza para ningún helado");
}

if(dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Cómprate la nieve");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Cómprate un helado");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Cómprate un mordisko");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Cómprate un mordisko de Oreo");
}else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Cómprate un mordisko de Oreo Plus");
}else if (dineroRoberto >= 2.9) {
    alert("Cómprate un Helado especial o 1/4kg de helado sencillo");
} else {
    alert("Lo siento, no te alcanza para ningún helado");
}

if(dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Cómprate la nieve");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Cómprate un helado");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Cómprate un mordisko");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Cómprate un mordisko de Oreo");
}else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Cómprate un mordisko de Oreo Plus");
}else if (dineroPedro >= 2.9) {
    alert("Cómprate un Helado especial o 1/4kg de helado sencillo");
} else {
    alert("Lo siento, no te alcanza para ningún helado");
}