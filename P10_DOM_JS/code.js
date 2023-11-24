// Los nodos básicamente son un diagrama del propio código, es decir que por ejemplo en una simple página web, supongamos una estructura normal con un form de por medio, se podría decir que los nodos son como si fuera un diagrama, es decir            -- HEAD --TITLE
//                          DOM -- HTML        --META
//                                     -- BODY --SCRIPT
//                                             --FORM --Input

// NODO Document: El nodo document es el nodo raíz, a partir del cual derivan el resto de nodos.
// NODO Element: nodos definidos por etiquetas html.
//      NODO Text: El texto dentro de un NODO Element, se considera un nuevo hijo de tipo text.
// NODO Attribute: Los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos).
// NODO Comentarios y Otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera.

// ------------------- METODOS DE SELECCIÓN DE ELEMENTOS ------------------------
// parrafo = document.getElementById("parrafo");   //Esto indica que busca al id
// document.write(parrafo);

// parrafo = document.getElementsByTagName("p");   //Indica la colección de algo, por ejemplo para este caso se están obteniendo todos los p (párrafos)
// document.write(parrafo); //Con esto se indica que es una colección
// document.write(parrafo[0]); //Con esto se indica que es un paragraph element

// parrafo = document.querySelector(".parrafo");   //De esta manera se selecciona al object Paragraph Element
// document.write(parrafo);

// parrafo = document.querySelectorAll(".parrafo");    //De esta manera aparece un Object Node List, ya que se selecciona todo
// document.write(parrafo);