let numero = Math.sqrt(25);
document.write("sqrt '25': " + numero);

numero = Math.cbrt(8);
document.write("<br>cbrt '8': " + numero);

numero = Math.max(1, 2, 3, 4, 5, 6);    //Devuelve el número más grande
document.write("<br>max '1, 2, 3, 4, 5, 6': " + numero);

numero = Math.min(1, 2, 3, 4, 5, 6);    //Devuelve el npumero más pequeño
document.write("<br>min '1, 2, 3, 4, 5, 6: " + numero);

numero = Math.random(); //Saca el numero pseudo-random entre 0 y 1;
document.write("<br>random entre 0 y 1: " + numero);

// numero = Math.random();
// document.write("<br>" + numero);
// numero = numero * 100;
numero = Math.random() * 100;   //Recorre el punto dos veces a la derecha
numero = numero.toString(); //Lo convierte en string para sacarlo por caracteres
let num = numero[0] + numero[1];    //Junta únicamente los 2 caracteres para así trabajar con números enteros
if (numero[1] == ".") {
    num = numero[0];
}   //En caso de que se ponga un punto al final, se hace una corrección y solo se coloca un valor
document.write("<br>random entero entre 0 al 100: " + num);

numero = Math.random() * 100;
numero = Math.round(numero);    //Utilizando el round nos ahorramos toda la condición y lo demás que se hizo arriba
document.write("<br>random mejorado con 'round': " + numero);

numero = Math.random() * 99;    //Se hace de esta manera para que sea un rango de 1 a 99
numero = Math.floor(numero + 1);    //Utilizando el floor nos ahorramos la condicion, pero a su vez, siempre se redondea hacia abajo, asi ea 1.99999, se redondeará a 1
document.write("<br>random aun más mejorado con 'floor': " + numero);

numero = 9.999999999999;
numero = Math.fround(numero);
document.write("<br>fround 9.999999999999': " + numero)

numero = 9.999995555995;    //Representacion flotante de precisión simple más cercana de un número
numero = Math.fround(numero);   //Toma 15 digitos para le representacón flotante más cercana de un número
document.write("<br>fround 9.999995555995': " + numero)

numero = Math.trunc(9.9);
document.write("<br>trunc: " + numero); //Quita los decimales

numero = Math.PI;
document.write("<br>pi: " + numero);

