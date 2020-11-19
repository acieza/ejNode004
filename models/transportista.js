const mongoose = require('mongoose');

const trasportSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    dni:{
        type: String,
        required: true
    },
    permisoTransport:{
        type: String,
        enum: ['local','nacional','internacional'],
        default:'nacional',
        required: true
    },
    tipoMercancias:{
        type:String,
        required: true,

    }
})

module.exports = mongoose.model('Transportista', trasportSchema);