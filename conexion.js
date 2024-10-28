const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CrudCitas');

const objetobd = mongoose.connection

objetobd.on('connected',()=>{console.log('Conexion correcta a MongoDB')})
objetobd.on('error',()=>{console.log('Error a la conexion a MongoDB')})

//exportando para el server

module.exports = mongoose