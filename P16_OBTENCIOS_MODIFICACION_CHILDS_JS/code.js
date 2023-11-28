const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;   //Obtiene el primer hijo, para este caso, sería de tipo texto y no h2, ya que como se presenta un espacio, este es tomado como si fuera el primer hijo, si quisiéramos que el primer hijo fuera el h2, deberíamos borrar todo el espacio de por medio
// const ultimoHijo = contenedor.lastChild;    //Como el de arriba pero ahora toma al último hijo

console.log(primerHijo);

const primerElement = contenedor.firstElementChild; //Así como el de arriba, pero este ya no toma en consideración a los espacios, este por el contrario ya solo toma en consideración a los elementos por lo que ahora sí es un h2

// const ultimoElement = contenedor.lastElementChild;   //Así como el de arriba, pero con el último elemento

console.log(primerElement);

const hijos = contenedor.childNodes;    //Toma y guarda a los hijos en la contante hijos, esto es un node list e incluye a los espacios con el nombre de "text", **NO SE PUEDE RECORRER COMO UN ARRAY ES DECIR COMO ARR[0], PERO SI SE PUEDE UTILIZAR UN FOR EACH DEBIDO A QUE ES UNA LISTA DE NODOS

console.log(hijos); //Imprime todos los hijos

const hijos2 = contenedor.children; //Toma y guarda a los hijos, pero en este caso no toma en cuenta a los espacios con el text, **ESTO ES UN HTML COLLECTION, POR LO QUE NO SE PUEDE RECORRER CON FOR EACH, AQUI SE DEBE HACER CON UN FOR IN o FOR OF

console.log(hijos2);    //Imprime a los hijos sin considerar a los espacios