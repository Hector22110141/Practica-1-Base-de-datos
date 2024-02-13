const express = require('express');
const app = express();
const port = 3010;

let alumnos = [
    { id: 1, Nombre: 'Roberto' },
    { id: 2, Nombre: 'Pablo' },
    { id: 3, Nombre: 'Rodrigo' }
];

app.get("/alumnos", (req, res) => {
    res.send(alumnos);
});

app.post("/alumnos", (req, res) => {
    const { nombre } = req.body; 
    const nuevoAlumno = { id: alumnos.length + 1, Nombre: nombre }; 
    alumnos.push(nuevoAlumno); 
    res.send("Se ha agregado un alumno");
});

app.patch("/alumnos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body; 
    let alumno = alumnos.find(alumno => alumno.id == id);
    if (alumno) {
        alumno.Nombre = nombre;
        res.send({ message: "Informacion del Alumno actualizado correctamente" });
    } else {
        res.status(404).send({ message: "Alumno no encontrado" });
    }
});

app.delete("/alumnos/:id", (req, res) => {
    const { id } = req.params;
    alumnos = alumnos.filter(alumno => alumno.id != id);
    res.send({ message: "Alumno eliminado correctamente" }); 
});

app.listen(port, () => {
    console.log(`Mi servidor esta corriendo en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.send("Hola Enfermera");
});
