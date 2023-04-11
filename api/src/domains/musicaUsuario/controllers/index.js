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

//Lista todas as músicas que um usuário escuta
router.get("/listarUsuario", async(req, res) => {
    const _UsuarioId = req.body.UsuarioId;
    const musicas = await musicaUsuarioService.listarUsuario(_UsuarioId);
    try {
        res.status(200).json(musicas);
    }catch(erro){
        res.status(404).send(erro);
    }
});

module.exports = router;