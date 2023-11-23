// ---------------- FUNCIONES DE REGISTRO ------------------

// console.assert(5 < 3);  //Si se cumple no pasa nada, pero si no se cumple arroja un error en la consola de la página

// console.clear();    //Limpia la consola

// console.error("Pero qué has hecho?!?!");    //Esto arroja un error en consola

// console.info("Estuvo bien estuvo bien");    //Escribe en la consola algún mensaje que se quiera

// console.log("Esto es un mensaje de depuración");    //Esrib en la consola algún mensaje pero esto es más para la depuración, de igual manera es el más utilizado

// console.table([4, 2, 3, 6, 7]); //Crea una tabla y para que funcione se debe colocar un arreglo dentro

// console.warn("Esto es una adveretencia, no hay ningún error peeeero hay adveretencia"); //Crea adveretencias

// console.dir([1, 3, 5, 7]);  //Despliega la información y dir de lo que se pida

// ----------------- FUNCIONES DE CONTEO --------------------

// console.count();
// console.count();
// console.count();
// console.count();    //Hace un cuenteo de las veces que se repitió
// console.countReset();   //Se resetea el contador
// console.count();    //Vuelve a iniciar

// ----------------- FUNCIONES DE AGRUPACIÓN -----------------

// console.group("grupo 1");   //De esta manera se genera un grupo
//     console.log("Pepe");    //De esta manera se guardan valores dentro del grupo

//     console.group("grupo 2");
//         console.log("Carlos");
//             console.groupCollapsed("grupo colapsado");  //Genera al grupo de manera 'oculta', es decir que si le picas puedes abrirlo, pero por predeterminado en vez de salir abierto, sale cerrado
//             console.log("Pedro Oculto");
//         console.groupEnd(); //De esta manera se sale del grupo
//     console.groupEnd(); //De esta manera se sale del grupo
// console.groupEnd();

//---------------- Funciones de Temporización ----------------

// console.time(); //Inicia el contador
// console.timeLog();  //Imprime el tiempo que ha pasado
// console.timeEnd();  //Finaliza el contador e Imprime el tiepo en que finalizó el contador

// console.log("%cHola", "color: #f00; background: #000; padding: 20px; border: 3px solid #00f");   //En consola se puede insertar codigo css