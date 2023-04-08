const router = require('express').Router();
const Usuario = require('../models/Usuario');

router.post('/', async(req, res) =>{
    const body = req.body;
    try{
        await Usuario.create(body);
        return res.status(201).end();
    }catch{
        return res.status(400);
    }
})

module.exports = router;