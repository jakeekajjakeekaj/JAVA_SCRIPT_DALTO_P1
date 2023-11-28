const titulo = document.querySelector(".titulo");

titulo.classList.add("grande"); //Agurega una clase

titulo.classList.remove("grande");  //Remueve una clase

let valor = titulo.classList.item(0);   //Indica la clase a la que se accede, se pide la información

document.write(valor);

valor = titulo.classList.contains("titulo");    //Indica verdadero o falso si se contiene la clase escrita

document.write(valor);

titulo.classList.toggle("grande");  //Si tiene la clase escrita la elimina, pero si NO tiene la clase escrita, la agrega

titulo.classList.toggle("grande", true);    //Es igual a la de arriba, solo que siempre la va a dejar, si le pones false, siempre la va a quitar

titulo.classList.replace("grande", "reemplazo");    //Reemplaza la clase por la clase escrita, aparte de eso devuelve valor de false o true