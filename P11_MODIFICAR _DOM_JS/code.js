const rangoEtario = document.querySelector(".rangoEtario"); //Guarda el contenido en rangoEtario

rangoEtario.setAttribute("type", "text");   //De esta manera se modifica al .rangoEtario de nuestra página

valorDelAtributo = rangoEtario.getAttribute("type");   //De esta manera se obtiene el tipo de rangoEtario

document.write(valorDelAtributo);

rangoEtario.removeAttribute("type");    //De esta manera se remueve el type, no es visible en la página pero si lo es en la consola