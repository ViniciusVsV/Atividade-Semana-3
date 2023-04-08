const router = require('express').Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../services/UsuarioServices');

//Adiciona um usuário ao banco de dados
router.post('/create', async(req, res) =>{
    const body = req.body;
    try{
        await UsuarioService.criacao(body);
        return res.status(201).json('Usuario criado com sucesso!');
    }catch{
        return res.status(400);
    }
});

//Atualiza as informações de um usuário no banco de dados
router.put("/update", async(req, res) => {
    const body = req.body;
    try {
        await UsuarioService.atualizar(body);
        res.status(200).json("Usuário atualizado");
    } catch(error) {
        res.status(404).send(error);
    }
});

module.exports = router;