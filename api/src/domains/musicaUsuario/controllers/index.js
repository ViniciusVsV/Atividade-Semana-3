const router = require('express').Router();
const musicaUsuarioService = require('../services/musicaUsuarioServices');

//Adiciona um usuário ao banco de dados
router.post('/criar', async(req, res) =>{
    const body = req.body;
    try{
        await musicaUsuarioService.criar(body);
        return res.status(201).json('Agora você escuta musicas!!!');
    }catch(erro){
        return res.status(400).send(erro);
    }
});

module.exports = router;