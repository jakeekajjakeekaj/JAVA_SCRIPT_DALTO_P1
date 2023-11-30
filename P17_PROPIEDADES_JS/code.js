const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("p").innerHTML = "Párrafo";
const h2_nuevo = document.createElement("h2");  //De esta manera se crea un elemento h2
h2_nuevo.innerHTML = "Titulo";  //Aquí se guarda el texto dentro de lo que será el h2 nuevo

h2_antiguo = document.querySelector(".h2"); //Como ya se ha visto previamente, aquí se encarga de seleccionar al contenido de la clase h2

// contenedor.replaceChild(h2_nuevo, h2_antiguo);  //Aquí se reemplaza el contenido del h2_antiguo con el contenido del h2_nuevo

// contenedor.removeChild(h2_antiguo); //De esta manera se remueve el h2_antiguo

// let respuesta = contenedor.hasChildNodes(); //Verifica si tiene hijos o no, devolviendo true o false

/*if(respuesta) {
    document.write("El elemento tiene hijos");
} else {
    document.write("El elemento no tiene hijos");
}*/

console.log(h2_antiguo.parentElement);  //Indica el elemento padre
console.log(h2_antiguo.parentNode); //Indica el nodo padre

//------------------------- PROPIEDADES DE SIBLINGS (HERMANOS) ------------------------
//LOS SIBLING O HERMANOS, SON LOS QUE ESTÁN A LA MISMA ALTURA, ES DECIR QUE NO SON NODOS PADRES O NODOS HIJOS, SINO QUE SE ENCUENTRAN A LA MISMA ALTURA DE JERARQUIZACIÓN

console.log(h2_antiguo.previousElementSibling);    //Indica el hermano anterior

console.log(h2_antiguo.nextElementSibling); //Indica el siguiente hermano

console.log(h2_antiguo.closest(".contenedor")); //Busca al elemento padre más cercano