class Animal {
    constructor(especie, edad, color) { //EJEMPLO DE CONSTRUCTOR
        this.especie = especie; //EL THIS SOLO SE OCUP PARA CONSTRUCORES
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${especie}, tengo ${edad} años y mi color es ${color}`;
    }

    verInfo() { //EJEMPLO DE UN MÉTODO (QUE BÁSICAMENTE ES UNA FUNCIÓN DENTRO DE UNA CLASE); AQUÍ NO SE COLOCA EL this, YA QUE ESO SOLO SE COLOCA CON LOS CONSTRUCTORES, ASIMISMO NO SE PUEDEN COLOCAR FUNCIONES ARROW, TINEN QUE SER "A LA ANTIGUA"
        document.write(this.info + "<br>");
    }
}

class Perro extends Animal {    //EJEMPLO DE HEREDAR
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);    //DE ESTA MANERA SE HEREDAN LOS DATOS DEL CONSTRUCTOR
        // this.raza = raza;
        this.raza = null;
    }
    ladrar() {
        alert("Guau!");
    }
    static ladrarNoRestrictions() { //EJEMPLO DE UN STATIC, QUE BÁSICAMENTE SIGNIFICA QUE AUNQUE NO SE CREE UN OBJETO, ESTE MÉTODO PUEDE SER UTILIZADO MANDANDO A LLAMAR LA CLASE Y EL MÉTODO. OJO!!, para que funcione no debe tener parámetros, ya que como se dijo, este se utiliza cuando no hay un objeto creado todavía
        alert("Aunque no exista un perro creado, te diré 'Guauuuuu!!!'");
    }
    set setRaza(newName) {    //También conocicos como setters, sirven para modificar valores, lo ideal es identificar el nombre del método con set seguido del nombre que se quiere poner, así como aqui se utilizó setRaza
        this.raza = newName;
    }
    get getRaza() { //Tmbién conocidos como getters, sirven para obetener el valor que se está pidiendo
        return this.raza;
    }

}

//LOS OBJETOS SE GUARDAN COMO const, YA QUE SI SE GUARDAN COMO let, SUS VALORES SE PUEDEN MODIFICAR Y ESO NO SERÍA LO IDEAL
const pato = new Animal('pato', 7, 'café'); //NO SE PUEDE TENER UN OBJETO CON EL MISMO NOMBRE DE LA CLASE
const gato = new Animal('gato', 3, 'amarillo')
let perro = new Perro('perro', 7, 'café', 'pastor alemán'); //SE MANDA A LLAMAR LA CLASE HEREDADA

pato.verInfo();
gato.verInfo();
// perro.verInfo();
// perro.ladrar(); //NUEVO MÉTODO DE LA CLASE HEREDADA
// Perro.ladrarNoRestrictions();   //AUNQUE NO EXISTA UN OBJETO PERRO CREADO, SE PUEDE MANDAR A LLAMAR AL NOMBRE DE LA CLASE Y AL MÉTODO PARA AÚN ASÍ UTILIZARLO
perro.setRaza = "Pedro";  //ESTO ES PARA EL set, Y EN VEZ DE LLAMARLO COMO UN MÉTODO, SE LLAMA COMO UNA PROPIEDAD PARA MODIFICAR EL VALOR
document.write(perro.raza);
document.write(perro.getRaza);  //EJEMPLO DEL get