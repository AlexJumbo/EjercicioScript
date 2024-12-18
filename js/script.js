const estudiantes = [
    {nombre: "Johdie", calificaciones: [19,17,19,11]},
    {nombre: "Meream", calificaciones: [18,18,15,11]},
    {nombre: "Alexander", calificaciones: [10,15,18,19]},
    {nombre: "Bryan", calificaciones: [18,20,20,18]},
    {nombre: "Joshua", calificaciones: [7,8,10,5]}
]

function agregarCalificacion(nombre, nuevaCalificacion) {
    for (let estudiante of estudiantes) {
        if (estudiante.nombre === nombre) {
            estudiante.calificaciones.push(nuevaCalificacion);
            break;
        }
    }
}

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let calificacion of calificaciones) {
        suma += calificacion;
    }
    return suma / calificaciones.length;
}

function clasificarPromedio(promedio) {
    if (promedio >= 16) {
        return "Excelente";
    } else if (promedio >= 12) {
        return "Bueno";
    } else if (promedio >= 8) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function calcularEstadisticas(estudiante) {
    let maxCalificacion = estudiante.calificaciones[0];
    let minCalificacion = estudiante.calificaciones[0];
    for (let calificacion of estudiante.calificaciones) {
        if (calificacion > maxCalificacion) {
            maxCalificacion = calificacion;
        }
        if (calificacion < minCalificacion) {
            minCalificacion = calificacion;
        }
    }
    const promedio = calcularPromedio(estudiante.calificaciones);
    return { promedio, maxCalificacion, minCalificacion };
}


function generarReporte() {
    let mejorPromedio = 0;
    let peorPromedio = 0;
    let mejorEstudiante = estudiantes[0];
    let peorEstudiante = estudiantes[0];

    for (let estudiante of estudiantes) {
        const { promedio, maxCalificacion, minCalificacion } = calcularEstadisticas(estudiante);
        estudiante.promedio = promedio;
        estudiante.maxCalificacion = maxCalificacion;
        estudiante.minCalificacion = minCalificacion;
        estudiante.clasificacion = clasificarPromedio(promedio);

        if (promedio > mejorPromedio) {
            mejorPromedio = promedio;
            mejorEstudiante = estudiante;
        }

        if (promedio < peorPromedio) {
            peorPromedio = promedio;
            peorEstudiante = estudiante;
        }
    }

    console.log("Reporte de estudiantes:");
    for (let estudiante of estudiantes) {
        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Calificaciones: ${estudiante.calificaciones}`);
        console.log(`Promedio: ${estudiante.promedio}`);
        console.log(`Clasificación: ${estudiante.clasificacion}`);
        console.log(`Máximo: ${estudiante.maxCalificacion}, Mínimo: ${estudiante.minCalificacion}`);
        console.log("---");
    }

    console.log(`Mejor promedio: ${mejorEstudiante.nombre} con ${mejorPromedio}`);
    console.log(`Peor promedio: ${peorEstudiante.nombre} con ${peorPromedio}`);
}

agregarCalificacion("Johdie", 17);
agregarCalificacion("Bryan", 19);
generarReporte();
