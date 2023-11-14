// let arrEjem = ["ejem1, ejem2"]; ejemplo de arreglo
// let pc = {
//     nombre: "MiPC",
//     procesador: "Ryzen 5",
//     ram: "16GB",
//     espacio: "1TB"
// }    //EJEMPLO DE UN OBJETO

// document.write(pc.procesador); //EJEMPLO DE MANDAR A LLAMAR AL OBJETO

// EL while y do while son bucles indetrminados, es decir que no le decimos cuántas repeticiones hará, una vez que se cumpla la condición, parará, antes no; mientras que el for es un bucle determinado, es decir que si le indicamos cuántas iteraciones realizará
// for(let i = 0; i < 20; i++) {
//     document.write(`Iteracion ${i + 1}<br>`);
// }    //EJEMPLO FOR

// for (let i = 0; i < 20; i++) {
    // if (i == 12) {
        // continue;   //Lo que pasó aquí, es que en vez de finalizar esta sección como lo haría un break, se finalizó lo que se encuentra abjo, sin embargo no ha finalizado el blucle, es decir que para este caso no va a imprimir lo que esté en la posición i, pero continuará con el bucle para imprimir el siguiente valor de i
//     }
//     document.write(`Iteracion ${i +1}<br>`);
// }

// let animales = ["gato", "perro", "tortuga"];

// for (animal in animales) {  //PARA ESTE CASO, CUANDO SE USA UN for in, SE TRABAJA CON UN ARREGLO FOR, SOLO QUE APARTE DE SIMPLIFICARLO, SE TRABAJA CON LAS POSICIONES
//     document.write(`Posición: ${animal}<br>`);
//     document.write(`Tipo: ${animales[animal]}<br>`); //DE ESTA MANERA PODEMOS SACAR EL VALOR DE LA POSICIÓN, PERO DE CUALQUIER MANERA SE TIENE QUE TENER EN CUENTA QUE SE SIGUE TRABAJANDO CON LO QUE ES LA POSICIÓN EN VEZ DEL VALOR
// }

// for (animal of animales) {  //PARA ESTE CASO, CUANDO SE USA UN for of, SE TRABAJA CON UN ARREGLO FOR, SOLO QUE APARTE DE SIMLIFICARLO, SE TRABAJA CON LOS VALORES
    // document.write(`Tipo: ${animal}<br>`);
// }