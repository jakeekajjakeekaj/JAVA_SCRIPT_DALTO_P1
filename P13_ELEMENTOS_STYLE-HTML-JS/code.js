const input = document.querySelector(".input-normal");

const input2 = document.querySelector(".input-2");

document.write("<br>" + input.className);    //Indica el nombre de la clase

document.write("<br>" + input.value + "<br>");    //Indica el valor del input

document.write(input.type = "text");    //Indica el tipo modificado

input2.accept = "image/png";    //Indica el tipo aceptado

input.minLength = 5;    //Cambia la longitud mínima que se requiere para enviar un campo

input.required = " ";   //Se debe completar el campo vacío

// ------------------------------- ELEMENTOS STYLE --------------

const titulo = document.querySelector(".titulo");

titulo.style.color = "#f0f";    //Modifica el style

titulo.style.backgroundColor = "#55f";  //Modifica el style, pero se quitan los guiones que si se pondrían en css, por ejempli en css es background-color, pero aquí se elimina el guón y se utiliza el camel