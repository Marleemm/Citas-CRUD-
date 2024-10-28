const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono : String,
    idUsuario: String

})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router


//peticion tipo http agregar usuario
router.post('/agregarusuario', async (req, res) => {
    console.log('Datos recibidos:', req.body);
    
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario 
    });

    try {
        await nuevousuario.save();
        return res.status(200).send({ message: 'Paciente agregado con éxito' });
    } catch (err) {
        console.error('Error al agregar usuario:', err);
        return res.status(500).send({ error: 'Error al agregar usuario', details: err.message });
    }
});

//obtener todos los usuarios
router.get('/obtenerusuarios', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({}); // Obtener todos los documentos de la colección
        res.status(200).send(usuarios); // Responder con el arreglo de usuarios
    } catch (err) {
        console.error('Error al obtener usuarios:', err); // Registrar el error en la consola
        res.status(500).send({ error: 'Error al obtener usuarios', details: err.message }); // Enviar un mensaje de error
    }
});

//obtener data de usuarios
router.post('/obtenerdatausuario', async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({ idUsuario: req.query.idUsuario }); // Obtener por query param
        res.status(200).send(usuarios); // Responder con el arreglo de usuarios
    } catch (err) {
        console.error('Error al obtener usuarios:', err); // Registrar el error
        res.status(500).send({ error: 'Error al obtener usuarios', details: err.message }); // Enviar error
    }
});



module.exports = router;