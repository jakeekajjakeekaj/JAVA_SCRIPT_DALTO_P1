const materias = {
    fisica: [90, 6, 4, "fisica"],
    matematicas: [84, 8, 8, "matematicas"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 6, 3, "calculo"],
    programacion: [79, 7, 4, "programacion"],
    biologia: [75, 9, 2, "biologia"],
    bbdd: [98, 9, 1, "bbdd"],
    algebra: [100, 10, 4, "algebra"]
}

const aprobo = () => {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        let aprobado = true;
        console.log(materias[materia][3]);
        if (asistencias >= 90) {
            console.log("%c         Asistencias", "color: #0f0");
        } else {
            console.log("%c         Desaprobado por Inasistencias", "color: #f00");
            aprobado = false;
        }
        if (promedio >= 7) {
            console.log("%c         Promedio", "color: #0f0");
        }
        else {
            console.log("%c         Desaprobado por Promedio", "color: #f00");
            aprobado = false;
        }
        if (trabajos >= 3) {
            console.log("%c         Trabajos", "color: #0f0");
        } else {
            console.log("%cDesaprobado por Trabajos", "color: #f00");
            aprobado = false;
        }
        if (aprobado == false) {
            console.log("%cEl alumno ha sido reprobado", "color: #f00");
        } else {
            console.log("%c--El alumno ha sido aprobado--", "color: #0f0");
        }
    }
}

aprobo();