const router = require('express').Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../services/UsuarioServices');

router.post('/', async(req, res) =>{
    const body = req.body;
    try{
        await UsuarioService.criacao(body);
        return res.status(201).json('Usuario criado com sucesso!');
    }catch{
        return res.status(400);
    }
})

module.exports = router;