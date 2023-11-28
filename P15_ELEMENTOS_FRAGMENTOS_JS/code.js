const titulo = document.querySelector(".titulo");

let resultado = titulo.textContent; //Devuelve lo que se encuentra dentro de la etiqueta, a su vez si se tiene una etiqueta hidden, aunque no aparezca por el hidden, al utilizar el textContent si aparece

// resultado = titulo.innerText;   //Este ya casi no se usa, aparte de que consume muchos recursos, pero es igual que el de arriba, solo que si se tiene una etiqueta hidden en este caso no aparece

//***Existe otro llamado outerText, pero ya no es utilizado***

document.write(resultado);

resultado = titulo.innerHTML;   //Devuelve en una alerta todo el texto y etiquetas html contenidas dentro del texto

alert(resultado);

resultado = titulo.outerHTML;   //Similar al de arriba, sin embargo este devuelve todo el contenido html, incluyendo el nombre de la clase y todo

alert(resultado);

//-------------------------- CREACION DE ELEMENTOS -------------------

const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI");  //Se crea un elemento, como dato interesantem el nombre SIEMPRE DEBE ESTAR EN MAYÚSCULA, en este caso se crea una list

// const textDelItem = document.createTextNode("Este es un item de la lista"); //Se creó un elemento nodo para que esté adentro del elemento padre

// document.write(item);   //Aquí se indica que se creo un LI ELEMENT

// console.log(textDelItem);

// item.innerHTML = "Este es otro elemento de la lista";   //Otra manera de agregar contenido al nodo padre, sin embargo no se comporta como objeto, solo como texto

// item.appendChild(textDelItem);  //Se enlazan los nodos

// console.log(item);  //Se escriben los nodos en la consola

// contenedor.appendChild(item);   //Otra manera de enlazar los nodos

//----- UNA MANERA BASTANTE PRÁCTICA DE UTILIZAR LO QUE SE HA VISTO ES DE LA SIGUIENTE MANERA -----

const fragmento = document.createDocumentFragment();    //De esta manera se crea un fragmento para evitar que el DOM se cargue todo, ya que cuando el DOM se carga, no se pone encima lo nuevo que se haya agregado, por el contrario se carga todo escribiendo lo nuevo, por lo que consume muchos recursos, es por esto que se inventó el fragment para que solo se carguen ciertos fragmentos

for (i = 0; i < 20; i++) {  //Para este caso se iteran 20 elementos
    const item = document.createElement("LI");  //Se crea un elemento lista
    item.innerHTML = "Este es un item de la lista"; //Se ingresa el dato que estará dentro de la lista creada
    fragmento.appendChild(item);    //Se ingresa dentro de la fracción a la lista creada, haciendo de esta manera que los nodos se relacionen en una fracción del DOM
}

console.log(fragmento);
contenedor.appendChild(fragmento);  //De esta manera se escribe todo lo de la lista en el DOM, provocando que solo se cargue lo del fragmento y así ahorrar recursos