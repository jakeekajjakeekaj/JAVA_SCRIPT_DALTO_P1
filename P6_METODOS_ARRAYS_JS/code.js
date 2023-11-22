// ------------------- ACCESORES, EL ORIGINAL NO SE MODIFICA ------------------
document.write("<hr>---------ACCESORES, original no se modifica------------");
let arr1 = ["Pedro", "Maria", "Jose", "alberto"];

document.write("<br>El array es: " + arr1);

let resultado = arr1.join("<br>join: ");   //Modifica el array copia para que sea difernete, por ejemplo colocar guines medios o saltos de linea, comas, etc., aparte pasa de ser un array a una cadena de caracteres
document.write("<br>join: " + resultado);

resultado = arr1.slice(0, 2);   //Corta el array, desde la posicion 1 hasta la posición 2, de igual manera si se quiere seleccionar todos menos el último, en el segundo espacio se debería colocar -1
document.write("<br>slice: " + resultado);

// ----------------------- PARTE DE, de repetición ---------------
document.write("<hr>--------------------------------PARTE 2, de repetición------------------------");

document.write("<br>El array es: " + arr1);
document.write("<br><br>USO DE filter:")
arr1.filter(nArr1 => document.write("<br>" + nArr1))    //filter recibe como parámetro una función

document.write("<br>filter y forEach, son lo mismo, sin embargo con filter se puede crear un nuevo array con elementos que cumplan alguna condición, ejemplo: ");

resultado = arr1.filter(nArr1 => nArr1.length > 4)
document.write("<br>El resultado condicionado con filter 'length > 4', es: " + resultado);