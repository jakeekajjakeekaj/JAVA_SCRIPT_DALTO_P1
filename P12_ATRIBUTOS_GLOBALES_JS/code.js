const titulo = document.querySelector(".titulo");   //Se almacena en titulo a la clase titulo del html
const a1 = document.querySelector("a1");
// titulo.setAttribute("contentEditable", "true"); //Indica que el contenido de editable
// titulo.setAttribute("contentEditable", "false"); //Indica que el contenido no se puede editar

// titulo.setAttribute("dir", "ltr");  //Indica que la dirección del texto va de Left To Right

titulo.setAttribute("dir", "rtl");  //Indica que la dirección del texto va de Right To Left

titulo.removeAttribute("hidden");   //De esta manera se elimina el hidden colocado en el html

// a1.setAttribute("tabindex", "0");    //Los tabindex realizan un focus en el orden indicado

titulo.setAttribute("title", "que me vez boluuuudo");   //Cambia el title de lo que se quiera, para este caso, se cambia el title del h1