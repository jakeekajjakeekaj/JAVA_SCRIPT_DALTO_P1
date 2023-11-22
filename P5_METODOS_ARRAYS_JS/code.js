let cadena = "cadena de prueba";
let cadena2 = " jaja";
let resultdo = "0";

cadenaLarga = cadena.concat(" hola" + cadena2);  //concat SIRVE PARA CONCATENAR CADENAS
document.write(cadenaLarga);

resultado = cadenaLarga.startsWith(cadena2); //startsWith SIRVE PARA VERIFICAR SI CON ESO EMPIEZA LA CADENA
document.write("<br> startsWith " + cadena2 + ": " + resultado);

resultado = cadenaLarga.startsWith("c"); //startsWith
document.write("<br> startsWith 'c': " + resultado);

resultado = cadenaLarga.endsWith(cadena2);  //endsWith SIRVE PARA VERIFICAR SI CON ESO TERMINA LA CADENA
document.write("<br>endsWith " + cadena2 + ": " + resultado);

resultado = cadenaLarga.includes(cadena);   //includes SIRVE PARA VERIFICAR SI LO ESCRITO PERTENECE A LA CADENA
document.write("<br> includes " + cadena + ": " + resultado);

resultado = cadenaLarga.includes("jeje");   //includes
document.write("<br> includes 'jeje': " + resultado);

resultado = cadenaLarga.indexOf("prueba");  //indexOf SIRVE PARA VERIFICAR LA POSICIÓN DE LA PRIMERA LETRA EN LA CADENA PROPUESTA
document.write("<br> indexOf 'pera': " + resultado);

resultado = cadenaLarga.indexOf("yoghurt");   //indexOf AL NO ENCONTRARSE LA PRIMER LETRA EL VALOR ES -1
document.write("<br> indexOf 'yoghurt': " + resultado);

resultado = cadenaLarga.lastIndexOf("pera");    //lastIndexOf no solo sirve para verificar toda la palabra que si esté presente, sino que si la misma palabra se repite, la posici´n elegida será la última palabra repetida escrita
document.write("<br> lastIndexOf 'pera': " + resultado);

resultado = cadenaLarga.lastIndexOf("yoghurt"); //lastIndexOf
document.write("<br> lastIndexOf 'yoghurt': "+ resultado);

resultado = cadenaLarga.lastIndexOf("prueba");  //lastIndexOf
document.write("<br> lastIndexOf 'prueba': " + resultado);

resultado = cadenaLarga.padStart(28, "1");  //padStart SIRVE PARA AGREGAR COSAS AL PRNCIPIO DEL STRING ÚNICAMENTE SI SE CUMPLE EL TAMAÑO ESTABLECIDO, SI NO SE CUMPLE EL TAMAÑO ESTABLECIDO NO SE CUBRE NADA
document.write("<br> padStart: " + resultado);

resultado = cadenaLarga.padEnd(28, "1");  //padEnd SIRVE PARA AGREGAR COSAS AL FINAL DEL STRING ÚNICAMENTE SI SE CUMPLE EL TAMAÑO ESTABLECIDO, SI NO SE CUMPLE EL TAMAÑO ESTABLECIDO NO SE CUBRE NADA
document.write("<br> padEnd: " + resultado);

resultado = cadenaLarga.repeat(2);  //repeat SIRVE PARA REPETIR LA CADENA
document.write("<br> repeat 2: " + resultado);

// -------------------- 2a PARTE, HASTA AHORITA HAN SIDO MAS BUSCADORES Y ESAS COSAS----------------------

document.write("<hr>---------INICIO DE 2DA PARTE----------");
let cadenaLarga2 = "Hola como estas";
document.write("<br>" + cadenaLarga2);

resultado = cadenaLarga2.split(" ");    //split SIRVE PARA SEPARAR LAS CADENAS, ESTAS SE SEPARAN EN ARRAY Y EN ESTE CASO SE HACEN LAS SEPARACIONES CON EL ESPACIO POR EJEMPLO
document.write("<br>split, Array 1: " + resultado[0] + ", Array 2: " + resultado[1] + ", Array 3: " + resultado[2]);

resultado = cadenaLarga2.split("como"); //split PARA ESTE CASO POR EJEMPLO, "ELIMINA" A como Y SOLO DEJA HOLA Y ESTAS
document.write("<br>split: " + resultado);

resultado = cadenaLarga2.substring(3, 8);   //substring SIRVE PARA DETERMINAR DE DONDE A DONDE SE OBTIENE EL STRING
document.write("<br>substring: " + resultado);

resultado = cadenaLarga2.toLowerCase();
document.write("<br>toLowerCase: " + resultado);

resultado = cadenaLarga2.toUpperCase();
document.write("<br>toUpperCase: " + resultado);

resultado = cadenaLarga2.toString();    //Mayormente sirve para convertir numeros a string o arrays a string
document.write("<br>toString: " + resultado);

resultado = cadenaLarga2.trim();    //quita espacios del principio y del final
document.write("<br> trim: " + resultado + ", tiene longitud de: " + resultado.length);

resultado = cadenaLarga2.trimStart();    //quita espacios del principio
document.write("<br> trimStart: " + resultado + ", tiene longitud de: " + resultado.length);

resultado = cadenaLarga2.trimEnd();    //quita espacios del final
document.write("<br> trimEnd: " + resultado + ", tiene longitud de: " + resultado.length);

// ----------------------------------------- 3A Parte, hasta ahorita han sido mas separadores y esas cosas -----------------------------------------

// ESTOS SON TRANSFORMADORES, ES DECIR QUE MODIFICAN AL ORIGINAL
document.write("<hr>--------INICIO DE 3RA PARTE TRANSFORMADORES, TODO SE MODIFICIA--------");
let arr1 = ["Pedro", "maria", "pepe", "JUAN"];
document.write("<br>El array es: " + arr1);

resultado = arr1.pop(); //Saca el último elemento y modifica el array
document.write("<br>pop: " + resultado + ", el array queda: " + arr1);

resultado = arr1.shift();   //Saca el primer elemento
document.write("<br>shift: " + resultado + ", el array queda: " + arr1);

resultado = arr1.push("Juano"); //Agrega un elemento al final
document.write("<br>push: 'Juano', el array queda: " + arr1);

resultado = arr1.reverse(); //Invierte el orden del array
document.write("<br>reverse: " + resultado + ", el array queda: " + arr1);

resultado = arr1.unshift("Ricardo"); //Agrega uno o mas elementos al inicio del array y lo devuelve
document.write("<br>unshift: " + arr1);

resultado = arr1.sort();    //Orden los elementos
document.write("<br>sort: " + resultado);

resultado = arr1.splice(1, 2, "MARIO"); //Elimina los elementos, en este caso el primer dato indica desde dónde arranca, el segundo espacio indica cuántos elementos elimina y el 3er espacio indica lo que se agregará arrancando a partir de donde se indicó que emepezaba
document.write("<br>splice: " + arr1);