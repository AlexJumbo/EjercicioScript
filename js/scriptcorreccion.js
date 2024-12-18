const estudiantes = [
    {nombre: "Johdie", calificaciones: [19,17,19,11]},
    {nombre: "Meream", calificaciones: [18,18,15,11]},
    {nombre: "Alexander", calificaciones: [10,15,18,19]},
    {nombre: "Bryan", calificaciones: [18,20,20,18]},
    {nombre: "Joshua", calificaciones: [7,8,10,5]}
]
for (let estudiante of estudiantes) {
    if (estudiante.nombre === "Johdie") {
        const nuevasCalificaciones = [];
        for (let calificacion of estudiante.calificaciones) {
            nuevasCalificaciones[nuevasCalificaciones.length] = calificacion;
        }
        nuevasCalificaciones[nuevasCalificaciones.length] = 17;
        estudiante.calificaciones = nuevasCalificaciones;
    }
    if (estudiante.nombre === "Bryan") {
        const nuevasCalificaciones = [];
        for (let calificacion of estudiante.calificaciones) {
            nuevasCalificaciones[nuevasCalificaciones.length] = calificacion;
        }
        nuevasCalificaciones[nuevasCalificaciones.length] = 9;
        estudiante.calificaciones = nuevasCalificaciones;
    }
}

let mejorPromedio = 0;
let peorPromedio = 0;
let estudianteMejor = estudiantes[0];
let estudiantePeor = estudiantes[0];

console.log("******Reporte de estudiantes**********");
for (let estudiante of estudiantes) {
    let suma = 0;
    let maxCalificacion = estudiante.calificaciones[0];
    let minCalificacion = estudiante.calificaciones[0];

    for (let calificacion of estudiante.calificaciones) {
        suma += calificacion;
        if (calificacion > maxCalificacion) {
            maxCalificacion = calificacion;
        }
        if (calificacion < minCalificacion) {
            minCalificacion = calificacion;
        }
    }

    let promedio = suma / estudiante.calificaciones.length;
    estudiante.promedio = promedio;
    estudiante.maxCalificacion = maxCalificacion;
    estudiante.minCalificacion = minCalificacion;

    if (promedio >= 16) {
        estudiante.clasificacion = "Excelente";
    } else if (promedio >= 12) {
        estudiante.clasificacion = "Bueno";
    } else if (promedio >= 8) {
        estudiante.clasificacion = "Aprobado";
    } else {
        estudiante.clasificacion = "Reprobado";
    }

    if (promedio > mejorPromedio || estudiante === estudiantes[0]) {
        mejorPromedio = promedio;
        estudianteMejor = estudiante;
    }

    if (promedio < peorPromedio || estudiante === estudiantes[0]) {
        peorPromedio = promedio;
        estudiantePeor = estudiante;
    }

    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones: ${estudiante.calificaciones}`);
    console.log(`Promedio: ${promedio}`);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log(`Máximo: ${maxCalificacion}, Mínimo: ${minCalificacion}`);
    console.log("-----------------------------------");
}

console.log(`Mejor promedio: ${estudianteMejor.nombre} con ${mejorPromedio}`);
console.log(`Peor promedio: ${estudiantePeor.nombre} con ${peorPromedio}`);
