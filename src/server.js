const express = require('express');
const path = require('path')
//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000); //Para establecerle a mi SO que si encuentra la paalabra port, use ese puerto
app.set('views', path.join(__dirname, 'views')) // para que el s.o encuentre mi carpeta views, uso path.join para concatenar toda la  ruta desde el disco C hasta la carpeta

//Middlewares
app.use(express.urlencoded({extended: false}))// soportar el tipo de datos que va a recibir el servidor. convertimnos cualquier dato que llegue de un formulario en un objeto json.

//Global variables

//Routes
app.get('/', (req, res) =>{
    res.send('Hello world');
});

//Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;