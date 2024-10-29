const express = require('express')
const app = express()
//importar conexion mongodb

const archivoDB = require('./conexion')

//Importacion de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//importacion bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario',rutausuario)

app.get('/',(req,res) => {

res.end('Bienvenido al servidor backend...')



})

app.listen(5000, function() {
    console.log('El servidor Node esta corriendo correctamente...')
    })
