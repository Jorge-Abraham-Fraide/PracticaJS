// variables para conectarse a la base de datos
const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/UTMA'

// conectarse a la base de datos
mongoose.connect(url_db)
    .then(() => {
        console.log('si jaló la conexion')
    })
    .catch((err) => {
        console.log('no jalo maldita sea')
    })

// esquema de la base de datos
const esquema_alumno = new mongoose.Schema({
    name: {
        type: String
    },
    apepat: {
        type: String
    },
    numero: {
        Type: Number
    }
})

// creando tabla
const modelo_alumno = new mongoose.model("Tabla de datos", esquema_alumno)

modelo_alumno.create({
    name: "Jesus",
    apepat: "Salazar",
    numero: 449,
})