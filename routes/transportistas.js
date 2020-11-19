const express = require('express');
const router = express.Router();
const Transportista = require('../models/transportista');

router.get('/', async (req,res) => {
    try{
        const misTransportistas = await Transportista.find();
        res.json(misTransportistas);
    }catch{
        res.send('Error ' + err)
    }
});

router.post('/', async(req,res) =>{
    const transportista = new Transportista({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        permisoTransport: req.body.permisoTransport,
        tipoMercancias: req.body.tipoMercancias
    })

    try{
        const transportUno = await transportista.save();
        res.json(transportUno);
    }catch (err){
        res.send('Error ' + err)
    }
})

module.exports = router;