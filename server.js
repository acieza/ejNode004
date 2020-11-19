const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost:27017/transportes';

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
const conexion = mongoose.connection;

conexion.on('open', () =>{
    console.log('******** Conectado a la Base de Datos **********');
});

app.use(cors());
app.use(express.json());

const transportRouter = require('./routes/transportistas');
//const { Router } = require('express');

app.use('/transportista', transportRouter);


app.listen(3000, () => {
    console.log('********** Servidor Funcionando ***********');
})